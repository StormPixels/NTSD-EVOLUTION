// ═══ CONSOLE.JS — Game Console & Validator Overlay ═══
// Tombol pojok kanan atas: [≡ Console] [⚠ Validator]
// Hapus <script src="console.js"> dari game.html saat selesai
(function () {
  'use strict';

  // ════════════════════════════════════════════════════════
  //  CONFIG
  // ════════════════════════════════════════════════════════
  var MAX_LOG    = 500;
  var MAX_DEPTH  = 4;   // kedalaman object inspect
  var PANEL_W    = '580px';
  var PANEL_H    = '420px';

  // ════════════════════════════════════════════════════════
  //  GAME VALIDATOR DATA
  // ════════════════════════════════════════════════════════
  var VALID_STATES = {
    character:     [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,9998],
    lightweapon:   [2000,2001,2002,2003,2004,9998],
    heavyweapon:   [2000,2001,2002,2003,2004,9998],
    specialattack: [3000,3001,3002,3003,3004,3005,3006,9998],
    effect:        [1000,1001,1002,1003,1004,9998],
    broken:        [3000,9998],
    drink:         [3000,3001,9998],
    baseball:      [3000,9998]
  };
  var DEFAULT_VALID_OIDS = [
    1,2,4,5,6,7,8,9,10,11,30,
    100,101, 150,151,
    200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,
    300,301, 320
  ];

  // ════════════════════════════════════════════════════════
  //  STATE
  // ════════════════════════════════════════════════════════
  var logBuffer      = [];
  var consoleVisible = false;
  var valVisible     = false;
  var filterLevel    = 'all';  // all | log | info | warn | error
  var searchQuery    = '';
  var expandedIds    = {};     // id → true jika object expanded
  var objIdCounter   = 0;
  var autoScroll     = true;

  // ════════════════════════════════════════════════════════
  //  CSS
  // ════════════════════════════════════════════════════════
  var CSS = [
    /* ── buttons ── */
    '#gcw{position:fixed;top:4px;right:4px;z-index:2147483640;display:flex;gap:3px;align-items:center}',
    '#gcw button{padding:3px 9px;font:bold 11px/1 monospace;border:1px solid #444;cursor:pointer;',
      'border-radius:3px;color:#ccc;background:#1e1e1e;transition:all .12s}',
    '#gcw button:hover{background:#2a2a2a;color:#fff}',
    '#gcw button.on{border-color:#4af;color:#4af}',
    '#gcw button.on.red{border-color:#f55;color:#f55}',
    '#gcw button.on.ylw{border-color:#fa0;color:#fa0}',
    '#gcw .gc-badge{display:inline-block;margin-left:3px;padding:0 4px;font-size:9px;',
      'border-radius:8px;background:#f55;color:#fff;vertical-align:middle}',
    '#gcw .gc-badge.w{background:#fa0}',

    /* ── console panel ── */
    '#gc-panel{position:fixed;bottom:0;right:0;width:'+PANEL_W+';height:'+PANEL_H+';',
      'background:#1e1e1e;border:1px solid #3a3a3a;border-radius:4px 0 0 0;',
      'z-index:2147483630;display:flex;flex-direction:column;font:12px/1.4 monospace;color:#ccc;',
      'box-shadow:-2px -2px 12px rgba(0,0,0,.6);display:none}',

    /* toolbar */
    '#gc-toolbar{display:flex;align-items:center;gap:4px;padding:4px 6px;',
      'border-bottom:1px solid #333;background:#252526;flex-shrink:0}',
    '#gc-toolbar button{padding:2px 7px;font:11px monospace;border:1px solid transparent;',
      'border-radius:2px;cursor:pointer;background:transparent;color:#888}',
    '#gc-toolbar button:hover{color:#fff;background:#2d2d2d}',
    '#gc-toolbar button.sel{color:#ccc;border-color:#4af;background:#0d2230}',
    '#gc-toolbar .gc-sep{width:1px;height:14px;background:#3a3a3a;margin:0 2px}',
    '#gc-filter-wrap{flex:1;position:relative}',
    '#gc-filter-wrap input{width:100%;padding:2px 6px 2px 22px;font:11px monospace;',
      'background:#0e0e0e;border:1px solid #3a3a3a;border-radius:2px;color:#ccc;box-sizing:border-box}',
    '#gc-filter-wrap input:focus{outline:none;border-color:#4af}',
    '#gc-filter-wrap .gc-search-icon{position:absolute;left:6px;top:50%;transform:translateY(-50%);',
      'color:#555;font-size:11px;pointer-events:none}',
    '#gc-clr-btn{font-size:11px;cursor:pointer;color:#555;padding:2px 5px;border-radius:2px}',
    '#gc-clr-btn:hover{color:#fff;background:#333}',
    '#gc-autoscroll{font-size:10px;cursor:pointer;color:#555;white-space:nowrap}',
    '#gc-autoscroll.on{color:#4af}',

    /* level tabs */
    '#gc-tabs{display:flex;gap:0;border-bottom:1px solid #333;background:#252526;flex-shrink:0}',
    '#gc-tabs .tab{padding:3px 10px;font:11px monospace;cursor:pointer;color:#666;border-bottom:2px solid transparent}',
    '#gc-tabs .tab:hover{color:#aaa}',
    '#gc-tabs .tab.sel{color:#ccc;border-bottom-color:#4af}',
    '#gc-tabs .tab .cnt{font-size:9px;margin-left:3px;padding:0 3px;border-radius:8px;',
      'background:#333;vertical-align:middle}',
    '#gc-tabs .tab.e .cnt{background:#5a1a1a;color:#f88}',
    '#gc-tabs .tab.w .cnt{background:#4a3000;color:#fc0}',

    /* log area */
    '#gc-log{flex:1;overflow-y:auto;overflow-x:hidden;padding:0}',
    '#gc-log::-webkit-scrollbar{width:6px}',
    '#gc-log::-webkit-scrollbar-track{background:#1e1e1e}',
    '#gc-log::-webkit-scrollbar-thumb{background:#444;border-radius:3px}',

    /* log entries */
    '.gc-entry{display:flex;align-items:flex-start;padding:1px 6px 1px 0;',
      'border-bottom:1px solid #282828;cursor:default;min-height:18px}',
    '.gc-entry:hover{background:#252525}',
    '.gc-entry.err{background:#2a1515;border-left:3px solid #f55}',
    '.gc-entry.warn{background:#2a2000;border-left:3px solid #fa0}',
    '.gc-entry.info{border-left:3px solid #4af}',
    '.gc-entry.log{border-left:3px solid transparent}',
    '.gc-entry .gc-icon{width:16px;text-align:center;flex-shrink:0;padding-top:1px;font-size:10px}',
    '.gc-entry.err .gc-icon{color:#f55}',
    '.gc-entry.warn .gc-icon{color:#fa0}',
    '.gc-entry.info .gc-icon{color:#4af}',
    '.gc-entry .gc-body{flex:1;min-width:0;padding:1px 0;word-break:break-all}',
    '.gc-entry .gc-meta{font-size:9px;color:#555;white-space:nowrap;padding:2px 0 0 6px;flex-shrink:0}',

    /* repeat badge */
    '.gc-rep{display:inline-block;min-width:18px;padding:0 4px;font-size:10px;font-weight:bold;',
      'border-radius:8px;background:#444;color:#ccc;text-align:center;margin-right:4px;vertical-align:middle}',
    '.gc-entry.err .gc-rep{background:#5a1a1a;color:#f88}',
    '.gc-entry.warn .gc-rep{background:#4a3000;color:#fc0}',

    /* stack trace */
    '.gc-stack{margin:2px 0 2px 16px;font-size:10px;color:#666;white-space:pre-wrap}',
    '.gc-stack .gc-frame{display:block;padding:0 0 0 4px}',
    '.gc-stack .gc-frame:hover{color:#aaa;cursor:pointer}',
    '.gc-stack .gc-fn{color:#7acc80}',
    '.gc-stack .gc-loc{color:#569cd6}',
    '.gc-expand{display:inline-block;width:12px;height:12px;line-height:12px;text-align:center;',
      'font-size:9px;cursor:pointer;border:1px solid #444;border-radius:2px;margin-right:3px;',
      'color:#888;background:#2d2d2d;vertical-align:middle;flex-shrink:0}',
    '.gc-expand:hover{color:#fff;border-color:#888}',

    /* object inspector */
    '.gc-obj{display:inline}',
    '.gc-obj-preview{color:#9cdcfe;cursor:pointer}',
    '.gc-obj-preview:hover{text-decoration:underline}',
    '.gc-obj-tree{margin:2px 0 2px 16px;border-left:1px solid #3a3a3a;padding-left:8px}',
    '.gc-key{color:#9cdcfe}',
    '.gc-str{color:#ce9178}',
    '.gc-num{color:#b5cea8}',
    '.gc-bool{color:#569cd6}',
    '.gc-null{color:#569cd6}',
    '.gc-fn-v{color:#dcdcaa}',
    '.gc-arr{color:#9cdcfe}',
    '.gc-circ{color:#888;font-style:italic}',

    /* highlighted search */
    '.gc-hl{background:#614a00;border-radius:2px}',

    /* ── validator panel ── */
    '#gc-val{position:fixed;bottom:0;right:0;width:'+PANEL_W+';height:'+PANEL_H+';',
      'background:#1e1e1e;border:1px solid #3a3a3a;border-radius:4px 0 0 0;',
      'z-index:2147483629;display:flex;flex-direction:column;font:11px/1.5 monospace;color:#ccc;',
      'box-shadow:-2px -2px 12px rgba(0,0,0,.6);display:none}',
    '#gc-val-hdr{display:flex;align-items:center;padding:5px 8px;border-bottom:1px solid #333;',
      'background:#252526;flex-shrink:0;gap:6px}',
    '#gc-val-hdr h3{margin:0;font-size:12px;color:#fa0;flex:1}',
    '#gc-val-hdr button{padding:2px 8px;font:11px monospace;border:1px solid #444;',
      'border-radius:2px;cursor:pointer;color:#888;background:#1e1e1e}',
    '#gc-val-hdr button:hover{color:#fff;background:#333}',
    '#gc-val-body{flex:1;overflow-y:auto;padding:4px 8px}',
    '#gc-val-body::-webkit-scrollbar{width:6px}',
    '#gc-val-body::-webkit-scrollbar-thumb{background:#444;border-radius:3px}',
    '.vr-sect{color:#666;font-size:10px;text-transform:uppercase;letter-spacing:1px;',
      'margin:8px 0 3px;padding-bottom:2px;border-bottom:1px solid #333}',
    '.vr-row{padding:1px 0 1px 10px;border-left:2px solid #333;margin:1px 0}',
    '.vr-row.ok{border-left-color:#3c3;color:#4c4}',
    '.vr-row.err{border-left-color:#f55;color:#f77}',
    '.vr-row.warn{border-left-color:#fa0;color:#fc0}',
    '.vr-row.inf{border-left-color:#4af;color:#6cf}',
    '.vr-sub{padding-left:20px}'
  ].join('');

  var stel = document.createElement('style');
  stel.textContent = CSS;
  document.head.appendChild(stel);

  // ════════════════════════════════════════════════════════
  //  BUILD UI
  // ════════════════════════════════════════════════════════

  /* ── top buttons ── */
  var gcw = el('div','gcw'); document.body.appendChild(gcw);

  var btnCon = btn('≡ Console'); gcw.appendChild(btnCon);
  var btnVal = btn('⚠ Validator'); gcw.appendChild(btnVal);

  /* ── console panel ── */
  var panel = el('div','gc-panel'); document.body.appendChild(panel);

  // toolbar
  var toolbar = el('div','gc-toolbar'); panel.appendChild(toolbar);

  var btnClr = document.createElement('button');
  btnClr.id = 'gc-clr-btn'; btnClr.title = 'Clear console';
  btnClr.innerHTML = '🚫'; toolbar.appendChild(btnClr);

  var sep1 = el('div','gc-sep'); toolbar.appendChild(sep1);

  var filterWrap = el('div','gc-filter-wrap'); toolbar.appendChild(filterWrap);
  var searchIcon = el('span','gc-search-icon'); searchIcon.textContent = '🔍'; filterWrap.appendChild(searchIcon);
  var searchInput = document.createElement('input');
  searchInput.placeholder = 'Filter'; filterWrap.appendChild(searchInput);

  var sep2 = el('div','gc-sep'); toolbar.appendChild(sep2);

  var asBtn = document.createElement('span');
  asBtn.id = 'gc-autoscroll'; asBtn.className = 'on'; asBtn.title = 'Auto-scroll';
  asBtn.textContent = '↓ Auto'; toolbar.appendChild(asBtn);

  // level tabs
  var tabBar = el('div','gc-tabs'); panel.appendChild(tabBar);
  var TABS = ['all','log','info','warn','error'];
  var tabEls = {};
  TABS.forEach(function(lv) {
    var t = document.createElement('div');
    t.className = 'tab' + (lv === 'all' ? ' sel' : '') + (lv==='error'?' e':lv==='warn'?' w':'');
    t.dataset.lv = lv;
    t.innerHTML = lv.charAt(0).toUpperCase()+lv.slice(1)+' <span class="cnt" id="gc-cnt-'+lv+'">0</span>';
    tabBar.appendChild(t);
    tabEls[lv] = t;
    t.addEventListener('click', function(){ setFilter(lv); });
  });

  // log area
  var logArea = el('div','gc-log'); panel.appendChild(logArea);

  /* ── validator panel ── */
  var valPanel = el('div','gc-val'); document.body.appendChild(valPanel);
  var valHdr = el('div','gc-val-hdr'); valPanel.appendChild(valHdr);
  var valTitle = document.createElement('h3'); valTitle.textContent = '⚠ Game Validator'; valHdr.appendChild(valTitle);
  var btnRescan = document.createElement('button'); btnRescan.textContent = '↺ Scan Ulang'; valHdr.appendChild(btnRescan);
  var valBody = el('div','gc-val-body'); valPanel.appendChild(valBody);

  // ════════════════════════════════════════════════════════
  //  CONSOLE INTERCEPT
  // ════════════════════════════════════════════════════════
  var _o = {};
  ['log','info','warn','error','debug','table','dir','group','groupEnd','groupCollapsed','time','timeEnd','count','assert'].forEach(function(m) {
    _o[m] = console[m] ? console[m].bind(console) : function(){};
  });

  ['log','info','warn','error','debug'].forEach(function(level) {
    console[level] = function() {
      _o[level].apply(console, arguments);
      var args = Array.prototype.slice.call(arguments);
      // assert special
      if (level === 'debug') level = 'log';
      captureLog(level, args, null);
    };
  });

  console.assert = function(cond) {
    _o.assert.apply(console, arguments);
    if (!cond) {
      var args = Array.prototype.slice.call(arguments, 1);
      captureLog('error', ['Assertion failed:'].concat(args.length ? args : ['false']), null);
    }
  };

  console.table = function(data) {
    _o.table.apply(console, arguments);
    captureLog('log', [data], null, true);
  };

  // uncaught errors
  window.addEventListener('error', function(e) {
    var stack = e.error && e.error.stack ? e.error.stack : null;
    captureLog('error', [e.error || e.message], stack, false, {
      file: e.filename, line: e.lineno, col: e.colno, type:'[Uncaught]'
    });
  }, true);

  window.addEventListener('unhandledrejection', function(e) {
    var reason = e.reason;
    var stack = reason && reason.stack ? reason.stack : null;
    captureLog('error', [reason || 'Unhandled Promise Rejection'], stack, false, {type:'[Promise]'});
  });

  // ════════════════════════════════════════════════════════
  //  CAPTURE & BUFFER
  // ════════════════════════════════════════════════════════
  function captureLog(level, args, stack, isTable, meta) {
    // get stack if not provided
    if (!stack && level === 'error') {
      try { throw new Error(); }
      catch(e) {
        // strip our own frames
        stack = (e.stack || '').split('\n').filter(function(l){
          return l.indexOf('console.js') === -1 && l.trim() !== '';
        }).join('\n');
        if (!stack) stack = null;
      }
    }

    var now = new Date();
    var ts  = now.toTimeString().slice(0,8) + '.' + ('00'+now.getMilliseconds()).slice(-3);

    var entry = {
      id:      ++objIdCounter,
      level:   level,
      ts:      ts,
      args:    args,
      stack:   stack || null,
      meta:    meta || null,
      isTable: isTable || false,
      repeat:  1,
      _sigKey: buildSigKey(level, args)
    };

    // dedup: jika sama dengan entry terakhir, increment repeat
    if (logBuffer.length > 0) {
      var last = logBuffer[logBuffer.length - 1];
      if (last._sigKey === entry._sigKey) {
        last.repeat++;
        last.ts = ts;
        updateCounts();
        if (consoleVisible) rerenderLast(last);
        return;
      }
    }

    logBuffer.push(entry);
    if (logBuffer.length > MAX_LOG) logBuffer.shift();

    updateCounts();
    if (consoleVisible) appendEntry(entry);
  }

  function buildSigKey(level, args) {
    try {
      return level + '|' + args.map(function(a){
        return typeof a === 'object' ? (a===null?'null':Object.prototype.toString.call(a)) : String(a).slice(0,80);
      }).join('|');
    } catch(e) { return level + '|?'; }
  }

  // ════════════════════════════════════════════════════════
  //  OBJECT INSPECTOR  (like Chrome's expandable objects)
  // ════════════════════════════════════════════════════════
  var SEEN = [];

  function inspectValue(val, depth, inline) {
    depth = depth || 0;
    var t = typeof val;

    if (val === null)      return '<span class="gc-null">null</span>';
    if (val === undefined) return '<span class="gc-null">undefined</span>';
    if (t === 'boolean')   return '<span class="gc-bool">'+val+'</span>';
    if (t === 'number')    return '<span class="gc-num">'+val+'</span>';
    if (t === 'string')    return '<span class="gc-str">"'+escHtml(val.slice(0,200))+(val.length>200?'…':'')+'</span>';
    if (t === 'function')  return '<span class="gc-fn-v">ƒ '+escHtml((val.name||'anonymous'))+'()</span>';
    if (t === 'symbol')    return '<span class="gc-null">'+String(val)+'</span>';

    if (t === 'object') {
      // circular check
      if (SEEN.indexOf(val) !== -1) return '<span class="gc-circ">[Circular]</span>';

      var isArr = Array.isArray(val);
      var id    = 'obj-' + (++objIdCounter);
      var keys, preview;

      try {
        keys = isArr ? null : Object.keys(val).slice(0, 50);
        preview = buildPreview(val, isArr, keys);
      } catch(e) {
        return '<span class="gc-circ">[Object]</span>';
      }

      if (depth >= MAX_DEPTH && !inline) {
        return '<span class="gc-obj-preview" data-id="'+id+'">'+preview+'</span>';
      }

      // expandable node
      var html = '<span class="gc-obj">';
      html += '<span class="gc-expand" data-id="'+id+'" id="exp-'+id+'">▶</span>';
      html += '<span class="gc-obj-preview" data-id="'+id+'" style="color:#ccc">'+preview+'</span>';
      html += '<span class="gc-obj-tree" id="tree-'+id+'" style="display:none">';

      SEEN.push(val);
      if (isArr) {
        val.forEach(function(item, i) {
          html += '<div><span class="gc-key">'+i+'</span>: '+inspectValue(item, depth+1)+'</div>';
        });
        if (val.length > 50) html += '<div class="gc-circ">… '+(val.length-50)+' more</div>';
      } else {
        keys.forEach(function(k) {
          var v; try { v = val[k]; } catch(e) { v = '[getter error]'; }
          html += '<div><span class="gc-key">'+escHtml(k)+'</span>: '+inspectValue(v, depth+1)+'</div>';
        });
        var proto = Object.getPrototypeOf(val);
        if (proto && proto !== Object.prototype) {
          html += '<div><span class="gc-key" style="color:#555">[[Prototype]]</span>: <span class="gc-null">'+escHtml(String(proto.constructor&&proto.constructor.name||'Object'))+'</span></div>';
        }
      }
      SEEN.pop();

      html += '</span></span>';
      return html;
    }

    return escHtml(String(val));
  }

  function buildPreview(val, isArr, keys) {
    if (isArr) {
      var items = val.slice(0,5).map(function(v){ return previewScalar(v); });
      return '<span class="gc-arr">('+(val.length)+') ['+items.join(', ')+(val.length>5?', …':'')+']</span>';
    }
    var cname = (val.constructor && val.constructor.name && val.constructor.name !== 'Object')
                 ? val.constructor.name+' ' : '';
    var pairs = (keys||[]).slice(0,4).map(function(k){
      var v; try { v = val[k]; } catch(e) { v = '?'; }
      return escHtml(k)+': '+previewScalar(v);
    });
    return '<span class="gc-obj-preview">'+escHtml(cname)+'{'+pairs.join(', ')+(keys&&keys.length>4?', …':'')+'}';
  }

  function previewScalar(v) {
    if (v === null) return 'null';
    if (v === undefined) return 'undefined';
    var t = typeof v;
    if (t === 'string') return '"'+escHtml(v.slice(0,30))+(v.length>30?'…':'')+'"';
    if (t === 'number' || t === 'boolean') return String(v);
    if (t === 'function') return 'ƒ';
    if (Array.isArray(v)) return 'Array('+v.length+')';
    return '{…}';
  }

  function formatArgs(args) {
    SEEN = [];
    // Handle printf-style if first arg is string with %
    if (args.length > 1 && typeof args[0] === 'string' && /%[sdoifc]/.test(args[0])) {
      var fmt = args[0], rest = args.slice(1), idx = 0;
      var out = escHtml(fmt).replace(/%([sdoifc])/g, function(_, spec) {
        if (idx >= rest.length) return _;
        var v = rest[idx++];
        if (spec === 's') return escHtml(String(v));
        if (spec === 'd' || spec === 'i') return '<span class="gc-num">'+parseInt(v)+'</span>';
        if (spec === 'f') return '<span class="gc-num">'+parseFloat(v)+'</span>';
        if (spec === 'o' || spec === 'c') return inspectValue(v, 0);
        return escHtml(String(v));
      });
      var extras = rest.slice(idx).map(function(v){ return inspectValue(v, 0); }).join(' ');
      return out + (extras ? ' '+extras : '');
    }
    return args.map(function(a){ return inspectValue(a, 0); }).join(' ');
  }

  function formatTable(data) {
    if (!data || typeof data !== 'object') return formatArgs([data]);
    var rows = Array.isArray(data) ? data : Object.values(data);
    if (!rows.length) return formatArgs([data]);
    var keys = [];
    rows.forEach(function(r){ if(r&&typeof r==='object') Object.keys(r).forEach(function(k){ if(keys.indexOf(k)===-1) keys.push(k); }); });
    var html = '<table style="border-collapse:collapse;font-size:10px;margin-top:2px">';
    html += '<tr><th style="border:1px solid #444;padding:1px 6px;color:#888">(index)</th>';
    keys.forEach(function(k){ html += '<th style="border:1px solid #444;padding:1px 6px;color:#9cdcfe">'+escHtml(k)+'</th>'; });
    html += '</tr>';
    rows.forEach(function(r,i){
      html += '<tr><td style="border:1px solid #333;padding:1px 6px;color:#888">'+i+'</td>';
      keys.forEach(function(k){
        var v = r && r[k] !== undefined ? r[k] : '';
        html += '<td style="border:1px solid #333;padding:1px 6px">'+previewScalar(v)+'</td>';
      });
      html += '</tr>';
    });
    return html + '</table>';
  }

  function parseStack(stackStr) {
    if (!stackStr) return [];
    return stackStr.split('\n').map(function(line) {
      line = line.trim();
      // Chrome: "    at functionName (file:line:col)"
      // Firefox: "functionName@file:line:col"
      var m = line.match(/at\s+(.*?)\s+\(?(.*?):(\d+):(\d+)\)?$/) ||
               line.match(/^(.*?)@(.*?):(\d+):(\d+)$/);
      if (m) return { fn: m[1]||'(anonymous)', file: m[2], line: m[3], col: m[4], raw: line };
      return { fn: '', file: '', line: '', col: '', raw: line };
    }).filter(function(f){ return f.raw; });
  }

  function renderStack(stackStr) {
    var frames = parseStack(stackStr);
    if (!frames.length) return '';
    var html = '<div class="gc-stack">';
    frames.slice(0, 12).forEach(function(f) {
      var fileShort = f.file ? f.file.split('/').slice(-2).join('/') : '';
      html += '<span class="gc-frame">';
      if (f.fn) html += '<span class="gc-fn">'+escHtml(f.fn)+'</span> ';
      if (fileShort) html += '<span class="gc-loc">'+escHtml(fileShort)+(f.line?':'+f.line:'')+'</span>';
      else if (f.raw) html += '<span style="color:#555">'+escHtml(f.raw)+'</span>';
      html += '</span>';
    });
    if (frames.length > 12) html += '<span class="gc-frame" style="color:#555">… '+(frames.length-12)+' more frames</span>';
    return html + '</div>';
  }

  // ════════════════════════════════════════════════════════
  //  RENDER
  // ════════════════════════════════════════════════════════
  function entryMatchesFilter(entry) {
    if (filterLevel !== 'all' && entry.level !== filterLevel) return false;
    if (searchQuery) {
      var haystack = entry.args.map(function(a){
        try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch(e) { return ''; }
      }).join(' ').toLowerCase();
      if (haystack.indexOf(searchQuery) === -1) return false;
    }
    return true;
  }

  function buildEntryHTML(entry) {
    var icon = entry.level === 'error' ? '✖' : entry.level === 'warn' ? '⚠' : entry.level === 'info' ? 'ℹ' : '';
    var metaStr = '';
    if (entry.meta) {
      if (entry.meta.type) metaStr += '<span style="color:#888;margin-right:3px">'+escHtml(entry.meta.type)+'</span>';
      if (entry.meta.file) {
        var fshort = entry.meta.file.split('/').slice(-1)[0];
        metaStr += '<span style="color:#555">'+escHtml(fshort)+(entry.meta.line?':'+entry.meta.line:'')+'</span>';
      }
    }

    var bodyContent;
    if (entry.isTable) bodyContent = formatTable(entry.args[0]);
    else bodyContent = highlight(formatArgs(entry.args), searchQuery);

    var repBadge = entry.repeat > 1 ? '<span class="gc-rep">'+entry.repeat+'</span>' : '';

    var html = '<div class="gc-entry '+entry.level+'" id="ent-'+entry.id+'">';
    html += '<span class="gc-icon">'+icon+'</span>';
    html += '<span class="gc-body">'+repBadge+bodyContent;
    if (entry.stack) {
      var sid = 'stk-'+entry.id;
      html += '<span class="gc-expand" data-stk="'+sid+'" id="sexp-'+entry.id+'" style="margin-left:4px">▶</span>';
      html += '<span id="'+sid+'" style="display:none">'+renderStack(entry.stack)+'</span>';
    }
    html += '</span>';
    html += '<span class="gc-meta">'+entry.ts+(metaStr?' '+metaStr:'')+'</span>';
    html += '</div>';
    return html;
  }

  function appendEntry(entry) {
    if (!entryMatchesFilter(entry)) return;
    var tmp = document.createElement('div');
    tmp.innerHTML = buildEntryHTML(entry);
    var node = tmp.firstChild;
    logArea.appendChild(node);
    bindEntryEvents(node, entry);
    if (autoScroll) logArea.scrollTop = logArea.scrollHeight;
  }

  function rerenderLast(entry) {
    var el2 = document.getElementById('ent-'+entry.id);
    if (!el2) return;
    var tmp = document.createElement('div');
    tmp.innerHTML = buildEntryHTML(entry);
    var newNode = tmp.firstChild;
    logArea.replaceChild(newNode, el2);
    bindEntryEvents(newNode, entry);
  }

  function bindEntryEvents(node, entry) {
    // object expand toggles
    node.querySelectorAll('.gc-expand[data-id]').forEach(function(btn2) {
      var id = btn2.dataset.id;
      btn2.addEventListener('click', function(e) {
        e.stopPropagation();
        var tree = document.getElementById('tree-'+id);
        if (!tree) return;
        var open = tree.style.display !== 'none';
        tree.style.display = open ? 'none' : 'block';
        btn2.textContent = open ? '▶' : '▼';
      });
    });
    // stack expand
    var sexp = node.querySelector('.gc-expand[data-stk]');
    if (sexp) {
      sexp.addEventListener('click', function(e) {
        e.stopPropagation();
        var stk = document.getElementById(sexp.dataset.stk);
        if (!stk) return;
        var open = stk.style.display !== 'none';
        stk.style.display = open ? 'none' : 'block';
        sexp.textContent = open ? '▶' : '▼';
      });
    }
    // preview click = expand
    node.querySelectorAll('.gc-obj-preview[data-id]').forEach(function(pv) {
      pv.addEventListener('click', function(e) {
        e.stopPropagation();
        var id = pv.dataset.id;
        var expBtn = document.getElementById('exp-'+id);
        if (expBtn) expBtn.click();
      });
    });
  }

  function fullRender() {
    logArea.innerHTML = '';
    logBuffer.forEach(function(entry) {
      appendEntry(entry);
    });
  }

  function highlight(html, query) {
    if (!query) return html;
    // Only highlight in text nodes, skip tags — simple approach: highlight in visible text
    return html.replace(new RegExp('('+escRegex(escHtml(query))+')', 'gi'),
      '<span class="gc-hl">$1</span>');
  }

  function updateCounts() {
    var counts = { all:0, log:0, info:0, warn:0, error:0 };
    logBuffer.forEach(function(e) {
      counts.all++;
      if (counts[e.level] !== undefined) counts[e.level]++;
    });
    TABS.forEach(function(lv) {
      var el2 = document.getElementById('gc-cnt-'+lv);
      if (el2) el2.textContent = counts[lv] || 0;
    });
    // update top button badge
    var errCount = counts.error;
    var warnCount = counts.warn;
    if (errCount > 0) {
      btnCon.className = 'on red';
      btnCon.innerHTML = '≡ Console <span class="gc-badge">'+errCount+'</span>';
    } else if (warnCount > 0) {
      btnCon.className = consoleVisible ? 'on' : '';
      btnCon.innerHTML = '≡ Console <span class="gc-badge w">'+warnCount+'</span>';
    } else {
      btnCon.innerHTML = '≡ Console';
    }
  }

  function setFilter(lv) {
    filterLevel = lv;
    Object.keys(tabEls).forEach(function(k){ tabEls[k].classList.toggle('sel', k===lv); });
    if (consoleVisible) fullRender();
  }

  // ════════════════════════════════════════════════════════
  //  EVENTS
  // ════════════════════════════════════════════════════════
  btnCon.addEventListener('click', function() {
    consoleVisible = !consoleVisible;
    panel.style.display = consoleVisible ? 'flex' : 'none';
    btnCon.classList.toggle('on', consoleVisible);
    if (consoleVisible) { fullRender(); }
    // tutup validator kalau terbuka
    if (consoleVisible && valVisible) {
      valVisible = false;
      valPanel.style.display = 'none';
      btnVal.classList.remove('on');
    }
  });

  btnVal.addEventListener('click', function() {
    valVisible = !valVisible;
    valPanel.style.display = valVisible ? 'flex' : 'none';
    btnVal.classList.toggle('on', valVisible);
    if (valVisible) runValidator();
    if (valVisible && consoleVisible) {
      consoleVisible = false;
      panel.style.display = 'none';
      btnCon.classList.remove('on');
    }
  });

  btnClr.addEventListener('click', function() {
    logBuffer = [];
    logArea.innerHTML = '';
    updateCounts();
  });

  searchInput.addEventListener('input', function() {
    searchQuery = searchInput.value.toLowerCase().trim();
    if (consoleVisible) fullRender();
  });

  asBtn.addEventListener('click', function() {
    autoScroll = !autoScroll;
    asBtn.classList.toggle('on', autoScroll);
    if (autoScroll) logArea.scrollTop = logArea.scrollHeight;
  });

  logArea.addEventListener('scroll', function() {
    var atBottom = logArea.scrollHeight - logArea.scrollTop - logArea.clientHeight < 30;
    if (!atBottom && autoScroll) { autoScroll = false; asBtn.classList.remove('on'); }
  });

  btnRescan.addEventListener('click', function() {
    valBody.innerHTML = '<div style="color:#888;padding:8px">Scanning…</div>';
    setTimeout(runValidator, 80);
  });

  // ════════════════════════════════════════════════════════
  //  VALIDATOR
  // ════════════════════════════════════════════════════════
  function getRegisteredOids() {
    try {
      var d = null;
      if (window.LF && LF.data && LF.data.object) d = LF.data.object;
      else if (window.Package && Package.data && Package.data.object) d = Package.data.object;
      else if (window.game && game.data && game.data.object) d = game.data.object;
      if (d) return d.map(function(o){ return o.id; });
    } catch(e) {}
    return DEFAULT_VALID_OIDS;
  }

  function getLoadedCharacters() {
    var chars = [];
    var srcs = ['LF','Package','game'];
    srcs.forEach(function(s) {
      try {
        var g = window[s];
        if (!g) return;
        var c = g.characters || g.data_characters || g.loaded_characters;
        if (!c) return;
        if (Array.isArray(c)) chars = chars.concat(c);
        else Object.keys(c).forEach(function(k){ chars.push(c[k]); });
      } catch(e) {}
    });
    if (!chars.length && window.characters) {
      try {
        var c2 = window.characters;
        if (Array.isArray(c2)) chars = c2;
        else Object.keys(c2).forEach(function(k){ chars.push(c2[k]); });
      } catch(e) {}
    }
    return chars;
  }

  function validateObject(objData, name, oids) {
    var issues = [];
    if (!objData) { issues.push({l:'w',m:name+': data null/undefined'}); return issues; }
    var frames = objData.frame || objData.frames;
    if (!frames || typeof frames !== 'object') {
      issues.push({l:'w',m:name+': frame data tidak ditemukan'}); return issues;
    }
    var type = objData.type || 'character';
    var validSt = VALID_STATES[type] || VALID_STATES.character;
    var frameKeys = Object.keys(frames).filter(function(k){ return !isNaN(parseInt(k)); });

    frameKeys.forEach(function(fk) {
      var fn = parseInt(fk), frame = frames[fk], loc = name+' F'+fn;
      if (!frame || typeof frame !== 'object') return;

      // state
      if (frame.state !== undefined && validSt.indexOf(frame.state) === -1)
        issues.push({l:'e', m:loc+': state='+frame.state+' tidak valid untuk type "'+type+'"'});

      // next
      if (frame.next !== undefined) {
        var nx = frame.next;
        if (nx !== 999 && nx !== 1000 && nx !== 9998 && frames[nx] === undefined)
          issues.push({l:'e', m:loc+': next='+nx+' — frame tidak ada'});
        if (frame.wait === 0 && nx === fn)
          issues.push({l:'w', m:loc+': wait=0 + next=self → infinite loop'});
      }

      // opoint
      if (frame.opoint) {
        var op = frame.opoint;
        if (op.oid !== undefined && oids.indexOf(op.oid) === -1)
          issues.push({l:'e', m:loc+': opoint.oid='+op.oid+' tidak ada di registry'});
        if (op.kind !== undefined && [1,2,3].indexOf(op.kind) === -1)
          issues.push({l:'w', m:loc+': opoint.kind='+op.kind+' tidak dikenal'});
      }

      // itr
      var itrs = frame.itr ? (Array.isArray(frame.itr)?frame.itr:[frame.itr]) : [];
      itrs.forEach(function(itr,ii){
        var vk=[0,1,2,3,4,5,6,7,8,9,10,11,14,15];
        if(itr.kind!==undefined&&vk.indexOf(itr.kind)===-1)
          issues.push({l:'w',m:loc+': itr['+ii+'].kind='+itr.kind+' tidak dikenal'});
        if(itr.kind===8&&itr.dvz===undefined)
          issues.push({l:'w',m:loc+': itr['+ii+'] kind=8 butuh dvz'});
      });

      // wpoint
      if (frame.wpoint && frame.wpoint.kind !== undefined && [1,2].indexOf(frame.wpoint.kind) === -1)
        issues.push({l:'w', m:loc+': wpoint.kind='+frame.wpoint.kind+' tidak dikenal'});

      // bdy
      if (itrs.length && !frame.bdy && type==='character' && [9,10,14].indexOf(frame.state)===-1)
        issues.push({l:'w', m:loc+': ada itr tapi tidak ada bdy'});
    });

    return issues;
  }

  function runValidator() {
    var oids  = getRegisteredOids();
    var chars = getLoadedCharacters();
    var totalE = 0, totalW = 0;
    var html  = '';

    html += '<div class="vr-sect">Registry (data.js)</div>';
    html += '<div class="vr-row ok">✓ '+oids.length+' OID: ['+oids.join(', ')+']</div>';

    if (chars.length === 0) {
      html += '<div class="vr-sect">Objek Game</div>';
      html += '<div class="vr-row warn">⚠ Tidak ada objek ditemukan di runtime.</div>';
      html += '<div class="vr-row inf">ℹ Expose via: window.LF.characters atau window.Package.characters</div>';
    } else {
      html += '<div class="vr-sect">'+chars.length+' Objek</div>';
      chars.forEach(function(char) {
        var nm   = char.name || char.id || '?';
        var tp   = char.type || 'character';
        var data = char.data || char;
        var iss  = validateObject(data, nm+'['+tp+']', oids);
        var errs = iss.filter(function(i){return i.l==='e';});
        var wrns = iss.filter(function(i){return i.l==='w';});
        totalE += errs.length; totalW += wrns.length;

        if (!iss.length) {
          html += '<div class="vr-row ok">✓ '+escHtml(nm)+'</div>';
        } else {
          html += '<div class="vr-row '+(errs.length?'err':'warn')+'">'
               + (errs.length?'✗ ':'⚠ ')+escHtml(nm)
               +' — '+errs.length+'E '+wrns.length+'W</div>';
          iss.forEach(function(i){
            html += '<div class="vr-row '+(i.l==='e'?'err':'warn')+' vr-sub">'
                  + (i.l==='e'?'✗ ':'⚠ ')+escHtml(i.m)+'</div>';
          });
        }
      });
    }

    // runtime errors from buffer
    var rtErrs = logBuffer.filter(function(e){return e.level==='error';});
    if (rtErrs.length) {
      html += '<div class="vr-sect">Runtime Errors ('+rtErrs.length+')</div>';
      rtErrs.forEach(function(e){
        var preview = e.args.map(function(a){
          try{return typeof a==='object'?JSON.stringify(a).slice(0,120):String(a).slice(0,120);}catch(x){return '?';}
        }).join(' ');
        html += '<div class="vr-row err">✗ ['+e.ts+'] '+escHtml(preview)+'</div>';
        if (e.stack) {
          var frames = parseStack(e.stack).slice(0,5);
          frames.forEach(function(f){
            var fshort = f.file ? f.file.split('/').slice(-2).join('/') : '';
            html += '<div class="vr-row vr-sub" style="color:#666">'
                  + escHtml(f.fn||'?')+' @ '+escHtml(fshort)+(f.line?':'+f.line:'')+'</div>';
          });
        }
      });
      totalE += rtErrs.length;
    }

    html += '<div class="vr-sect">Ringkasan</div>';
    if (!totalE && !totalW) {
      html += '<div class="vr-row ok">✓ Tidak ada masalah</div>';
      btnVal.className = 'on'; btnVal.textContent = '⚠ Validator ✓';
    } else {
      if (totalE) html += '<div class="vr-row err">✗ '+totalE+' error</div>';
      if (totalW) html += '<div class="vr-row warn">⚠ '+totalW+' warning</div>';
      btnVal.className = 'on ylw';
      btnVal.innerHTML = '⚠ Validator <span class="gc-badge'+(totalE?' ':' w')+'">'+(totalE||totalW)+'</span>';
    }

    valBody.innerHTML = html;
  }

  // ════════════════════════════════════════════════════════
  //  HELPERS
  // ════════════════════════════════════════════════════════
  function el(tag, id) {
    var d = document.createElement(tag);
    if (id) d.id = id;
    return d;
  }
  function btn(text) {
    var b = document.createElement('button');
    b.textContent = text;
    return b;
  }
  function escHtml(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function escRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  }

  // ════════════════════════════════════════════════════════
  //  INIT
  // ════════════════════════════════════════════════════════
  updateCounts();
  console.info('[console.js] Ready — ≡ Console + ⚠ Validator aktif');

})();

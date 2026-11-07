// ═══ DEBUG LAYOUT frontpage_dialog (dalam window) ═══
// Hapus <script src="debug.js"> dari game.html saat sudah selesai
(function() {
  var D = {
    x:418, y:320, width:500, height:300,
    item:[
      [120, 73, 250, 40], //versus
      [120, 133, 250, 40], //network
      [120, 193, 250, 40]  //control 
    ],
    label:['Game Start','Network Game','Control Settings']
  }

  var css = [
    '#fp_debug{position:absolute;top:0;left:0;pointer-events:none;z-index:99999}',
    '#fp_debug .b{position:absolute;box-sizing:border-box;border:2px solid blue;background:rgba(0,0,255,0.08);pointer-events:all;cursor:move}',
    '#fp_debug .i{position:absolute;box-sizing:border-box;border:2px solid cyan;background:rgba(0,255,255,0.12);pointer-events:all;cursor:move}',
    '#fp_debug .l{position:absolute;font:bold 9px monospace;color:#fff;padding:1px 3px;white-space:nowrap;pointer-events:none}',
    '#fp_debug .rh{position:absolute;right:0;bottom:0;width:10px;height:10px;background:orange;cursor:se-resize;pointer-events:all}',
    '#fp_debug .ri{position:absolute;right:0;bottom:0;width:8px;height:8px;background:yellow;cursor:se-resize;pointer-events:all}',
    '#fp_out{position:fixed;bottom:0;left:0;right:0;background:#111;color:#0f0;font:12px monospace;padding:6px 10px;z-index:999999;white-space:pre;pointer-events:none}',
  ].join('')
  var st = document.createElement('style')
  st.textContent = css
  document.head.appendChild(st)

  // Output panel
  var out = document.createElement('div')
  out.id = 'fp_out'
  document.body.appendChild(out)

  function printOut() {
    out.textContent =
      'Dialog: x:'+D.x+' y:'+D.y+' w:'+D.width+' h:'+D.height+'\n' +
      D.item.map(function(it, i) {
        return D.label[i]+': ['+it[0]+', '+it[1]+', '+it[2]+', '+it[3]+']'
      }).join('\n')
  }

  // Drag helper
  function makeDraggable(el, onMove, onResize) {
    var startX, startY, startVal, resizing = false

    var rh = el.querySelector('.rh, .ri')

    if (rh) {
      rh.addEventListener('mousedown', function(e) {
        e.stopPropagation()
        resizing = true
        startX = e.clientX
        startY = e.clientY
        startVal = onResize ? onResize('get') : null
        document.addEventListener('mousemove', onmv)
        document.addEventListener('mouseup', onup)
      })
    }

    el.addEventListener('mousedown', function(e) {
      if (e.target === rh) return
      resizing = false
      startX = e.clientX
      startY = e.clientY
      startVal = onMove('get')
      document.addEventListener('mousemove', onmv)
      document.addEventListener('mouseup', onup)
    })

    function onmv(e) {
      var dx = e.clientX - startX
      var dy = e.clientY - startY
      if (resizing && onResize) {
        onResize('set', startVal, dx, dy)
      } else {
        onMove('set', startVal, dx, dy)
      }
      updatePositions()
      printOut()
    }
    function onup() {
      document.removeEventListener('mousemove', onmv)
      document.removeEventListener('mouseup', onup)
    }
  }

  var wrap, boxEl, itemEls = []

  function updatePositions() {
    boxEl.style.left = D.x + 'px'
    boxEl.style.top = D.y + 'px'
    boxEl.style.width = D.width + 'px'
    boxEl.style.height = D.height + 'px'
    boxEl.querySelector('.l').textContent = 'dialog x:'+D.x+' y:'+D.y+' w:'+D.width+' h:'+D.height

    itemEls.forEach(function(el, i) {
      var it = D.item[i]
      el.style.left = (D.x + it[0]) + 'px'
      el.style.top  = (D.y + it[1]) + 'px'
      el.style.width  = it[2] + 'px'
      el.style.height = it[3] + 'px'
      el.querySelector('.l').textContent = D.label[i]+' ['+it[0]+','+it[1]+','+it[2]+','+it[3]+']'
    })
  }

  function build() {
    var fp = document.querySelector('.frontpage_content')
    if (!fp) { setTimeout(build, 300); return }

    fp.style.position = 'relative'

    wrap = document.createElement('div')
    wrap.id = 'fp_debug'

    // Kotak dialog utama
    boxEl = document.createElement('div')
    boxEl.className = 'b'
    var lbl = document.createElement('div')
    lbl.className = 'l'
    lbl.style.cssText = 'left:0;top:-14px;background:blue'
    boxEl.appendChild(lbl)
    // Resize handle
    var rh = document.createElement('div')
    rh.className = 'rh'
    boxEl.appendChild(rh)
    wrap.appendChild(boxEl)

    makeDraggable(boxEl,
      function(action, base, dx, dy) {
        if (action === 'get') return { x: D.x, y: D.y }
        D.x = base.x + Math.round(dx)
        D.y = base.y + Math.round(dy)
      },
      function(action, base, dx, dy) {
        if (action === 'get') return { w: D.width, h: D.height }
        D.width  = Math.max(50, base.w + Math.round(dx))
        D.height = Math.max(20, base.h + Math.round(dy))
      }
    )

    // Item-item menu
    D.item.forEach(function(it, i) {
      var el = document.createElement('div')
      el.className = 'i'
      var l = document.createElement('div')
      l.className = 'l'
      l.style.cssText = 'left:0;top:0;background:#0aa'
      el.appendChild(l)
      var ri = document.createElement('div')
      ri.className = 'ri'
      el.appendChild(ri)
      wrap.appendChild(el)
      itemEls.push(el)

      makeDraggable(el,
        (function(idx) {
          return function(action, base, dx, dy) {
            if (action === 'get') return { x: D.item[idx][0], y: D.item[idx][1] }
            D.item[idx][0] = base.x + Math.round(dx)
            D.item[idx][1] = base.y + Math.round(dy)
          }
        })(i),
        (function(idx) {
          return function(action, base, dx, dy) {
            if (action === 'get') return { w: D.item[idx][2], h: D.item[idx][3] }
            D.item[idx][2] = Math.max(20, base.w + Math.round(dx))
            D.item[idx][3] = Math.max(10, base.h + Math.round(dy))
          }
        })(i)
      )
    })

    fp.appendChild(wrap)
    updatePositions()
    printOut()
  }
  build()
})()

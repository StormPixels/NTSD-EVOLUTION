/*\
 * soundpack
 * sound spriting and effects management (modded by Yudi)
\*/

define(['core/effects-pool'], function (Feffects) {

  const basic_support = !!(document.createElement('audio').canPlayType);

  // =====================================
  // 🎧 SOUND MANAGER
  // =====================================
  function soundmanager(config) {
    if (!config || !basic_support) {
      return {
        play: function () {},
        TU: function () {},
        dummy: true
      };
    }

    this.packs = {};
    this.buffer = {};
    this.time = 0;
    const This = this;

    // ------------------------------
    // PACK 1: default soundpack.wav
    // ------------------------------
    for (let i = 0; i < config.packs.length; i++) {
      (function (i) {
        This.packs[config.packs[i].id] = new Feffects({
          circular: false,
          init_size: 5,
          batch_size: 5,
          max_size: 15,
          construct: function () {
            return new soundsprite(config.packs[i].data, config.resourcemap);
          }
        });
      })(i);
    }

    // ------------------------------
    // PACK 2: multiple .wav files
    // ------------------------------
    const soundList = [
"1966.wav",
"2380.wav",
"053.wav",
"1869.wav",
"2283.wav",
"2291.wav",
"2186.wav",
"SNDDATA_1255.wav",
"1877.wav",
"1958.wav",
"0585.wav",
"0577.wav",
"mada.wav",
"SNDDATA_0962.wav",
"061.wav",
"SNDDATA_1263.wav",
"037.wav",
"SNDDATA_2377.wav",
"029.wav",
"SNDDATA_1328.wav",
"SNDDATA_2288.wav",
"2999.wav",
"SNDDATA_1182.wav",
"2178.wav",
"2364.wav",
"SNDDATA_2385.wav",
"1885.wav",
"2089.wav",
"2275.wav",
"1323.wav",
"1226.wav",
"2123.wav",
"SNDDATA_2990.wav",
"SNDDATA_0954.wav",
"SNDDATA_1247.wav",
"1911.wav",
"wzetsu1.wav",
"SNDDATA_1933.wav",
"SNDDATA_2072.wav",
"SNDDATA_2161.wav",
"hak5.wav",
"1199.wav",
"nar2.wav",
"SNDDATA_1916.wav",
"SNDDATA_1941.wav",
"SNDDATA_1860.wav",
"SNDDATA_2144.wav",
"SNDDATA_0536.wav",
"2042.wav",
"SNDDATA_2080.wav",
"SNDDATA_2307.wav",
"SNDDATA_2063.wav",
"2132.wav",
"sas2.wav",
"2051.wav",
"SNDDATA_2315.wav",
"SNDDATA_2958.wav",
"kak3.wav",
"SNDDATA_0963.wav",
"0576.wav",
"SNDDATA_1327.wav",
"2347.wav",
"1886.wav",
"2088.wav",
"070.wav",
"SNDDATA_0955.wav",
"kab5.wav",
"2274.wav",
"060.wav",
"danzo5.wav",
"1330.wav",
"2284.wav",
"SNDDATA_1996.wav",
"1241.wav",
"SNDDATA_0961.wav",
"1965.wav",
"2381.wav",
"SNDDATA_2279.wav",
"054.wav",
"2203.wav",
"2357.wav",
"036.wav",
"2961.wav",
"2041.wav",
"2944.wav",
"SNDDATA_2129.wav",
"SNDDATA_0550.wav",
"SNDDATA_2135.wav",
"2018.wav",
"SNDDATA_1201.wav",
"danzo4.wav",
"1251.wav",
"SNDDATA_2308.wav",
"2114.wav",
"SNDDATA_2056.wav",
"SNDDATA_2314.wav",
"2052.wav",
"2035.wav",
"SNDDATA_2039.wav",
"2338.wav",
"1992.wav",
"2117.wav",
"2303.wav",
"2346.wav",
"SNDDATA_2956.wav",
"SNDDATA_1210.wav",
"1859.wav",
"1972.wav",
"hash5.wav",
"055.wav",
"2293.wav",
"1968.wav",
"SNDDATA_0960.wav",
"035.wav",
"SNDDATA_2162.wav",
"1887.wav",
"SNDDATA_2305.wav",
"2121.wav",
"SNDDATA_2127.wav",
"1244.wav",
"2008.wav",
"SNDDATA_2313.wav",
"wzetsu2.wav",
"SNDDATA_2304.wav",
"SNDDATA_2983.wav",
"SNDDATA_1969.wav",
"rasengan.wav",
"SNDDATA_1926.wav",
"2188.wav",
"SNDDATA_1935.wav",
"063.wav",
"1867.wav",
"tsuki.wav",
"SNDDATA_0596.wav",
"1235.wav",
"1895.wav",
"2954.wav",
"SNDDATA_1862.wav",
"SNDDATA_2375.wav",
"2017.wav",
"SNDDATA_1318.wav",
"SNDDATA_1997.wav",
"027.wav",
"2273.wav",
"SNDDATA_2061.wav",
"028.wav",
"obito3.wav",
"3002.wav",
"SNDDATA_1203.wav",
"2339.wav",
"1930.wav",
"date.wav",
"2373.wav",
"SNDDATA_1325.wav",
"034.wav",
"2037.wav",
"2043.wav",
"SNDDATA_1927.wav",
"SNDDATA_2053.wav",
"min3.wav",
"2086.wav",
"sharingan.wav",
"2345.wav",
"rai_blast.wav",
"SNDDATA_1252.wav",
"SNDDATA_0953.wav",
"SNDDATA_2048.wav",
"1322.wav",
"SNDDATA_2082.wav",
"2009.wav",
"0578.wav",
"mad3.wav",
"hash4.wav",
"0950.wav",
"waw2.wav",
"SNDDATA_2081.wav",
"SNDDATA_2306.wav",
"2953.wav",
"PainHit.wav",
"SNDDATA_2382.wav",
"SNDDATA_1940.wav",
"SNDDATA_1934.wav",
"SNDDATA_2054.wav",
"hak4.wav",
"SNDDATA_2126.wav",
"jirob.wav",
"1236.wav",
"SNDDATA_2011.wav",
"SNDDATA_1898.wav",
"SNDDATA_1180.wav",
"SNDDATA_2957.wav",
"SNDDATA_2376.wav",
"SNDDATA_2075.wav",
"SNDDATA_2154.wav",
"2150.wav",
"sas1.wav",
"1902.wav",
"SNDDATA_0552.wav",
"kakuzu_katon.wav",
"SNDDATA_2963.wav",
"062.wav",
"SNDDATA_2326.wav",
"SNDDATA_2334.wav",
"SNDDATA_2148.wav",
"2135.wav",
"SNDDATA_2067.wav",
"PainDies.wav",
"1269.wav",
"SNDDATA_0966.wav",
"SNDDATA_2133.wav",
"SNDDATA_0539.wav",
"0976.wav",
"SNDDATA_2954.wav",
"010.wav",
"SNDDATA_1928.wav",
"SNDDATA_2052.wav",
"2376.wav",
"m_pass.wav",
"SNDDATA_2196.wav",
"jiro2.wav",
"SNDDATA_1886.wav",
"065.wav",
"2360.wav",
"SNDDATA_1186.wav",
"SNDDATA_2969.wav",
"025.wav",
"0961.wav",
"SNDDATA_2381.wav",
"080.wav",
"1882.wav",
"2077.wav",
"bee.wav",
"3001.wav",
"2305.wav",
"1229.wav",
"1327.wav",
"SNDDATA_0950.wav",
"SNDDATA_2091.wav",
"sas4.wav",
"2320.wav",
"2304.wav",
"2231.wav",
"SNDDATA_2051.wav",
"2337.wav",
"SNDDATA_2139.wav",
"SNDDATA_2325.wav",
"2063.wav",
"0807.wav",
"SNDDATA_0807.wav",
"pain2.wav",
"SNDDATA_0949.wav",
"SNDDATA_2066.wav",
"1858.wav",
"011.wav",
"SNDDATA_2035.wav",
"2375.wav",
"1971.wav",
"079.wav",
"1953.wav",
"SNDDATA_1259.wav",
"0962.wav",
"0572.wav",
"081.wav",
"SNDDATA_2178.wav",
"1969.wav",
"1970.wav",
"SNDDATA_2320.wav",
"2279.wav",
"SNDDATA_1227.wav",
"SNDDATA_1885.wav",
"064.wav",
"1881.wav",
"SNDDATA_1244.wav",
"2336.wav",
"026.wav",
"1328.wav",
"009.wav",
"SNDDATA_2380.wav",
"SNDDATA_1317.wav",
"bing.wav",
"1915.wav",
"m_join.wav",
"kido.wav",
"tensei.wav",
"effect.wav",
"iron.wav",
"SNDDATA_2352.wav",
"SNDDATA_2123.wav",
"SNDDATA_1946.wav",
"1224.wav",
"SNDDATA_1873.wav",
"2990.wav",
"bubble.wav",
"0575.wav",
"pein_atk3.wav",
"1956.wav",
"SNDDATA_1970.wav",
"2161.wav",
"051.wav",
"SNDDATA_1199.wav",
"0974.wav",
"sasnarut.wav",
"1255.wav",
"SNDDATA_2291.wav",
"SNDDATA_2367.wav",
"SNDDATA_3001.wav",
"SNDDATA_1915.wav",
"SNDDATA_2065.wav",
"2362.wav",
"SNDDATA_1958.wav",
"SNDDATA_2336.wav",
"1941.wav",
"SNDDATA_0561.wav",
"SNDDATA_1229.wav",
"SNDDATA_2379.wav",
"shinrasound.wav",
"SNDDATA_1241.wav",
"SNDDATA_0577.wav",
"2075.wav",
"1227.wav",
"2307.wav",
"min.wav",
"SNDDATA_2364.wav",
"SNDDATA_1943.wav",
"1325.wav",
"1182.wav",
"as2.wav",
"shika.wav",
"SNDDATA_1930.wav",
"SNDDATA_2138.wav",
"1252.wav",
"tayuya.wav",
"2290.wav",
"SNDDATA_2339.wav",
"SNDDATA_2009.wav",
"SNDDATA_1971.wav",
"1940.wav",
"052.wav",
"SNDDATA_2953.wav",
"SNDDATA_1270.wav",
"038.wav",
"1195.wav",
"1912.wav",
"1955.wav",
"SNDDATA_2150.wav",
"SNDDATA_2337.wav",
"2276.wav",
"SNDDATA_1902.wav",
"067.wav",
"SNDDATA_1945.wav",
"2106.wav",
"1180.wav",
"2061.wav",
"2963.wav",
"023.wav",
"1210.wav",
"2979.wav",
"SNDDATA_2293.wav",
"066.wav",
"1928.wav",
"SNDDATA_0578.wav",
"2334.wav",
"SNDDATA_0535.wav",
"2148.wav",
"SNDDATA_2021.wav",
"0960.wav",
"SNDDATA_3002.wav",
"Bansho.wav",
"SNDDATA_2037.wav",
"2377.wav",
"1898.wav",
"2306.wav",
"2048.wav",
"0574.wav",
"2005.wav",
"094.wav",
"SNDDATA_2338.wav",
"2349.wav",
"SNDDATA_1257.wav",
"039.wav",
"as1.wav",
"rai.wav",
"2133.wav",
"nar1.wav",
"SNDDATA_1972.wav",
"kiba1.wav",
"pein_slow.wav",
"SNDDATA_1887.wav",
"1883.wav",
"SNDDATA_2113.wav",
"SNDDATA_1956.wav",
"1257.wav",
"SNDDATA_1867.wav",
"2100.wav",
"zab4.wav",
"SNDDATA_2121.wav",
"2011.wav",
"SNDDATA_1859.wav",
"SNDDATA_0575.wav",
"1862.wav",
"SNDDATA_2354.wav",
"0570.wav",
"084.wav",
"SNDDATA_2095.wav",
"asuma1.wav",
"bzetsu2.wav",
"1997.wav",
"SNDDATA_1883.wav",
"SNDDATA_2273.wav",
"SNDDATA_2370.wav",
"103.wav",
"2139.wav",
"006.wav",
"2058.wav",
"1927.wav",
"SNDDATA_1224.wav",
"2341.wav",
"katon2.wav",
"SNDDATA_1232.wav",
"1935.wav",
"0554.wav",
"068.wav",
"SNDDATA_2943.wav",
"2316.wav",
"0972.wav",
"2162.wav",
"2081.wav",
"SNDDATA_2362.wav",
"093.wav",
"SNDDATA_2345.wav",
"076.wav",
"1203.wav",
"oodama.wav",
"painatk2.wav",
"SNDDATA_1875.wav",
"2066.wav",
"SNDDATA_2008.wav",
"SNDDATA_2281.wav",
"014.wav",
"SNDDATA_2106.wav",
"SNDDATA_2017.wav",
"2983.wav",
"SNDDATA_2203.wav",
"SNDDATA_1858.wav",
"0949.wav",
"SNDDATA_2114.wav",
"sasori1.wav",
"SNDDATA_2041.wav",
"SNDDATA_1947.wav",
"zab3.wav",
"ch5.wav",
"085.wav",
"ded.wav",
"SNDDATA_1449.wav",
"SNDDATA_2274.wav",
"2977.wav",
"SNDDATA_2353.wav",
"005.wav",
"m_end.wav",
"2091.wav",
"2332.wav",
"SNDDATA_1963.wav",
"SNDDATA_2290.wav",
"0963.wav",
"2067.wav",
"shika3.wav",
"2325.wav",
"015.wav",
"1996.wav",
"2308.wav",
"katon1.wav",
"wave.wav",
"growl.wav",
"1943.wav",
"1926.wav",
"SNDDATA_0576.wav",
"021.wav",
"2379.wav",
"SNDDATA_2088.wav",
"SNDDATA_2346.wav",
"069.wav",
"2129.wav",
"SNDDATA_2944.wav",
"hash1.wav",
"092.wav",
"0561.wav",
"075.wav",
"SNDDATA_2077.wav",
"SNDDATA_2360.wav",
"0966.wav",
"1186.wav",
"2974.wav",
"sasori2.wav",
"0958.wav",
"SNDDATA_2328.wav",
"078.wav",
"SNDDATA_1881.wav",
"SNDDATA_2999.wav",
"2072.wav",
"1336.wav",
"bird.wav",
"012.wav",
"0536.wav",
"SNDDATA_1877.wav",
"SNDDATA_2979.wav",
"2315.wav",
"SNDDATA_2018.wav",
"SNDDATA_0968.wav",
"SNDDATA_0976.wav",
"091.wav",
"1880.wav",
"hidan1.wav",
"SNDDATA_1330.wav",
"2343.wav",
"SNDDATA_2089.wav",
"SNDDATA_2275.wav",
"SNDDATA_2347.wav",
"SNDDATA_2283.wav",
"082.wav",
"1201.wav",
"hash2.wav",
"008.wav",
"1952.wav",
"2969.wav",
"2288.wav",
"mangekyou.wav",
"ts2.wav",
"020.wav",
"1263.wav",
"2021.wav",
"SNDDATA_1226.wav",
"zab6.wav",
"1259.wav",
"SNDDATA_1869.wav",
"1916.wav",
"SNDDATA_1269.wav",
"SNDDATA_1230.wav",
"obito1.wav",
"SNDDATA_1911.wav",
"SNDDATA_2068.wav",
"SNDDATA_1955.wav",
"SNDDATA_1882.wav",
"SNDDATA_1912.wav",
"SNDDATA_2025.wav",
"pain.wav",
"077.wav",
"kaguya.wav",
"SNDDATA_2096.wav",
"0535.wav",
"SNDDATA_0568.wav",
"0959.wav",
"2388.wav",
"SNDDATA_0574.wav",
"SNDDATA_2005.wav",
"SNDDATA_2132.wav",
"hidan2.wav",
"laugh.wav",
"0563.wav",
"1270.wav",
"bzetsu1.wav",
"040.wav",
"083.wav",
"1945.wav",
"2287.wav",
"SNDDATA_2349.wav",
"2172.wav",
"hash3.wav",
"lion.wav",
"007.wav",
"2317.wav",
"SNDDATA_2276.wav",
"kimim.wav",
"2138.wav",
"090.wav",
"SNDDATA_0969.wav",
"1191.wav",
"SNDDATA_1195.wav",
"SNDDATA_2355.wav",
"zab5.wav",
"1951.wav",
"013.wav",
"2144.wav",
"ts3.wav",
"0971.wav",
"2065.wav",
"2054.wav",
"pein3.wav",
"002.wav",
"obito2.wav",
"mad2.wav",
"1923.wav",
"min2.wav",
"SNDDATA_2970.wav",
"2956.wav",
"hak1.wav",
"ts1.wav",
"0550.wav",
"2143.wav",
"SNDDATA_1952.wav",
"2344.wav",
"m_ok.wav",
"SNDDATA_2083.wav",
"017.wav",
"SNDDATA_1235.wav",
"SNDDATA_1332.wav",
"2328.wav",
"1938.wav",
"2313.wav",
"1318.wav",
"SNDDATA_1251.wav",
"1230.wav",
"041.wav",
"SNDDATA_2985.wav",
"SNDDATA_1204.wav",
"049.wav",
"frog.wav",
"0953.wav",
"bunshin.wav",
"SNDDATA_2373.wav",
"SNDDATA_2098.wav",
"2988.wav",
"SNDDATA_1992.wav",
"1873.wav",
"SNDDATA_2285.wav",
"danzo1.wav",
"m_cancel.wav",
"2367.wav",
"SNDDATA_2977.wav",
"2085.wav",
"2359.wav",
"SNDDATA_2117.wav",
"SNDDATA_0974.wav",
"0968.wav",
"2352.wav",
"033.wav",
"SNDDATA_2172.wav",
"asuma4.wav",
"SNDDATA_2027.wav",
"2200.wav",
"1946.wav",
"SNDDATA_2388.wav",
"SNDDATA_1260.wav",
"2286.wav",
"1963.wav",
"mad1.wav",
"shinra.wav",
"doublelariat.wav",
"narutsas.wav",
"zetsu.wav",
"SNDDATA_2971.wav",
"2053.wav",
"2973.wav",
"SNDDATA_0572.wav",
"SNDDATA_2084.wav",
"SNDDATA_2961.wav",
"min1.wav",
"1922.wav",
"SNDDATA_0554.wav",
"sakon.wav",
"SNDDATA_2341.wav",
"SNDDATA_2231.wav",
"042.wav",
"hak2.wav",
"laugh2.wav",
"048.wav",
"1335.wav",
"SNDDATA_2188.wav",
"2039.wav",
"2314.wav",
"kakuzu1.wav",
"1317.wav",
"2385.wav",
"058.wav",
"2084.wav",
"SNDDATA_1895.wav",
"SNDDATA_1968.wav",
"SNDDATA_2284.wav",
"2987.wav",
"SNDDATA_2303.wav",
"insect.wav",
"1947.wav",
"SNDDATA_1863.wav",
"SNDDATA_1880.wav",
"sasuke1.wav",
"2972.wav",
"SNDDATA_2987.wav",
"heart.wav",
"2285.wav",
"SNDDATA_1953.wav",
"SNDDATA_1323.wav",
"2095.wav",
"SNDDATA_2013.wav",
"2370.wav",
"032.wav",
"SNDDATA_2357.wav",
"2353.wav",
"SNDDATA_2085.wav",
"SNDDATA_2042.wav",
"2958.wav",
"SNDDATA_1938.wav",
"2354.wav",
"2080.wav",
"asuma3.wav",
"ch6.wav",
"1860.wav",
"043.wav",
"1232.wav",
"047.wav",
"101.wav",
"SNDDATA_2316.wav",
"pein1.wav",
"2013.wav",
"1875.wav",
"004.wav",
"2056.wav",
"2281.wav",
"kisame.wav",
"SNDDATA_2200.wav",
"2196.wav",
"071.wav",
"SNDDATA_2286.wav",
"SNDDATA_0972.wav",
"SNDDATA_2972.wav",
"019.wav",
"0552.wav",
"1260.wav",
"031.wav",
"SNDDATA_0959.wav",
"SNDDATA_1322.wav",
"2326.wav",
"074.wav",
"1449.wav",
"059.wav",
"2943.wav",
"2025.wav",
"2068.wav",
"sasuke2.wav",
"1863.wav",
"016.wav",
"2113.wav",
"SNDDATA_1922.wav",
"0955.wav",
"2971.wav",
"2382.wav",
"danzo3.wav",
"SNDDATA_0570.wav",
"089.wav",
"kab1.wav",
"0539.wav",
"SNDDATA_2988.wav",
"2096.wav",
"2083.wav",
"1933.wav",
"2355.wav",
"SNDDATA_1191.wav",
"2126.wav",
"SNDDATA_0971.wav",
"SNDDATA_1335.wav",
"001.wav",
"2957.wav",
"SNDDATA_2086.wav",
"0568.wav",
"SNDDATA_2343.wav",
"2098.wav",
"break.wav",
"046.wav",
"003.wav",
"SNDDATA_1236.wav",
"SNDDATA_1965.wav",
"072.wav",
"SNDDATA_2287.wav",
"SNDDATA_2973.wav",
"hokage.wav",
"0596.wav",
"2027.wav",
"102.wav",
"SNDDATA_1951.wav",
"SNDDATA_2317.wav",
"zab1.wav",
"018.wav",
"pein2.wav",
"2154.wav",
"SNDDATA_2143.wav",
"030.wav",
"073.wav",
"SNDDATA_2186.wav",
"SNDDATA_2100.wav",
"2970.wav",
"SNDDATA_2974.wav",
"2985.wav",
"1204.wav",
"SNDDATA_2359.wav",
"0969.wav",
"kab2.wav",
"SNDDATA_2058.wav",
"1934.wav",
"limbo.wav",
"SNDDATA_1923.wav",
"SNDDATA_1966.wav",
"0954.wav",
"2127.wav",
"SNDDATA_0958.wav",
"1332.wav",
"SNDDATA_2043.wav",
"2082.wav",
"SNDDATA_1336.wav",
"danzo2.wav",
"SNDDATA_2344.wav",
"ch7.wav",
"chibaku.wav",
"088.wav",
"1247.wav",
      // tambahkan nama file lainnya di sini
    ];

    // BUG FIX 2: pool size was soundList.length (~400), causing hundreds of Audio instances
    // and double-play. A small pool of 8 is enough; Audio is created fresh per born() call.
    This.packs["2"] = new Feffects({
      circular: false,
      init_size: 8,
      batch_size: 4,
      max_size: 16,
      construct: function () {
        return new multiSound("../sound/", soundList);
      }
    });
  }

  // =====================================
  // 🔊 PLAY METHOD
  // =====================================
  soundmanager.prototype.play = function (path) {
    if (this.buffer[path]) return;

    this.buffer[path] = true;
    let I, id;
    if (path.charAt(1) === "/") {
      I = path.charAt(0);
      id = path.slice(2);
    } else {
      const str = path.split("/");
      I = str[0];
      id = str[1];
    }

    if (this.packs[I]) this.packs[I].create(id);
  };

  // =====================================
  // ⏱️ UPDATE METHOD
  // =====================================
  soundmanager.prototype.TU = function () {
    this.time++;
    // BUG FIX 1: clear buffer every 2 TU instead of 5.
    // 5 TU window was too wide: two characters triggering the same sound
    // within ~1/6s would silently block the second play.
    // 2 TU is enough to deduplicate within a single game tick.
    if (this.time % 2 === 0) {
      for (const I in this.buffer) {
        delete this.buffer[I];
      }
    }
  };

  // =====================================
  // 🎵 SOUNDPACK (pack 1)
  // =====================================
  const types = {
    mp3: "audio/mpeg",
    ogg: "audio/ogg",
    wav: "audio/wav",
    aac: "audio/aac",
    m4a: "audio/x-m4a"
  };

  function soundsprite(data, resourcemap) {
    const This = this;
    const audio = (this.audio = document.createElement("audio"));
    this.frame = data.sound;
    audio.preload = "auto";

    for (let i = 0; i < data.ext.length; i++) {
      const source = document.createElement("source");
      let src = data.file + "." + data.ext[i];
      if (resourcemap) src = resourcemap.get(src);
      source.src = src;
      if (types[data.ext[i]]) source.type = types[data.ext[i]];
      audio.appendChild(source);
    }

    audio.addEventListener("timeupdate", function () {
      This.timeupdate();
    });
    this.die();
  }

  soundsprite.prototype.born = function (id) {
    if (id && this.frame[id]) {
      this.current = this.frame[id];
      if (this.audio.readyState >= 4) {
        this.audio.currentTime = this.current.start;
        if (this.audio.currentTime === this.current.start) {
          this.audio.play();
          this.dead = false;
          return;
        }
      }
    }
    this.parent.die(this);
  };

  soundsprite.prototype.die = function () {
    this.dead = true;
  };

  soundsprite.prototype.timeupdate = function () {
    if (this.current) {
      if (
        this.audio.currentTime < this.current.start ||
        this.audio.currentTime > this.current.end
      ) {
        this.audio.pause();
        if (!this.dead) this.parent.die(this);
      }
    }
  };

  // =====================================
  // 🧩 MULTISOUND (pack 2)
  // =====================================

  // Cache global: filename -> HTMLAudioElement (pre-loaded, shared across pool instances)
  const _audioCache = {};

  function multiSound(basePath, soundFiles) {
    this.basePath = basePath;
    this.soundFiles = soundFiles;
    this.audio = null;

    // Pre-load semua sound saat konstruksi pool instance
    soundFiles.forEach(function (f) {
      if (!_audioCache[f]) {
        const a = new Audio(basePath + f);
        a.preload = "auto";
        _audioCache[f] = a;
      }
    });
  }

  multiSound.prototype.born = function (id) {
    // Exact match: cegah "002" menghit "SNDDATA_1002.wav" dll.
    const idLower = id.toLowerCase();
    const found = this.soundFiles.find((f) => f.toLowerCase() === idLower) ||
                  this.soundFiles.find((f) => f.toLowerCase() === idLower + '.wav');
    if (!found) {
      console.warn("\u274c Sound not found:", id);
      this.parent.die(this);
      return;
    }

    const cached = _audioCache[found];
    if (!cached) {
      this.parent.die(this);
      return;
    }

    // cloneNode() dari cache: instan, tanpa re-fetch/re-decode
    const audio = cached.cloneNode();
    audio.volume = 1.0;
    this.audio = audio;

    const self = this;
    this.dead = false;
    audio.onended = function () {
      self.parent.die(self);
    };
    audio.play().catch((err) =>
      console.warn("\u26a0\ufe0f Failed to play sound:", err)
    );
  };

  multiSound.prototype.die = function () {
    this.dead = true;
    if (this.audio) {
      this.audio.onended = null;
      this.audio.pause();
      this.audio = null;
    }
  };
soundmanager.support = function (callback) {
  callback({ basic: basic_support })
}
  // =====================================
  // ✅ EXPORT
  // =====================================
  return soundmanager;
});

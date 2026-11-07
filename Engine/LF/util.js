/*\
 * util.js
 * utilities for F.LF
\*/

define(function () {
  if (typeof console === 'undefined') {
    // polyfill for IE, this is just for precaution
    // we should not use console.log in production anyway
    console = {}
    console.log = function () { }
  }

  const util = {}

  util.selectA_from = function (from, where, option) {
    const res = []
    for (const i in from) {
      const O = from[i]
      let match = true
      if (typeof where === 'function') {
        if (!where(O)) {
          match = false
        }
      } else {
        for (const j in where) {
          if (O[j] !== where[j]) {
            match = false
          }
        }
      }
      if (match) {
        res.push(O)
      }
    }
    return res // always return an array
  }

  util.select_from = function (from, where, option) {
    const res = util.selectA_from(from, where, option)
    if (res.length === 0) {

    } else if (res.length === 1) {
      return res[0] // return an item
    } else {
      return res
    }
  }

  util.lookup = function (A, x) {
    for (const i in A) {
      if (x <= i) {
        return A[i]
      }
    }
  }

  util.lookup_abs = function (A, x) {
    if (x < 0) x = -x
    for (var i in A) {
      if (x <= i) {
        return A[i]
      }
    }
    return A[i]
  }

  util.shallow_copy = function (A) {
    const B = {}
    for (const i in A) {
      B[i] = A[i]
    }
    return B
  }

  util.div = function (/* classname, child_classname, ... */) {
    if (!util.container) {
      util.root = document.getElementsByClassName('LFroot')[0]
      util.container = util.root.getElementsByClassName('container')[0]
    }
    classchain = Array.prototype.slice.call(arguments)
    let cur = util.root
    while (classchain.length) {
      cur = cur.getElementsByClassName(classchain.shift())[0]
    }
    return cur
  }

  util.filename = function (file) {
    if (file.lastIndexOf('/') !== -1) {
      file = file.slice(file.lastIndexOf('/') + 1)
    }
    if (file.lastIndexOf('.js') !== -1) {
      file = file.slice(0, file.lastIndexOf('.js'))
    }
    return file
  }

  /**
    The resourcemap specified by core allows putting a js function as a condition checker.
    This is considered insecure in F.LF. thus F.LF only allows simple predefined condition checking.
    */
  util.setup_resourcemap = function (pack) {
    if (pack.resourcemap) {
      if (typeof pack.resourcemap.condition === 'string') {
        const cond = pack.resourcemap.condition.split(' ')
        if (cond[0] === 'location' && cond[1] === 'contain' &&
          cond[2] && cond[3] === 'at' && cond[4]) {
          cond[4] = parseInt(cond[4])
          pack.resourcemap.condition = function () {
            return window.location.href.indexOf(cond[2]) === cond[4]
          }
        } else if (cond[0] === 'location' && cond[1] === 'contain' && cond[2]) {
          pack.resourcemap.condition = function () {
            return window.location.href.indexOf(cond[2]) !== -1
          }
        }

        if (typeof pack.resourcemap.condition === 'function') {
          const resmap = [
            pack.resourcemap, // pack-defined resourcemap
            { // default resourcemap
              get: function (res) {
                return pack.location + res
              }
            }
          ]
          return resmap
        }
      }
    }
  }

  util.normalize_path = function (ppp) { // normalize a file path section
    if (!ppp) { return '' }
    ppp = ppp.replace(/\\/g, '/')
    if (ppp.charAt(ppp.length - 1) !== '/') { ppp += '/' }
    if (ppp.charAt(0) === '/') { ppp = ppp.slice(1) }
    return ppp
  }

  // return the parameters passed by location
  util.location_parameters = function () {
    var param = window.location.href.split('/').pop()
    const query = {}
    if (param.indexOf('?') !== -1) {
      var param = param.split('?').pop().split('&')
      for (let i = 0; i < param.length; i++) {
        pp = param[i].split('=')
        if (pp.length === 1) {
          query[pp[0]] = 1
        }
        if (pp.length === 2) {
          query[pp[0]] = pp[1]
        }
      }
    }
    return query
  }
// dependsMap: object dari depends.js, contoh:
// { "itachi": ["specialattack_kunai"], "specialattack_kunai": ["specialattack_shuriken"] }
util.organize_package = function (pack, dependsMap) {

  // ambil depends map dari parameter, atau fallback ke global kalau ada
  dependsMap = dependsMap || (typeof window !== 'undefined' && window.NTSD_DEPENDS) || {}

  // helper cari object berdasarkan nama file
  function findObjectByName(name) {
    for (let j = 0; j < pack.data.object.length; j++) {

      const O = pack.data.object[j]

      if (!O.file) continue

      const file = util.filename(O.file)

      // support:
      // wind
      // wind.js
      if (file === name || file === name.replace('.js', '')) {
        return O
      }
    }

    return null
  }

  // helper: telusuri depends sampai habis (rekursif), anti-circular,
  // jadi kamu cukup nulis hubungan langsung di depends.js,
  // gak perlu nulis rantai panjang manual (itachi -> kunai -> shuriken -> ...)
  function resolveDependsRecursive(name, map, visited) {
    visited = visited || new Set()

    if (visited.has(name)) {
      return visited // sudah pernah dikunjungi, cegah infinite loop (circular depends)
    }

    visited.add(name)

    const directDeps = map[name]

    if (directDeps && Array.isArray(directDeps)) {
      for (let d = 0; d < directDeps.length; d++) {
        resolveDependsRecursive(directDeps[d], map, visited)
      }
    }

    return visited
  }

  for (let i = 0; i < pack.data.object.length; i++) {

    const obj = pack.data.object[i]

    if (obj.type !== 'character') continue

    const charName = util.filename(obj.file)

    // ============================================
    // NEW SYSTEM (explicit dependency, transitive)
    // ============================================

    // depends boleh ditulis di data.js (obj.depends) ATAU di depends.js (dependsMap)
    const hasInlineDepends = obj.depends && Array.isArray(obj.depends)
    const hasExternalDepends = Object.prototype.hasOwnProperty.call(dependsMap, charName)

    if (hasInlineDepends || hasExternalDepends) {

      // gabungkan depends.js (eksternal) dengan obj.depends (inline) supaya resolver
      // bisa nyambungin rantai dari nama karakter sampai semua dependency-nya
      const mergedMap = util.shallow_copy(dependsMap)

      if (hasInlineDepends) {
        mergedMap[charName] = (mergedMap[charName] || []).concat(obj.depends)
      }

      const visited = resolveDependsRecursive(charName, mergedMap)
      visited.delete(charName) // karakter sendiri gak perlu masuk paketnya sendiri

      const objects = []
      const missing = []

      visited.forEach(function (dep) {
        const found = findObjectByName(dep)
        if (found) {
          objects.push(found)
        } else {
          missing.push(dep)
        }
      })

      if (missing.length > 0) {
        // alarm dini: biar ketauan pas development, bukan pas user lagi main
        console.log('[depends] WARNING: "' + charName + '" butuh file berikut tapi tidak ditemukan: ' + missing.join(', '))
      }

      obj.pack = objects

      continue
    }

    // ============================================
    // OLD SYSTEM (fallback compatibility / naive guess)
    // ============================================

    var name = charName

    const objects = util.selectA_from(pack.data.object, function (O) {

      if (!O.file) return false

      const file = util.filename(O.file)

      if (file === name) return false

      return file.indexOf(name) !== -1
    })

    obj.pack = objects
  }
}

  /* the work to 'organize' the package is to create a 'pack' of dependency for each character.
     because under the current lazy loading scheme, all specialattacks are not loaded initially,
     instead are loaded only when a game starts and such data files are needed.
     however there is no dependency syntax in the current data file structure,
     such that we just guess by naive name matching.
     this is the reason for the quirky henry_louis_rudolf_wind.js
   */
  /*util.organize_package = function (pack) {
    for (let i = 0; i < pack.data.object.length; i++) {
      if (pack.data.object[i].type === 'character') {
        // if `deep.js` is of type character, select all objects which `file` contains `deep`
        var name = util.filename(pack.data.object[i].file)
        const objects = util.selectA_from(pack.data.object, function (O) {
          if (!O.file) { return false }
          const file = util.filename(O.file)
          if (file === name) { return false }
          return file.indexOf(name) !== -1
        })
        pack.data.object[i].pack = objects // each character has a specialattack pack
      }
    }
  }*/

  return util
})

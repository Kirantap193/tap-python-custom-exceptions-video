/* The user's component art (cut from their component sheets into assets/cx-art/).
   CXA.img(k, host, name, {x | cx, y, h | w})  -> {el, x, y, w, h, cx, cy, top, bot, left, right}
   CXA.pop(k, tl, P, at)                          spring pop-up (squash & stretch)          */
(function () {
  if (window.CXA) return;
  var SZ = {
    "eh-title": [1133, 226], "eh-title2": [1879, 265], "eh-BaseException": [427, 108], "eh-Exception": [297, 92], "eh-SystemExit": [297, 90],
    "eh-GeneratorExit": [321, 90], "eh-KeyboardInterrupt": [322, 94], "eh-AttributeError": [240, 81],
    "eh-ArithmeticError": [255, 82], "eh-EOFError": [201, 82], "eh-NameError": [212, 81], "eh-LookupError": [223, 82],
    "eh-OSError": [179, 81], "eh-TypeError": [222, 81], "eh-ValueError": [229, 82], "eh-ZeroDivisionError": [287, 82],
    "eh-FloatingPointError": [293, 83], "eh-OverflowError": [263, 85], "eh-IndexError": [258, 81], "eh-KeyError": [243, 80],
    "eh-FileNotFoundError": [321, 81], "eh-InterruptedError": [330, 82], "eh-PermissionError": [339, 85],
    "eh-TimeoutError": [338, 88],
    "uml-exc-head": [1017, 134], "uml-exc-body": [1065, 259], "uml-imn-head": [1072, 131], "uml-imn-body": [1111, 257],
    "uml-isa": [291, 118], "uml-arrow": [134, 316],
    "su-kids": [872, 684], "su-logo": [240, 111], "su-laptop": [327, 237], "su-title": [269, 112], "su-button": [537, 97],
    "su-window": [143, 181], "su-lamp": [159, 156], "su-wave1": [477, 91], "su-wave2": [471, 87],
    "su-field-user": [630, 102], "su-field-mobile": [634, 108], "su-field-pass": [639, 114],
    "su-plant": [187, 185], "su-monitor": [178, 152], "su-desk": [589, 59],
    "su-err-dup": [1777, 213], "su-err-weak": [1869, 232],
    "err-cloud": [1182, 565], "err-py": [603, 576], "pf-title": [884, 193], "pf-box": [801, 199], "pf-arrow": [292, 54], "pf-username": [1345, 194],
    "si-plant": [212, 278], "si-laptop": [310, 207], "si-lamp": [149, 240], "si-logo": [359, 146], "si-title": [310, 148],
    "si-kids": [708, 482], "si-field-user": [534, 98], "si-monitor": [284, 240], "si-field-mobile": [539, 99],
    "si-field-pass": [545, 101], "si-books": [277, 130], "si-button": [521, 100], "si-wave": [699, 151], "si-desk": [895, 133],
    "mem-l-stack": [230, 66], "mem-l-class": [495, 63], "mem-l-heap": [203, 67]
  };
  function r(n) { return Math.round(n * 10) / 10; }
  function img(k, host, name, o) {
    var s = SZ[name], w, h;
    if (o.h) { h = o.h; w = o.w || h * s[0] / s[1]; } else { w = o.w; h = w * s[1] / s[0]; }
    var x = o.cx != null ? o.cx - w / 2 : o.x, y = o.y;
    var e = k.el("img", "cxa", "position:absolute;display:block;left:" + r(x) + "px;top:" + r(y) + "px;width:" + r(w) + "px;height:" + r(h) + "px;" + (o.css || ""), null, host);
    e.setAttribute("src", "assets/cx-art/" + name + ".webp");
    e.setAttribute("data-layout-allow-overlap", "true");
    e.setAttribute("data-layout-allow-overflow", "true");
    if (!o.show) k.hide(e);
    return { el: e, x: x, y: y, w: w, h: h, cx: x + w / 2, cy: y + h / 2, top: y, bot: y + h, left: x, right: x + w };
  }
  function pop(k, tl, P, at) { return k.pop(P.el || P, at, { hold: 0.38 }); }
  window.CXA = { img: img, pop: pop, SZ: SZ };
})();


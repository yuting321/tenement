;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M718.2336 0 254.464 0C212.8384 0 179.2 31.9232 179.2 71.168l0 881.5872C179.2 991.8976 212.8384 1024 254.464 1024l463.8208 0C760.0896 1024 793.6 991.8976 793.6 952.7552L793.6 71.168C793.4976 31.9232 760.0128 0 718.2336 0L718.2336 0zM475.0592 994.9952c-20.8128 0-37.6064-15.9488-37.6064-35.6864 0-19.5328 16.768-35.584 37.6064-35.584 20.7104 0 37.5552 16.0512 37.5552 35.584C512.5888 979.1232 495.744 994.9952 475.0592 994.9952L475.0592 994.9952zM750.4384 892.7488 222.2592 892.7488 222.2592 46.6688l528.2048 0L750.464 892.7488 750.4384 892.7488zM750.4384 892.7488"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sanjiao-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M966.432 285.488l-454.896 453.968-453.968-454.896z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-down-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M85.97 703.021l426.465-425.595 425.595 426.465z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gou" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M132.0949 406.678569C101.866336 376.440477 52.909516 376.440477 22.671423 406.678569-7.557141 436.914756-7.557141 485.871576 22.671423 516.100141L315.897477 809.333818C331.016524 824.445242 350.787144 832.008576 370.557764 832.008576 374.54329 832.008576 378.52399 831.704685 382.463479 831.097024 386.29032 831.700794 390.155085 832.002733 394.019852 832.002733 413.051377 832.002733 431.967992 824.763315 446.437716 810.299059L1002.29952 254.43726C1031.233491 225.51058 1031.233491 178.643121 1002.29952 149.70185 973.358246 120.76605 926.496262 120.76605 897.562285 149.70185L386.340228 660.922202 132.0949 406.678569Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cross" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M768.992 839.542c-15.595 0-31.187-6.237-43.677-18.72l-530.309-530.309c-24.954-24.954-24.954-62.395 0-87.343s62.395-24.954 87.343 0l530.309 530.309c24.954 24.954 24.954 62.395 0 87.343-12.485 12.485-28.081 18.72-43.677 18.72z"  ></path>' +
    '' +
    '<path d="M238.682 839.542c-15.595 0-31.187-6.237-43.677-18.72-24.954-24.954-24.954-62.395 0-87.343l530.309-530.309c24.954-24.954 62.395-24.954 87.343 0s24.954 62.395 0 87.343l-530.309 530.309c-12.485 12.485-28.081 18.72-43.677 18.72z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)
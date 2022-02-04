(() => {
  "use strict";
  const e = () => {
    const e = document.querySelector(".logo__svg");
    setTimeout(() => {
      e.classList.add("hide-logo");
    }, 5500);
  };
  let t = !1;
  setTimeout(() => {
    if (t) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  const n = () => {
      const e = document.querySelector(".burger__btn"),
        t = document.querySelector(".nav-burger");
      e.addEventListener("click", () => {
        t.classList.toggle("active-burger");
      }),
        t.addEventListener("click", (e) => {
          e.target === t && t.classList.toggle("active-burger");
        });
    },
    o = () => {
      document.onmousemove = (e) => {
        let t = (e.x - document.documentElement.clientWidth / 2) / 24,
          n = (e.y - document.documentElement.clientHeight / 2) / 24;
        document.querySelector(".page__title").style.transform =
          "translateX(" + t + "px) translateY(" + n + "px)";
      };
    };
  window.addEventListener("DOMContentLoaded", () => {
    e(), n(), o();
  }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    });
})();

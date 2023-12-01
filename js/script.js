// "use strict";
// document.addEventListener("DOMContentLoaded", function () {
//   const elements = document.querySelectorAll(".fadeIn");

//   function fadeInElements() {
//     elements.forEach((element) => {
//       if (isElementInViewport(element)) {
//         element.classList.add("visible");
//       }
//     });
//   }

//   function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

//   window.addEventListener("scroll", fadeInElements);
//   window.addEventListener("resize", fadeInElements);

//   fadeInElements();
// });

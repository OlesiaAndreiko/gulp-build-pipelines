export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);

    //   if (support == true) {
    //     document.querySelector("body").classList.add("webp");
    //   } else {
    //     document.querySelector("body").classList.add("no-webp");
    //   }
  });
}

export function cssAnim() {
  let options = {
    root:null,
    rootMargin:"5px",
    threshold: 0.5
}

let callback = function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // console.log("find", entry)
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });

}

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll(".anim")
targets.forEach(target => {
    observer.observe(target)
})
}
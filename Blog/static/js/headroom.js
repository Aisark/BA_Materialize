var myElement = document.querySelector(".menu");

var headroom = new Headroom(myElement, {
  "offset": 205,
  "tolerance": 5,
  "classes": {
    "initial": "animated",
    "pinned": "navbar-fixed",
    "unpinned": "slideUp"
  }
});
headroom.init();

// to destroy
headroom.destroy();

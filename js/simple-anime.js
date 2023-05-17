window.SimpleAnime = class {
  constructor() {
    this.items = document.querySelectorAll("[data-anime]");
    this.init();
  }

  animateItems() {
    this.items.forEach((item) => {
      const delay = Number(item.getAttribute("data-anime"));
      if (isNaN(delay)) return;

      const animationCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            item.classList.add("anime");
            observer.unobserve(item);
          }
        });
      };

      const observer = new IntersectionObserver(animationCallback, {
        threshold: 0.5,
      });
      observer.observe(item);
    });
  }

  handleVisibility() {
    if (document.visibilityState === "visible") {
      this.animateItems();
    }
  }

  init() {
    this.handleVisibility = this.handleVisibility.bind(this);
    this.handleVisibility();
    document.addEventListener("visibilitychange", this.handleVisibility);
  }
};

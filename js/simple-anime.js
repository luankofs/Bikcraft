window.SimpleAnime = class {
  constructor() {
    (this.items = document.querySelectorAll("[data-anime]")), this.init();
  }
  animateItems() {
    this.items.forEach((item) => {
      const delay = Number(item.getAttribute("data-anime"));
      if (isNaN(delay)) return;

      const animationCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              item.classList.add("anime");
            }, delay);
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
    void 0 !== document.visibilityState
      ? "visible" === document.visibilityState && this.animateItems()
      : this.animateItems();
  }
  init() {
    (this.handleVisibility = this.handleVisibility.bind(this)),
      this.handleVisibility(),
      document.addEventListener("visibilitychange", this.handleVisibility);
  }
};

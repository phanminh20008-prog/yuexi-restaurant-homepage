const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const feedbackForms = document.querySelectorAll("[data-feedback-form]");

function setHeaderScrolled() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function closeNavigation() {
  if (!header || !navToggle) return;
  header.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function toggleNavigation() {
  if (!header || !navToggle) return;
  const isOpen = header.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

if (navToggle) {
  navToggle.addEventListener("click", toggleNavigation);
}

if (nav) {
  nav.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLAnchorElement && target.hash) {
      closeNavigation();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNavigation();
  }
});

for (const form of feedbackForms) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-form-status]");
    if (!status) return;

    const isNewsletter = form.classList.contains("newsletter-form");
    status.textContent = isNewsletter
      ? "已记录样板订阅反馈，未来可接入邮件系统。"
      : "已生成样板预订请求，未来可接入真实订位系统。";
    form.reset();
  });
}

setHeaderScrolled();
window.addEventListener("scroll", setHeaderScrolled, { passive: true });

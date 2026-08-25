/* ═══════════════════════════════════════════════════
   D◆R — Interactions
   Aucune dépendance externe. ~4 Ko minifié.
   ═══════════════════════════════════════════════════ */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── Nav : fond au scroll + barre de progression ── */
const nav = document.getElementById("nav");
const progress = document.querySelector(".scroll-progress");

function onScroll() {
  nav.classList.toggle("is-scrolled", window.scrollY > 40);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = max > 0 ? (window.scrollY / max) * 100 + "%" : "0";
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ── Menu mobile ── */
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
});
mobileMenu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  })
);

/* ── Apparition au scroll ── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = (entry.target.dataset.delay || i % 4) * 80 + "ms";
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ── Compteurs animés ── */
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const prefix = el.dataset.prefix || "";
  const suffix = el.dataset.suffix || "";
  if (prefersReducedMotion) {
    el.textContent = prefix + target + suffix;
    return;
  }
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = prefix + Math.round(target * eased) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll(".stat__number").forEach((el) => countObserver.observe(el));

/* ── Curseur personnalisé ── */
const cursor = document.querySelector(".cursor-dot");
if (window.matchMedia("(hover: hover)").matches && !prefersReducedMotion) {
  let cx = -100, cy = -100, tx = -100, ty = -100;
  window.addEventListener("mousemove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
    cursor.classList.add("is-visible");
  });
  (function follow() {
    cx += (tx - cx) * 0.18;
    cy += (ty - cy) * 0.18;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(follow);
  })();
  document.querySelectorAll("a, button, summary").forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("is-hovering"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("is-hovering"));
  });
}

/* ── Boutons magnétiques ── */
if (!prefersReducedMotion) {
  document.querySelectorAll(".magnetic").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });
}

/* ── Halo qui suit la souris sur les cartes bento ── */
document.querySelectorAll(".bento__card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", e.clientX - r.left + "px");
    card.style.setProperty("--my", e.clientY - r.top + "px");
  });
});

/* ── Tilt 3D léger sur les visuels du portfolio ── */
if (!prefersReducedMotion && window.matchMedia("(hover: hover)").matches) {
  document.querySelectorAll(".case__visual").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - 0.5) * -5;
      const ry = ((e.clientX - r.left) / r.width - 0.5) * 5;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

/* ── Barre d'action collante (mobile) : s'efface quand
     la section de contact qu'elle vise est à l'écran ── */
const stickyCta = document.getElementById("stickyCta");
if (stickyCta) {
  const watched = document.querySelector(stickyCta.dataset.watch || "#contact");
  if (watched) {
    new IntersectionObserver(
      (entries) => {
        stickyCta.classList.toggle("is-hidden", entries[0].isIntersecting);
      },
      { threshold: 0.15 }
    ).observe(watched);
  }
}

/* ── Formulaire : ouvre le client mail avec un message pré-rempli.
     Pour un vrai backend, remplacer par Formspree/Resend :
     action="https://formspree.io/f/VOTRE_ID" method="POST" et
     supprimer ce handler. ── */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const subject = encodeURIComponent("Demande d'appel découverte — " + data.get("nom"));
    const body = encodeURIComponent(
      `Nom : ${data.get("nom")}\nEmail : ${data.get("email")}\n\nProjet :\n${data.get("message")}`
    );
    window.location.href = `mailto:david@ribeiro-campelo.com?subject=${subject}&body=${body}`;
  });
}

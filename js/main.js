function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function renderHero() {
  document.getElementById("heroBadge").textContent = portfolioData.heroBadge;
  document.getElementById("heroSummary").textContent = portfolioData.summary;

  const headline = document.getElementById("heroHeadline");
  const parts = portfolioData.heroHeadline.split(portfolioData.firstName);
  headline.textContent = "";
  headline.appendChild(document.createTextNode(parts[0]));
  headline.appendChild(createElement("span", "text-accent", portfolioData.firstName));
  headline.appendChild(document.createTextNode(parts[1] || ""));

  const cvLink = document.getElementById("downloadCv");
  cvLink.href = portfolioData.resumeUrl;
  if (portfolioData.resumeUrl.startsWith("#")) {
    cvLink.addEventListener("click", (e) => {
      if (portfolioData.resumeUrl === "#contact") {
        e.preventDefault();
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  const stackContainer = document.getElementById("heroStack");
  portfolioData.heroStack.forEach((tech) => {
    const icon = createElement("span", "stack-icon");
    icon.textContent = tech.name;
    icon.style.backgroundColor = tech.color;
    icon.title = tech.name;
    stackContainer.appendChild(icon);
  });
}

function renderCaseStudySection(section) {
  const sectionEl = createElement("div", "case-section");
  sectionEl.appendChild(createElement("h4", "case-section-heading", section.heading));

  section.paragraphs?.forEach((paragraph) => {
    sectionEl.appendChild(createElement("p", "case-paragraph", paragraph));
  });

  if (section.achievements?.length) {
    const list = createElement("ul", "case-achievements");
    section.achievements.forEach((item) => {
      list.appendChild(createElement("li", null, item));
    });
    sectionEl.appendChild(list);
  }

  return sectionEl;
}

function renderProjects() {
  const container = document.getElementById("projectsList");

  portfolioData.projects.forEach((project) => {
    const article = createElement("article", "project-card");
    article.id = project.id;

    const thumb = createElement("div", "project-thumb");
    thumb.style.background = project.gradient;
    thumb.appendChild(createElement("span", "project-number", project.number));

    const content = createElement("div", "project-content");
    const header = createElement("div", "project-header");
    header.appendChild(createElement("span", "project-company", project.company));
    header.appendChild(createElement("time", "project-period", project.period));

    content.appendChild(header);
    content.appendChild(createElement("h3", "project-title", project.title));
    content.appendChild(createElement("p", "project-excerpt", project.excerpt));

    const tags = createElement("div", "project-tags");
    project.tags.forEach((tag) => {
      tags.appendChild(createElement("span", "skill-tag", tag));
    });
    content.appendChild(tags);

    const body = createElement("div", "project-body");
    body.id = `project-body-${project.id}`;
    body.hidden = true;

    project.sections.forEach((section) => {
      body.appendChild(renderCaseStudySection(section));
    });

    const toggleBtn = createElement("button", "btn btn-outline project-toggle");
    toggleBtn.type = "button";
    toggleBtn.textContent = "Read case study";
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.setAttribute("aria-controls", `project-body-${project.id}`);

    toggleBtn.addEventListener("click", () => {
      const isOpen = !body.hidden;
      body.hidden = isOpen;
      toggleBtn.textContent = isOpen ? "Read case study" : "Show less";
      toggleBtn.setAttribute("aria-expanded", String(!isOpen));
      article.classList.toggle("expanded", !isOpen);
    });

    content.appendChild(body);
    content.appendChild(toggleBtn);

    article.appendChild(thumb);
    article.appendChild(content);
    container.appendChild(article);
  });
}

function renderStack() {
  document.getElementById("stackIntro").textContent = portfolioData.stackIntro;
  const container = document.getElementById("stackGrid");

  portfolioData.skills.forEach((group) => {
    const card = createElement("div", "stack-group");
    card.appendChild(createElement("h3", "stack-group-title", group.category));

    const tags = createElement("div", "stack-tags");
    group.items.forEach((skill) => {
      tags.appendChild(createElement("span", "stack-tag", skill));
    });

    card.appendChild(tags);
    container.appendChild(card);
  });
}

function renderAbout() {
  document.getElementById("aboutHeading").textContent = portfolioData.aboutHeading;
  document.getElementById("aboutText").textContent = portfolioData.aboutText;
  document.getElementById("aboutEducation").textContent = portfolioData.aboutEducation;
  document.getElementById("aboutCertifications").textContent = portfolioData.aboutCertifications;

  const container = document.getElementById("statsGrid");
  portfolioData.stats.forEach((stat) => {
    const card = createElement("div", "stat-card");
    card.appendChild(createElement("span", "stat-value", stat.value));
    card.appendChild(createElement("span", "stat-label", stat.label));
    container.appendChild(card);
  });
}

function scrollToProject(projectId) {
  const target = document.getElementById(projectId);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth" });
  const body = document.getElementById(`project-body-${projectId}`);
  const btn = target.querySelector(".project-toggle");
  if (body?.hidden && btn) btn.click();
}

function renderBackground() {
  document.getElementById("backgroundIntro").textContent = portfolioData.backgroundIntro;
  const container = document.getElementById("backgroundTimeline");

  portfolioData.background.forEach((entry, index) => {
    const card = createElement("article", "background-card");

    const marker = createElement("div", "background-marker");
    marker.appendChild(createElement("span", "background-dot"));
    if (index < portfolioData.background.length - 1) {
      marker.appendChild(createElement("span", "background-line"));
    }

    const body = createElement("div", "background-card-body");
    body.appendChild(createElement("time", "background-period", entry.period));
    body.appendChild(createElement("h3", "background-company", entry.company));
    body.appendChild(createElement("p", "background-role", entry.role));
    body.appendChild(createElement("p", "background-focus", entry.focus));

    if (entry.projectId) {
      const link = createElement("button", "background-link");
      link.type = "button";
      link.textContent = "View project ↗";
      link.addEventListener("click", () => scrollToProject(entry.projectId));
      body.appendChild(link);
    }

    card.appendChild(marker);
    card.appendChild(body);
    container.appendChild(card);
  });
}

function renderFooter() {
  const { footer } = portfolioData;

  document.getElementById("footerCtaHeading").textContent = footer.ctaHeading;

  const ctaBtn = document.getElementById("footerCtaBtn");
  ctaBtn.textContent = footer.ctaButton;
  ctaBtn.href = `mailto:${portfolioData.email}`;

  const testimonial = document.getElementById("testimonial");
  testimonial.innerHTML = `
    <p class="testimonial-quote">"${footer.testimonial.quote}"</p>
    <footer>
      <cite class="testimonial-author">${footer.testimonial.author}</cite>
      <span class="testimonial-role">${footer.testimonial.role}</span>
    </footer>
  `;

  const socialContainer = document.getElementById("socialLinks");
  portfolioData.socialLinks.forEach((link) => {
    const a = createElement("a", "social-link", link.icon);
    a.href = link.url;
    a.title = link.name;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    socialContainer.appendChild(a);
  });

  const contactContainer = document.getElementById("footerContact");
  const emailLink = createElement("a", "footer-contact-item", portfolioData.email);
  emailLink.href = `mailto:${portfolioData.email}`;
  const phoneLink = createElement("a", "footer-contact-item", portfolioData.phone);
  phoneLink.href = `tel:${portfolioData.phone.replace(/-/g, "")}`;
  contactContainer.appendChild(emailLink);
  contactContainer.appendChild(phoneLink);

  document.getElementById("footerCopyright").textContent =
    `© ${new Date().getFullYear()} ${footer.copyright}`;
}

function setupNavigation() {
  const toggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const header = document.querySelector(".site-header");
  const navCta = document.querySelector(".nav-cta");

  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    navCta?.classList.toggle("open", isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      toggle.classList.remove("active");
      navCta?.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  });
}

function setupScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(
    ".section, .stack-group, .stat-card, .background-timeline, .hero-content, .hero-visual"
  ).forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });

  document.querySelectorAll(".hero-content, .hero-visual").forEach((el) => {
    el.classList.add("visible");
  });
}

function init() {
  renderHero();
  renderProjects();
  renderStack();
  renderAbout();
  renderBackground();
  renderFooter();
  setupNavigation();
  setupScrollReveal();
}

document.addEventListener("DOMContentLoaded", init);

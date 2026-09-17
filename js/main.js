function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function renderHero() {
  document.getElementById("heroName").textContent = portfolioData.name;
  document.getElementById("heroTitle").textContent = portfolioData.title;
  document.getElementById("heroSummary").textContent = portfolioData.summary;
  document.getElementById("aboutText").textContent = portfolioData.summary;

  const contactItems = [
    { label: portfolioData.location, href: null },
    { label: portfolioData.email, href: `mailto:${portfolioData.email}` },
    { label: portfolioData.phone, href: `tel:${portfolioData.phone.replace(/-/g, "")}` },
  ];

  const contactList = document.getElementById("heroContact");
  contactItems.forEach(({ label, href }) => {
    const li = createElement("li");
    if (href) {
      const link = createElement("a", null, label);
      link.href = href;
      li.appendChild(link);
    } else {
      li.textContent = label;
    }
    contactList.appendChild(li);
  });
}

function renderExperience() {
  const container = document.getElementById("experienceList");

  portfolioData.experience.forEach((job) => {
    const item = createElement("article", "timeline-item");

    const header = createElement("div", "timeline-header");
    header.appendChild(createElement("h3", "timeline-role", job.role));
    header.appendChild(createElement("p", "timeline-company", job.company));
    header.appendChild(createElement("time", "timeline-period", job.period));

    const list = createElement("ul", "timeline-highlights");
    job.highlights.forEach((point) => {
      list.appendChild(createElement("li", null, point));
    });

    item.appendChild(header);
    item.appendChild(list);
    container.appendChild(item);
  });
}

function renderSkills() {
  const container = document.getElementById("skillsGrid");

  portfolioData.skills.forEach((group) => {
    const card = createElement("div", "skill-card");
    card.appendChild(createElement("h3", "skill-category", group.category));

    const tags = createElement("div", "skill-tags");
    group.items.forEach((skill) => {
      tags.appendChild(createElement("span", "skill-tag", skill));
    });

    card.appendChild(tags);
    container.appendChild(card);
  });
}

function renderEducation() {
  const container = document.getElementById("educationGrid");

  portfolioData.education.forEach((entry) => {
    const card = createElement("div", "info-card");
    card.appendChild(createElement("h3", "info-card-title", entry.title));
    card.appendChild(createElement("p", "info-card-subtitle", entry.subtitle));
    card.appendChild(createElement("p", "info-card-meta", entry.institution));
    card.appendChild(createElement("p", "info-card-period", entry.period));
    container.appendChild(card);
  });

  portfolioData.certifications.forEach((cert) => {
    const card = createElement("div", "info-card info-card-cert");
    card.appendChild(createElement("h3", "info-card-title", "Certification"));
    card.appendChild(createElement("p", "info-card-subtitle", cert));
    container.appendChild(card);
  });
}

function renderSoftSkills() {
  const container = document.getElementById("softSkillsList");

  portfolioData.softSkills.forEach((skill) => {
    container.appendChild(createElement("li", "soft-skill-item", skill));
  });
}

function renderBlogSection(section) {
  const sectionEl = createElement("div", "blog-section");

  sectionEl.appendChild(createElement("h4", "blog-section-heading", section.heading));

  section.paragraphs?.forEach((paragraph) => {
    sectionEl.appendChild(createElement("p", "blog-paragraph", paragraph));
  });

  if (section.achievements?.length) {
    const list = createElement("ul", "blog-achievements");
    section.achievements.forEach((item) => {
      list.appendChild(createElement("li", null, item));
    });
    sectionEl.appendChild(list);
  }

  return sectionEl;
}

function renderBlogs() {
  const container = document.getElementById("blogsList");

  portfolioData.blogs.forEach((blog) => {
    const article = createElement("article", "blog-card");
    article.id = blog.id;

    const header = createElement("div", "blog-card-header");
    header.appendChild(createElement("span", "blog-company", blog.company));
    header.appendChild(createElement("time", "blog-period", blog.period));

    article.appendChild(header);
    article.appendChild(createElement("h3", "blog-title", blog.title));
    article.appendChild(createElement("p", "blog-excerpt", blog.excerpt));

    const tags = createElement("div", "blog-tags");
    blog.tags.forEach((tag) => {
      tags.appendChild(createElement("span", "skill-tag", tag));
    });
    article.appendChild(tags);

    const body = createElement("div", "blog-body");
    body.id = `blog-body-${blog.id}`;
    body.hidden = true;

    blog.sections.forEach((section) => {
      body.appendChild(renderBlogSection(section));
    });

    const toggleBtn = createElement("button", "btn btn-outline blog-toggle");
    toggleBtn.type = "button";
    toggleBtn.textContent = "Read full story";
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.setAttribute("aria-controls", `blog-body-${blog.id}`);

    toggleBtn.addEventListener("click", () => {
      const isOpen = !body.hidden;
      body.hidden = isOpen;
      toggleBtn.textContent = isOpen ? "Read full story" : "Show less";
      toggleBtn.setAttribute("aria-expanded", String(!isOpen));
      article.classList.toggle("expanded", !isOpen);
    });

    article.appendChild(body);
    article.appendChild(toggleBtn);
    container.appendChild(article);
  });
}

function renderContact() {
  const container = document.getElementById("contactCards");

  const contacts = [
    { label: "Email", value: portfolioData.email, href: `mailto:${portfolioData.email}` },
    { label: "Phone", value: portfolioData.phone, href: `tel:${portfolioData.phone.replace(/-/g, "")}` },
    { label: "Location", value: portfolioData.location, href: null },
  ];

  contacts.forEach(({ label, value, href }) => {
    const card = createElement("div", "contact-card");
    card.appendChild(createElement("span", "contact-label", label));

    if (href) {
      const link = createElement("a", "contact-value", value);
      link.href = href;
      card.appendChild(link);
    } else {
      card.appendChild(createElement("p", "contact-value", value));
    }

    container.appendChild(card);
  });
}

function setupNavigation() {
  const toggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const header = document.querySelector(".site-header");

  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  });
}

function setupScrollReveal() {
  const sections = document.querySelectorAll(".section, .hero-content, .hero-visual");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
  });

  document.querySelectorAll(".hero-content, .hero-visual").forEach((el) => {
    el.classList.add("visible");
  });
}

function init() {
  renderHero();
  renderExperience();
  renderBlogs();
  renderSkills();
  renderEducation();
  renderSoftSkills();
  renderContact();
  setupNavigation();
  setupScrollReveal();
  document.getElementById("year").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", init);

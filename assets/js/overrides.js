/* ========================================
   PORTFOLIO REFINEMENTS - OVERRIDES.JS
======================================== */

// Configuration for easy editing
const CONFIG = {
  // Hero floating chips - TODO: Edit these impact statements as needed
  heroChips: [
    "80+ student businesses launched",
    "100+ PMs mentored", 
    "XR snow-sports simulator",
    "Customer discovery expert",
    "Always asking 'why?'"
  ],
  
  // Skills data - TODO: Edit titles, descriptions, and image paths
  skills: [
    {
      title: "Customer Discovery",
      description: "100+ interviews → clear insights → prototypes.",
      image: "assets/img/customer-discovery.jpg"
    },
    {
      title: "Product Design", 
      description: "Turn ambiguity into tangible MVPs & demos.",
      image: "assets/img/product-design.jpg"
    },
    {
      title: "Cross-functional Leadership",
      description: "Align eng, design & GTM to ship fast.",
      image: "assets/img/cross-functional.jpg"
    },
    {
      title: "Storytelling & Communication",
      description: "Earn focus with crisp narratives.",
      image: "assets/img/storytelling.jpg"
    },
    {
      title: "Entrepreneurial Ownership",
      description: "0→1 builder: vision → funding → pilots.",
      image: "assets/img/ownership.jpg"
    },
    {
      title: "Strategic Clarity",
      description: "Make complexity actionable.",
      image: "assets/img/clarity.jpg"
    }
  ],
  
  // Work samples data - TODO: Edit titles, descriptions, filters, and PDF paths
  workSamples: [
    {
      title: "BaselineTech — Product Development",
      description: "Discovery → design → cross‑functional execution.",
      filter: "filter-products",
      image: "assets/img/portfolio/baselinetec-devdoc-thumb.jpg",
      pdf: "assets/docs/BaselineTech-Product-Development-Doc-Generate.pdf"
    },
    {
      title: "Hardware Design Review",
      description: "Architecture, safety and trade‑offs.",
      filter: "filter-design",
      image: "assets/img/portfolio/baselinetec-hw-thumb.jpg", 
      pdf: "assets/docs/BaselineTech-Hardware-Design-Review.pdf"
    },
    {
      title: "Game Design — Mirage",
      description: "Systems thinking and player experience.",
      filter: "filter-design",
      image: "assets/img/portfolio/mirage-thumb.jpg",
      pdf: "assets/docs/Game-Design-Mirage.pdf"
    },
    {
      title: "SwiftSwipe — Product Strategy",
      description: "Positioning, pain points, GTM.",
      filter: "filter-strategy",
      image: "assets/img/portfolio/swiftswipe-thumb.jpg",
      pdf: "assets/docs/SwiftSwipe-Phone-Wallet-Presentation.pdf"
    },
    {
      title: "ImmersivED — Executive Summary", 
      description: "XR in education: vision & adoption.",
      filter: "filter-strategy",
      image: "assets/img/portfolio/immersived-thumb.jpg",
      pdf: "assets/docs/Executive-Summary-ImmersivED.pdf"
    },
    {
      title: "BaselineTech — PRD",
      description: "Problem, scope, acceptance criteria.",
      filter: "filter-requirements",
      image: "assets/img/portfolio/baselinetec-prd-thumb.jpg",
      pdf: "assets/docs/BaselineTech-PRD.pdf"
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  
  // Initialize Skills Swiper with responsive breakpoints
  initSkillsSwiper();
  
  // Initialize Isotope for portfolio filtering  
  initPortfolioFiltering();
  
  // Initialize navbar scroll behavior
  initNavbarScrollBehavior();
  
  // Initialize active link highlighting
  initActiveLinkHighlighting();
  
  // Initialize preloader
  initPreloader();
  
});

/* ========================================
   SKILLS SWIPER INITIALIZATION
======================================== */
function initSkillsSwiper() {
  const skillsSwiper = new Swiper('.skills-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    }
  });
}

/* ========================================
   PORTFOLIO FILTERING WITH ISOTOPE
======================================== */
function initPortfolioFiltering() {
  // Wait for images to load
  const portfolioContainer = document.querySelector('.isotope-container');
  if (!portfolioContainer) return;
  
  imagesLoaded(portfolioContainer, function() {
    const iso = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item',
      layoutMode: 'masonry',
      masonry: {
        columnWidth: '.portfolio-item'
      }
    });
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.portfolio-filters li');
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('filter-active'));
        // Add active class to clicked button
        this.classList.add('filter-active');
        
        // Get filter value
        const filterValue = this.getAttribute('data-filter');
        
        // Filter items
        iso.arrange({ filter: filterValue });
      });
    });
  });
}

/* ========================================
   NAVBAR SCROLL BEHAVIOR
======================================== */
function initNavbarScrollBehavior() {
  const header = document.querySelector('#header');
  if (!header) return;
  
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Add/remove scrolled class based on scroll position
    if (currentScrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
  });
}

/* ========================================
   ACTIVE LINK HIGHLIGHTING
======================================== */
function initActiveLinkHighlighting() {
  const navLinks = document.querySelectorAll('.navmenu a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');
  
  if (!navLinks.length || !sections.length) return;
  
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY + 100;
    
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (currentScrollY >= sectionTop && currentScrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ========================================
   PRELOADER
======================================== */
function initPreloader() {
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 300);
    });
  }
}

/* ========================================
   UTILITY FUNCTIONS
======================================== */

// Generate hero chips dynamically (if needed)
function generateHeroChips() {
  const chipsContainer = document.querySelector('.impact-chips');
  if (!chipsContainer || CONFIG.heroChips.length === 0) return;
  
  chipsContainer.innerHTML = '';
  
  CONFIG.heroChips.forEach((chipText, index) => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = chipText;
    
    // Set random positioning for desktop
    const positions = [
      { x: -160, y: -120 },
      { x: 220, y: -90 },
      { x: -240, y: 40 },
      { x: 180, y: 100 },
      { x: 0, y: 160 }
    ];
    
    if (positions[index]) {
      chip.style.setProperty('--tx', `${positions[index].x}px`);
      chip.style.setProperty('--ty', `${positions[index].y}px`);
    }
    
    chipsContainer.appendChild(chip);
  });
}

// Generate skills carousel dynamically (if needed)
function generateSkillsCarousel() {
  const swiperWrapper = document.querySelector('.skills-swiper .swiper-wrapper');
  if (!swiperWrapper || CONFIG.skills.length === 0) return;
  
  swiperWrapper.innerHTML = '';
  
  CONFIG.skills.forEach(skill => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    
    slide.innerHTML = `
      <div class="skill-card">
        <img src="${skill.image}" alt="${skill.title}">
        <div class="skill-meta">
          <h3>${skill.title}</h3>
          <p>${skill.description}</p>
        </div>
      </div>
    `;
    
    swiperWrapper.appendChild(slide);
  });
}

// Generate portfolio items dynamically (if needed)
function generatePortfolioItems() {
  const portfolioContainer = document.querySelector('.isotope-container');
  if (!portfolioContainer || CONFIG.workSamples.length === 0) return;
  
  portfolioContainer.innerHTML = '';
  
  CONFIG.workSamples.forEach(item => {
    const portfolioItem = document.createElement('div');
    portfolioItem.className = `col-lg-4 col-md-6 portfolio-item isotope-item ${item.filter}`;
    
    portfolioItem.innerHTML = `
      <img src="${item.image}" class="img-fluid thumb" alt="${item.title}">
      <div class="portfolio-info">
        <h4>${item.title}</h4>
        <p>${item.description}</p>
        <a href="${item.pdf}" class="details-link" target="_blank" rel="noopener" title="Open PDF">
          <i class="bi bi-link-45deg"></i>
        </a>
      </div>
    `;
    
    portfolioContainer.appendChild(portfolioItem);
  });
}

/* ========================================
   SMOOTH SCROLLING FOR ANCHOR LINKS
======================================== */
document.addEventListener('click', (e) => {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const headerHeight = document.querySelector('#header').offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
});

/* ========================================
   CONSOLE INFO FOR DEVELOPERS
======================================== */
console.log('%c🚀 Portfolio Loaded Successfully!', 'color: #4f46e5; font-size: 16px; font-weight: bold;');
console.log('%c📝 To edit content, modify the CONFIG object in overrides.js', 'color: #6b7280; font-size: 12px;');
console.log('CONFIG:', CONFIG);
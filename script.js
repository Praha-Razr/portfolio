/**
 * Prahadeesh K — Portfolio Interaction Script
 * Vanilla JavaScript (No Frameworks)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Organic Blooming Sprout Preloader Controller (Nature)
  const preloader = document.getElementById('preloader');

  if (preloader) {
    let dismissed = false;
    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      preloader.classList.add('loaded');
      document.body.classList.add('page-ready');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 650);
    };

    // Smooth exit after botanical bloom sequence finishes (~1.85s total)
    setTimeout(dismiss, 1850);
  }

  // Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      document.body.classList.toggle('nav-open');
      siteNav.classList.toggle('active');
    });

    // Close mobile menu when link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        siteNav.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Coursera Certification Filter Controller
  const certFilterBtns = document.querySelectorAll('.cert-filter-btn');
  const certCards = document.querySelectorAll('.cert-card');

  if (certFilterBtns.length && certCards.length) {
    certFilterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        certFilterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        certCards.forEach((card) => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.classList.remove('is-hidden');
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });
  }

  // Functional UI Contact Form (Direct Email Routing to prahadeeshkalimuthu@gmail.com)
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Reset errors
      clearErrors();

      const nameInput = document.getElementById('senderName');
      const emailInput = document.getElementById('senderEmail');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const subjectVal = subjectInput ? subjectInput.value.trim() : '';
      const messageVal = messageInput ? messageInput.value.trim() : '';

      let isValid = true;

      // Validate Name
      if (!nameVal) {
        showError('nameError', 'Please enter your full name.');
        isValid = false;
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        showError('emailError', 'Please provide a valid email address.');
        isValid = false;
      }

      // Validate Message
      if (!messageVal || messageVal.length < 10) {
        showError('messageError', 'Message should be at least 10 characters long.');
        isValid = false;
      }

      if (!isValid) return;

      // Update button state to loading with spinner
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending Email...</span><div class="btn-spinner"></div>';

      try {
        const response = await fetch('https://formsubmit.co/ajax/prahadeeshkalimuthu@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: nameVal,
            email: emailVal,
            _replyto: emailVal,
            subject: subjectVal || `Portfolio Message from ${nameVal}`,
            message: messageVal,
            _captcha: 'false',
            _template: 'table'
          })
        });

        const data = await response.json().catch(() => ({}));

        if (response.ok || data.success === 'true' || data.success === true) {
          formFeedback.className = 'form-feedback success';
          formFeedback.innerHTML = `<strong>Message Delivered!</strong> Thank you, ${nameVal}. Your email has been forwarded directly to <em>prahadeeshkalimuthu@gmail.com</em>. I will reply to <em>${emailVal}</em> shortly.`;
          contactForm.reset();

          setTimeout(() => {
            formFeedback.className = 'form-feedback';
            formFeedback.textContent = '';
          }, 9000);
        } else {
          throw new Error(data.message || 'Server responded with an issue');
        }
      } catch (err) {
        // Fallback: Direct mailto link if AJAX is blocked by local network, ad-blocker or offline
        const mailtoSubject = encodeURIComponent(subjectVal || `Portfolio Inquiry from ${nameVal}`);
        const mailtoBody = encodeURIComponent(`Name: ${nameVal}\nEmail: ${emailVal}\n\nMessage:\n${messageVal}`);
        const mailtoLink = `mailto:prahadeeshkalimuthu@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

        formFeedback.className = 'form-feedback info';
        formFeedback.innerHTML = `Your message is ready! <a href="${mailtoLink}" class="link-inline" style="text-decoration:underline; font-weight:700; color:#38bdf8;">Click here to send directly via your email client</a>.`;

        // Attempt automatic trigger
        window.location.href = mailtoLink;
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
      }
    });
  }

  function showError(elementId, msg) {
    const errorEl = document.getElementById(elementId);
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.classList.add('active');
    }
  }

  function clearErrors() {
    document.querySelectorAll('.field-error').forEach((el) => {
      el.textContent = '';
      el.classList.remove('active');
    });
    if (formFeedback) {
      formFeedback.className = 'form-feedback';
      formFeedback.textContent = '';
    }
  }

  // ==========================================================================
  // Tactile Scroll Pop-Up Reveal Animation Controller
  // ==========================================================================
  const revealTargets = document.querySelectorAll(
    '.section-header, .about-card, .timeline-item, .skills-category-card, .project-card, .hackathon-card, .cocurricular-block, .cert-filter-bar, .cert-card, .contact-info, .contact-form-wrapper'
  );

  if (revealTargets.length) {
    revealTargets.forEach((el) => {
      el.classList.add('reveal-init');

      // Auto-stagger grid elements
      const parentGrid = el.closest(
        '.about-grid, .projects-grid, .hackathon-grid, .skills-grid, .cert-grid, .cocurricular-grid'
      );
      if (parentGrid) {
        const siblings = Array.from(parentGrid.children);
        const idx = siblings.indexOf(el);
        if (idx !== -1) {
          el.style.transitionDelay = `${(idx % 4) * 0.12}s`;
        }
      }
    });

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));
  }

  // ==========================================================================
  // Typewriter Text Animation for Hero Subtitle
  // ==========================================================================
  const typingRoleEl = document.getElementById('typingRole');
  if (typingRoleEl) {
    const roles = [
      'Software Developer',
      'Competitive Problem Solver',
      'Cooperative Systems Architect',
      'Creative Visual Storyteller'
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    const typeStep = () => {
      const currentRole = roles[roleIdx];

      if (isDeleting) {
        charIdx--;
        typingRoleEl.textContent = currentRole.substring(0, charIdx);
      } else {
        charIdx++;
        typingRoleEl.textContent = currentRole.substring(0, charIdx);
      }

      let nextDelay = isDeleting ? 35 : 65;

      if (!isDeleting && charIdx === currentRole.length) {
        nextDelay = 2200; // Pause after word is fully typed
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        nextDelay = 450; // Pause before typing next word
      }

      setTimeout(typeStep, nextDelay);
    };

    // Initial delayed start after preloader bloom sequence finishes
    setTimeout(typeStep, 1900);
  }

  // ==========================================================================
  // Hero Statistics Rollup Animation
  // ==========================================================================
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length) {
    let statsAnimated = false;

    const animateStats = () => {
      if (statsAnimated) return;
      statsAnimated = true;

      statNumbers.forEach((stat) => {
        const target = parseFloat(stat.getAttribute('data-target'));
        const decimals = parseInt(stat.getAttribute('data-decimals') || '0', 10);
        const suffix = stat.getAttribute('data-suffix') || '';

        if (isNaN(target)) return;

        const duration = 1400; // ms
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic curve: 1 - (1 - progress)^3
          const ease = 1 - Math.pow(1 - progress, 3);
          const currentVal = ease * target;

          stat.textContent = `${currentVal.toFixed(decimals)}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            stat.textContent = `${target.toFixed(decimals)}${suffix}`;
          }
        };

        requestAnimationFrame(updateCount);
      });
    };

    // Trigger stats counter animation right when preloader finishes
    setTimeout(animateStats, 1950);
  }
});

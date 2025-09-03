// Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      // Navbar scroll effect
      window.addEventListener("scroll", () => {
        const navbar = document.getElementById("navbar");
        const scrollTop = document.getElementById("scrollTop");

        if (window.scrollY > 100) {
          navbar.classList.add("scrolled");
          scrollTop.classList.add("visible");
        } else {
          navbar.classList.remove("scrolled");
          scrollTop.classList.remove("visible");
        }
      });

      // Scroll to top functionality
      document.getElementById("scrollTop").addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

      // Animate elements on scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      }, observerOptions);

      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.observe(el);
      });

      // Portfolio filter functionality
      const filterButtons = document.querySelectorAll(".filter-btn");
      const portfolioItems = document.querySelectorAll(".portfolio-item");

      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Remove active class from all buttons
          filterButtons.forEach((btn) => btn.classList.remove("active"));
          // Add active class to clicked button
          button.classList.add("active");

          const filter = button.getAttribute("data-filter");

          portfolioItems.forEach((item) => {
            const category = item.getAttribute("data-category");

            if (filter === "all" || category === filter) {
              item.style.display = "block";
              item.style.animation = "fadeIn 0.5s ease-out";
            } else {
              item.style.display = "none";
            }
          });
        });
      });

      // Contact form submission
      function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        };

        // Simulate form submission
        const submitBtn = event.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
          submitBtn.style.background = "#10b981";

          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = "";
            submitBtn.disabled = false;
            event.target.reset();
          }, 2000);
        }, 1500);
      }

      // Download CV functionality
      function downloadCV() {
        // Create a temporary link to simulate CV download
        const link = document.createElement("a");
        link.href = "#";
        link.download = "Dipesh_Tamang_CV.pdf";

        // Show download message
        const btn = event.target;
        const originalText = btn.innerHTML;
        btn.innerHTML =
          '<i class="fas fa-download fa-spin"></i> Downloading...';

        setTimeout(() => {
          btn.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
          setTimeout(() => {
            btn.innerHTML = originalText;
          }, 2000);
        }, 1000);
      }

      // Mobile menu toggle functionality
      document.getElementById("mobileMenu").addEventListener("click", (e) => {
        e.stopPropagation();
        const navLinks = document.querySelector(".nav-links");
        const mobileMenu = document.getElementById("mobileMenu");
        const icon = mobileMenu.querySelector("i");

        navLinks.classList.toggle("mobile-open");

        if (navLinks.classList.contains("mobile-open")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-times");
          document.body.style.overflow = "hidden";
        } else {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
          document.body.style.overflow = "auto";
        }
      });

      // Close mobile menu when clicking outside or on links
      document.addEventListener("click", (e) => {
        const navLinks = document.querySelector(".nav-links");
        const mobileMenu = document.getElementById("mobileMenu");
        const icon = mobileMenu.querySelector("i");

        if (!e.target.closest(".nav-container")) {
          navLinks.classList.remove("mobile-open");
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
          document.body.style.overflow = "auto";
        }
      });

      // Close mobile menu when clicking on nav links
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          const navLinks = document.querySelector(".nav-links");
          const mobileMenu = document.getElementById("mobileMenu");
          const icon = mobileMenu.querySelector("i");

          navLinks.classList.remove("mobile-open");
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
          document.body.style.overflow = "auto";
        });
      });

      // Add hover effects to service cards
      document.querySelectorAll(".service-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
          card.style.transform = "translateY(-10px) scale(1.02)";
        });

        card.addEventListener("mouseleave", () => {
          card.style.transform = "translateY(0) scale(1)";
        });
      });

      // Add hover effects to portfolio items
      document.querySelectorAll(".portfolio-item").forEach((item) => {
        item.addEventListener("mouseenter", () => {
          const image = item.querySelector(".portfolio-image");
          image.style.transform = "scale(1.05)";
        });

        item.addEventListener("mouseleave", () => {
          const image = item.querySelector(".portfolio-image");
          image.style.transform = "scale(1)";
        });
      });

      // Parallax effect for hero section
      window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector(".hero");
        if (hero) {
          hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
      });

      // Initialize typing animation
      setTimeout(() => {
        const typingElement = document.querySelector(".typing-text");
        if (typingElement) {
          typingElement.style.borderRight = "none";
        }
      }, 3000);

      // Add loading animation delay to elements
      document.querySelectorAll(".animate-on-scroll").forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
      });

      // Add glassmorphism effect to navbar on scroll
      window.addEventListener("scroll", () => {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 100) {
          navbar.style.background = "rgba(255, 255, 255, 0.9)";
          navbar.style.backdropFilter = "blur(15px)";
        } else {
          navbar.style.background = "rgba(255, 255, 255, 0.95)";
          navbar.style.backdropFilter = "blur(10px)";
        }
      });

      // Add smooth entrance animations
      window.addEventListener("load", () => {
        document.body.style.opacity = "1";
        document.body.style.transition = "opacity 0.5s ease-in-out";
      });

      // Performance optimization - lazy load animations
      const lazyAnimationObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.willChange = "transform, opacity";
          } else {
            entry.target.style.willChange = "auto";
          }
        });
      });

      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        lazyAnimationObserver.observe(el);
      });
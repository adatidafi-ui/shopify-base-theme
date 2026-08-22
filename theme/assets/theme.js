/*
  Theme JavaScript
  
  Core functionality:
  - Cart drawer toggle
  - Mobile menu toggle
  - Product variant selection
  - Smooth scroll interactions
*/

(function() {
  'use strict';
  
  // Cart Drawer Toggle
  function initCartDrawer() {
    const cartToggle = document.querySelector('[data-cart-toggle]');
    const cartDrawer = document.querySelector('[data-cart-drawer]');
    const cartClose = document.querySelector('[data-cart-close]');
    
    if (!cartToggle || !cartDrawer) return;
    
    function toggleCart() {
      cartDrawer.classList.toggle('is-open');
      document.body.style.overflow = cartDrawer.classList.contains('is-open') ? 'hidden' : '';
    }
    
    cartToggle.addEventListener('click', toggleCart);
    if (cartClose) cartClose.addEventListener('click', toggleCart);
    
    // Close on outside click
    cartDrawer.addEventListener('click', function(e) {
      if (e.target === this) toggleCart();
    });
  }
  
  // Mobile Menu Toggle
  function initMobileMenu() {
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const menu = document.querySelector('[data-mobile-menu]');
    const menuClose = document.querySelector('[data-menu-close]');
    
    if (!menuToggle || !menu) return;
    
    function toggleMenu() {
      menu.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', menu.classList.contains('is-open'));
      document.body.style.overflow = menu.classList.contains('is-open') ? 'hidden' : '';
    }
    
    menuToggle.addEventListener('click', toggleMenu);
    if (menuClose) menuClose.addEventListener('click', toggleMenu);
    
    // Close on link click
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', toggleMenu);
    });
  }
  
  // Accordion
  function initAccordion() {
    document.querySelectorAll('[data-accordion-trigger]').forEach(trigger => {
      trigger.addEventListener('click', function() {
        const panel = this.nextElementSibling;
        if (!panel) return;
        
        const isOpen = this.classList.contains('is-open');
        
        // Close all other panels (optional: remove for multiple open)
        document.querySelectorAll('[data-accordion-trigger].is-open').forEach(t => {
          if (t !== this) {
            t.classList.remove('is-open');
            t.nextElementSibling?.classList.remove('is-open');
          }
        });
        
        // Toggle current
        this.classList.toggle('is-open');
        panel.classList.toggle('is-open');
      });
    });
  }
  
  // Product Variant Selector
  function initVariantSelector() {
    const form = document.querySelector('[data-product-form]');
    if (!form) return;
    
    const options = form.querySelectorAll('[data-product-option]');
    
    options.forEach(option => {
      option.addEventListener('change', function() {
        // Trigger form update (actual variant logic handled server-side)
        form.dispatchEvent(new Event('variant-change', { bubbles: true }));
      });
    });
  }
  
  // Sticky Add to Cart (Mobile)
  function initStickyCart() {
    const productForm = document.querySelector('[data-product-form]');
    const stickyCart = document.querySelector('[data-sticky-cart]');
    
    if (!productForm || !stickyCart) return;
    
    function updateStickyCartVisibility() {
      const rect = productForm.getBoundingClientRect();
      const isVisible = rect.top < 0 || rect.bottom > window.innerHeight;
      stickyCart.style.display = isVisible ? 'block' : 'none';
    }
    
    window.addEventListener('scroll', updateStickyCartVisibility);
    updateStickyCartVisibility();
  }
  
  // Lazy Load Images
  function initLazyLoad() {
    if ('IntersectionObserver' in window) {
      const images = document.querySelectorAll('img[loading="lazy"]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.removeAttribute('loading');
            imageObserver.unobserve(img);
          }
        });
      });
      images.forEach(img => imageObserver.observe(img));
    }
  }
  
  // Initialize all
  document.addEventListener('DOMContentLoaded', function() {
    initCartDrawer();
    initMobileMenu();
    initAccordion();
    initVariantSelector();
    initStickyCart();
    initLazyLoad();
  });
})();

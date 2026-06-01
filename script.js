/**
 * Personal Portfolio Interactive JS
 * Challa Venu Teja - B.Tech CSE Graduate Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initHeaderScroll();
    initTypingAnimation();
    initSkillsFiltering();
    initProjectsFiltering();
    initModals();
    initActiveNavObserver();
    initPrintResume();
    initContactForm();
});

/* ==========================================================================
   THEME MANAGER (DARK / LIGHT MODE)
   ========================================================================== */
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else {
        const initialTheme = systemPrefersDark ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', initialTheme);
        updateThemeIcon(initialTheme);
    }
    
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('#theme-toggle i');
    if (theme === 'dark') {
        themeIcon.className = 'fa-solid fa-sun';
    } else {
        themeIcon.className = 'fa-solid fa-moon';
    }
}

/* ==========================================================================
   MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when links are clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/* ==========================================================================
   HEADER SCROLL DYNAMICS
   ========================================================================== */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* ==========================================================================
   TYPING ANIMATION
   ========================================================================== */
function initTypingAnimation() {
    const typedTextSpan = document.getElementById('typed-text');
    const textArray = ["TypeScript AI Chatbots.", "Python ML Predictors.", "Java Software Solutions.", "B.Tech CSE Projects."];
    const typingSpeed = 80;
    const erasingSpeed = 40;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;
    
    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingSpeed + 500);
        }
    }
    
    // Start typing animation with a short initial delay
    if (typedTextSpan) {
        setTimeout(type, 1000);
    }
}

/* ==========================================================================
   SKILLS FILTERING SYSTEM
   ========================================================================== */
function initSkillsFiltering() {
    const tabBtns = document.querySelectorAll('.skills-tabs .tab-btn');
    const skillCards = document.querySelectorAll('.skills-grid .skill-card');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state in tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-tab');
            
            skillCards.forEach(card => {
                const cardCategories = card.getAttribute('data-category').split(' ');
                
                if (category === 'all' || cardCategories.includes(category)) {
                    card.style.display = 'block';
                    // Trigger tiny entry transition
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* ==========================================================================
   PROJECTS FILTERING SYSTEM
   ========================================================================== */
function initProjectsFiltering() {
    const filterBtns = document.querySelectorAll('.projects-filter .filter-btn');
    const projectCards = document.querySelectorAll('.projects-grid .project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state in buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCategory.includes(filterValue)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* ==========================================================================
   POPUP MODALS (PROJECTS ONLY)
   ========================================================================== */
// Static JSON description databases for dynamic modals
const projectsData = {
    "1": {
        title: "NCERT AI Chat Bot",
        category: "AI / Chatbot Project",
        desc: "Developed an AI-based chatbot designed to provide customized educational support and answer complex NCERT school curriculum queries automatically.",
        features: [
            "TypeScript Architecture: Highly structured, strongly-typed coding codebase ensuring secure API connectors.",
            "AI Integration: Seamless question-answering pipelines querying NCERT data matrices.",
            "Response Optimization: Programmed conversational response handling interfaces to guarantee real-time outputs."
        ],
        tech: ["TypeScript", "AI / Chatbot", "Natural Language Processing", "API Systems"],
        github: "https://github.com/venuchalla2006-cmd/NCERT-AI-CHAT-BOT",
        live: null
    },
    "2": {
        title: "Employee Salary Prediction",
        category: "Machine Learning Project",
        desc: "Implemented a Python-based predictive analytics machine learning regression model designed to calculate accurate employee compensation structures based on dataset inputs.",
        features: [
            "Data Preprocessing: Automated cleaning of null values and data matrices scaling inside Jupyter Notebooks.",
            "Regression Curve Fit: fit linear/multivariate regression algorithms predicting candidate salaries.",
            "Prediction Accuracy: Rigorous model evaluations yielding a high predictive score of 94.2% on testing datasets partitions."
        ],
        tech: ["Python Scripting", "Machine Learning", "Data Preprocessing", "Supervised Regression Models"],
        github: "https://github.com/venuchalla2006-cmd/Employee_salary_prediction",
        live: null
    },
    "3": {
        title: "Weather Forecast Application",
        category: "Web Integration Project",
        desc: "Developed a weather forecasting web application displaying temperature and atmospheric indicators, connecting REST endpoints for live location weather reporting.",
        features: [
            "REST API Integration: Direct queries collecting weather forecast details from API systems.",
            "Lightweight JSON parsing: Translates weather vectors into clean temperature dashboard panels.",
            "Responsive Web layouts: Pure CSS variable structures formatting weather cards dynamically."
        ],
        tech: ["JavaScript (ES6+)", "REST API Fetch", "JSON Parsing", "HTML5 & CSS3"],
        github: "https://github.com/venuchalla2006-cmd/Weather_Forecast",
        live: null
    }
};

function initModals() {
    // Project Details Modal Elements
    const projectModal = document.getElementById('project-modal');
    const pDetailBtns = document.querySelectorAll('.btn-project-detail');
    
    // Common elements
    const closeBtns = document.querySelectorAll('.modal-close-btn');
    const backdrops = document.querySelectorAll('.modal-backdrop');
    
    // Open project modal
    pDetailBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-project');
            const data = projectsData[projectId];
            
            if (data) {
                document.getElementById('modal-project-category').textContent = data.category;
                document.getElementById('modal-project-title').textContent = data.title;
                document.getElementById('modal-project-full-desc').textContent = data.desc;
                
                // Load Features list
                const featuresList = document.getElementById('modal-project-features');
                featuresList.innerHTML = '';
                data.features.forEach(f => {
                    const li = document.createElement('li');
                    li.textContent = f;
                    featuresList.appendChild(li);
                });
                
                // Load Tech stack tags
                const techBox = document.getElementById('modal-project-tech');
                techBox.innerHTML = '';
                data.tech.forEach(t => {
                    const span = document.createElement('span');
                    span.className = 'tech-tag';
                    span.textContent = t;
                    techBox.appendChild(span);
                });
                
                // Inject links dynamically inside project details modal
                const githubLink = document.getElementById('modal-github-link');
                const liveLink = document.getElementById('modal-live-link');
                
                if (githubLink) githubLink.href = data.github;
                if (liveLink) {
                    if (data.live) {
                        liveLink.href = data.live;
                        liveLink.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> <span>Live Demo</span>`;
                        liveLink.style.display = 'inline-flex';
                    } else {
                        // Point to GitHub repository README since no live site is available
                        liveLink.href = data.github;
                        liveLink.innerHTML = `<i class="fa-brands fa-github"></i> <span>View Repository</span>`;
                        liveLink.style.display = 'inline-flex';
                    }
                }
                
                openModal(projectModal);
            }
        });
    });
    
    // Close Modal on Close button click
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            closeAllModals();
        });
    });
    
    // Close Modal on backdrop click
    backdrops.forEach(backdrop => {
        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) {
                closeAllModals();
            }
        });
    });
    
    // Close Modal on Escape key press
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}

function openModal(modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal-backdrop');
    modals.forEach(modal => {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = ''; // Resume scrolling
}

/* ==========================================================================
   ACTIVE LINK NAVIGATION TRACKING (INTERSECTION OBSERVER)
   ========================================================================== */
function initActiveNavObserver() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.35 // 35% of the section must be visible
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   RESUME PRINT & SAVER API SYSTEM
   ========================================================================== */
function initPrintResume() {
    const printBtn = document.getElementById('print-resume-btn');
    
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }
}

/* ==========================================================================
   CONTACT FORM HANDLER & TOAST NOTIFICATION
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('portfolio-contact-form');
    const toast = document.getElementById('success-toast');
    const toastCloseBtn = toast.querySelector('.toast-close-btn');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect Form Inputs
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value;
            
            // Basic check
            if (!name || !email || !subject || !message) return;
            
            // Visual feedback - disable submit button state
            const submitBtn = form.querySelector('.btn-submit');
            const origContent = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Connecting SMTP...</span>`;
            
            // Simulate secure submission pipeline
            setTimeout(() => {
                submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane fa-fade"></i> <span>Sending Message...</span>`;
                
                setTimeout(() => {
                    // Success triggers
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = origContent;
                    
                    // Clear inputs
                    form.reset();
                    
                    // Show custom beautiful success toast card alert
                    triggerToast("Message Dispatched!", `Thank you, ${name}. Your message has been sent successfully.`);
                }, 1000);
            }, 1200);
        });
    }
    
    // Toast close click handlers
    if (toastCloseBtn) {
        toastCloseBtn.addEventListener('click', () => {
            toast.classList.remove('open');
        });
    }
}

function triggerToast(title, message) {
    const toast = document.getElementById('success-toast');
    document.getElementById('toast-title').textContent = title;
    document.getElementById('toast-message').textContent = message;
    
    toast.classList.add('open');
    
    // Automatically close toast after 5 seconds
    setTimeout(() => {
        toast.classList.remove('open');
    }, 5000);
}

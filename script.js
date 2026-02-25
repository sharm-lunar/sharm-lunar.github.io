// Дополнительные анимации при скролле и эффекты
document.addEventListener('DOMContentLoaded', function() {
    
    // Показываем hero с анимацией
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1.5s ease';
    }
    
    // Инициализация всех анимаций
    initScrollAnimations();
    initHoverEffects();
    initParticleEffects();
    initSmoothScroll();
    initActiveNav();
    
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            observer.observe(section);
        });
        
        const contactElements = document.querySelectorAll('.contacts h2, .contacts-text, .social-link');
        contactElements.forEach(el => {
            observer.observe(el);
        });
    }
    
    function initHoverEffects() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            });
        });
        
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach((link, index) => {
            link.addEventListener('mouseenter', function() {
                createParticles(this);
                this.style.animation = 'none';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.animation = 'socialPulse 3s ease-in-out infinite, socialAppear 0.6s ease-out';
            });
        });
    }
    
    function createParticles(element) {
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const particle = document.createElement('span');
                particle.style.position = 'absolute';
                particle.style.width = '6px';
                particle.style.height = '6px';
                particle.style.background = `rgba(255, 255, 255, ${0.7 + Math.random() * 0.3})`;
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '1000';
                particle.style.boxShadow = '0 0 10px rgba(255,255,255,0.8)';
                
                const rect = element.getBoundingClientRect();
                const x = rect.left + rect.width / 2 + window.scrollX;
                const y = rect.top + rect.height / 2 + window.scrollY;
                
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                
                document.body.appendChild(particle);
                
                const angle = (i / 8) * Math.PI * 2 + Math.random() * 0.5;
                const velocity = 3 + Math.random() * 4;
                const vx = Math.cos(angle) * velocity;
                const vy = Math.sin(angle) * velocity;
                
                let posX = x;
                let posY = y;
                let opacity = 1;
                
                function animateParticle() {
                    posX += vx;
                    posY += vy;
                    opacity -= 0.02;
                    
                    particle.style.left = posX + 'px';
                    particle.style.top = posY + 'px';
                    particle.style.opacity = opacity;
                    particle.style.transform = `scale(${opacity})`;
                    
                    if (opacity > 0) {
                        requestAnimationFrame(animateParticle);
                    } else {
                        particle.remove();
                    }
                }
                
                requestAnimationFrame(animateParticle);
            }, i * 30);
        }
    }
    
    function initParticleEffects() {
        const contactsSection = document.querySelector('.contacts');
        if (contactsSection) {
            setInterval(() => {
                createFloatingParticle(contactsSection);
            }, 200);
        }
    }
    
    function createFloatingParticle(container) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '3px';
        particle.style.height = '3px';
        particle.style.background = 'rgba(255, 255, 255, 0.6)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';
        particle.style.boxShadow = '0 0 8px rgba(255,255,255,0.8)';
        
        const rect = container.getBoundingClientRect();
        const x = rect.left + Math.random() * rect.width + window.scrollX;
        const y = rect.top + rect.height + window.scrollY;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        document.body.appendChild(particle);
        
        let posY = y;
        let posX = x + (Math.random() - 0.5) * 30;
        let opacity = 0.6;
        const speed = 1 + Math.random() * 2;
        const drift = (Math.random() - 0.5) * 0.5;
        
        function animate() {
            posY -= speed;
            posX += drift;
            opacity -= 0.008;
            
            particle.style.top = posY + 'px';
            particle.style.left = posX + 'px';
            particle.style.opacity = opacity;
            particle.style.transform = `scale(${opacity})`;
            
            if (opacity > 0 && posY > rect.top + window.scrollY - 50) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    document.querySelectorAll('.nav a').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });
    }
    
    function initActiveNav() {
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('.section');
            const navLinks = document.querySelectorAll('.nav a');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
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
    
    const images = document.querySelectorAll('.portfolio-img');
    images.forEach(img => {
        const bgImage = window.getComputedStyle(img).backgroundImage;
        if (bgImage !== 'none') {
            const imgUrl = bgImage.slice(5, -2);
            const preloadImg = new Image();
            preloadImg.src = imgUrl;
        }
    });
});

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    
    setInterval(() => {
        if (Math.random() > 0.7) {
            const body = document.body;
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.background = 'rgba(139, 122, 107, 0.2)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = '-10px';
            
            document.body.appendChild(particle);
            
            let posY = -10;
            const speed = 1 + Math.random() * 3;
            
            function animate() {
                posY += speed;
                particle.style.top = posY + 'px';
                
                if (posY < window.innerHeight + 10) {
                    requestAnimationFrame(animate);
                } else {
                    particle.remove();
                }
            }
            
            requestAnimationFrame(animate);
        }
    }, 500);
});
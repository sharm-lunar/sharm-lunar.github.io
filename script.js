// ВАШИ РАБОТЫ С ПОДРОБНОЙ ИНФОРМАЦИЕЙ
const worksData = [
    // ========== КОНТЕЙНЕРНЫЕ СВЕЧИ (3 шт) ==========
    { 
        id: 1, 
        category: 'container-candles',
        title: 'КОНТЕЙНЕРНАЯ СВЕЧА', 
        description: '100% соевый воск', 
        volume: '50 мл',
        price: '250 ₽',
        material: 'Соевый воск, хлопковый фитиль',
        scent: 'Ваниль, корица',
        features: ['Натуральный', 'Ручная работа', 'Подарочная упаковка'],
        image: 'images/candle_1.JPG',
        imgClass: 'portfolio-img-4'
    },
    { 
        id: 2, 
        category: 'container-candles',
        title: 'КОНТЕЙНЕРНАЯ СВЕЧА', 
        description: '100% соевый воск', 
        volume: '190 мл',
        price: '550 ₽',
        material: 'Соевый воск, деревянный фитиль',
        scent: 'Апельсин, грейпфрут',
        features: ['Цитрус', 'Долгое горение', 'Хит'],
        image: 'images/candle_2.JPG',
        imgClass: 'portfolio-img-5'
    },
    { 
        id: 3, 
        category: 'container-candles',
        title: 'КОНТЕЙНЕРНАЯ СВЕЧА', 
        description: '100% соевый воск', 
        volume: '100 мл',
        price: '350 ₽',
        material: 'Соевый воск',
        scent: 'Лаванда, эвкалипт',
        features: ['Расслабление', 'Спа', 'Уют'],
        image: 'images/candle_3.JPG',
        imgClass: 'portfolio-img-6'
    },
    
    // ========== ФОРМОВЫЕ СВЕЧИ (5 шт) ==========
    { 
        id: 4, 
        category: 'molded-candles',
        title: 'Свеча "ВЛЮБЛЕННЫЕ"', 
        description: '100% соевый воск', 
        price: '350 ₽',
        material: 'Соевый воск',
        volume: '70 г',
        scent: 'Роза, пион',
        features: ['Романтика', 'Подарок', '14 февраля'],
        image: 'images/Candle_10.JPG',
        imgClass: 'portfolio-img-10'
    },
    { 
        id: 5, 
        category: 'molded-candles',
        title: 'Свеча "ГАЙЯ"', 
        description: '100% соевый воск', 
        price: '550 ₽',
        material: 'Соевый воск',
        volume: '120 г',
        scent: 'Сандал, пачули',
        features: ['Минимализм', 'Интерьер', 'Глубокий аромат'],
        image: 'images/Candle_11.png',
        imgClass: 'portfolio-img-11'
    },
    { 
        id: 6, 
        category: 'molded-candles',
        title: 'Свеча "УСТРИЦА"', 
        description: '100% соевый воск', 
        price: '500 ₽',
        material: 'Соевый воск',
        volume: '90 г',
        scent: 'Морской бриз',
        features: ['Морская', 'Декоративная', 'Уникальная'],
        image: 'images/Candle_12.JPG',
        imgClass: 'portfolio-img-12'
    },
    { 
        id: 13, 
        category: 'molded-candles',
        title: 'Свеча "ЗЕФИРКА"', 
        description: '100% соевый воск', 
        price: '250 ₽',
        material: 'Соевый воск',
        volume: '80 г',
        scent: 'Сладкий, ванильный',
        features: ['Нежная', 'Сладкий аромат', 'Подарок'],
        image: 'images/Candle_4.JPG',
        imgClass: 'portfolio-img-13'
    },
    { 
        id: 17, 
        category: 'molded-candles',
        title: 'Свеча "КРУАССАН"', 
        description: '100% соевый воск', 
        price: '300 ₽',
        material: 'Соевый воск',
        volume: '90 г',
        scent: 'Сдоба, ваниль',
        features: ['Выпечка', 'Уют', 'Подарок'],
        image: 'images/Candle_5.JPG',
        imgClass: 'portfolio-img-17'
    },
    
    // ========== ПОДСТАВКИ (5 шт) ==========
    { 
        id: 7, 
        category: 'stands',
        title: 'Подставка "СЕРДЦЕ"', 
        description: 'Гипс, ручная работа', 
        price: '250 ₽',
        material: 'Гипс',
        volume: '10x10 см',
        scent: 'Без аромата',
        features: ['Романтика', 'Подарок', 'Интерьер'],
        image: 'images/heart.JPG',
        imgClass: 'portfolio-img-1'
    },
    { 
        id: 8, 
        category: 'stands',
        title: 'Подставка "ЛИСТ ГИНКО"', 
        description: 'Гипс, ручная работа', 
        price: '300 ₽',
        material: 'Гипс',
        volume: '12x8 см',
        scent: 'Без аромата',
        features: ['Природа', 'Минимализм', 'Текстура'],
        image: 'images/footstand.png',
        imgClass: 'portfolio-img-2'
    },
    { 
        id: 9, 
        category: 'stands',
        title: 'Подставка "ЧЕРЕПАХА"', 
        description: 'Гипс, ручная работа', 
        price: '350 ₽',
        material: 'Гипс',
        volume: '11x9 см',
        scent: 'Без аромата',
        features: ['Символ', 'Устойчивая', 'Детализация'],
        image: 'images/tortless.JPG',
        imgClass: 'portfolio-img-3'
    },
    { 
        id: 14, 
        category: 'stands',
        title: 'Подставка "BUBBLE"', 
        description: 'Гипс, ручная работа', 
        price: '300 ₽',
        material: 'Гипс',
        volume: '9x9 см',
        scent: 'Без аромата',
        features: ['Пузырьки', 'Современный дизайн', 'Интерьер'],
        image: 'images/Bubble.png',
        imgClass: 'portfolio-img-14'
    },
    { 
        id: 19, 
        category: 'stands',
        title: 'Подставка "ОБЛАКО"', 
        description: 'Гипс, ручная работа', 
        price: '450 ₽',
        material: 'Гипс',
        volume: '12x6x4 см',
        scent: 'Без аромата',
        features: ['Невесомость', 'Мечты', 'Интерьер'],
        image: 'images/Cloud.JPG',
        imgClass: 'portfolio-img-19'
    },
    
    // ========== ШКАТУЛКИ (4 шт) ==========
    { 
        id: 10, 
        category: 'boxes',
        title: 'Шкатулка', 
        description: 'Гипс, ручная работа', 
        price: '250 ₽',
        material: 'Гипс',
        volume: '8x8x5 см',
        scent: 'Без аромата',
        features: ['Компактная', 'Для мелочей', 'С крышкой'],
        image: 'images/Box_1.JPG',
        imgClass: 'portfolio-img-7'
    },
    { 
        id: 11, 
        category: 'boxes',
        title: 'Шкатулка с сердечками', 
        description: 'Гипс, ручная работа', 
        price: '350 ₽',
        material: 'Гипс',
        volume: '10x10x6 см',
        scent: 'Без аромата',
        features: ['Романтика', 'Для украшений', 'Подарок'],
        image: 'images/Box_2.JPG',
        imgClass: 'portfolio-img-8'
    },
    { 
        id: 12, 
        category: 'boxes',
        title: 'Шкатулка "СЕРДЦЕ"', 
        description: 'Гипс, ручная работа', 
        price: '250 ₽',
        material: 'Гипс',
        volume: '9x9x5 см',
        scent: 'Без аромата',
        features: ['Форма сердца', 'Особые мелочи', 'Ручная работа'],
        image: 'images/Box_3.JPG',
        imgClass: 'portfolio-img-9'
    },
    { 
        id: 18, 
        category: 'boxes',
        title: 'Шкатулка "ТЫКВА"', 
        description: 'Гипс, ручная работа', 
        price: '400 ₽',
        material: 'Гипс',
        volume: '10x10x8 см',
        scent: 'Без аромата',
        features: ['Осенняя', 'Тыква', 'Хэллоуин'],
        image: 'images/Box_4.JPG',
        imgClass: 'portfolio-img-18'
    },
    
    // ========== ВАЗЫ (3 шт) ==========
    { 
        id: 20, 
        category: 'vases',
        title: 'Ваза "МОДУЛЬНАЯ"', 
        description: 'Гипс, ручная работа', 
        price: '450 ₽',
        material: 'Гипс',
        volume: '15x8x8 см',
        scent: 'Без аромата',
        features: ['Модульная', 'Современная', 'Минимализм'],
        image: 'images/Vase.JPG',
        imgClass: 'portfolio-img-20'
    },
    { 
        id: 21, 
        category: 'vases',
        title: 'Ваза "СФЕРА"', 
        description: 'Гипс, ручная работа', 
        price: '450 ₽',
        material: 'Гипс',
        volume: '12x12x12 см',
        scent: 'Без аромата',
        features: ['Шар', 'Геометрия', 'Интерьер'],
        image: 'images/Vase_2.JPG',
        imgClass: 'portfolio-img-21'
    },
    { 
        id: 22, 
        category: 'vases',
        title: 'Ваза "РЕЛЬЕФНАЯ"', 
        description: 'Гипс, ручная работа', 
        price: '350 ₽',
        material: 'Гипс',
        volume: '14x10x10 см',
        scent: 'Без аромата',
        features: ['Рельеф', 'Текстура', 'Узор'],
        image: 'images/Vase_3.JPG',
        imgClass: 'portfolio-img-22'
    },
    
    // ========== КАШПО (2 шт) ==========
    { 
        id: 15, 
        category: 'planters',
        title: 'Кашпо "РАКУШКА СПИРАЛЬ"', 
        description: 'Гипс, ручная работа', 
        price: '450 ₽',
        material: 'Гипс',
        volume: '12x8x6 см',
        scent: 'Без аромата',
        features: ['Морской стиль', 'Для цветов', 'Интерьер'],
        image: 'images/Cashpo_1.JPG',
        imgClass: 'portfolio-img-15'
    },
    { 
        id: 16, 
        category: 'planters',
        title: 'Кашпо "РАКУШКА КОРАЛЛ"', 
        description: 'Гипс, ручная работа', 
        price: '450 ₽',
        material: 'Гипс',
        volume: '14x10x7 см',
        scent: 'Без аромата',
        features: ['Коралловый', 'Морской стиль', 'Интерьер'],
        image: 'images/Cashpo_2.JPG',
        imgClass: 'portfolio-img-16'
    }
];

// ИНИЦИАЛИЗАЦИЯ
document.addEventListener('DOMContentLoaded', function() {
    renderWorks('all');
    initFilters();
    initModal();
    initScrollAnimations();
    initHoverEffects();
    initSmoothScroll();
    initActiveNav();
    initParticleEffects();
    initOrderButton();
});

// ОТРИСОВКА РАБОТ (БЕЗ ОБЪЕМА НА ГЛАВНОЙ)
function renderWorks(category) {
    const worksGrid = document.getElementById('works-grid');
    if (!worksGrid) return;
    
    worksGrid.innerHTML = '';
    
    let filteredWorks = worksData;
    if (category !== 'all') {
        filteredWorks = worksData.filter(work => work.category === category);
    }
    
    filteredWorks.forEach((work, index) => {
        const workItem = document.createElement('div');
        workItem.className = 'portfolio-item';
        workItem.setAttribute('data-id', work.id);
        workItem.setAttribute('data-category', work.category);
        workItem.style.setProperty('--item-index', index + 1);
        
        workItem.innerHTML = `
            <div class="portfolio-img ${work.imgClass}" style="background-image: url('${work.image}')"></div>
            <div class="portfolio-info">
                <h3>${work.title}</h3>
                <p class="description">${work.description}</p>
                <p class="price">${work.price}</p>
            </div>
            <span class="hover-btn">ПОДРОБНЕЕ</span>
        `;
        
        workItem.addEventListener('click', () => openModal(work));
        worksGrid.appendChild(workItem);
    });
}

// ФИЛЬТРЫ
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            renderWorks(filterValue);
        });
    });
}

// МОДАЛЬНОЕ ОКНО
function initModal() {
    const modal = document.getElementById('workModal');
    const closeBtn = document.querySelector('.close-modal');
    
    window.openModal = function(work) {
        document.getElementById('modalImage').style.backgroundImage = `url('${work.image}')`;
        document.getElementById('modalTitle').textContent = work.title;
        document.getElementById('modalDescription').textContent = work.description;
        
        document.getElementById('modalMaterial').textContent = work.material || 'Ручная работа';
        document.getElementById('modalVolume').textContent = work.volume || '—';
        document.getElementById('modalScent').textContent = work.scent || 'Без аромата';
        
        const featuresContainer = document.getElementById('modalFeatures');
        featuresContainer.innerHTML = '';
        if (work.features && work.features.length > 0) {
            work.features.forEach(feature => {
                const tag = document.createElement('span');
                tag.textContent = feature;
                featuresContainer.appendChild(tag);
            });
        }
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

function openModal(work) {
    window.openModal(work);
}

// КНОПКА ЗАКАЗА ЧЕРЕЗ TELEGRAM
function initOrderButton() {
    const orderBtn = document.getElementById('orderNowBtn');
    if (orderBtn) {
        orderBtn.addEventListener('click', function() {
            const modalTitle = document.getElementById('modalTitle').textContent;
            const message = encodeURIComponent(`Здравствуйте! Хочу заказать: ${modalTitle}`);
            window.open(`https://t.me/charm_lunar?text=${message}`, '_blank');
        });
    }
}

// АНИМАЦИИ ПРИ СКРОЛЛЕ
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

// ЭФФЕКТЫ ПРИ НАВЕДЕНИИ
function initHoverEffects() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
    
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            createParticles(this);
        });
    });
}

// ЧАСТИЦЫ ДЛЯ СОЦСЕТЕЙ
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

// ФОНТАН ЧАСТИЦ В КОНТАКТАХ
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

// ПЛАВНЫЙ СКРОЛЛ
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

// АКТИВНАЯ ССЫЛКА В НАВИГАЦИИ
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

// ДОПОЛНИТЕЛЬНЫЕ АНИМАЦИИ
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    
    setInterval(() => {
        if (Math.random() > 0.7) {
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

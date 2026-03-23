/* ВАШИ РАБОТЫ С ПОДРОБНОЙ ИНФОРМАЦИЕЙ */
const worksData = [
    // ========== КОНТЕЙНЕРНЫЕ СВЕЧИ (4 шт) ==========
    { 
        id: 1, 
        category: 'container-candles',
        title: 'КОНТЕЙНЕРНАЯ СВЕЧА', 
        volume: '50 мл',
        price: '250 ₽',
        material: 'Соевый воск, хлопковый | деревянный фитиль',
        scent: 'В ассортименте',
        features: ['Расслабление', 'Спа', 'Уют'],
        image: 'images/candle_1.JPG'
    },
    { 
        id: 2, 
        category: 'container-candles',
        title: 'КОНТЕЙНЕРНАЯ СВЕЧА', 
        volume: '190 мл',
        price: '550 ₽',
        material: 'Соевый воск, хлопковый | деревянный фитиль',
        scent: 'В ассортименте',
        features: ['Расслабление', 'Спа', 'Уют'],
        image: 'images/candle_2.JPG'
    },
    { 
        id: 3, 
        category: 'container-candles',
        title: 'КОНТЕЙНЕРНАЯ СВЕЧА', 
        volume: '100 мл',
        price: '350 ₽',
        material: 'Соевый воск, хлопковый | деревянный фитиль',
        scent: 'В ассортименте',
        features: ['Расслабление', 'Спа', 'Уют'],
        image: 'images/candle_3.JPG'
    },
    { 
        id: 6, 
        category: 'container-candles',
        title: 'Свеча "УСТРИЦА"', 
        price: '500 ₽',
        material: 'Соевый воск, хлопковый фитиль',
        volume: '90 г',
        scent: 'В ассортименте',
        features: ['Расслабление', 'Спа', 'Уют'],
        image: 'images/Candle_12.JPG'
    },
    
    // ========== ФОРМОВЫЕ СВЕЧИ (4 шт) ==========
    { 
        id: 4, 
        category: 'molded-candles',
        title: 'Свеча "ВЛЮБЛЕННЫЕ"', 
        price: '350 ₽',
        material: 'Соевый воск',
        volume: '10x7 см',
        scent: 'Без аромата',
        features: ['Романтика', 'Подарок', 'Декор', 'Уют'],
        image: 'images/Candle_10.JPG'
    },
    { 
        id: 5, 
        category: 'molded-candles',
        title: 'Свеча "ГАЙЯ"', 
        price: '550 ₽',
        material: 'Соевый воск',
        volume: '13x8 см',
        scent: 'Без аромата',
        features: ['Романтика', 'Подарок', 'Декор', 'Уют'],
        image: 'images/Candle_11.png'
    },
    { 
        id: 13, 
        category: 'molded-candles',
        title: 'Свеча "ЗЕФИРКА"', 
        price: '250 ₽',
        material: 'Соевый воск',
        volume: '4x6 см',
        scent: 'Без аромата',
        features: ['Романтика', 'Подарок', 'Декор', 'Уют'],
        image: 'images/Candle_4.JPG'
    },
    { 
        id: 17, 
        category: 'molded-candles',
        title: 'Свеча "КРУАССАН"', 
        price: '300 ₽',
        material: 'Соевый воск',
        volume: '4,5x9 см',
        scent: 'Без аромата',
        features: ['Романтика', 'Подарок', 'Декор', 'Уют'],
        image: 'images/Candle_5.JPG'
    },
    
    // ========== ПОДСТАВКИ (5 шт) ==========
    { 
        id: 7, 
        category: 'stands',
        title: 'Подставка "СЕРДЦЕ"', 
        price: '250 ₽',
        material: 'Гипс',
        volume: '10x10 см',
        scent: 'Без аромата',
        features: ['Романтика', 'Подарок', 'Интерьер'],
        image: 'images/heart.JPG'
    },
    { 
        id: 8, 
        category: 'stands',
        title: 'Подставка "ЛИСТ ГИНКО"', 
        price: '300 ₽',
        material: 'Гипс',
        volume: '12x8 см',
        scent: 'Без аромата',
        features: ['Природа', 'Минимализм', 'Текстура'],
        image: 'images/footstand.png'
    },
    { 
        id: 9, 
        category: 'stands',
        title: 'Подставка "ЧЕРЕПАХА"', 
        price: '350 ₽',
        material: 'Гипс',
        volume: '11x9 см',
        scent: 'Без аромата',
        features: ['Символ', 'Устойчивая', 'Детализация'],
        image: 'images/tortless.JPG'
    },
    { 
        id: 14, 
        category: 'stands',
        title: 'Подставка "BUBBLE"', 
        price: '300 ₽',
        material: 'Гипс',
        volume: '9x9 см',
        scent: 'Без аромата',
        features: ['Пузырьки', 'Современный дизайн', 'Интерьер'],
        image: 'images/Bubble.png'
    },
    { 
        id: 19, 
        category: 'stands',
        title: 'Подставка "ОБЛАКО"', 
        price: '450 ₽',
        material: 'Гипс',
        volume: '12x6x4 см',
        scent: 'Без аромата',
        features: ['Невесомость', 'Мечты', 'Интерьер'],
        image: 'images/Cloud.JPG'
    },
    
    // ========== ШКАТУЛКИ (4 шт) ==========
    { 
        id: 10, 
        category: 'boxes',
        title: 'Шкатулка', 
        price: '250 ₽',
        material: 'Гипс',
        volume: '8x8x5 см',
        scent: 'Без аромата',
        features: ['Компактная', 'Для мелочей', 'С крышкой'],
        image: 'images/Box_1.JPG'
    },
    { 
        id: 11, 
        category: 'boxes',
        title: 'Шкатулка с сердечками', 
        price: '350 ₽',
        material: 'Гипс',
        volume: '10x10x6 см',
        scent: 'Без аромата',
        features: ['Романтика', 'Для украшений', 'Подарок'],
        image: 'images/Box_2.JPG'
    },
    { 
        id: 12, 
        category: 'boxes',
        title: 'Шкатулка "СЕРДЦЕ"', 
        price: '250 ₽',
        material: 'Гипс',
        volume: '9x9x5 см',
        scent: 'Без аромата',
        features: ['Форма сердца', 'Особые мелочи', 'Ручная работа'],
        image: 'images/Box_3.JPG'
    },
    { 
        id: 18, 
        category: 'boxes',
        title: 'Шкатулка "ТЫКВА"', 
        price: '400 ₽',
        material: 'Гипс',
        volume: '10x10x8 см',
        scent: 'Без аромата',
        features: ['Осенняя', 'Тыква', 'Хэллоуин'],
        image: 'images/Box_4.JPG'
    },
    
    // ========== ВАЗЫ (3 шт) ==========
    { 
        id: 20, 
        category: 'vases',
        title: 'Ваза "МОДУЛЬНАЯ"', 
        price: '450 ₽',
        material: 'Гипс',
        volume: '15x8x8 см',
        scent: 'Без аромата',
        features: ['Модульная', 'Современная', 'Минимализм'],
        image: 'images/Vase.JPG'
    },
    { 
        id: 21, 
        category: 'vases',
        title: 'Ваза "СФЕРА"', 
        price: '450 ₽',
        material: 'Гипс',
        volume: '12x12x12 см',
        scent: 'Без аромата',
        features: ['Шар', 'Геометрия', 'Интерьер'],
        image: 'images/Vase_2.JPG'
    },
    { 
        id: 22, 
        category: 'vases',
        title: 'Ваза "РЕЛЬЕФНАЯ"', 
        price: '350 ₽',
        material: 'Гипс',
        volume: '14x10x10 см',
        scent: 'Без аромата',
        features: ['Рельеф', 'Текстура', 'Узор'],
        image: 'images/Vase_3.JPG'
    },
    
    // ========== КАШПО (2 шт) ==========
    { 
        id: 15, 
        category: 'planters',
        title: 'Кашпо "РАКУШКА СПИРАЛЬ"', 
        price: '450 ₽',
        material: 'Гипс',
        volume: '12x8x6 см',
        scent: 'Без аромата',
        features: ['Морской стиль', 'Для цветов', 'Интерьер'],
        image: 'images/Cashpo_1.JPG'
    },
    { 
        id: 16, 
        category: 'planters',
        title: 'Кашпо "РАКУШКА КОРАЛЛ"', 
        price: '450 ₽',
        material: 'Гипс',
        volume: '14x10x7 см',
        scent: 'Без аромата',
        features: ['Коралловый', 'Морской стиль', 'Интерьер'],
        image: 'images/Cashpo_2.JPG'
    }
];

// ИНИЦИАЛИЗАЦИЯ ПОСЛЕ ПОСТРОЕНИЯ DOM
document.addEventListener('DOMContentLoaded', function() {
    const worksGrid = document.getElementById('works-grid');
    
    if (worksGrid) {
        renderWorks(worksData);
    }
    
    initFilters();
    initModal();
    initOrderButton();
    initSmoothScroll();
    initActiveNav();
    
    // Показываем все секции сразу
    setTimeout(function() {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('visible');
        });
    }, 100);
});

// УНИВЕРСАЛЬНАЯ ФУНКЦИЯ РЕНДЕРА
function renderWorks(worksToRender) {
    const worksGrid = document.getElementById('works-grid');
    if (!worksGrid) return;
    
    worksGrid.innerHTML = '';
    
    worksToRender.forEach((work) => {
        const workItem = document.createElement('div');
        workItem.className = 'portfolio-item';
        workItem.setAttribute('data-id', work.id);
        workItem.setAttribute('data-category', work.category);
        
        workItem.innerHTML = `
            <div class="portfolio-img" style="background-image: url('${work.image}')"></div>
            <div class="portfolio-info">
                <h3>${work.title}</h3>
                <p class="price">${work.price}</p>
            </div>
            <span class="hover-btn">ПОДРОБНЕЕ</span>
        `;
        
        workItem.addEventListener('click', function() {
            openModal(work);
        });
        
        worksGrid.appendChild(workItem);
    });
}

// ФИЛЬТРАЦИЯ РАБОТ
function filterWorks(category) {
    if (category === 'all') {
        renderWorks(worksData);
    } else {
        const filteredWorks = worksData.filter(work => work.category === category);
        renderWorks(filteredWorks);
    }
}

// ИНИЦИАЛИЗАЦИЯ ФИЛЬТРОВ
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            filterWorks(filterValue);
        });
    });
}

// ОТКРЫТИЕ МОДАЛЬНОГО ОКНА
function openModal(work) {
    const modal = document.getElementById('workModal');
    const modalImg = document.getElementById('modalImage');
    const volumeLabel = document.getElementById('volumeLabel');
    
    if (modalImg) {
        modalImg.src = work.image;
        modalImg.alt = work.title;
    }
    
    document.getElementById('modalTitle').textContent = work.title;
    document.getElementById('modalMaterial').textContent = work.material || 'Ручная работа';
    
    // Меняем label в зависимости от категории
    if (volumeLabel) {
        volumeLabel.textContent = work.category === 'container-candles' ? 'Объем:' : 'Размер:';
    }
    
    document.getElementById('modalVolume').textContent = work.volume || '—';
    document.getElementById('modalScent').textContent = work.scent || 'Без аромата';
    document.getElementById('modalPrice').textContent = work.price || '—';
    
    // Заполняем особенности
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
}

// ИНИЦИАЛИЗАЦИЯ МОДАЛЬНОГО ОКНА
function initModal() {
    const modal = document.getElementById('workModal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (!modal || !closeBtn) return;
    
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

// КНОПКА ЗАКАЗА
function initOrderButton() {
    const orderBtn = document.getElementById('orderNowBtn');
    if (orderBtn) {
        orderBtn.addEventListener('click', function() {
            const modalTitle = document.getElementById('modalTitle').textContent;
            const modalPrice = document.getElementById('modalPrice').textContent;
            const message = encodeURIComponent(`Здравствуйте! Хочу заказать: ${modalTitle} (${modalPrice})`);
            window.open(`https://t.me/charm_lunar?text=${message}`, '_blank');
        });
    }
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
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
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

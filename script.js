document.addEventListener('DOMContentLoaded', () => {
    // --- Menu Logic (no changes) ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.getElementById('navbar');
    
    // --- Automatic Background Transitions ---
    const heroSection = document.querySelector('.hero-section');
    
    const backgrounds = [
        'AHome.png',
        'nanda-devi2.jpg',
        'kangchenjunga3.jpg'
    ];
    
    let currentBgIndex = 0;
    let bgInterval;
    const bgDuration = 4000; // 8 seconds per background
    
    function changeBackground() {
        heroSection.style.backgroundImage = `url('images/${backgrounds[currentBgIndex]}')`;
        currentBgIndex = (currentBgIndex + 2) % backgrounds.length;
    }
    
    function startBackgroundTransitions() {
        changeBackground(); // Initial change
        bgInterval = setInterval(changeBackground, bgDuration);
    }
    
    function stopBackgroundTransitions() {
        if (bgInterval) {
            clearInterval(bgInterval);
        }
    }
    
    // Start automatic transitions
    startBackgroundTransitions();
    
    // Pause transitions when user is interacting with the page
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopBackgroundTransitions();
        } else {
            startBackgroundTransitions();
        }
    });
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Dynamic Peaks Feature with Automatic Slideshow ---

    const peaks = [
        {
            name: 'Mount Everest',
            height: '8,848m',
            description: "The world's highest peak.",
            imageUrls: ['images/everest1.jpg', 'images/everest2.jpg', 'images/everest3.jpg'],
            altText: 'A breathtaking view of Mount Everest.',
            region: 'Nepal',
            coordinates: '27°59\'17"N 86°55\'31"E',
            firstAscent: '1953',
            difficulty: 'Extreme',
            bestSeason: 'Spring (Apr-May)',
            detailedDescription: 'Mount Everest, known as Sagarmatha in Nepal and Chomolungma in Tibet, is Earth\'s highest mountain above sea level. Located in the Mahalangur Himal sub-range of the Himalayas, it stands at 8,848 meters (29,029 feet). The mountain was first summited by Sir Edmund Hillary and Tenzing Norgay in 1953. Everest presents extreme challenges including altitude sickness, harsh weather, and technical climbing sections like the Hillary Step.',
            mapPosition: { x: 60, y: 40 }
        },
        {
            name: 'K2',
            height: '8,611m',
            description: 'The savage mountain.',
            imageUrls: ['images/K2_1.jpg', 'images/K2_2.jpg', 'images/K2_3.jpg'],
            altText: 'The imposing and difficult K2 mountain.',
            region: 'Pakistan',
            coordinates: '35°52\'57"N 76°30\'48"E',
            firstAscent: '1954',
            difficulty: 'Extreme',
            bestSeason: 'Summer (Jul-Aug)',
            detailedDescription: 'K2, also known as Mount Godwin-Austen or Chhogori, is the second-highest mountain on Earth at 8,611 meters (28,251 feet). Known as "The Savage Mountain" due to its extreme difficulty and high fatality rate, K2 is considered more challenging than Everest. It was first summited by Italian climbers Lino Lacedelli and Achille Compagnoni in 1954. The mountain features steep, exposed ridges and unpredictable weather.',
            mapPosition: { x: 25, y: 35 }
        },
        {
            name: 'Kangchenjunga',
            height: '8,586m',
            description: 'The five treasures of snow.',
            imageUrls: ['images/kangchenjunga1.jpg', 'images/kangchenjunga2.jpg', 'images/kangchenjunga3.jpg'],
            altText: 'The five peaks of Kangchenjunga at sunrise.',
            region: 'Nepal',
            coordinates: '27°42\'09"N 88°08\'54"E',
            firstAscent: '1955',
            difficulty: 'Very Difficult',
            bestSeason: 'Spring (Apr-May)',
            detailedDescription: 'Kangchenjunga is the third-highest mountain in the world at 8,586 meters (28,169 feet). Its name means "The Five Treasures of Snow" in Tibetan, referring to its five peaks. The mountain was first summited by Joe Brown and George Band in 1955. Kangchenjunga is known for its remote location, challenging approach, and the spiritual significance it holds for local communities.',
            mapPosition: { x: 75, y: 45 }
        },
        {
            name: 'Lhotse',
            height: '8,516m',
            description: 'The south peak.',
            imageUrls: ['images/Lhotse1.jpg', 'images/Lhotse2.jpg', 'images/Lhotse3.jpg'],
            altText: 'Lhotse peak standing tall next to Everest.',
            region: 'Nepal',
            coordinates: '27°57\'42"N 86°55\'59"E',
            firstAscent: '1956',
            difficulty: 'Very Difficult',
            bestSeason: 'Spring (Apr-May)',
            detailedDescription: 'Lhotse is the fourth-highest mountain in the world at 8,516 meters (27,940 feet). Its name means "South Peak" in Tibetan, as it lies south of Mount Everest. Lhotse was first summited by Swiss climbers Fritz Luchsinger and Ernst Reiss in 1956. The mountain is connected to Everest via the South Col and features one of the steepest faces in the world.',
            mapPosition: { x: 65, y: 42 }
        },
        {
            name: 'Nanda Devi',
            height: '7,816m',
            description: 'India\'s highest peak.',
            imageUrls: ['images/nanda-devi1.jpg', 'images/nanda-devi2.jpg', 'images/nanda-devi3.jpg'],
            altText: 'The majestic Nanda Devi peak under a clear blue sky.',
            region: 'India',
            coordinates: '30°22\'33"N 79°58\'15"E',
            firstAscent: '1936',
            difficulty: 'Difficult',
            bestSeason: 'Autumn (Sep-Oct)',
            detailedDescription: 'Nanda Devi is India\'s second-highest mountain and the highest located entirely within India at 7,816 meters (25,643 feet). The mountain was first summited by British climbers Bill Tilman and Noel Odell in 1936. Nanda Devi is surrounded by a ring of peaks, creating a sanctuary that was closed to expeditions for environmental protection from 1983 to 2014.',
            mapPosition: { x: 45, y: 55 }
        },
        {
            name: 'Kamet',
            height: '7,756m',
            description: 'A giant near the Tibetan plateau.',
            imageUrls: ['images/kamet1.jpg', 'images/kamet2.jpg', 'images/kamet3.jpg'],
            altText: 'The formidable Kamet peak viewed from a distance.',
            region: 'India',
            coordinates: '30°55\'12"N 79°35\'30"E',
            firstAscent: '1931',
            difficulty: 'Difficult',
            bestSeason: 'Summer (Jun-Jul)',
            detailedDescription: 'Kamet is the second-highest mountain in India at 7,756 meters (25,446 feet). It was the highest peak climbed until 1931 when it was summited by British climbers Frank Smythe and Eric Shipton. Kamet is located near the Tibetan border and features a massive pyramid-shaped peak with extensive glaciers. The mountain is known for its challenging approach and technical climbing sections.',
            mapPosition: { x: 50, y: 60 }
        }
    ];

    const peaksGrid = document.getElementById('peaks-grid');
    let slideshowTimers = {};

    function changeSlide(card) {
        const peakName = card.dataset.peakName;
        const peakData = peaks.find(p => p.name === peakName);
        if (!peakData) return;

        const imageEl = card.querySelector('img');
        let currentIndex = parseInt(imageEl.dataset.currentIndex, 10);
        const totalImages = peakData.imageUrls.length;

        currentIndex = (currentIndex + 1) % totalImages;

        imageEl.src = peakData.imageUrls[currentIndex];
        imageEl.dataset.currentIndex = currentIndex;
        // The lines that updated the counter text have been removed from this function
    }

    function startSlideshow(card) {
        const peakName = card.dataset.peakName;
        slideshowTimers[peakName] = setInterval(() => {
            changeSlide(card);
        }, 3000);
    }

    function stopSlideshow(card) {
        const peakName = card.dataset.peakName;
        if (slideshowTimers[peakName]) {
            clearInterval(slideshowTimers[peakName]);
        }
    }

    function renderPeaks(peakArray) {
        peaksGrid.innerHTML = '';
        Object.values(slideshowTimers).forEach(clearInterval);
        slideshowTimers = {};

        peakArray.forEach(peak => {
            const card = document.createElement('div');
            card.className = 'peak-card';
            card.dataset.peakName = peak.name;
            card.innerHTML = `
                <div class="image-container">
                    <img src="${peak.imageUrls[0]}" alt="${peak.altText}" data-current-index="0">
                </div>
                <div class="peak-info">
                    <h4>${peak.name}</h4>
                    <p>${peak.height} - ${peak.description}</p>
                    <button class="explore-btn">Click to Explore</button>
                </div>
            `;
            
            // Add click event to the entire card
            card.addEventListener('click', () => {
                showPeakModal(peak);
            });
            
            peaksGrid.appendChild(card);
            startSlideshow(card);
        });
    }

    // --- Event Handlers ---
    peaksGrid.addEventListener('mouseenter', (e) => {
        if (e.target.classList.contains('peak-card')) {
            stopSlideshow(e.target);
        }
    }, true);

    peaksGrid.addEventListener('mouseleave', (e) => {
        if (e.target.classList.contains('peak-card')) {
            startSlideshow(e.target);
        }
    }, true);

    // --- Filter button logic ---
    const filterButtons = document.querySelectorAll('.filters .btn');
    const peaksByRegion = Object.groupBy(peaks, ({ region }) => region);
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const filter = e.target.dataset.filter;
            if (filter === 'all') {
                renderPeaks(peaks);
            } else {
                renderPeaks(peaksByRegion[filter] || []);
            }
        });
    });

    // --- Interactive Map ---
    const mapContainer = document.getElementById('himalayan-map');
    
    function createInteractiveMap() {
        peaks.forEach(peak => {
            const mountainMarker = document.createElement('div');
            mountainMarker.className = 'map-mountain';
            mountainMarker.style.left = `${peak.mapPosition.x}%`;
            mountainMarker.style.top = `${peak.mapPosition.y}%`;
            mountainMarker.textContent = peak.name.split(' ')[0];
            mountainMarker.dataset.peakName = peak.name;
            
            mountainMarker.addEventListener('click', () => {
                showPeakModal(peak);
            });
            
            mapContainer.appendChild(mountainMarker);
        });
    }

    // --- Modal Functionality ---
    const modal = document.getElementById('peak-modal');
    const closeModal = document.getElementById('close-modal');
    
    function showPeakModal(peak) {
        document.getElementById('modal-title').textContent = peak.name;
        document.getElementById('modal-height').textContent = peak.height;
        document.getElementById('modal-location').textContent = peak.region;
        document.getElementById('modal-first-ascent').textContent = peak.firstAscent;
        document.getElementById('modal-difficulty').textContent = peak.difficulty;
        document.getElementById('modal-coordinates').textContent = peak.coordinates;
        document.getElementById('modal-season').textContent = peak.bestSeason;
        document.getElementById('modal-description').textContent = peak.detailedDescription;
        
        // Create gallery
        const gallery = document.getElementById('modal-gallery');
        gallery.innerHTML = '';
        peak.imageUrls.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = peak.altText;
            img.className = 'gallery-image';
            img.addEventListener('click', () => {
                window.open(imageUrl, '_blank');
            });
            gallery.appendChild(img);
        });
        
        modal.classList.add('active');
    }
    
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // --- Initial render ---
    renderPeaks(peaks);
    createInteractiveMap();
});
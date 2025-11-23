document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1000,
        once: true,
    });

    setTimeout(() => {
        const techLogos = [
            'aws.png', 'blender.png', 'csharp.png', 'django.png', 'docker.png', 
            'firebase.png', 'flutter.png', 'html5.png', 'laravel.png', 'mongodb.png', 
            'nodejs.png', 'php.png', 'python.png', 'react.png', 'typescript.png', 'unity.png'
        ];

        const formatTechName = (fileName) => {
            let name = fileName.split('.')[0];
            if (name === 'aws') return 'AWS';
            if (name === 'csharp') return 'C#';
            if (name === 'html5') return 'HTML5';
            if (name === 'nodejs') return 'Node.js';
            if (name === 'php') return 'PHP';
            return name.charAt(0).toUpperCase() + name.slice(1);
        };

        const createSlider = (sliderClass, logos, reverse = false) => {
            const sliderWrapper = document.querySelector(`${sliderClass} .swiper-wrapper`);
            
            if (sliderWrapper) {
                const logosForLoop = [...logos, ...logos, ...logos, ...logos];

                logosForLoop.forEach(logo => {
                    const slide = document.createElement('div');
                    slide.classList.add('swiper-slide');
                    // SOLUCIÓN: Usar la ruta de archivo ABSOLUTA
                    slide.innerHTML = `
                        <img src="./assets/${logo}" alt="${formatTechName(logo)}">
                        <span>${formatTechName(logo)}</span>
                    `;
                    sliderWrapper.appendChild(slide);
                });

                new Swiper(sliderClass, {
                    loop: true,
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    freeMode: true,
                    autoplay: {
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: reverse,
                    },
                    speed: 5000,
                    grabCursor: true,
                });
            } else {
                console.error(`Error crítico: No se pudo encontrar el contenedor del carrusel ${sliderClass}`);
            }
        };

        const midIndex1 = Math.ceil(techLogos.length / 3);
        const midIndex2 = midIndex1 + Math.ceil((techLogos.length - midIndex1) / 2);
        const slider1Logos = techLogos.slice(0, midIndex1);
        const slider2Logos = techLogos.slice(midIndex1, midIndex2);
        const slider3Logos = techLogos.slice(midIndex2);

        createSlider('.slider-1', slider1Logos, false);
        createSlider('.slider-2', slider2Logos, true);
        createSlider('.slider-3', slider3Logos, false);
    }, 0);
});

const sections = document.querySelectorAll(".snap");
        const dots = document.querySelectorAll(".dot");

        // Intersection Observer to detect visible section
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        let index = [...sections].indexOf(entry.target);
                        updateActiveSection(index);
                    }
                });
            },
            { threshold: 0.6 } // Detect when at least 60% of a section is visible
        );

        sections.forEach((section) => observer.observe(section));

        function updateActiveSection(index) {
            sections.forEach((section, i) => {
                section.classList.toggle("active", i === index);
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === index);
            });
        }

        const links = document.querySelectorAll('.menu-navbar ul a');
        const logo = document.querySelector('.menu-logo')
        const aboutSection = document.getElementById('about');
        const white = '#DADADA';
        const black = '#1E1E1E';
        console.log(aboutSection)
    const aboutObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(links)
        if (entry.isIntersecting) {
            logo.src = './assets/logo-white.png'
            links.forEach(item => item.style.color = white)
        } else {
        logo.src = './assets/logo-black.png'
            links.forEach(item => item.style.color = black)
        }
    });
    }, { threshold: 0.6 });

    aboutObserver.observe(aboutSection);
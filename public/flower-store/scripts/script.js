window.addEventListener('scroll', function() {
    const banner = document.querySelector('.parallax-banner');
    const content = document.querySelector('.parallax-content');
    
    const scrollPosition = window.scrollY;
    const bannerSpeed = -0.1; // Negative value to move background up
    const contentSpeed = 0.2; // Positive value to move content down

    banner.style.backgroundPositionY = `${scrollPosition * bannerSpeed}px`;
    content.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * contentSpeed}px))`;
});

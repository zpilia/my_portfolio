export const scrollToSectionSmoothly = (id, headerHeight = 0, duration = 800) => {
    const element = document.getElementById(id);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const targetPosition = elementPosition - headerHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const easeInOutQuad = (t) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const run = startPosition + distance * easeInOutQuad(progress);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    };

    requestAnimationFrame(animation);
};

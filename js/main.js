(() => {
    'use strict';

    const startTime = performance.now();

    const showLoadTime = () => {
        const endTime = performance.now();
        const seconds = ((endTime > 0 ? endTime : Date.now()) - startTime) / 1000;

        const el = document.createElement('p');
        el.className = 'load-time-info';
        el.innerHTML = `Время загрузки: <strong>${seconds.toFixed(3)}</strong> с`;

        const footer = document.querySelector('.foother');
        const copyright = footer?.querySelector('.foother__text');

        footer && (copyright ? footer.insertBefore(el, copyright) : footer.appendChild(el));
    };

    const setActive = () => {
        const path = location.pathname.split('/').pop() || 'index.html';
        const current = path === '' ? 'index.html' : path;

        document.querySelectorAll('.navigation__link').forEach(link => {
            const href = link.getAttribute('href')?.split('/').pop() || 'index.html';
            link.classList.toggle('nav__link--active', href === current);
        });
    };

    setActive();
    window.addEventListener('load', () => setTimeout(showLoadTime, 100));
})();
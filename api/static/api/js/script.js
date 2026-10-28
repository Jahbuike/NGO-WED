document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Navbar Effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            nav.style.padding = '10px 10%';
        } else {
            nav.style.background = '#fff';
            nav.style.boxShadow = 'none';
            nav.style.padding = '20px 10%';
        }
    });

    // 2. Statistics Counter Animation
    const stats = document.querySelectorAll('.stat-item h2');
    const speed = 200;

    const animateStats = () => {
        stats.forEach(stat => {
            const target = +stat.innerText.replace('+', '').replace('k', '000');
            const count = +stat.getAttribute('data-count') || 5;
            const increment = target / speed;

            if (count < target) {
                stat.setAttribute('data-count', count + increment);
                stat.innerText = Math.floor(count + increment) + '+';
                setTimeout(animateStats, 1);
            } else {
                stat.innerText = target.toLocaleString() + '+';
            }
        });
    };

    // Trigger stats animation when scrolling into view
    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.stats-bar');
    if (statsSection) observer.observe(statsSection);

    // 3. Donation Amount Selection
    const amtButtons = document.querySelectorAll('.amt-btn');
    amtButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from others
            amtButtons.forEach(b => b.style.background = '#f4f7f6');
            amtButtons.forEach(b => b.style.color = '#333');
            
            // Add active style to clicked
            this.style.background = '#1a5e5e';
            this.style.color = 'white';
            
            console.log("Selected Amount:", this.innerText);
        });
    });
});
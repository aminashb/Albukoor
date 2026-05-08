const app = document.getElementById("app");

// Pages html
const routes = {
    "/": () => `
        <section class="hero">
        <div class="hero-text">
            <h1 id="greeting">Good Morning</h1>
            <p class="hero-slogan">
            Barakah is placed in the early hours — begin your day with intention and purpose.
            </p>
            <p class="hero-sub">
            A reflective practice shaped by the teachings of <em>Al-Bukoor (Early Morning)</em>.
            </p>
            <a href="#/tracker" class="cta-button">Begin Today</a>
        </div>
        <img src="media/البكور-60881-1000x1500-webp.jpeg" alt="Al-Bukoor book cover" width="200">
        </section>

        <!-- YouTube video -->
        <section>
        <h2>Fajr Miracles</h2>
        <iframe 
        src="https://www.youtube.com/embed/aZZXxyd3ZNY?si=W9yZyIhr4p_Djflr" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
        </section>
    `,
    "/about": () => `
        <section>
        <h1>About This Project</h1>

        <p>
            This website reflects the themes of Al-Bukoor (Early Morning), focusing on the value of beginning the day early with intention, discipline, and reflection. It translates the book’s ideas into a digital space that supports consistent practice and mindful daily routines.
        </p>

        <blockquote>
            <section lang="ar" dir="rtl">
            “حَدَّثَنَا يَعْقُوبُ بْنُ حُمَيْدِ بْنِ كَاسِبٍ، حَدَّثَنَا إِسْحَاقُ بْنُ جَعْفَرِ بْنِ مُحَمَّدِ بْنِ عَلِيِّ بْنِ الْحُسَيْنِ، عَنْ عَبْدِ الرَّحْمَنِ بْنِ أَبِي بَكْرٍ الْجُدْعَانِيِّ، عَنْ نَافِعٍ، عَنِ ابْنِ عُمَرَ، أَنَّ النَّبِيَّ ـ صلى الله عليه وسلم ـ قَالَ ‏ "‏ اللَّهُمَّ بَارِكْ لأُمَّتِي فِي بُكُورِهَا ‏"‏ ‏.‏
            </section>
            It was narrated from Ibn Umar that the Messenger of Allah (ﷺ) said: "O Allah, bless my nation early in the morning.' "
            
            Sunan Ibn Majah 2238”
        </blockquote>   
        </section>
    `,

    "/stages": () => `
        <section id="stages">
            <h2>Progress Stages</h2>
            <p>The app breaks early rising into small stages so users can build consistency gradually.</p>

            <article>
                <h3>Stage 1: The Foundation</h3>
                <p>Focus on waking up on time and reducing reliance on snooze alarms.</p>
            </article>

            <article>
                <h3>Stage 2: Stay Awake</h3>
                <p>Begin treating Fajr as the start of the day rather than a sleep interruption.</p>
            </article>

            <article>
                <h3>Stage 3: Build a Morning Routine</h3>
                <p>Add simple habits such as dhikr, reflection, reading, and daily planning.</p>
            </article>

            <article>
                <h3>Stage 3: Build a Morning Routine</h3>
                <p>Add simple habits such as dhikr, reflection, reading, and daily planning.</p>
            </article>
        </section>
    `,

    "/tracker": () => `
        <section class="tracker-quote">
            <!-- Image source: Unsplash.com - free stock image -->
            <img src="media/pexels-content-pixie-1405717-2736499.jpg" alt="Notebook and coffee">

            <div>
            <h1>Ready for the Day!</h1>
            <p class="quote">
                What is built at dawn carries through the day.
            </p>
            </div>
        </section>
        <section id="tracker" class="tracker">
            <h2>Daily Habit Tracker</h2>
            <p>Track the habits that help turn Fajr into the start of the day.</p>
        
            <label><input type="checkbox" class="habit"> <span>Wake up for Fajr</span></label>
            <label><input type="checkbox" class="habit"> <span>Stay awake after prayer</span></label>
            <label><input type="checkbox" class="habit"> <span>Morning dhikr</span></label>
            <label><input type="checkbox" class="habit"> <span>Read or reflect for 10 minutes</span></label>
            <label><input type="checkbox" class="habit"> <span>Plan one task for the day</span></label>
        
            <p id="progress">Progress: 0/5 habits completed</p>
        </section>
  
    `,

    "/community": () => `
        <section>
            <h2>Fajr Community</h2>
            <p>Users are encouraged by seeing others also beginning their day after Fajr.</p>
        
            <button id="checkInButton">I woke up for Fajr</button>
            <p id="checkInMessage">No check-in yet today.</p>
        </section>
    `
};


//Navigating and rendering pages

function render(){
    const path = window.location.hash.slice(1) || "/";
    const view = routes[path] || notfound;
    app.innerHTML = view();

    runPageLogic();
}

function notfound(){
    return `
        <h1>404</h1>
        <p>Page Not Found</p>
    `;
}

window.addEventListener("hashchange", render);

render();

function runPageLogic() {
    // Home page greeting
    const greeting = document.getElementById("greeting");

    if (greeting) {
        const hour = new Date().getHours();

        if (hour < 12) {
            greeting.textContent = "Good Morning";
        } else {
            greeting.textContent = "Welcome";
        }
    }

    // Tracker page logic
    const habits = document.querySelectorAll('.habit');
    const progress = document.getElementById('progress');

    if (habits.length > 0 && progress) {
        habits.forEach(function (habit) {
            habit.addEventListener('change', function () {
                const completed = document.querySelectorAll('.habit:checked').length;
                progress.textContent = 'Progress: ' + completed + '/5 habits completed';
            });
        });
    }

    // Community page logic
    const checkInButton = document.getElementById('checkInButton');
    const checkInMessage = document.getElementById('checkInMessage');

    if (checkInButton && checkInMessage) {
        checkInButton.addEventListener('click', function () {
            checkInMessage.textContent = 'Checked in: you started your day with Fajr.';
        });
    }
}

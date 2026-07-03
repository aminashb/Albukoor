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
                <p id="fajrTime" class="fajr-time">Loading Fajr time...</p>
                <a href="#/tracker" class="cta-button">Begin Today</a>
            </div>
            <img src="media/البكور-60881-1000x1500-webp.jpeg" alt="Al-Bukoor book cover" width="200">
        </section>

        <section class="intro-section">
            <div class="intro-inner">
                <h2>Have you ever prayed Fajr and gone straight back to sleep?</h2>
                <p>Al-Bukoor is a book by Noor Al-Hudaib that reframes Fajr not as an 
                interruption to sleep, but as the true beginning of the day. The Prophet ﷺ 
                prayed: "O Allah, bless my nation in its early mornings." This app is 
                built around that blessing — guiding you through a gradual journey from 
                waking for Fajr, to staying awake, to building a morning routine rooted 
                in worship.</p>
                <a href="#/stages" class="cta-button">Explore the Journey →</a>
            </div>
        </section>

        <section class="video-section">
        <h2>Fajr Miracles</h2>
        <iframe 
        src="https://www.youtube.com/embed/aZZXxyd3ZNY?si=W9yZyIhr4p_Djflr" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
        </section>

        <section class="community-preview">
            <div class="community-preview-inner">
                <h2>Join the Community</h2>
                <p>You are not alone in this journey.</p>

                <div class="community-comments">
                    <div class="comment-card">
                        <p class="comment-text">"I used to pray Fajr and go straight back to sleep. This app helped me stay awake for the first time."</p>
                        <span class="comment-author">— Sara, London</span>
                    </div>
                    <div class="comment-card">
                    <p class="comment-text">"Starting in winter made all the difference. Fajr felt manageable for once."</p>
                    <span class="comment-author">— Khalid, Manchester</span>
                    </div>
                    <div class="comment-card">
                        <p class="comment-text">"The stages approach changed how I think about my mornings entirely."</p>
                        <span class="comment-author">— Amina, Birmingham</span>
                    </div>
                </div>

                <a href="#/community" class="cta-button">See More →</a>
            </div>
        </section>
        `,
        "/about": () => `
        <div class="page-wrapper">
            <section class="about">
                <div class="about-text">
                    <h1>About This Project</h1>

                    <p>
                        Al-Bukoor is a book by Noor Al-Hudaib and Shaimaa Al-Duhaim that 
                        reframes Fajr prayer not as the end of the night, but as the 
                        intentional beginning of the day. Written for Muslims navigating 
                        busy, irregular lives in the West, it offers a gradual four-stage 
                        framework — from waking for Fajr on time, to staying awake until 
                        sunrise, to building a full morning routine anchored in worship. 
                        This app brings that journey into a simple daily practice.
                    </p>

                    <blockquote>
                        <section lang="ar" dir="rtl">
                        "‏ اللَّهُمَّ بَارِكْ لأُمَّتِي فِي بُكُورِهَا ‏"
                        </section>
                        It was narrated from Ibn Umar that the Messenger of Allah (ﷺ) said: "O Allah, bless my nation early in the morning.' "
                        
                        Sunan Ibn Majah 2238”
                    </blockquote>
                </div>    
            </section>
        </div>
    `,

    "/stages": () => {
        return`
        <div class="page-wrapper">
            <section id="stages">
                <h2>Progress Stages</h2>
                <p>Al-Hudaib is clear: do not rush between stages. The Prophet ﷺ said 
                "The most beloved deeds to Allah are the most consistent, even if small." 
                Each stage may take weeks or months before it becomes natural.</p>

                <div class="stage-card ${userStage === 1 ? 'current-stage' : ''}">
                    <article>
                        <h3>Stage 1 — Wake for Fajr on Time</h3>
                        <p>The foundation of everything. The goal is not simply to wake early — 
                        it is to pray Fajr in its first time, with its Sunnah rak'ahs and 
                        presence of heart. Set multiple alarms the night before. More 
                        importantly, make the intention before sleeping — the Prophet ﷺ 
                        promised that whoever sincerely intends to wake for prayer but is 
                        overcome by sleep, Allah records it for them and the sleep itself 
                        becomes a charity.</p>
                    </article>
                </div>

                <div class="stage-card ${userStage === 2 ? 'current-stage' : ''}">
                    <article>
                        <h3>Stage 2 — Stay Awake Until Shurooq</h3>
                        <p>After Fajr, do not return to bed. Remain on the prayer mat — recite 
                        your morning adhkar, read Qur'an, make du'a. The hour between Fajr 
                        and sunrise is described in the book as the time of provision 
                        distribution. This stage is where Fajr stops being an interruption 
                        to sleep and becomes the true beginning of your day.</p>
                    </article>
                </div>

                <div class="stage-card ${userStage === 3 ? 'current-stage' : ''}">
                    <article>
                        <h3>Stage 3 — Wake Before Fajr</h3>
                        <p>Once Stage 2 is stable, begin waking 15 minutes before the 
                        Fajr adhan. Use this time for Tahajjud or Witr prayer and 
                        du'a in the last sixth of the night — the time when Allah 
                        descends to the lowest heaven and asks: "Who is calling upon 
                        Me, that I may answer?" This is the most spiritually 
                        concentrated hour of the day.</p>
                    </article>
                </div>

                <div class="stage-card ${userStage === 4 ? 'current-stage' : ''}">
                    <article>
                        <h3>Stage 4 — Fix One Wake-Time Year-Round</h3>
                        <p>The final and most demanding stage. Wake at the same time 
                        in summer and winter, during work and holiday, at home and 
                        while travelling, in Ramadan and outside it. Al-Hudaib is 
                        direct: when your wake-time no longer changes with 
                        circumstances, the habit has become character.</p>
                    </article>
                </div>
            </section>
        </div>    
    `},

    "/tracker": () => `
        <div class="page-wrapper">
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
            <section class="tracker-layout">
                <div class="tracker-habits">
                    <h2>Daily Habit Tracker</h2>
                    <p>Track the habits that help turn Fajr into the start of the day.</p>
                    <ul>
                        <li><label><input type="checkbox" class="habit"> <span>Wake up for Fajr in its first time</span></label></li>
                        <li><label><input type="checkbox" class="habit"> <span>Stay on the prayer mat after salaam</span></label></li>
                        <li><label><input type="checkbox" class="habit"> <span>Recite morning adhkar</span></label></li>
                        <li><label><input type="checkbox" class="habit"> <span>Read one page of Qur'an</span></label></li>
                        <li><label><input type="checkbox" class="habit"> <span>Plan your day's intention</span></label></li>
                    </ul>
                    <div class="progress-bar-wrapper">
                        <div class="progress-bar" id="progressBar"></div>
                    </div>
                    <p id="progress">Progress: 0/5 habits completed</p>
                    <div id="stageBanner" class="stage-banner" style="display:none;">
                        <p id="stageBannerText"></p>
                    </div>
                </div>
                <div class="calendar-section">
                    <h3>Monthly Progress</h3>
                    <div class="calendar" id="calendar"></div>
                </div>
            </section>
            <div class="locked-stage">
                <h3>🔒 Stage 2 — Stay Awake Until Shurooq</h3>
                <ul>
                    <li><label><input type="checkbox" disabled> <span>Pray Duha after sunrise</span></label></li>
                    <li><label><input type="checkbox" disabled> <span>Continue dhikr until shurooq</span></label></li>
                    <li><label><input type="checkbox" disabled> <span>Read Qur'an after shurooq</span></label></li>
                </ul>
            </div>

        </div>
  
    `,

    "/community": () => `
        <div class="page-wrapper">
            <section class="community">
                <h2>Al-Suhba Al-Saliha</h2>
                <p>The Prophet ﷺ said: "A person is upon the religion of their close friend." 
                You are not alone in this journey — others are waking for Fajr too.</p>

                <div class="checkin-box">
                    <p id="counterText">47 people have checked in today</p>
                    <textarea id="reflectionInput" 
                        placeholder="Share a short reflection to check in — what helped you wake for Fajr today?" 
                        rows="3">
                    </textarea>
                    <button id="checkInButton">I woke up for Fajr today</button>
                    <p id="checkInMessage"></p>
                </div>

                <div class="community-feed">
                    <h3>From the community</h3>
                    <ul id="feedList">
                        <li class="feed-item">
                            <span class="feed-name">Sara, London</span>
                            <span class="feed-text">First week staying awake until shurooq. Alhamdulillah.</span>
                        </li>
                        <li class="feed-item">
                            <span class="feed-name">Khalid, Manchester</span>
                            <span class="feed-text">Starting in winter made all the difference.</span>
                        </li>
                        <li class="feed-item">
                            <span class="feed-name">Amina, Birmingham</span>
                            <span class="feed-text">The stages approach changed how I think about my mornings.</span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    `
};


const userStage = parseInt(localStorage.getItem('currentStage')) || 1;

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

const navToggle = document.getElementById("navToggle");
const navInner = document.querySelector(".nav-inner");

if (navToggle && navInner) {
  navToggle.addEventListener("click", function () {
    const isOpen = navInner.classList.contains("nav-open");

    if (isOpen) {
      navInner.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    } else {
      navInner.classList.add("nav-open");
      navToggle.setAttribute("aria-expanded", "true");
    }
  });
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

    const fajrTime = document.getElementById('fajrTime');
    if (fajrTime) {
        fetch('https://api.aladhan.com/v1/timingsByCity?city=London&country=UK&method=2')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                const fajr = data.data.timings.Fajr;
                fajrTime.textContent = 'Fajr in London today: ' + fajr;
            });
    }

    // Tracker page logic
    const habits = document.querySelectorAll('.habit');
    const progress = document.getElementById('progress');
    const progressBar = document.getElementById('progressBar');

    if (habits.length > 0 && progress && progressBar) {

        const saved = JSON.parse(localStorage.getItem('habits'));
        if (saved) {
            habits.forEach(function(habit, index) {
                habit.checked = saved[index];
            });
        }

        const initialCompleted = document.querySelectorAll('.habit:checked').length;
        const initialPercentage = (initialCompleted / habits.length) * 100;
        progressBar.style.width = initialPercentage + '%';
        progress.textContent = 'Progress: ' + initialCompleted + '/' + habits.length + ' habits completed';

        habits.forEach(function(habit) {
            habit.addEventListener('change', function() {
            const total = habits.length;
            const completed = document.querySelectorAll('.habit:checked').length;
            const states = [];
            for (let i of habits) {
                states.push(i.checked);
            }
            localStorage.setItem('habits', JSON.stringify(states));
            const percentage = (completed / total) * 100;

            progressBar.style.width = percentage + '%';
            progress.textContent = 'Progress: ' + completed + '/' + total + ' habits completed';

            if (completed === total) {
                // Update stage banner
                const stageBanner = document.getElementById('stageBanner');
                const stageBannerText = document.getElementById('stageBannerText');
                const savedDays = JSON.parse(localStorage.getItem('completedDays')) || [];

                if (stageBanner && stageBannerText && savedDays.length > 0) {
                    stageBanner.style.display = 'block';
                    
                    if (userStage < 4) {
                        const daysLeft = 14 - savedDays.length;
                        if (daysLeft > 0) {
                            stageBannerText.textContent = 'Keep going — ' + daysLeft + ' more days until Stage ' + (userStage + 1) + ' unlocks.';
                        } else {
                            stageBannerText.textContent = 'Stage ' + (userStage + 1) + ' is now unlocked. Head to the Stages page to see what\'s next.';
                        }
                    } else {
                        stageBannerText.textContent = 'Masha\'Allah — you have reached the final stage. Keep going year-round.';
                    }
                }
                progress.textContent = 'Masha\'Allah — all habits complete. بارك الله فيك';
                progressBar.classList.add('complete');


                // Save today as a completed day
                const completedDays = JSON.parse(localStorage.getItem('completedDays')) || [];
                const today = new Date().toISOString().split('T')[0];
                
                if (!completedDays.includes(today)) {
                    completedDays.push(today);
                    localStorage.setItem('completedDays', JSON.stringify(completedDays));
                }

                // Check if stage should advance
                if (completedDays.length >= 14) {
                    const newStage = userStage + 1;
                    if (newStage <= 4) {
                        localStorage.setItem('currentStage', newStage);
                    }
                }
            }  else {
                progress.textContent = 'Progress: ' + completed + '/' + total + ' habits completed';
                progressBar.classList.remove('complete');
            }

            });
        });
    }

    const calendar = document.getElementById('calendar');
    if (calendar) {
        const completedDays = JSON.parse(localStorage.getItem('completedDays')) || [];
        
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        
        // Days of week headers
        const headers = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        headers.forEach(function(day) {
            const header = document.createElement('div');
            header.className = 'calendar-day-header';
            header.textContent = day;
            calendar.appendChild(header);
        });
        
        // Calculate offset for Monday start
        const firstDay = new Date(year, month, 1).getDay();
        const offset = (firstDay + 6) % 7;
        
        // Empty cells before first day
        for (let i = 0; i < offset; i++) {
            const empty = document.createElement('div');
            empty.className = 'calendar-day empty';
            calendar.appendChild(empty);
        }
        
        // Days of the month
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        for (let day = 1; day <= daysInMonth; day++) {
            const cell = document.createElement('div');
            cell.className = 'calendar-day';
            cell.textContent = day;

            const todayDate = now.getDate();
            if (day === todayDate) {
                cell.classList.add('today');
            }

            // Check if this day was completed
            const dateString = year + '-' + 
                String(month + 1).padStart(2, '0') + '-' + 
                String(day).padStart(2, '0');
            
            if (completedDays.includes(dateString)) {
                cell.classList.add('completed');
            }
            
            calendar.appendChild(cell);
        }
    }

    // Community logic
    const checkInButton = document.getElementById('checkInButton');
    const checkInMessage = document.getElementById('checkInMessage');
    const reflectionInput = document.getElementById('reflectionInput');
    const feedList = document.getElementById('feedList');
    const counterText = document.getElementById('counterText');
    
    if (checkInButton && feedList) {
        let count = 47;
    
        checkInButton.addEventListener('click', function() {
            const reflection = reflectionInput.value.trim();
    
            if (!reflection) {
                checkInMessage.textContent = 'Please share a short reflection before checking in.';
                return;
            }
    
            // Update counter
            count++;
            counterText.textContent = count + ' people have checked in today';
    
            // Create new feed item
            const li = document.createElement('li');
            li.className = 'feed-item feed-new';
    
            const name = document.createElement('span');
            name.className = 'feed-name';
            name.textContent = 'You';
    
            const text = document.createElement('span');
            text.className = 'feed-text';
            text.textContent = reflection;
    
            li.appendChild(name);
            li.appendChild(text);
            feedList.insertBefore(li, feedList.firstChild);
    
            // Update UI
            checkInMessage.textContent = 'Checked in — Alhamdulillah. بارك الله فيك';
            checkInButton.disabled = true;
            checkInButton.textContent = '✓ Checked in';
            reflectionInput.value = '';
        });
    }
}

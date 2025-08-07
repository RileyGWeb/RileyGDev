// Portfolio data for Alpine.js
window.portfolioData = {
    letters: [
        { letter: 'R', delay: '200ms' },
        { letter: 'I', delay: '400ms' },
        { letter: 'L', delay: '600ms' },
        { letter: 'E', delay: '800ms' },
        { letter: 'Y', delay: '1000ms' }
    ],
    bottomLetters: [
        { letter: 'G.', delay: '1200ms' },
        { letter: 'D', delay: '1400ms' },
        { letter: 'E', delay: '1600ms' },
        { letter: 'V', delay: '1800ms' }
    ],
    navLetters: [
        { letter: 'R' },
        { letter: 'G' },
        { letter: 'D' }
    ],
    mounted: false,
    showMenu: false,
    showMyWork: false,
    morphingMyWork: false,
    hasScrolled: false,
    showProjectDetail: false,
    selectedProject: null,
    expandedTechStack: false,
    activeFilter: 'all',
    filters: ['Figma', 'Laravel', 'React', 'Angular', 'Tailwind', 'Alpine', 'Livewire', 'Next.js', 'Statamic', 'Github', 'MySQL', 'PGSQL', 'AWS', 'GCP', 'Digital Ocean', 'Jira', 'Forge'],
    dragState: {
        isDragging: false,
        startX: 0,
        scrollLeft: 0
    },
    showFilterFade: false,
    currentRoute: '',
    showRecruiterPage: false,
    showContactInfo: false,
    showAboutPage: false,
    showContactPage: false,
    projects: {
        'firefly': {
            slug: 'analytics-dashboard',
            title: 'Firefly - Analytics Dashboard',
            company: 'As an Employee',
            techStack: 'Expand tech stack',
            filterTags: ['Figma', 'Tailwind', 'Alpine', 'Livewire', 'Laravel', 'Github', 'MySQL', 'GCP'],
            techStackItems: [
                { name: 'Figma', icon: '🎨' },
                { name: 'Tailwind', icon: '💨' },
                { name: 'Alpine', icon: '⛰️' },
                { name: 'Livewire', icon: '⚡' },
                { name: 'Laravel', icon: '🔺' },
                { name: 'Github', icon: '🐙' },
                { name: 'MySQL', icon: '🐬' },
                { name: 'GCP', icon: '☁️' }
            ],
            image: 'https://via.placeholder.com/332x186/f0f0f0/000000?text=Dashboard+Preview',
            description: `Firefly is an ad tech company. Ad tech comes with mountains of data. When the company hired me, they were drowning in spreadsheets. I was actually brought on to work on some Wordpress contracts, but when those fell through and the company was hit with layoffs, I survived and we changed course. I was put in charge of fixing the data situation.

Myself and the resident data wizard devised a Laravel app built with the TALL stack to solve the problem. I handled the Figma mockups, app development and server configuration (GCP). He handled database design and wiring up all the APIs to serve our database and keep it up to date.

The project was a huge success. Analyst's time to create reports dropped from 2 - 6 hours, down to 10 - 45 minutes. Even after layoffs, they gave me a raise to keep me around working on it. Eventually I was poached by Citizens Bank, but still they kept me on at 10h/wk on a contract basis to get the project finished.`
        },
        'iclassipro': {
            slug: 'iclassipro-enterprise',
            title: 'iClassPro - Enterprise Software',
            company: 'As an Employee',
            techStack: 'Expand tech stack',
            filterTags: ['Figma', 'Angular', 'Laravel', 'Github', 'Jira', 'MySQL', 'AWS'],
            techStackItems: [
                { name: 'Figma', icon: '🎨' },
                { name: 'Angular', icon: '🅰️' },
                { name: 'Laravel', icon: '🔺' },
                { name: 'Github', icon: '🐙' },
                { name: 'Jira', icon: '📊' },
                { name: 'MySQL', icon: '🐬' },
                { name: 'AWS', icon: '☁️' }
            ],
            image: 'https://via.placeholder.com/332x186/f0f0f0/000000?text=iClassPro+Platform',
            description: `iClassPro is class management software for children's activity centers. Families, students, classes, camps, parties, appointments, payments, ledgers, enrollments… it's a complex system. Very mature at around 17 years old, I came on as a mid-level Laravel dev working on whatever they needed from me.

Over time, they made it clear they intended to push me into a more senior role at the company. They did a wonderful job helping me refine my skills, grow in my knowledge and stay on the cutting edge of the tech we used. When the AI boom happened, iClass was great about adopting it and teaching us to use it responsibly to greatly increase our productivity.`
        },
        'notatesla': {
            slug: 'not-a-tesla-app',
            title: 'Not a Tesla App',
            company: 'As a Freelancer',
            techStack: 'Expand tech stack',
            filterTags: ['Figma', 'Statamic', 'Tailwind', 'Laravel', 'Github', 'MySQL', 'AWS'],
            techStackItems: [
                { name: 'Figma', icon: '🎨' },
                { name: 'Statamic', icon: '📄' },
                { name: 'Tailwind', icon: '💨' },
                { name: 'Laravel', icon: '🔺' },
                { name: 'Github', icon: '🐙' },
                { name: 'MySQL', icon: '🐬' },
                { name: 'AWS', icon: '☁️' }
            ],
            image: 'https://via.placeholder.com/332x186/f0f0f0/000000?text=Tesla+App',
            description: `www.NotaTeslaApp.com is a news website dedicated to everything Tesla. The man who ran the site was a Tesla owner himself, and he wasn't satisfied with any third-party apps out there, so somewhat ironically, he decided he wanted to create his own Tesla app.

He envisioned an all-in-one platform Tesla owners could use to control and manage their vehicle from. From vehicle commands to historical data on trips, energy usage and interior climate, the app had it all. He also wanted to overhaul his oldschool hand-built PHP news site, so I helped him tackle that too.

We built out an extensive API in Laravel, and though he had never heard of Statamic, I convinced him to use it for the news platform overhaul. It worked out brilliantly, and he's still using it to this day. Unfortunately I parted ways with him when my wife and I had our baby, so I never got to see the app come to fruition, but I always think about what could have been.`
        },
        'funpianos': {
            slug: 'fun-pianos-planner',
            title: 'The Fun Pianos Planner',
            company: 'As a Freelancer',
            techStack: 'Expand tech stack',
            filterTags: ['Figma', 'Tailwind', 'Alpine', 'Livewire', 'Laravel', 'Forge', 'Github', 'MySQL', 'Digital Ocean'],
            techStackItems: [
                { name: 'Figma', icon: '🎨' },
                { name: 'Tailwind', icon: '💨' },
                { name: 'Alpine', icon: '⛰️' },
                { name: 'Livewire', icon: '⚡' },
                { name: 'Laravel', icon: '🔺' },
                { name: 'Laravel Forge', icon: '🔧' },
                { name: 'Github', icon: '🐙' },
                { name: 'MySQL', icon: '🐬' },
                { name: 'Digital Ocean', icon: '🌊' }
            ],
            image: 'https://via.placeholder.com/332x186/f0f0f0/000000?text=Fun+Pianos+Planner',
            description: `A few years ago, I did a friend's website (www.simplepost.io), who referred me to his real estate agent (www.amymarquezrealty.com), who referred me to her former business partner (www.funpianos.com) who was in need of a programmer to help him with his core business software. As well as a website overhaul.

(Don't judge me on my marketing sites, they're not my strongest selling point!)

Fun! Pianos is a traveling dueling pianos show business. Long story short, the owner Sam hired someone back in 2014 to build him a custom web app to handle all his business needs. Players, shows, clients, payments, so on and so forth. This developer chose to build a pure PHP monolith on top of a Wordpress front end. He abandoned Fun! Pianos some time in 2020, and left his custom, no-documentation platform to rot in the hands of a non-tech savvy piano playing businessman.

Luckily, I was already well-versed in PHP, but I took one look at his existing platform and knew right away FP needed an overhaul. I hosted them on a brand new domain (they used to run on duelingpiano.com), and started from scratch with Laravel and Filament.

Our partnership has been my longest-running so far, at just over 2.5 years. I build everything the business needs to run, and I handle it all from front to back. Figma to Laravel to Digital Ocean.`
        },
        'skillboards': {
            slug: 'skillboards',
            title: 'Skillboards',
            company: 'As a Side-Hustler',
            techStack: 'Expand tech stack',
            filterTags: ['Figma', 'Tailwind', 'React', 'Next.js', 'Laravel', 'Forge', 'Github', 'PGSQL', 'Digital Ocean'],
            techStackItems: [
                { name: 'Figma', icon: '🎨' },
                { name: 'Tailwind', icon: '💨' },
                { name: 'React', icon: '⚛️' },
                { name: 'Next.js', icon: '▲' },
                { name: 'Laravel', icon: '🔺' },
                { name: 'Forge', icon: '🔧' },
                { name: 'Github', icon: '🐙' },
                { name: 'PGSQL', icon: '🐘' },
                { name: 'Digital Ocean', icon: '🌊' }
            ],
            image: 'https://via.placeholder.com/332x186/f0f0f0/000000?text=Skillboards',
            description: `As the infamous Man of too Many Hobbies, in 2020 stuck in quarantine, I decided to learn to beatbox. Because piano and speedcubing weren't enough. As I learned, I found myself drowning in beatbox sounds. Snares, kicks, bass, lip rolls, whistles, it was all too much to remember.

I envisioned an application with two simple columns as an interface - on the left, "Unlearned", and on the right, "Learned". The left column hosted a grid of "cards", each representing a beatbox sound. As I learned new sounds, I'd move them over to the right column.

Fast forward to 2025. My software engineering skills have improved even more, and AI agents are growing even faster. I take another stab. 3 weeks go by, and I have the skillboards I always dreamed of on my local machine.

As of Wednesday, August 6th, '25, that's where Skillboards sits. I recently lost my job to layoffs, so this again has taken a back seat to applying and networking. I want to get it up and running eventually though. I really like the idea.`
        },
        'todoninja': {
            slug: 'todo-ninja',
            title: 'To-do Ninja',
            company: 'Just Messin\' Around',
            techStack: 'Expand tech stack',
            filterTags: ['Coming Soon'],
            techStackItems: [
                { name: 'Coming Soon', icon: '🚧' }
            ],
            image: 'https://via.placeholder.com/332x186/f0f0f0/000000?text=Coming+Soon',
            description: `Coming Soon - This project is still in development.`
        },
        'biozone': {
            slug: 'biozone',
            title: 'Biozone',
            company: 'Just Messin\' Around',
            techStack: 'Expand tech stack',
            filterTags: ['Coming Soon'],
            techStackItems: [
                { name: 'Coming Soon', icon: '🚧' }
            ],
            image: 'https://via.placeholder.com/332x186/f0f0f0/000000?text=Coming+Soon',
            description: `Coming Soon - This project is still in development.`
        }
    },
    init() {
        // Reset scroll position to top on page load
        window.scrollTo(0, 0);
        
        // Initialize routing
        this.handleRoute();
        window.addEventListener('hashchange', () => this.handleRoute());
        
        // Start the letter animations after a brief delay
        setTimeout(() => {
            this.mounted = true;
        }, 300);
        
        // Scroll and wheel detection - available immediately
        const handleScroll = () => {
            if (!this.hasScrolled && (window.scrollY > 0)) {
                this.hasScrolled = true;
                this.showMenu = true;
            }
        };
        
        const handleWheel = (e) => {
            if (!this.hasScrolled && e.deltaY > 0) {
                this.hasScrolled = true;
                this.showMenu = true;
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('wheel', handleWheel);
    },
    handleRoute() {
        const hash = window.location.hash.substring(1);
        this.currentRoute = hash;
        
        // Reset all page states
        this.showAboutPage = false;
        this.showContactPage = false;
        this.showMyWork = false;
        this.showRecruiterPage = false;
        
        switch(hash) {
            case 'about':
                this.showAboutPage = true;
                break;
            case 'contact':
                this.showContactPage = true;
                break;
            case 'work':
                this.showMyWork = true;
                break;
            case 'recruiter':
                this.showRecruiterPage = true;
                break;
            default:
                // Home page - no special state needed
                break;
        }
    },
    openProject(projectKey) {
        if (this.projects[projectKey]) {
            this.selectedProject = this.projects[projectKey];
            this.showProjectDetail = true;
            this.expandedTechStack = false;
        }
    },
    closeProject() {
        this.selectedProject = null;
        this.showProjectDetail = false;
        this.showRecruiterPage = false;
    },
    openPageFromProject(page) {
        this.selectedProject = null;
        this.showProjectDetail = false;
        this.showMyWork = false;
        
        setTimeout(() => {
            if (page === 'recruiter') {
                this.showRecruiterPage = true;
            }
        }, 100);
    },
    shouldShowProject(projectKey) {
        if (this.activeFilter === 'all') return true;
        return this.projects[projectKey]?.filterTags?.includes(this.activeFilter) || false;
    },
    setFilter(filter) {
        this.activeFilter = filter;
    },
    goHome() {
        window.location.hash = '';
        this.showMenu = false;
        this.showMyWork = false;
        this.showAboutPage = false;
        this.showContactPage = false;
        this.showRecruiterPage = false;
        this.selectedProject = null;
        this.showProjectDetail = false;
    },
    showWork() {
        this.showMyWork = true;
        this.morphingMyWork = true;
        setTimeout(() => {
            this.morphingMyWork = false;
        }, 800);
    },
    openMyWork() {
        this.showMyWork = true;
        this.morphingMyWork = true;
        setTimeout(() => {
            this.morphingMyWork = false;
        }, 800);
    },
    closeAboutPage() {
        this.showAboutPage = false;
    },
    closeContactPage() {
        this.showContactPage = false;
    },
    closeMyWork() {
        this.showMyWork = false;
    },
    openRecruiterPage() {
        this.showRecruiterPage = true;
    },
    closeRecruiterPage() {
        this.showRecruiterPage = false;
    },
    openAboutPage() {
        this.showAboutPage = true;
    },
    openContactPage() {
        this.showContactPage = true;
    },
    goToRecruiter() {
        this.showRecruiterPage = true;
    },
    hideRecruiter() {
        this.showRecruiterPage = false;
    },
    toggleContactInfo() {
        this.showContactInfo = !this.showContactInfo;
    },
    toggleTechStack() {
        this.expandedTechStack = !this.expandedTechStack;
    },
    startDrag(e) {
        this.dragState.isDragging = true;
        this.dragState.startX = e.clientX - e.currentTarget.offsetLeft;
        this.dragState.scrollLeft = e.currentTarget.scrollLeft;
        e.currentTarget.style.cursor = 'grabbing';
    },
    drag(e) {
        if (!this.dragState.isDragging) return;
        const x = e.clientX - e.currentTarget.offsetLeft;
        const walk = (x - this.dragState.startX) * 2;
        e.currentTarget.scrollLeft = this.dragState.scrollLeft - walk;
        this.checkScrollFade({currentTarget: e.currentTarget});
    },
    onDrag(e) {
        this.drag(e);
    },
    endDrag(e) {
        this.dragState.isDragging = false;
        e.currentTarget.style.cursor = 'grab';
    },
    checkScrollFade(e) {
        const filterRow = e.currentTarget;
        const maxScroll = filterRow.scrollWidth - filterRow.clientWidth;
        this.showFilterFade = filterRow.scrollLeft < maxScroll - 5;
    }
};

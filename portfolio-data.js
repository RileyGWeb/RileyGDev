// Portfolio data for Alpine.js
window.portfolioData = {
    birthDate: new Date(1997, 9, 14), // Oct 14, 1997
    age: 0,
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
    filters: ['IT Management', 'Laravel', 'Next.js', 'React', 'TypeScript', 'Tailwind', 'Alpine', 'Livewire', 'Github', 'MySQL', 'PGSQL', 'Redis', 'AWS', 'Digital Ocean', 'Forge', 'Figma'],
    dragState: {
        isDragging: false,
        startX: 0,
        scrollLeft: 0
    },
    showFilterFade: false,
    currentRoute: '',
    showContactInfo: false,
    showAboutPage: false,
    showContactPage: false,
    contactMode: 'form', // 'form' or 'info'
    projects: {
        'proedge': {
            slug: 'proedge',
            title: 'ProEdge (ProHousing)',
            company: 'Day Job & Freelance',
            techStack: 'Expand tech stack',
            filterTags: ['IT Management'],
            techStackItems: [
                { name: 'Full-Stack Development', icon: '💻' },
                { name: 'Systems Administration', icon: '🖥️' },
                { name: 'Team Leadership', icon: '🧑‍💼' }
            ],
            image: 'https://via.placeholder.com/332x186/f0f0f0/000000?text=ProEdge',
            description: `ProEdge is the internal platform I build and maintain as IT Manager at ProHousing. Most of my day-to-day is still software development - shipping features, fixing what's broken, and keeping the systems the rest of the company relies on running smoothly.

It's not public, so there's no live link or repo to browse here, but it's where the bulk of my working hours go.`
        },
        'funpianos': {
            slug: 'fun-pianos-planner',
            title: 'The Fun Pianos Planner',
            company: 'Day Job & Freelance',
            techStack: 'Expand tech stack',
            filterTags: ['Figma', 'Tailwind', 'Alpine', 'Livewire', 'Laravel', 'Forge', 'Github', 'MySQL', 'Digital Ocean'],
            techStackItems: [
                { name: 'Figma', icon: 'images/logos/figma.svg' },
                { name: 'Tailwind', icon: 'images/logos/tailwind.svg' },
                { name: 'Alpine', icon: 'images/logos/alpine.svg' },
                { name: 'Livewire', icon: 'images/logos/livewire.svg' },
                { name: 'Laravel', icon: 'images/logos/laravel.svg' },
                { name: 'Laravel Forge', icon: 'images/logos/forge.svg' },
                { name: 'Github', icon: 'images/logos/github.svg' },
                { name: 'MySQL', icon: 'images/logos/mysql.svg' },
                { name: 'Digital Ocean', icon: 'images/logos/digitalocean.svg' }
            ],
            image: 'https://via.placeholder.com/332x186/f0f0f0/000000?text=Fun+Pianos+Planner',
            description: `A few years ago, I did a friend's website (www.simplepost.io), who referred me to his real estate agent (www.amymarquezrealty.com), who referred me to her former business partner (www.funpianos.com) who was in need of a programmer to help him with his core business software. As well as a website overhaul.

(Don't judge me on my marketing sites, they're not my strongest selling point!)

Fun! Pianos is a traveling dueling pianos show business. Long story short, the owner Sam hired someone back in 2014 to build him a custom web app to handle all his business needs. Players, shows, clients, payments, so on and so forth. This developer chose to build a pure PHP monolith on top of a Wordpress front end. He abandoned Fun! Pianos some time in 2020, and left his custom, no-documentation platform to rot in the hands of a non-tech savvy piano playing businessman.

Luckily, I was already well-versed in PHP, but I took one look at his existing platform and knew right away FP needed an overhaul. I hosted them on a brand new domain (they used to run on duelingpiano.com), and started from scratch with Laravel and Filament.

Our partnership has been my longest-running so far, at over 2.5 years and counting. I build everything the business needs to run, and I handle it all from front to back. Figma to Laravel to Digital Ocean.`
        },
        'skillboards': {
            slug: 'skillboards',
            title: 'Skillboards',
            company: 'Products',
            techStack: 'Expand tech stack',
            filterTags: ['Figma', 'Tailwind', 'React', 'Next.js', 'Laravel', 'Github', 'PGSQL', 'Redis', 'AWS'],
            techStackItems: [
                { name: 'Figma', icon: 'images/logos/figma.svg' },
                { name: 'Tailwind', icon: 'images/logos/tailwind.svg' },
                { name: 'React', icon: 'images/logos/react.svg' },
                { name: 'Next.js', icon: 'images/logos/nextjs.svg' },
                { name: 'Laravel', icon: 'images/logos/laravel.svg' },
                { name: 'Github', icon: 'images/logos/github.svg' },
                { name: 'PGSQL', icon: 'images/logos/postgresql.svg' },
                { name: 'Redis', icon: 'images/logos/redis.svg' },
                { name: 'AWS', icon: 'images/logos/aws.svg' }
            ],
            image: 'https://via.placeholder.com/332x186/f0f0f0/000000?text=Skillboards',
            liveUrl: 'https://skillboards.app',
            githubUrl: 'https://github.com/RileyG-Dev/Skillboards',
            description: `As the infamous Man of too Many Hobbies, back in 2020 stuck in quarantine, I decided to learn to beatbox. As I learned, I found myself drowning in beatbox sounds - snares, kicks, bass, lip rolls, whistles, it was all too much to remember.

I envisioned an app with two simple columns - on the left, "Unlearned," and on the right, "Learned." The left column hosted a grid of cards, each representing a beatbox sound. As I learned new sounds, I'd move them over to the right column.

That idea grew into what Skillboards is today: a community platform built around "Skillboards" - like subreddits for specific skills - each with its own kanban-style progress tracker, learning content, discussion forums, and a personalized recommendation feed.

It's built on Laravel with Sanctum, Redis and PostgreSQL on the backend, and Next.js/React with Tailwind on the frontend, deployed on AWS. It's my most ambitious side project, and the one I'm proudest of.`
        },
        'suggestionbox': {
            slug: 'suggestionbox',
            title: 'SuggestionBox',
            company: 'Products',
            techStack: 'Expand tech stack',
            filterTags: ['Laravel', 'Next.js', 'React', 'TypeScript', 'Tailwind', 'PGSQL', 'AWS', 'Github'],
            techStackItems: [
                { name: 'Laravel', icon: 'images/logos/laravel.svg' },
                { name: 'Next.js', icon: 'images/logos/nextjs.svg' },
                { name: 'React', icon: 'images/logos/react.svg' },
                { name: 'TypeScript', icon: 'images/logos/typescript.svg' },
                { name: 'Tailwind', icon: 'images/logos/tailwind.svg' },
                { name: 'PGSQL + pgvector', icon: 'images/logos/postgresql.svg' },
                { name: 'AWS (SQS, Bedrock)', icon: 'images/logos/aws.svg' },
                { name: 'Anthropic Claude', icon: '🤖' },
                { name: 'Stripe', icon: '💳' },
                { name: 'Github', icon: 'images/logos/github.svg' }
            ],
            image: 'images/projects/suggestionbox.webp',
            liveUrl: 'https://creatorsuggestionbox.com',
            description: `SuggestionBox gives creators one branded link - a public, no-login page at /@handle - that they can drop in their bio and video descriptions, so every request their audience makes lands in one place.

Creators can also connect their YouTube, Instagram and Facebook accounts (read-only - it never posts as you), and SuggestionBox finds the requests buried in the comments: messages are filtered for spam, classified by an LLM, embedded and clustered, so everyone asking for the same video shows up as one ranked request instead of a pile of separate comments.

From there, creators can publish an optional public Idea Board where viewers vote, and move ideas from New to Considering to Planned to Made, so the people who asked find out when the video exists.

Built with Laravel 12 and PostgreSQL (with pgvector) on the backend, SQS queues for the analysis pipeline, swappable AI providers (Anthropic, Amazon Bedrock, Voyage embeddings), and Stripe for billing. Next.js 16, React 19, TypeScript and Tailwind on the frontend.`
        },
        'pollsandforms': {
            slug: 'pollsandforms',
            title: 'PollsAndForms',
            company: 'Products',
            techStack: 'Expand tech stack',
            filterTags: ['Laravel', 'Next.js', 'React', 'TypeScript', 'Tailwind', 'PGSQL', 'Redis', 'Github'],
            techStackItems: [
                { name: 'Laravel', icon: 'images/logos/laravel.svg' },
                { name: 'Next.js', icon: 'images/logos/nextjs.svg' },
                { name: 'React', icon: 'images/logos/react.svg' },
                { name: 'TypeScript', icon: 'images/logos/typescript.svg' },
                { name: 'Tailwind', icon: 'images/logos/tailwind.svg' },
                { name: 'PGSQL', icon: 'images/logos/postgresql.svg' },
                { name: 'Redis', icon: 'images/logos/redis.svg' },
                { name: 'Github', icon: 'images/logos/github.svg' }
            ],
            image: 'images/projects/pollsandforms.webp',
            liveUrl: 'https://pollsandforms.com',
            description: `PollsAndForms is a fast poll and form builder with private sharing links and a public opinion feed. I built it because most poll tools online are either bloated with features nobody needs or paywalled for basics like custom branding.

Laravel 12 and PostgreSQL on the backend, Next.js 16 on the frontend, with Google OAuth for sign-in.`
        },
        'mynextsteps': {
            slug: 'mynextsteps',
            title: 'My Next Steps',
            company: 'Products',
            techStack: 'Expand tech stack',
            filterTags: ['Laravel', 'Next.js', 'React', 'TypeScript', 'Tailwind', 'Github'],
            techStackItems: [
                { name: 'Laravel', icon: 'images/logos/laravel.svg' },
                { name: 'Next.js', icon: 'images/logos/nextjs.svg' },
                { name: 'React', icon: 'images/logos/react.svg' },
                { name: 'TypeScript', icon: 'images/logos/typescript.svg' },
                { name: 'Tailwind', icon: 'images/logos/tailwind.svg' },
                { name: 'Github', icon: 'images/logos/github.svg' }
            ],
            image: 'images/projects/mynextsteps.webp',
            liveUrl: 'https://mynextsteps.org',
            description: `My Next Steps is a multi-tenant SaaS for churches. Each church gets its own subdomain where members take a guided assessment of their current spiritual rhythms and get a personalized plan of next steps - resources, classes and groups matched to where they are today - then track their growth over time.

Church staff run their assessment and invite their team from a staff panel, and new churches are approved from a platform admin panel.

A Laravel 12 API on the backend, and a Next.js 16 / React 19 / TypeScript / Tailwind app for the marketing site and the admin, staff and member panels.`
        },
        'unslop': {
            slug: 'unslop-your-flyer',
            title: 'Unslop Your Flyer',
            company: 'Products',
            techStack: 'Expand tech stack',
            filterTags: ['Laravel', 'Next.js', 'React', 'TypeScript', 'Tailwind', 'MySQL', 'Github'],
            techStackItems: [
                { name: 'Laravel', icon: 'images/logos/laravel.svg' },
                { name: 'Next.js', icon: 'images/logos/nextjs.svg' },
                { name: 'React', icon: 'images/logos/react.svg' },
                { name: 'TypeScript', icon: 'images/logos/typescript.svg' },
                { name: 'Tailwind', icon: 'images/logos/tailwind.svg' },
                { name: 'MariaDB', icon: 'images/logos/mysql.svg' },
                { name: 'Anthropic Claude', icon: '🤖' },
                { name: 'Stripe', icon: '💳' },
                { name: 'Github', icon: 'images/logos/github.svg' }
            ],
            image: 'images/projects/unslop-your-flyer.webp',
            liveUrl: 'https://unslopyourflyer.com',
            description: `Unslop Your Flyer turns an over-decorated, obviously-AI flyer into one people will actually read - without changing a single fact. Upload your current flyer (or just describe your event or business), confirm the facts it read off, pick a theme direction and a layout, and it rebuilds the design as real, editable HTML/CSS instead of a generated image.

From there you can refine it by hand or by chat, resize it for Stories, and export it. There's a free critique-only Analyze mode and a no-account demo, and paid generations use credits that are only charged when a design actually lands.

A Laravel 13 API handles every Claude call, Next.js 16 with TypeScript and Tailwind powers the editor and export renderer, MariaDB in production, and Stripe for credit packs.`
        },
        'aicustomizer': {
            slug: 'ai-customizer',
            title: 'AI Customizer',
            company: 'Tools & Experiments',
            techStack: 'Expand tech stack',
            filterTags: ['React', 'TypeScript', 'Tailwind'],
            techStackItems: [
                { name: 'React', icon: 'images/logos/react.svg' },
                { name: 'TypeScript', icon: 'images/logos/typescript.svg' },
                { name: 'Tailwind', icon: 'images/logos/tailwind.svg' },
                { name: 'Chrome Extension', icon: '🧩' }
            ],
            image: 'https://via.placeholder.com/332x186/f0f0f0/000000?text=AI+Customizer',
            description: `AI Customizer is a Chrome extension that hides the AI features companies keep injecting into their products whether you asked for them or not - Google's AI Overviews, Gmail's Smart Compose UI, random "Ask AI" buttons and sidebars. It works entirely on-device: no accounts, no backend, no data collection.

It currently supports 18 sites and is still pre-launch - I haven't submitted it to the Chrome Web Store yet.`
        },
        'todoninja': {
            slug: 'todo-ninja',
            title: 'To-do Ninja',
            company: 'Tools & Experiments',
            techStack: 'Expand tech stack',
            filterTags: ['Laravel', 'Next.js', 'React', 'TypeScript', 'Tailwind', 'MySQL', 'Github'],
            techStackItems: [
                { name: 'Laravel', icon: 'images/logos/laravel.svg' },
                { name: 'Next.js', icon: 'images/logos/nextjs.svg' },
                { name: 'React', icon: 'images/logos/react.svg' },
                { name: 'TypeScript', icon: 'images/logos/typescript.svg' },
                { name: 'Tailwind', icon: 'images/logos/tailwind.svg' },
                { name: 'MySQL', icon: 'images/logos/mysql.svg' },
                { name: 'Github', icon: 'images/logos/github.svg' }
            ],
            image: 'images/projects/to-do-ninja.webp',
            liveUrl: 'https://to-do.ninja',
            githubUrl: 'https://github.com/RileyGWeb/to-do.ninja',
            description: `To-do Ninja is exactly what it sounds like: a to-do list app. Sometimes the best way to learn a new stack is to build something dead simple with it, so this one's my sandbox for trying out patterns before I bring them into bigger projects.

Laravel on the backend, Next.js and Tailwind on the frontend.`
        },
        'memorizeyourscripture': {
            slug: 'memorize-your-scripture',
            title: 'Memorize Your Scripture',
            company: 'Tools & Experiments',
            techStack: 'Expand tech stack',
            filterTags: ['Laravel', 'MySQL', 'Github'],
            techStackItems: [
                { name: 'Laravel', icon: 'images/logos/laravel.svg' },
                { name: 'MySQL', icon: 'images/logos/mysql.svg' },
                { name: 'Github', icon: 'images/logos/github.svg' },
                { name: 'Capacitor (iOS)', icon: '📱' }
            ],
            image: 'https://via.placeholder.com/332x186/f0f0f0/000000?text=Memorize+Your+Scripture',
            liveUrl: 'https://memorizeyourscripture.org',
            githubUrl: 'https://github.com/RileyGWeb/memorize-your-scripture',
            description: `Memorize Your Scripture helps you actually memorize scripture instead of just rereading it and hoping it sticks. It's a Laravel app that also ships as an iOS app via Capacitor, currently in TestFlight beta.

Laravel, Blade and Vite on the web side, wrapped for mobile with Capacitor.`
        },
        'dontatrophy': {
            slug: 'dont-atrophy',
            title: "Don't Atrophy",
            company: 'Tools & Experiments',
            techStack: 'Expand tech stack',
            filterTags: ['Laravel', 'Next.js', 'React', 'TypeScript', 'PGSQL', 'Github'],
            techStackItems: [
                { name: 'Laravel', icon: 'images/logos/laravel.svg' },
                { name: 'Next.js', icon: 'images/logos/nextjs.svg' },
                { name: 'React', icon: 'images/logos/react.svg' },
                { name: 'TypeScript', icon: 'images/logos/typescript.svg' },
                { name: 'PGSQL', icon: 'images/logos/postgresql.svg' },
                { name: 'Github', icon: 'images/logos/github.svg' },
                { name: 'Google Sign-In', icon: '🔑' }
            ],
            image: 'images/projects/dont-atrophy.webp',
            liveUrl: 'https://dont-atrophy.com',
            description: `Don't Atrophy is an ambient wellness companion that sits open on your desktop, watches the clock, and gently interrupts your workday with movement breaks - stretches, walks, breathing, hydration - on a schedule you define: your work hours, timezone, active days and reminder messages.

It works fully in guest mode with no account. Signing in (Google sign-in supported) adds streaks, progress history, groups and a leaderboard, and syncs your settings across devices.

Laravel 13 and PostgreSQL on the backend, Next.js 16, React 19 and TypeScript on the frontend.`
        },
        'chorechart': {
            slug: 'chorechart',
            title: 'ChoreChart.io',
            company: 'Tools & Experiments',
            techStack: 'Expand tech stack',
            filterTags: ['Laravel', 'Next.js', 'React', 'TypeScript', 'Tailwind', 'PGSQL', 'Github'],
            techStackItems: [
                { name: 'Laravel', icon: 'images/logos/laravel.svg' },
                { name: 'Next.js', icon: 'images/logos/nextjs.svg' },
                { name: 'React', icon: 'images/logos/react.svg' },
                { name: 'TypeScript', icon: 'images/logos/typescript.svg' },
                { name: 'Tailwind', icon: 'images/logos/tailwind.svg' },
                { name: 'PGSQL', icon: 'images/logos/postgresql.svg' },
                { name: 'Github', icon: 'images/logos/github.svg' }
            ],
            image: 'images/projects/chorechart.webp',
            liveUrl: 'https://chorechart.io',
            description: `ChoreChart is a free family chore chart. Each household gets a shared board where chores are assigned to a specific person or shared by everyone, scheduled anywhere from daily to yearly, and checked off by period - so everyone can see what's done, what's due, and who owns it, without the nagging.

It's one of my free tools on rileysfreetools.com: no subscription, no paywall.

Laravel 12 with Sanctum and PostgreSQL on the backend, Next.js 16, React 19, TypeScript and Tailwind on the frontend.`
        }
    },
    init() {
        // Reset scroll position to top on page load
        window.scrollTo(0, 0);

        // Compute current age from birth date, so it never goes stale
        this.age = this.calculateAge(this.birthDate);

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
    calculateAge(birthDate) {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    },
    handleRoute() {
        const hash = window.location.hash.substring(1);
        this.currentRoute = hash;

        // Reset all page states
        this.showAboutPage = false;
        this.showContactPage = false;
        this.showMyWork = false;

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
        this.contactMode = 'form'; // Reset to form mode when closing
    },
    setContactMode(mode) {
        this.contactMode = mode;
    },
    closeMyWork() {
        this.showMyWork = false;
    },
    openAboutPage() {
        this.showAboutPage = true;
    },
    openContactPage() {
        this.showContactPage = true;
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

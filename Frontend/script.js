// ===== HERO: Animated Text Rotation =====
const heroText = document.querySelector('.g-text');
const words = ["POTENTIAL", "SKILLS", "IDEAS"];
let currentIndex = 0;

function updateText() {
    heroText.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
}

setInterval(updateText, 4000);
updateText();

// ===== TESTIMONIALS: Carousel Navigation =====
let testimonialIndex = 0;

function showTestimonial(index) {
    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach(card => card.classList.add('hidden'));
    cards[index].classList.remove('hidden');
}

document.querySelector('.prev-btn')?.addEventListener('click', () => {
    testimonialIndex = (testimonialIndex - 1 + 3) % 3;
    showTestimonial(testimonialIndex);
});

document.querySelector('.next-btn')?.addEventListener('click', () => {
    testimonialIndex = (testimonialIndex + 1) % 3;
    showTestimonial(testimonialIndex);
});

// Auto-rotate testimonials every 8 seconds
setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % 3;
    showTestimonial(testimonialIndex);
}, 8000);

// ===== IDEA GENERATOR: Generate Coding Ideas =====
const ideaDatabase = {
    beginner: {
        web: [
            {
                title: 'Personal Portfolio Website',
                description: 'Build your first portfolio website showcasing your projects and skills using HTML, CSS, and JavaScript.',
                features: ['Responsive Design', 'Contact Form', 'Project Gallery', 'Smooth Animations']
            },
            {
                title: 'To-Do List App',
                description: 'Create a simple task management app where users can add, delete, and mark tasks as complete.',
                features: ['Local Storage', 'Add/Delete Tasks', 'Mark Complete', 'Filter Tasks']
            },
            {
                title: 'Weather App',
                description: 'Build a weather application using a free weather API to display current weather and forecasts.',
                features: ['API Integration', 'Real-time Data', 'Location Search', 'Temperature Conversion']
            }
        ],
        mobile: [
            {
                title: 'Calculator App',
                description: 'Develop a basic calculator app with all standard arithmetic operations.',
                features: ['Basic Math', 'Memory Functions', 'Dark Mode', 'History']
            },
            {
                title: 'Note-Taking App',
                description: 'Create an app where users can write, save, and organize their notes.',
                features: ['Create Notes', 'Delete Notes', 'Search', 'Categories']
            }
        ],
        ai: [
            {
                title: 'Sentiment Analysis Tool',
                description: 'Use a pre-trained model to analyze sentiment of text (positive/negative/neutral).',
                features: ['Text Input', 'Real-time Analysis', 'Accuracy Display', 'Visual Feedback']
            }
        ],
        game: [
            {
                title: 'Tic Tac Toe Game',
                description: 'Build the classic Tic Tac Toe game where users can play against the computer.',
                features: ['AI Opponent', 'Score Tracking', 'Responsive Design', 'Game Reset']
            }
        ],
        iot: [
            {
                title: 'Home Automation Dashboard',
                description: 'Create a dashboard to control smart home devices (simulated).',
                features: ['Device Control', 'Real-time Status', 'Automation Rules', 'Mobile Responsive']
            }
        ]
    },
    intermediate: {
        web: [
            {
                title: 'Social Media Clone',
                description: 'Build a simplified version of a social media platform with posts, likes, and comments.',
                features: ['User Authentication', 'Post Creation', 'Like/Comment', 'Real-time Updates']
            },
            {
                title: 'E-commerce Store',
                description: 'Create an online store with product catalog, shopping cart, and checkout.',
                features: ['Product Catalog', 'Shopping Cart', 'Payment Integration', 'Order Tracking']
            },
            {
                title: 'Blog Platform',
                description: 'Build a multi-user blogging platform with post creation, commenting, and categories.',
                features: ['CRUD Operations', 'User Profiles', 'Comments', 'Search & Filter']
            }
        ],
        mobile: [
            {
                title: 'Chat Application',
                description: 'Develop a real-time messaging app with user authentication.',
                features: ['Real-time Messaging', 'User Authentication', 'Notifications', 'Media Sharing']
            },
            {
                title: 'Fitness Tracker',
                description: 'Create an app to track workouts, calories, and fitness goals.',
                features: ['Workout Logging', 'Progress Charts', 'Goal Setting', 'Social Sharing']
            }
        ],
        ai: [
            {
                title: 'Movie Recommendation System',
                description: 'Build a recommendation engine that suggests movies based on user preferences.',
                features: ['Collaborative Filtering', 'User Ratings', 'Personalization', 'Top Picks']
            },
            {
                title: 'Image Classification App',
                description: 'Create an app that identifies objects in images using pre-trained models.',
                features: ['Image Upload', 'Real-time Classification', 'Confidence Score', 'Batch Processing']
            }
        ],
        game: [
            {
                title: 'Flappy Bird Clone',
                description: 'Recreate the popular Flappy Bird game with obstacles and scoring.',
                features: ['Physics Engine', 'Score System', 'Difficulty Levels', 'Leaderboard']
            }
        ],
        iot: [
            {
                title: 'Weather Monitoring System',
                description: 'Create an IoT system to monitor and log weather data from sensors.',
                features: ['Sensor Integration', 'Data Logging', 'Alerts', 'Historical Analysis']
            }
        ]
    },
    advanced: {
        web: [
            {
                title: 'Collaborative Code Editor',
                description: 'Build a real-time collaborative code editor with multiple users editing simultaneously.',
                features: ['Real-time Sync', 'Syntax Highlighting', 'User Cursors', 'Version History']
            },
            {
                title: 'Project Management Tool',
                description: 'Develop a comprehensive project management platform with teams, tasks, and analytics.',
                features: ['Team Management', 'Task Management', 'Analytics Dashboard', 'Real-time Updates']
            },
            {
                title: 'Video Streaming Platform',
                description: 'Create a platform for uploading, streaming, and managing video content.',
                features: ['Video Upload', 'Streaming', 'Playlist Management', 'Recommendations']
            }
        ],
        mobile: [
            {
                title: 'AR Navigation App',
                description: 'Build an augmented reality navigation app using GPS and camera.',
                features: ['GPS Integration', 'AR Overlay', 'Real-time Updates', 'Offline Maps']
            },
            {
                title: 'AI-Powered Health Coach',
                description: 'Create an AI health assistant that provides personalized workout and diet recommendations.',
                features: ['AI Recommendations', 'Health Tracking', 'Personalization', 'Social Integration']
            }
        ],
        ai: [
            {
                title: 'Chatbot with NLP',
                description: 'Build an intelligent chatbot using natural language processing for customer support.',
                features: ['NLP Engine', 'Intent Recognition', 'Context Awareness', 'Multi-language']
            },
            {
                title: 'Stock Price Prediction',
                description: 'Develop a machine learning model to predict stock prices using historical data.',
                features: ['Data Analysis', 'Model Training', 'Predictions', 'Visualization']
            }
        ],
        game: [
            {
                title: 'Multiplayer Online Game',
                description: 'Create a real-time multiplayer game with networking and physics.',
                features: ['Real-time Multiplayer', 'Physics Engine', 'Custom Maps', 'Leaderboards']
            }
        ],
        iot: [
            {
                title: 'Smart City Management System',
                description: 'Build a comprehensive system to manage traffic, energy, and utilities in a city.',
                features: ['IoT Integration', 'Data Analytics', 'Predictive Maintenance', 'Optimization']
            }
        ]
    }
};

document.querySelector('.generate-idea-btn')?.addEventListener('click', () => {
    const skillLevel = document.getElementById('skillLevel')?.value || 'beginner';
    const interest = document.getElementById('interest')?.value || 'web';
    
    const ideas = ideaDatabase[skillLevel]?.[interest] || [];
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    
    if (randomIdea) {
        const ideaCard = document.querySelector('.idea-card');
        document.getElementById('ideaTitle').textContent = randomIdea.title;
        document.getElementById('ideaDescription').textContent = randomIdea.description;
        document.getElementById('ideaFeatures').innerHTML = 
            '<ul>' + randomIdea.features.map(f => `<li>✓ ${f}</li>`).join('') + '</ul>';
        
        ideaCard.classList.remove('hidden');
    }
});

// ===== NEWSLETTER: Handle Subscription =====
document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value;
    
    if (email) {
        alert(`✓ Successfully subscribed with ${email}!\n\nCheck your inbox for our latest updates.`);
        document.getElementById('newsletterForm').reset();
    }
});

// ===== EXPLORE GUEST: Show Demo Content =====
document.getElementById('exploreGuestBtn')?.addEventListener('click', () => {
    alert('Explore Mode\n\nYou can browse all courses and challenges without signing up.\nCreate an account to track your progress and earn certifications!');
});

// ===== SMOOTH SCROLL BEHAVIOR =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== INTERSECTION OBSERVER: Fade-in Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.intro-card, .step-card, .course-card, .challenge-card, .community-card').forEach(el => {
    observer.observe(el);
});
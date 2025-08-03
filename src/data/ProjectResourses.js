const projects = [
  // Web Development Projects
  {
    projectName: "Event Webpage",
    description: "Build a responsive event landing page using HTML, CSS, and basic JavaScript to display event info and collect signups.",
    resources: [
      "https://www.geeksforgeeks.org/web-development-projects/"
    ],
    category: "Web Development"
  },
  {
    projectName: "Personal Blog",
    description: "Create a personal blog with posts, categories, and SEO-friendly routing using frontend frameworks or plain HTML/CSS.",
    resources: [
      "https://www.odinschool.com/blog/best-web-development-project-ideas-beginners-to-advance"
    ],
    category: "Web Development"
  },
  {
    projectName: "Social Media Dashboard",
    description: "Design an interactive dashboard to display user stats like likes, followers, and shares using APIs and data visualization.",
    resources: [
      "https://www.odinschool.com/blog/best-web-development-project-ideas-beginners-to-advance"
    ],
    category: "Web Development"
  },
  {
    projectName: "Portfolio Gallery",
    description: "Create a flexible grid-based image or video portfolio using CSS Flexbox/Grid and JavaScript animations for transitions.",
    resources: [
      "https://www.geeksforgeeks.org/web-development-projects/"
    ],
    category: "Web Development"
  },
  {
    projectName: "E-Commerce Platform",
    description: "Build a basic e-commerce website with product listings, homepage, shopping cart, and a checkout page.",
    resources: [
      "https://www.odinschool.com/blog/best-web-development-project-ideas-beginners-to-advance"
    ],
    category: "Web Development"
  },

   // Android Development Projects
  {
    projectName: "Music Player App",
    description: "Develop an Android music player to play local media files with features like playlists, shuffle, and repeat.",
    resources: [
      "https://www.zegocloud.com/blog/android-projects"
    ],
    category: "Android Development"
  },
  {
    projectName: "Quiz App",
    description: "Create a quiz app that presents multiple-choice questions and tracks the user's score at the end.",
    resources: [
      "https://www.geeksforgeeks.org/android/android-project-ideas/"
    ],
    category: "Android Development"
  },
  {
    projectName: "Weather App",
    description: "Build an Android app that fetches live weather data for a given location using a weather API.",
    resources: [
      "https://www.geeksforgeeks.org/android/android-project-ideas/"
    ],
    category: "Android Development"
  },
  {
    projectName: "E-Banking App",
    description: "Design a simulated e-banking app interface with login, balance check, and transaction history features.",
    resources: [
      "https://www.zegocloud.com/blog/android-projects"
    ],
    category: "Android Development"
  },
  {
    projectName: "Tic Tac Toe Game App",
    description: "Develop the classic Tic Tac Toe game using a simple Android interface with alert-based game outcomes.",
    resources: [
      "https://www.zegocloud.com/blog/android-projects"
    ],
    category: "Android Development"
  },

    // AI Projects
  {
    projectName: "Smart Pool Project",
    description: "Create an AI-driven system to balance pool water levels by monitoring and adjusting using sensors and logic.",
    resources: [
      "https://thestempedia.com/blog/7-best-ai-project-ideas-for-beginners/"
    ],
    category: "AI"
  },
  {
    projectName: "Life-Saving Robot",
    description: "Design a robot concept equipped with AI to assist in disaster rescue scenarios, identifying patterns for safety.",
    resources: [
      "https://thestempedia.com/blog/7-best-ai-project-ideas-for-beginners/"
    ],
    category: "AI"
  },
  {
    projectName: "AI-Powered Personal Health Assistant",
    description: "Build an assistant that provides daily health recommendations using AI based on user preferences and habits.",
    resources: [
      "https://blog.devops.dev/ai-projects-to-build-this-weekend-2025-edition-cbf503b11175"
    ],
    category: "AI"
  },
  {
    projectName: "AI-Based Medical Diagnosis System",
    description: "Use pattern recognition and classifiers to predict potential diseases based on symptom input using AI models.",
    resources: [
      "https://www.simplilearn.com/tutorials/artificial-intelligence-tutorial/ai-project-ideas"
    ],
    category: "AI"
  },
  {
    projectName: "Autonomous Driving System",
    description: "Design a simulation showcasing AI decision-making in navigating roads, obstacles, and signals autonomously.",
    resources: [
      "https://www.simplilearn.com/tutorials/artificial-intelligence-tutorial/ai-project-ideas"
    ],
    category: "AI"
  },

    // ML Projects
  {
    projectName: "Speech Emotion Recognition",
    description: "Train a model to classify emotional states like happy, sad, angry, etc., from audio speech data.",
    resources: [
      "https://data-flair.training/blogs/machine-learning-project-ideas/"
    ],
    category: "ML"
  },
  {
    projectName: "Handwritten Character Recognition",
    description: "Use neural networks like CNN to recognize characters or digits from handwritten image datasets.",
    resources: [
      "https://data-flair.training/blogs/machine-learning-project-ideas/"
    ],
    category: "ML"
  },
  {
    projectName: "Credit Card Fraud Detection",
    description: "Build a classification model that detects fraudulent transactions using transaction metadata.",
    resources: [
      "https://data-flair.training/blogs/machine-learning-project-ideas/"
    ],
    category: "ML"
  },
  {
    projectName: "Online Grocery Recommendation",
    description: "Create a content-based filtering model to suggest grocery items based on user behavior and purchases.",
    resources: [
      "https://data-flair.training/blogs/machine-learning-project-ideas/"
    ],
    category: "ML"
  },
  {
    projectName: "Real Estate Price Prediction",
    description: "Predict property prices using regression models trained on dataset features like location, area, and amenities.",
    resources: [
      "https://www.geeksforgeeks.org/machine-learning-projects/"
    ],
    category: "ML"
  },

    // IoT Projects
  {
    projectName: "Home Energy Monitor",
    description: "Build a system that tracks electricity usage data and communicates it via IoT modules to a dashboard.",
    resources: [
      "https://github.com/topics/energy-monitor"
    ],
    category: "IoT"
  },
  {
    projectName: "Smart Garden Irrigation",
    description: "Automate garden watering using soil sensors and weather data deeply integrated with IoT control.",
    resources: [
      "https://github.com/topics/smart-garden"
    ],
    category: "IoT"
  },
  {
    projectName: "IoT-based Smart Arm",
    description: "Build a smart arm prototype with servo motors and sensors controlled wirelessly via Bluetooth or internet.",
    resources: [
      "https://www.simplilearn.com/internet-of-things-iot-projects-article"
    ],
    category: "IoT"
  },
  {
    projectName: "Smart Irrigation System",
    description: "Use IoT and moisture sensors to automate irrigation only when the soil is dry and conditions require it.",
    resources: [
      "https://www.simplilearn.com/internet-of-things-iot-projects-article"
    ],
    category: "IoT"
  },
  {
    projectName: "IoT Air Monitoring System",
    description: "Develop an air quality detection device using sensors to publish AQI data to the cloud in real time.",
    resources: [
      "https://www.simplilearn.com/internet-of-things-iot-projects-article"
    ],
    category: "IoT"
  },

   // Data Science Projects
  {
    projectName: "Quote Scraping",
    description: "Scrape inspirational quotes from websites and store them in a structured dataset for analysis.",
    resources: [
      "https://www.geeksforgeeks.org/top-data-science-projects/"
    ],
    category: "Data Science"
  },
  {
    projectName: "Zomato Data Analysis Using Python",
    description: "Analyze Zomato's restaurant dataset to generate insights into cuisines, locations, and cost categories.",
    resources: [
      "https://www.geeksforgeeks.org/top-data-science-projects/"
    ],
    category: "Data Science"
  },
  {
    projectName: "IPL Data Analysis",
    description: "Use Pandas and Matplotlib to analyze Indian Premier League data for performance insights and trends.",
    resources: [
      "https://www.geeksforgeeks.org/top-data-science-projects/"
    ],
    category: "Data Science"
  },
  {
    projectName: "Wine Quality Prediction",
    description: "Apply a classification model to predict the quality of wine based on physicochemical tests.",
    resources: [
      "https://www.geeksforgeeks.org/top-data-science-projects/"
    ],
    category: "Data Science"
  },
  {
    projectName: "Real Estate Property Scraping and Visualization",
    description: "Scrape price listings and visualize price trends and distributions using charts in Python.",
    resources: [
      "https://www.geeksforgeeks.org/top-data-science-projects/"
    ],
    category: "Data Science"
  },

  // Java Development Projects
  {
    projectName: "Student Performance Tracking System",
    description: "Create a Java application that records and analyzes student grades, attendance, and performance trends.",
    resources: [
      "https://projectgurukul.org/java-project-ideas/"
    ],
    category: "Java Development"
  },
  {
    projectName: "Online Medical Shop Management System",
    description: "Design a back-end inventory and front-end system to manage pharmacy customers and orders using Java.",
    resources: [
      "https://projectgurukul.org/java-project-ideas/"
    ],
    category: "Java Development"
  },
  {
    projectName: "Library Management System",
    description: "Build a CRUD-based Java application to manage book issuance, returns, and member registrations.",
    resources: [
      "https://www.geeksforgeeks.org/blogs/java-projects/"
    ],
    category: "Java Development"
  },
  {
    projectName: "Bank Management System",
    description: "Develop a console or GUI-based app that simulates banking features including withdrawal and deposits.",
    resources: [
      "https://www.geeksforgeeks.org/blogs/java-projects/"
    ],
    category: "Java Development"
  },
  {
    projectName: "Billing System",
    description: "Implement a Java billing and invoicing system that calculates totals, discounts, and generates receipts.",
    resources: [
      "https://projectgurukul.org/java-project-ideas/"
    ],
    category: "Java Development"
  }
];

export default projects;
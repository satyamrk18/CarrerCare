const courses = [
  {
  title: "Android Fundamentals",
  description: "Start building Android apps with Java and XML.",
  category: "Android Development",
  resources: [
    { url: "https://developer.android.com/courses", type: "Free" }
  ]
},
{
  title: "Intro to Machine Learning",
  description: "Understand the basics of ML, including supervised and unsupervised learning.",
  category: "ML",
  resources: [
    { url: "https://www.coursera.org/learn/machine-learning", type: "Paid" },
    { url: "https://www.udemy.com/course/machinelearning/", type: "Paid" }
  ]
},
{
  title: "Frontend Developer Bootcamp",
  description: "Master HTML, CSS, JavaScript, and responsive web design.",
  category: "Web Development",
  resources: [
    { url: "https://www.freecodecamp.org/learn", type: "Free" }
  ]
},
{
  title: "Modern JavaScript (ES6+)",
  description: "Understand modern JavaScript concepts and features for web apps.",
  category: "Web Development",
  resources: [
    { url: "https://javascript.info/", type: "Free" }
  ]
},
{
  title: "Full Stack Open",
  description: "Learn to build full-stack web applications with React, Node.js, and MongoDB.",
  category: "Web Development",
  resources: [
    { url: "https://fullstackopen.com/en/", type: "Free" }
  ]
},
{
  title: "Jetpack Compose Basics",
  description: "Learn modern Android UI development using Jetpack Compose.",
  category: "Android Development",
  resources: [
    { url: "https://developer.android.com/jetpack/compose", type: "Free" }
  ]
},
{
  title: "Kotlin for Android",
  description: "Build Android apps with Kotlin, the modern language for Android.",
  category: "Android Development",
  resources: [
    { url: "https://developer.android.com/kotlin", type: "Free" }
  ]
},
{
  title: "Introduction to Artificial Intelligence",
  description: "Learn the fundamentals of AI, including machine learning, neural networks, and real-world applications.",
  category: "AI",
  resources: [
    { url: "https://www.ibm.com/cloud/learn/what-is-artificial-intelligence", type: "Free" },
    { url: "https://developers.google.com/machine-learning/crash-course", type: "Free" }
  ]
},
{
  title: "Machine Learning Basics",
  description: "Understand supervised, unsupervised, and reinforcement learning, along with key algorithms and use cases.",
  category: "AI",
  resources: [
    { url: "https://www.coursera.org/learn/machine-learning", type: "Paid" },
    { url: "https://scikit-learn.org/stable/user_guide.html", type: "Free" }
  ]
},
{
  title: "Deep Learning with Neural Networks",
  description: "Dive into deep learning concepts including CNNs, RNNs, and transformers, and learn how to build AI models.",
  category: "AI",
  resources: [
    { url: "https://www.deeplearning.ai/", type: "Paid" },
    { url: "https://pytorch.org/tutorials/", type: "Free" }
  ]
},
{
  title: "Natural Language Processing (NLP)",
  description: "Explore techniques for text processing, sentiment analysis, and chatbot creation using AI.",
  category: "AI",
  resources: [
    { url: "https://huggingface.co/transformers/", type: "Free" },
    { url: "https://www.nltk.org/", type: "Free" }
  ]
},
{
  title: "AI Ethics and Responsible AI",
  description: "Understand the ethical challenges, bias issues, and best practices for building responsible AI systems.",
  category: "AI",
  resources: [
    { url: "https://ethicsinaction.ieee.org/", type: "Free" },
    { url: "https://ai.google/responsibility/", type: "Free" }
  ]
},
{
  title: "Deep Learning Specialization",
  description: "Master deep learning, neural networks, and backpropagation.",
  category: "ML",
  resources: [
    { url: "https://www.coursera.org/specializations/deep-learning", type: "Paid" }
  ]
},
{
  title: "AI For Everyone",
  description: "Non-technical course introducing the concepts and impact of AI.",
  category: "ML",
  resources: [
    { url: "https://www.coursera.org/learn/ai-for-everyone", type: "Paid" }
  ]
},
{
  title: "Introduction to IoT",
  description: "Learn the foundations of Internet of Things and its real-world applications.",
  category: "IoT",
  resources: [
    { url: "https://www.coursera.org/learn/iot", type: "Paid" }
  ]
},
{
  title: "IoT Networking and Protocols",
  description: "Explore communication protocols used in IoT devices and systems.",
  category: "IoT",
  resources: [
    { url: "https://www.edx.org/course/iot-communications", type: "Paid" }
  ]
},
{
  title: "Arduino Programming for IoT",
  description: "Build IoT projects using Arduino and sensor modules.",
  category: "IoT",
  resources: [
    { url: "https://create.arduino.cc/projecthub", type: "Free" }
  ]
},
{
  title: "Python for Data Science",
  description: "Analyze data using Python libraries like Pandas and NumPy.",
  category: "Data Science",
  resources: [
    { url: "https://www.datacamp.com/courses/intro-to-python-for-data-science", type: "Paid" }
  ]
},
{
  title: "Data Science Specialization",
  description: "Comprehensive program covering R, data wrangling, and visualization.",
  category: "Data Science",
  resources: [
    { url: "https://www.coursera.org/specializations/jhu-data-science", type: "Paid" }
  ]
},
{
  title: "SQL for Data Analysis",
  description: "Learn to query and analyze data using SQL.",
  category: "Data Science",
  resources: [
    { url: "https://mode.com/sql-tutorial/", type: "Free" }
  ]
},
{
  title: "Java Programming Masterclass",
  description: "Become a Java developer by mastering Java SE from scratch.",
  category: "Java Developer",
  resources: [
    { url: "https://www.udemy.com/course/java-the-complete-java-developer-course/", type: "Paid" }
  ]
},
{
  title: "Spring Boot for Beginners",
  description: "Build Java backend applications using Spring Boot framework.",
  category: "Java Developer",
  resources: [
    { url: "https://spring.io/guides", type: "Free" }
  ]
},
{
  title: "DSA in Java",
  description: "Learn Data Structures and Algorithms in Java for coding interviews.",
  category: "Java Developer",
  resources: [
    { url: "https://www.geeksforgeeks.org/data-structures/", type: "Free" }
  ]
}
,
  {
    title: "HTML & CSS Basics",
    description: "Master the core building blocks of web development, including HTML structure and CSS styling.",
    category: "Frontend Development",
    resources: [
      { url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web", type: "Free" },
      { url: "https://www.w3schools.com/html/", type: "Free" }
    ]
  }, // Free

{
  title: "JavaScript Fundamentals",
  description: "Learn the essential concepts of JavaScript, the programming language of the web.",
  category: "Frontend Development",
  resources: [
    { url: "https://javascript.info/", type: "Free" },
    { url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/", type: "Free" }
  ]
}, // Free

{
  title: "Responsive Web Design",
  description: "Understand how to make web pages look great on all devices using media queries and flexible layouts.",
  category: "Frontend Development",
  resources: [
    { url: "https://www.freecodecamp.org/learn/responsive-web-design/", type: "Free" },
    { url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design", type: "Free" }
  ]
}, // Free


{
  title: "Advanced CSS and Sass",
  description: "Enhance your styling skills with advanced CSS techniques and Sass for maintainable code.",
  category: "Frontend Development",
  resources: [
    { url: "https://sass-lang.com/guide", type: "Free" },
    { url: "https://css-tricks.com/snippets/css/complete-guide-grid/", type: "Free" }
  ]
}, // Free

{
  title: "Web Accessibility",
  description: "Learn how to make your websites usable by people of all abilities.",
  category: "Frontend Development",
  resources: [
    { url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/", type: "Free" },
    { url: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility", type: "Free" }
  ]
}, // Free,
{
  title: "Node.js Fundamentals",
  description: "Learn how to build backend applications using Node.js and understand the basics of server-side JavaScript.",
  category: "Backend Development",
  resources: [
    { url: "https://nodejs.dev/en/learn/", type: "Free" },
    { url: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/", type: "Paid" }
  ]
}, // Paid

{
  title: "Express.js Crash Course",
  description: "Get started with Express.js, the fast and minimalist web framework for Node.js.",
  category: "Backend Development",
  resources: [
    { url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction", type: "Free" },
    { url: "https://www.youtube.com/watch?v=L72fhGm1tfE", type: "Free" }
  ]
}, // Free

{
  title: "REST API Development",
  description: "Learn to design and build RESTful APIs using backend technologies.",
  category: "Backend Development",
  resources: [
    { url: "https://www.freecodecamp.org/news/rest-api-tutorial-rest-client-rest-service-and-api-calls-explained-with-code-examples/", type: "Free" },
    { url: "https://www.udemy.com/course/rest-api-design-the-complete-guide/", type: "Paid" }
  ]
}, // Paid

{
  title: "Databases with MongoDB",
  description: "Master MongoDB for building modern, scalable applications.",
  category: "Backend Development",
  resources: [
    { url: "https://www.mongodb.com/docs/manual/tutorial/getting-started/", type: "Free" },
    { url: "https://www.udemy.com/course/mongodb-the-complete-developers-guide/", type: "Paid" }
  ]
}, // Paid

{
  title: "Authentication & Authorization",
  description: "Understand how to secure backend applications with JWT, OAuth, and other methods.",
  category: "Backend Development",
  resources: [
    { url: "https://www.digitalocean.com/community/tutorial_series/oauth-2-0", type: "Free" },
    { url: "https://www.udemy.com/course/nodejs-jwt-authentication-oauth/", type: "Paid" }
  ]
}, // Paid

{
  title: "Backend Deployment",
  description: "Learn how to deploy backend applications to cloud platforms like Heroku, AWS, and Render.",
  category: "Backend Development",
  resources: [
    { url: "https://devcenter.heroku.com/articles/getting-started-with-nodejs", type: "Free" },
    { url: "https://www.udemy.com/course/aws-certified-developer-associate/", type: "Paid" }
  ]
} // Paid
,{
  title: "Full Stack Web Development with React and Node.js",
  description: "Learn to build complete web applications using React for the frontend and Node.js/Express for the backend.",
  category: "Full Stack Development",
  resources: [
    { url: "https://www.coursera.org/specializations/full-stack-react", type: "Paid" },
    { url: "https://fullstackopen.com/en/", type: "Free" }
  ]
},
{
  title: "MERN Stack Crash Course",
  description: "Get started with MongoDB, Express.js, React, and Node.js for building full-stack apps.",
  category: "Full Stack Development",
  resources: [
    { url: "https://www.youtube.com/watch?v=7CqJlxBYj-M", type: "Free" }
  ]
},
{
  title: "Django and React Full Stack",
  description: "Build a modern full stack app using Django for backend and React for frontend.",
  category: "Full Stack Development",
  resources: [
    { url: "https://www.udemy.com/course/django-with-react-an-ecommerce-website/", type: "Paid" }
  ]
},
{
  title: "Authentication in Full Stack Apps",
  description: "Learn authentication and authorization flows in full stack applications.",
  category: "Full Stack Development",
  resources: [
    { url: "https://www.digitalocean.com/community/tutorials/oauth-2-0", type: "Free" },
    { url: "https://www.udemy.com/course/full-stack-react-node-docker-mongodb-and-nginx/", type: "Paid" }
  ]
},
{
  title: "GraphQL for Full Stack Developers",
  description: "Integrate GraphQL APIs in full stack projects for flexible data fetching.",
  category: "Full Stack Development",
  resources: [
    { url: "https://graphql.org/learn/", type: "Free" },
    { url: "https://www.udemy.com/course/graphql-bootcamp/", type: "Paid" }
  ]
},
{
  title: "Full Stack Deployment",
  description: "Deploy full stack applications on platforms like Vercel, Heroku, and AWS.",
  category: "Full Stack Development",
  resources: [
    { url: "https://vercel.com/docs", type: "Free" },
    { url: "https://www.udemy.com/course/deploying-web-applications/", type: "Paid" }
  ]
},
{
  title: "iOS Development with Swift",
  description: "Learn to build native iOS apps using Swift and Xcode.",
  category: "iOS Development",
  resources: [
    { url: "https://developer.apple.com/learn/curriculum/", type: "Free" },
    { url: "https://www.udemy.com/course/ios-13-app-development-bootcamp/", type: "Paid" }
  ]
},
{
  title: "Swift Programming Fundamentals",
  description: "Understand the basics of Swift programming language for iOS development.",
  category: "iOS Development",
  resources: [
    { url: "https://www.hackingwithswift.com/100", type: "Free" },
    { url: "https://www.udemy.com/course/swift-programming-for-beginners/", type: "Paid" }
  ]
},
{
  title: "SwiftUI Essentials",
  description: "Master building user interfaces with SwiftUI framework.",
  category: "iOS Development",
  resources: [
    { url: "https://developer.apple.com/tutorials/swiftui", type: "Free" },
    { url: "https://www.udemy.com/course/swiftui-masterclass-course-ios-development-with-swift/", type: "Paid" }
  ]
},
{
  title: "Core Data for iOS",
  description: "Learn how to store and manage data locally in iOS apps with Core Data.",
  category: "iOS Development",
  resources: [
    { url: "https://www.raywenderlich.com/7569-getting-started-with-core-data-tutorial", type: "Free" },
    { url: "https://www.udemy.com/course/core-data-in-ios/", type: "Paid" }
  ]
},
{
  title: "iOS Networking with URLSession & Combine",
  description: "Understand how to work with APIs and networking in iOS apps.",
  category: "iOS Development",
  resources: [
    { url: "https://developer.apple.com/documentation/foundation/urlsession", type: "Free" },
    { url: "https://www.udemy.com/course/networking-with-swift/", type: "Paid" }
  ]
},
{
  title: "UIKit for iOS",
  description: "Learn to build interfaces and manage user interactions using UIKit.",
  category: "iOS Development",
  resources: [
    { url: "https://developer.apple.com/documentation/uikit", type: "Free" },
    { url: "https://www.udemy.com/course/uikit-fundamentals-for-ios-development/", type: "Paid" }
  ]
},
{
  title: "App Store Submission & Deployment",
  description: "Learn how to prepare and submit iOS apps to the App Store.",
  category: "iOS Development",
  resources: [
    { url: "https://developer.apple.com/ios/submit/", type: "Free" },
    { url: "https://www.udemy.com/course/ios-app-store-submission-guide/", type: "Paid" }
  ]
},
{
  title: "ARKit for iOS",
  description: "Build augmented reality apps using Apple's ARKit framework.",
  category: "iOS Development",
  resources: [
    { url: "https://developer.apple.com/augmented-reality/", type: "Free" },
    { url: "https://www.udemy.com/course/arkit-course/", type: "Paid" }
  ]
},
{
  title: "Testing and Debugging in Xcode",
  description: "Learn to test and debug iOS applications effectively using Xcode tools.",
  category: "iOS Development",
  resources: [
    { url: "https://developer.apple.com/documentation/xcode/testing-your-apps-in-simulator", type: "Free" },
    { url: "https://www.udemy.com/course/unit-testing-in-ios-with-xctest/", type: "Paid" }
  ]
},
{
  title: "Introduction to Cybersecurity",
  description: "Understand the basics of cybersecurity, including threats, vulnerabilities, and defense strategies.",
  category: "Cybersecurity",
  resources: [
    { url: "https://www.cisco.com/c/en/us/training-events/training-certifications/exams/current-list/intro-cybersecurity.html", type: "Free" },
    { url: "https://www.udemy.com/course/the-complete-cyber-security-course-hackers-exposed/", type: "Paid" }
  ]
},
{
  title: "Network Security Fundamentals",
  description: "Learn how to protect networks from cyber threats using firewalls, VPNs, and intrusion detection systems.",
  category: "Cybersecurity",
  resources: [
    { url: "https://www.cybrary.it/course/network-security-fundamentals/", type: "Free" },
    { url: "https://www.udemy.com/course/network-security-course/", type: "Paid" }
  ]
},
{
  title: "Ethical Hacking",
  description: "Learn penetration testing techniques to identify and fix vulnerabilities.",
  category: "Cybersecurity",
  resources: [
    { url: "https://www.hacker101.com/", type: "Free" },
    { url: "https://www.udemy.com/course/learn-ethical-hacking-from-scratch/", type: "Paid" }
  ]
},
{
  title: "Web Application Security",
  description: "Understand common web vulnerabilities like SQL injection, XSS, and CSRF, and how to prevent them.",
  category: "Cybersecurity",
  resources: [
    { url: "https://owasp.org/www-project-top-ten/", type: "Free" },
    { url: "https://www.udemy.com/course/web-application-security-testing/", type: "Paid" }
  ]
},
{
  title: "Cloud Security",
  description: "Learn to secure cloud environments like AWS, Azure, and Google Cloud.",
  category: "Cybersecurity",
  resources: [
    { url: "https://aws.amazon.com/security/", type: "Free" },
    { url: "https://www.udemy.com/course/aws-certified-security-specialty/", type: "Paid" }
  ]
},
{
  title: "Digital Forensics",
  description: "Master techniques for investigating cybercrimes and collecting digital evidence.",
  category: "Cybersecurity",
  resources: [
    { url: "https://www.coursera.org/learn/digital-forensics", type: "Free" },
    { url: "https://www.udemy.com/course/digital-forensics-masterclass/", type: "Paid" }
  ]
},
{
  title: "Incident Response & Threat Hunting",
  description: "Learn how to detect, respond to, and mitigate cybersecurity incidents.",
  category: "Cybersecurity",
  resources: [
    { url: "https://www.sans.org/cyber-security-courses/incident-response/", type: "Free" },
    { url: "https://www.udemy.com/course/incident-response-and-threat-hunting-course/", type: "Paid" }
  ]
}



]

export default courses;

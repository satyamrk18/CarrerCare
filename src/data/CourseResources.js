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
},[
  // ================= Cybersecurity =================
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
  },

  // ================= Cloud Computing =================
  {
    title: "Cloud Computing Basics",
    description: "Understand the fundamentals of cloud services, deployment models, and architectures.",
    category: "Cloud Computing",
    resources: [
      { url: "https://aws.amazon.com/what-is-cloud-computing/", type: "Free" },
      { url: "https://www.udemy.com/course/introduction-to-cloud-computing/", type: "Paid" }
    ]
  },
  {
    title: "AWS Fundamentals",
    description: "Learn to use AWS cloud services including EC2, S3, and RDS.",
    category: "Cloud Computing",
    resources: [
      { url: "https://aws.amazon.com/training/", type: "Free" },
      { url: "https://www.udemy.com/course/aws-certified-solutions-architect-associate/", type: "Paid" }
    ]
  },
  {
    title: "Microsoft Azure Basics",
    description: "Get started with Azure's cloud offerings, including virtual machines, storage, and databases.",
    category: "Cloud Computing",
    resources: [
      { url: "https://learn.microsoft.com/en-us/training/azure/", type: "Free" },
      { url: "https://www.udemy.com/course/az-900-azure-fundamentals/", type: "Paid" }
    ]
  },
  {
    title: "Google Cloud Platform Essentials",
    description: "Learn GCP services for computing, storage, and AI applications.",
    category: "Cloud Computing",
    resources: [
      { url: "https://cloud.google.com/training", type: "Free" },
      { url: "https://www.udemy.com/course/google-cloud-certification-training/", type: "Paid" }
    ]
  },
  {
    title: "Cloud Security",
    description: "Learn best practices for securing cloud applications and infrastructure.",
    category: "Cloud Computing",
    resources: [
      { url: "https://cloudsecurityalliance.org/", type: "Free" },
      { url: "https://www.udemy.com/course/cloud-security-fundamentals/", type: "Paid" }
    ]
  },
  {
    title: "Serverless Computing",
    description: "Explore serverless architectures and platforms like AWS Lambda and Azure Functions.",
    category: "Cloud Computing",
    resources: [
      { url: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview", type: "Free" },
      { url: "https://www.udemy.com/course/aws-serverless-a-complete-introduction/", type: "Paid" }
    ]
  },
  {
    title: "Cloud DevOps",
    description: "Learn how DevOps practices are implemented in cloud environments.",
    category: "Cloud Computing",
    resources: [
      { url: "https://cloud.google.com/devops", type: "Free" },
      { url: "https://www.udemy.com/course/devops-on-aws/", type: "Paid" }
    ]
  }
    
],
// Cloud Computing
{
  title: "Introduction to Cloud Computing",
  description: "Learn the basics of cloud computing, service models, and deployment methods.",
  category: "Cloud Computing",
  resources: [
    { url: "https://www.ibm.com/cloud/learn/cloud-computing", type: "Free" },
    { url: "https://www.udemy.com/course/introduction-to-cloud-computing/", type: "Paid" }
  ]
},
{
  title: "AWS Fundamentals",
  description: "Understand Amazon Web Services core services and architecture.",
  category: "Cloud Computing",
  resources: [
    { url: "https://aws.amazon.com/training/", type: "Free" },
    { url: "https://www.udemy.com/course/aws-certified-solutions-architect-associate/", type: "Paid" }
  ]
},
{
  title: "Microsoft Azure Basics",
  description: "Learn the essentials of Microsoft's cloud platform Azure.",
  category: "Cloud Computing",
  resources: [
    { url: "https://learn.microsoft.com/en-us/training/azure/", type: "Free" },
    { url: "https://www.udemy.com/course/azure-fundamentals/", type: "Paid" }
  ]
},
{
  title: "Google Cloud Platform Essentials",
  description: "Understand GCP's core services and cloud architecture.",
  category: "Cloud Computing",
  resources: [
    { url: "https://cloud.google.com/training", type: "Free" },
    { url: "https://www.udemy.com/course/google-cloud-platform-gcp-for-beginners/", type: "Paid" }
  ]
},
{
  title: "Cloud Security",
  description: "Learn security best practices for cloud environments.",
  category: "Cloud Computing",
  resources: [
    { url: "https://aws.amazon.com/security/", type: "Free" },
    { url: "https://www.udemy.com/course/aws-certified-security-specialty/", type: "Paid" }
  ]
},
{
  title: "Serverless Computing",
  description: "Master serverless applications and architectures in AWS Lambda and more.",
  category: "Cloud Computing",
  resources: [
    { url: "https://www.serverless.com/learn", type: "Free" },
    { url: "https://www.udemy.com/course/aws-lambda-serverless-architecture/", type: "Paid" }
  ]
},

// DevOps
{
  title: "Introduction to DevOps",
  description: "Understand DevOps culture, tools, and practices.",
  category: "DevOps",
  resources: [
    { url: "https://azure.microsoft.com/en-us/overview/devops-tutorial/", type: "Free" },
    { url: "https://www.udemy.com/course/the-complete-devops-engineer-course-2-0/", type: "Paid" }
  ]
},
{
  title: "CI/CD Pipelines",
  description: "Learn continuous integration and deployment with popular tools.",
  category: "DevOps",
  resources: [
    { url: "https://docs.github.com/en/actions", type: "Free" },
    { url: "https://www.udemy.com/course/ci-cd-pipeline-jenkins/", type: "Paid" }
  ]
},
{
  title: "Docker Essentials",
  description: "Understand containerization and Docker fundamentals.",
  category: "DevOps",
  resources: [
    { url: "https://docker-curriculum.com/", type: "Free" },
    { url: "https://www.udemy.com/course/docker-mastery/", type: "Paid" }
  ]
},
{
  title: "Kubernetes Basics",
  description: "Learn how to orchestrate containers using Kubernetes.",
  category: "DevOps",
  resources: [
    { url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/", type: "Free" },
    { url: "https://www.udemy.com/course/learn-kubernetes/", type: "Paid" }
  ]
},
{
  title: "Infrastructure as Code",
  description: "Automate infrastructure management with tools like Terraform.",
  category: "DevOps",
  resources: [
    { url: "https://developer.hashicorp.com/terraform/tutorials", type: "Free" },
    { url: "https://www.udemy.com/course/terraform-beginner-to-advanced/", type: "Paid" }
  ]
},
{
  title: "Monitoring & Logging",
  description: "Implement system monitoring and logging with tools like Prometheus and ELK Stack.",
  category: "DevOps",
  resources: [
    { url: "https://prometheus.io/docs/introduction/overview/", type: "Free" },
    { url: "https://www.udemy.com/course/monitoring-systems-with-prometheus-and-grafana/", type: "Paid" }
  ]
},
  {
    title: "Blockchain Basics",
    description: "Understand blockchain technology, its components, and applications in various industries.",
    category: "Blockchain Development",
    resources: [
      { url: "https://www.ibm.com/topics/what-is-blockchain", type: "Free" },
      { url: "https://www.coursera.org/learn/blockchain-basics", type: "Free" }
    ]
  },
  {
    title: "Ethereum and Smart Contracts",
    description: "Learn to build decentralized applications (dApps) using Ethereum and smart contracts.",
    category: "Blockchain Development",
    resources: [
      { url: "https://ethereum.org/en/developers/docs/", type: "Free" },
      { url: "https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/", type: "Paid" }
    ]
  },
  {
    title: "Solidity Programming",
    description: "Master Solidity for writing secure and efficient smart contracts.",
    category: "Blockchain Development",
    resources: [
      { url: "https://docs.soliditylang.org/en/v0.8.20/", type: "Free" },
      { url: "https://cryptozombies.io/", type: "Free" }
    ]
  },
  {
    title: "Hyperledger Fabric",
    description: "Learn enterprise blockchain development with Hyperledger Fabric.",
    category: "Blockchain Development",
    resources: [
      { url: "https://www.hyperledger.org/use/fabric", type: "Free" },
      { url: "https://www.udemy.com/course/hyperledger-fabric-and-composer/", type: "Paid" }
    ]
  },
  {
    title: "Blockchain Security",
    description: "Learn how to secure blockchain applications and smart contracts.",
    category: "Blockchain Development",
    resources: [
      { url: "https://consensys.net/blog/developers/solidity-security-best-practices/", type: "Free" },
      { url: "https://www.udemy.com/course/blockchain-and-bitcoin-fundamentals/", type: "Paid" }
    ]
  },
  {
    title: "DeFi Development",
    description: "Understand and build decentralized finance (DeFi) applications.",
    category: "Blockchain Development",
    resources: [
      { url: "https://ethereum.org/en/defi/", type: "Free" },
      { url: "https://www.udemy.com/course/defi-decentralized-finance-course-2021/", type: "Paid" }
    ]
  },

  // Game Development
  {
    title: "Introduction to Game Development",
    description: "Learn the fundamentals of designing and creating games.",
    category: "Game Development",
    resources: [
      { url: "https://learn.unity.com/", type: "Free" },
      { url: "https://www.udemy.com/course/unitycourse/", type: "Paid" }
    ]
  },
  {
    title: "Unity 3D Game Development",
    description: "Create 2D and 3D games using the Unity engine.",
    category: "Game Development",
    resources: [
      { url: "https://learn.unity.com/pathway/junior-programmer", type: "Free" },
      { url: "https://www.udemy.com/course/complete-unity-developer-2d/", type: "Paid" }
    ]
  },
  {
    title: "Unreal Engine Development",
    description: "Build high-quality games using Unreal Engine and C++.",
    category: "Game Development",
    resources: [
      { url: "https://docs.unrealengine.com/", type: "Free" },
      { url: "https://www.udemy.com/course/unrealcourse/", type: "Paid" }
    ]
  },
  {
    title: "Game Design Principles",
    description: "Learn core game design principles, storytelling, and mechanics.",
    category: "Game Development",
    resources: [
      { url: "https://www.gamedesigning.org/learn/", type: "Free" },
      { url: "https://www.coursera.org/specializations/game-design", type: "Mixed" }
    ]
  },
  {
    title: "2D Pixel Art for Games",
    description: "Create pixel art assets for 2D games.",
    category: "Game Development",
    resources: [
      { url: "https://www.youtube.com/playlist?list=PLv8DnRaQOs5-ST_VDqgbbMRtzZK2sY6jE", type: "Free" },
      { url: "https://www.udemy.com/course/pixel-art-for-video-games/", type: "Paid" }
    ]
  },
  {
    title: "Multiplayer Game Development",
    description: "Learn how to develop multiplayer games and networking concepts.",
    category: "Game Development",
    resources: [
      { url: "https://www.youtube.com/watch?v=hxMW1t9GQh8", type: "Free" },
      { url: "https://www.udemy.com/course/unity-multiplayer/", type: "Paid" }
    ]
  },

  // AR/VR Development
  {
    title: "Introduction to AR/VR",
    description: "Understand augmented and virtual reality concepts and tools.",
    category: "AR/VR Development",
    resources: [
      { url: "https://developer.oculus.com/learn/", type: "Free" },
      { url: "https://www.udemy.com/course/augmented-reality-development-course/", type: "Paid" }
    ]
  },
  {
    title: "Unity AR Foundation",
    description: "Build AR applications using Unity's AR Foundation.",
    category: "AR/VR Development",
    resources: [
      { url: "https://learn.unity.com/", type: "Free" },
      { url: "https://www.udemy.com/course/augmented-reality-with-unity-ar-foundation/", type: "Paid" }
    ]
  },
  {
    title: "VR Development with Unreal Engine",
    description: "Create immersive VR experiences with Unreal Engine.",
    category: "AR/VR Development",
    resources: [
      { url: "https://docs.unrealengine.com/5.0/en-US/working-with-vr-in-unreal-engine/", type: "Free" },
      { url: "https://www.udemy.com/course/unreal-vr-development/", type: "Paid" }
    ]
  },
  {
    title: "ARKit and ARCore",
    description: "Develop AR applications for iOS and Android using ARKit and ARCore.",
    category: "AR/VR Development",
    resources: [
      { url: "https://developers.google.com/ar", type: "Free" },
      { url: "https://www.udemy.com/course/arkit-arkit2-and-arcore-arcore2-mobile-augmented-reality/", type: "Paid" }
    ]
  },
  {
    title: "360 Video Production",
    description: "Learn to create 360-degree video content for VR headsets.",
    category: "AR/VR Development",
    resources: [
      { url: "https://creatoracademy.youtube.com/page/lesson/360-video-vr", type: "Free" },
      { url: "https://www.udemy.com/course/360-vr-video-production-and-editing-masterclass/", type: "Paid" }
    ]
  },
  {
    title: "Mixed Reality Development",
    description: "Explore mixed reality technologies and create interactive experiences.",
    category: "AR/VR Development",
    resources: [
      { url: "https://docs.microsoft.com/en-us/windows/mixed-reality/", type: "Free" },
      { url: "https://www.udemy.com/course/mixed-reality-development-course/", type: "Paid" }
    ]
  },{
  title: "UI/UX Design Fundamentals",
  description: "Learn the principles of user interface and user experience design for web and mobile applications.",
  category: "UI/UX Design",
  resources: [
    { url: "https://www.interaction-design.org/courses/ui-design-patterns-for-successful-software", type: "Paid" },
    { url: "https://www.coursera.org/learn/ui-ux-design", type: "Paid" }
  ]
},
{
  title: "Figma for Beginners",
  description: "Get started with Figma to create responsive and interactive UI designs.",
  category: "UI/UX Design",
  resources: [
    { url: "https://help.figma.com/hc/en-us/articles/360040528034-Get-started-in-Figma", type: "Free" },
    { url: "https://www.udemy.com/course/learn-figma/", type: "Paid" }
  ]
},
{
  title: "Design Thinking",
  description: "Master design thinking methodologies to create user-centered products.",
  category: "UI/UX Design",
  resources: [
    { url: "https://www.coursera.org/learn/design-thinking", type: "Paid" },
    { url: "https://www.ideou.com/pages/design-thinking", type: "Paid" }
  ]
},
{
  title: "Prototyping and Wireframing",
  description: "Learn how to create prototypes and wireframes to visualize user flows.",
  category: "UI/UX Design",
  resources: [
    { url: "https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/", type: "Free" },
    { url: "https://www.udemy.com/course/prototyping-for-beginners/", type: "Paid" }
  ]
},
{
  title: "Accessibility in Design",
  description: "Ensure your designs are accessible to all users by following accessibility guidelines.",
  category: "UI/UX Design",
  resources: [
    { url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/", type: "Free" },
    { url: "https://www.udemy.com/course/web-accessibility/", type: "Paid" }
  ]
},
{
  title: "Advanced UI Animation",
  description: "Create engaging and interactive animations in your UI designs.",
  category: "UI/UX Design",
  resources: [
    { url: "https://www.smashingmagazine.com/2018/01/animation-user-experience/", type: "Free" },
    { url: "https://motiondesign.school/products/ui-animations", type: "Paid" }
  ]
},

{
  title: "Database Fundamentals",
  description: "Learn database basics including relational models, SQL, and ER diagrams.",
  category: "Database Administration",
  resources: [
    { url: "https://www.khanacademy.org/computing/computer-programming/sql", type: "Free" },
    { url: "https://www.udemy.com/course/sql-database-for-beginners/", type: "Paid" }
  ]
},
{
  title: "MySQL Administration",
  description: "Master the core skills for managing and maintaining MySQL databases.",
  category: "Database Administration",
  resources: [
    { url: "https://dev.mysql.com/doc/", type: "Free" },
    { url: "https://www.udemy.com/course/mysql-database-administration-for-beginners/", type: "Paid" }
  ]
},
{
  title: "PostgreSQL for Developers",
  description: "Learn PostgreSQL database creation, queries, and optimization techniques.",
  category: "Database Administration",
  resources: [
    { url: "https://www.postgresql.org/docs/", type: "Free" },
    { url: "https://www.udemy.com/course/postgresql-for-everybody/", type: "Paid" }
  ]
},
{
  title: "Database Security",
  description: "Understand database security concepts and learn how to secure your data.",
  category: "Database Administration",
  resources: [
    { url: "https://www.ibm.com/topics/database-security", type: "Free" },
    { url: "https://www.pluralsight.com/courses/database-security", type: "Paid" }
  ]
},
{
  title: "Oracle Database Administration",
  description: "Get hands-on experience with Oracle database management and optimization.",
  category: "Database Administration",
  resources: [
    { url: "https://docs.oracle.com/en/database/", type: "Free" },
    { url: "https://www.udemy.com/course/oracle-database-administration-for-beginners/", type: "Paid" }
  ]
},
{
  title: "Backup and Recovery Strategies",
  description: "Learn how to implement robust database backup and recovery plans.",
  category: "Database Administration",
  resources: [
    { url: "https://www.sqlshack.com/sql-server-backup-and-restore/", type: "Free" },
    { url: "https://www.udemy.com/course/sql-server-high-availability-disaster-recovery-hadr/", type: "Paid" }
  ]
},

{
  title: "Software Testing Fundamentals",
  description: "Learn the basics of software testing including unit, integration, and system testing.",
  category: "Software Testing / QA",
  resources: [
    { url: "https://www.guru99.com/software-testing.html", type: "Free" },
    { url: "https://www.udemy.com/course/software-testing-and-automation/", type: "Paid" }
  ]
},
{
  title: "Manual Testing for Beginners",
  description: "Master manual testing processes, test case creation, and bug reporting.",
  category: "Software Testing / QA",
  resources: [
    { url: "https://www.softwaretestinghelp.com/manual-testing-tutorial-1/", type: "Free" },
    { url: "https://www.udemy.com/course/manual-software-testing-course/", type: "Paid" }
  ]
},
{
  title: "Automation Testing with Selenium",
  description: "Learn Selenium WebDriver for browser automation testing.",
  category: "Software Testing / QA",
  resources: [
    { url: "https://www.selenium.dev/documentation/", type: "Free" },
    { url: "https://www.udemy.com/course/selenium-real-time-examplesinterview-questions/", type: "Paid" }
  ]
},
{
  title: "API Testing with Postman",
  description: "Master API testing concepts and Postman workflows.",
  category: "Software Testing / QA",
  resources: [
    { url: "https://learning.postman.com/docs/introduction/overview/", type: "Free" },
    { url: "https://www.udemy.com/course/postman-the-complete-guide/", type: "Paid" }
  ]
},
{
  title: "Performance Testing with JMeter",
  description: "Learn how to test application performance and scalability using JMeter.",
  category: "Software Testing / QA",
  resources: [
    { url: "https://jmeter.apache.org/usermanual/index.html", type: "Free" },
    { url: "https://www.udemy.com/course/apache-jmeter/", type: "Paid" }
  ]
},
{
  title: "Test Automation Frameworks",
  description: "Design and implement test automation frameworks for software testing projects.",
  category: "Software Testing / QA",
  resources: [
    { url: "https://www.guru99.com/introduction-to-automation-frameworks.html", type: "Free" },
    { url: "https://www.udemy.com/course/framework-development-with-selenium-webdriver/", type: "Paid" }
  ]
},{
  title: "Python for Beginners",
  description: "Learn the basics of Python programming including syntax, variables, and loops.",
  category: "Python Developer",
  resources: [
    { url: "https://www.learnpython.org/", type: "Free" },
    { url: "https://www.udemy.com/course/complete-python-bootcamp/", type: "Paid" }
  ]
},
{
  title: "Object-Oriented Programming in Python",
  description: "Understand classes, objects, and OOP concepts in Python.",
  category: "Python Developer",
  resources: [
    { url: "https://realpython.com/python3-object-oriented-programming/", type: "Free" },
    { url: "https://www.udemy.com/course/python-oops/", type: "Paid" }
  ]
},
{
  title: "Python for Data Science",
  description: "Learn Python libraries like Pandas, NumPy, and Matplotlib for data analysis.",
  category: "Python Developer",
  resources: [
    { url: "https://www.kaggle.com/learn/python", type: "Free" },
    { url: "https://www.udemy.com/course/data-science-and-machine-learning-with-python-hands-on/", type: "Paid" }
  ]
},
{
  title: "Flask Web Development",
  description: "Build lightweight web applications using the Flask framework.",
  category: "Python Developer",
  resources: [
    { url: "https://flask.palletsprojects.com/en/3.0.x/tutorial/", type: "Free" },
    { url: "https://www.udemy.com/course/rest-api-flask-and-python/", type: "Paid" }
  ]
},
{
  title: "Django Web Development",
  description: "Learn to build full-stack web applications using Django.",
  category: "Python Developer",
  resources: [
    { url: "https://docs.djangoproject.com/en/5.0/intro/tutorial01/", type: "Free" },
    { url: "https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/", type: "Paid" }
  ]
},
{
  title: "Automation with Python",
  description: "Automate repetitive tasks with Python scripts and libraries.",
  category: "Python Developer",
  resources: [
    { url: "https://automatetheboringstuff.com/", type: "Free" },
    { url: "https://www.udemy.com/course/automate/", type: "Paid" }
  ]
},
{
  title: "Testing in Python",
  description: "Learn how to test Python applications with unittest and pytest.",
  category: "Python Developer",
  resources: [
    { url: "https://realpython.com/python-testing/", type: "Free" },
    { url: "https://www.udemy.com/course/automated-software-testing-with-python/", type: "Paid" }
  ]
},{
  title: "C++ for Beginners",
  description: "Learn the basics of C++ including syntax, variables, and control structures.",
  category: "C++ Developer",
  resources: [
    { url: "https://www.learncpp.com/", type: "Free" },
    { url: "https://www.udemy.com/course/beginning-c-plus-plus-programming/", type: "Paid" }
  ]
},
{
  title: "Object-Oriented Programming in C++",
  description: "Master OOP concepts like classes, inheritance, and polymorphism in C++.",
  category: "C++ Developer",
  resources: [
    { url: "https://www.programiz.com/cpp-programming/object-class", type: "Free" },
    { url: "https://www.udemy.com/course/oop-in-c-plus-plus/", type: "Paid" }
  ]
},
{
  title: "Data Structures and Algorithms in C++",
  description: "Implement and understand DSA concepts using C++.",
  category: "C++ Developer",
  resources: [
    { url: "https://www.geeksforgeeks.org/data-structures/", type: "Free" },
    { url: "https://www.udemy.com/course/dsa-c-plus-plus/", type: "Paid" }
  ]
},
{
  title: "C++ Standard Template Library (STL)",
  description: "Learn how to use the STL for efficient coding in C++.",
  category: "C++ Developer",
  resources: [
    { url: "https://cplusplus.com/reference/stl/", type: "Free" },
    { url: "https://www.udemy.com/course/cpp-stl/", type: "Paid" }
  ]
},
{
  title: "Advanced C++ Programming",
  description: "Explore advanced features like templates, exceptions, and smart pointers.",
  category: "C++ Developer",
  resources: [
    { url: "https://www.cplusplus.com/doc/tutorial/templates/", type: "Free" },
    { url: "https://www.udemy.com/course/advanced-c-programming/", type: "Paid" }
  ]
},
{
  title: "Game Development with C++",
  description: "Learn how to build games using C++ and libraries like SDL or Unreal Engine.",
  category: "C++ Developer",
  resources: [
    { url: "https://lazyfoo.net/tutorials/SDL/", type: "Free" },
    { url: "https://www.udemy.com/course/unrealcourse/", type: "Paid" }
  ]
},
{
  title: "C++ Multithreading and Concurrency",
  description: "Understand how to write concurrent programs in C++.",
  category: "C++ Developer",
  resources: [
    { url: "https://www.modernescpp.com/index.php/multithreading", type: "Free" },
    { url: "https://www.udemy.com/course/multithreading-cplusplus/", type: "Paid" }
  ]
},{
  title: "Introduction to Data Engineering",
  description: "Understand the fundamentals of data engineering, pipelines, and ETL processes.",
  category: "Data Engineer",
  resources: [
    { url: "https://www.coursera.org/learn/data-engineering", type: "Free" },
    { url: "https://www.udemy.com/course/the-data-engineering-course/", type: "Paid" }
  ]
},
{
  title: "SQL for Data Engineering",
  description: "Master SQL to query, manage, and manipulate large datasets effectively.",
  category: "Data Engineer",
  resources: [
    { url: "https://mode.com/sql-tutorial/", type: "Free" },
    { url: "https://www.udemy.com/course/the-complete-sql-bootcamp/", type: "Paid" }
  ]
},
{
  title: "Data Warehousing Concepts",
  description: "Learn about data warehouse architecture, OLAP, and ETL best practices.",
  category: "Data Engineer",
  resources: [
    { url: "https://www.tutorialspoint.com/dwh/index.htm", type: "Free" },
    { url: "https://www.udemy.com/course/data-warehouse-concepts-data-modelling-etl-processing/", type: "Paid" }
  ]
},
{
  title: "Big Data with Hadoop",
  description: "Understand big data concepts and work with Hadoop ecosystems like HDFS and MapReduce.",
  category: "Data Engineer",
  resources: [
    { url: "https://hadoop.apache.org/docs/stable/", type: "Free" },
    { url: "https://www.udemy.com/course/big-data-and-hadoop-for-beginners/", type: "Paid" }
  ]
},
{
  title: "Apache Spark for Data Engineers",
  description: "Work with Spark for large-scale data processing and analytics.",
  category: "Data Engineer",
  resources: [
    { url: "https://spark.apache.org/docs/latest/", type: "Free" },
    { url: "https://www.udemy.com/course/apache-spark-with-scala-hands-on-with-big-data/", type: "Paid" }
  ]
},
{
  title: "Cloud Data Engineering",
  description: "Deploy and manage data solutions on cloud platforms like AWS, GCP, or Azure.",
  category: "Data Engineer",
  resources: [
    { url: "https://cloud.google.com/learn/what-is-data-engineering", type: "Free" },
    { url: "https://www.udemy.com/course/gcp-data-engineer-and-cloud-architect-guide/", type: "Paid" }
  ]
},
{
  title: "Streaming Data with Kafka",
  description: "Learn how to build real-time streaming data pipelines with Apache Kafka.",
  category: "Data Engineer",
  resources: [
    { url: "https://kafka.apache.org/intro", type: "Free" },
    { url: "https://www.udemy.com/course/apache-kafka-for-beginners/", type: "Paid" }
  ]
},{
  title: "Introduction to Product Management",
  description: "Learn the basics of product management, roles, and responsibilities.",
  category: "Product Management",
  resources: [
    { url: "https://www.coursera.org/learn/uva-darden-digital-product-management", type: "Free" },
    { url: "https://www.udemy.com/course/become-a-product-manager-learn-the-skills-get-a-job/", type: "Paid" }
  ]
},
{
  title: "Product Strategy",
  description: "Understand how to define product vision, set goals, and align with business strategy.",
  category: "Product Management",
  resources: [
    { url: "https://www.productplan.com/learn/product-strategy/", type: "Free" },
    { url: "https://www.udemy.com/course/product-strategy/", type: "Paid" }
  ]
},
{
  title: "Agile for Product Managers",
  description: "Master Agile and Scrum methodologies for effective product development.",
  category: "Product Management",
  resources: [
    { url: "https://www.agilealliance.org/agile101/", type: "Free" },
    { url: "https://www.udemy.com/course/agile-scrum-for-product-owner-and-product-management/", type: "Paid" }
  ]
},
{
  title: "User Research and Personas",
  description: "Learn techniques for understanding user needs and creating user personas.",
  category: "Product Management",
  resources: [
    { url: "https://www.nngroup.com/articles/personas/", type: "Free" },
    { url: "https://www.udemy.com/course/user-research-for-user-experience-design/", type: "Paid" }
  ]
},
{
  title: "Product Roadmapping",
  description: "Build and manage product roadmaps to communicate plans and priorities.",
  category: "Product Management",
  resources: [
    { url: "https://www.aha.io/roadmapping/guide", type: "Free" },
    { url: "https://www.udemy.com/course/product-roadmaps-creating-and-managing-roadmaps/", type: "Paid" }
  ]
},
{
  title: "Data-Driven Product Decisions",
  description: "Leverage analytics and metrics to guide product improvements and strategy.",
  category: "Product Management",
  resources: [
    { url: "https://www.productplan.com/learn/data-driven-decision-making/", type: "Free" },
    { url: "https://www.udemy.com/course/data-driven-decision-making-for-product-managers/", type: "Paid" }
  ]
},
{
  title: "Go-To-Market Strategy",
  description: "Plan and execute a successful product launch with marketing and sales alignment.",
  category: "Product Management",
  resources: [
    { url: "https://www.alexandercowan.com/go-to-market-strategy-template/", type: "Free" },
    { url: "https://www.udemy.com/course/go-to-market-strategy/", type: "Paid" }
  ]
},{
  title: "HTML & CSS Fundamentals",
  description: "Learn the building blocks of the web: HTML for structure and CSS for styling.",
  category: "Web Development",
  resources: [
    { url: "https://developer.mozilla.org/en-US/docs/Learn/HTML", type: "Free" },
    { url: "https://www.udemy.com/course/html-and-css-for-beginners-crash-course-learn-fast-easy/", type: "Paid" }
  ]
},
{
  title: "JavaScript Basics",
  description: "Understand core JavaScript concepts including variables, loops, and functions.",
  category: "Web Development",
  resources: [
    { url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript", type: "Free" },
    { url: "https://www.udemy.com/course/the-complete-javascript-course/", type: "Paid" }
  ]
},
{
  title: "Responsive Web Design",
  description: "Learn techniques to make websites mobile-friendly and responsive.",
  category: "Web Development",
  resources: [
    { url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/", type: "Free" },
    { url: "https://www.udemy.com/course/responsive-web-design-html5-css3-complete-course/", type: "Paid" }
  ]
},
{
  title: "Frontend Frameworks - React",
  description: "Master React for building modern, interactive user interfaces.",
  category: "Web Development",
  resources: [
    { url: "https://react.dev/learn", type: "Free" },
    { url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/", type: "Paid" }
  ]
},
{
  title: "Version Control with Git & GitHub",
  description: "Learn how to manage code and collaborate using Git and GitHub.",
  category: "Web Development",
  resources: [
    { url: "https://git-scm.com/docs", type: "Free" },
    { url: "https://www.udemy.com/course/git-and-github-bootcamp/", type: "Paid" }
  ]
},
{
  title: "Backend Basics with Node.js",
  description: "Get started with server-side development using Node.js and Express.",
  category: "Web Development",
  resources: [
    { url: "https://nodejs.org/en/learn", type: "Free" },
    { url: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/", type: "Paid" }
  ]
},
{
  title: "Full-Stack Project Development",
  description: "Build complete full-stack applications using frontend and backend technologies.",
  category: "Web Development",
  resources: [
    { url: "https://www.theodinproject.com/paths/full-stack-javascript", type: "Free" },
    { url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/", type: "Paid" }
  ]
},













]

export default courses;

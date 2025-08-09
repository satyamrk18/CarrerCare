const courses = [
  {
    title: "React for Beginners",
    description: "Learn the basics of React, including components, state, and props.",
    category: "Web Development",
    resources: [
      { url: "https://react.dev/learn", type: "Free" },
      { url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/", type: "Paid" }
    ]
  },
  {
    title: "Android Fundamentals",
    description: "Start building Android apps with Java and XML.",
    category: "Android Development",
    resources: ["https://developer.android.com/courses"]
  },
  {
    title: "Intro to Machine Learning",
    description: "Understand the basics of ML, including supervised and unsupervised learning.",
    category: "ML",
    resources: [
      { url: "https://www.coursera.org/learn/machine-learning", type: "Free" },
      { url: "https://www.udemy.com/course/machinelearning/", type: "Paid" }
    ]
  },
  {
    title: "Frontend Developer Bootcamp",
    description: "Master HTML, CSS, JavaScript, and responsive web design.",
    category: "Web Development",
    resources: ["https://www.freecodecamp.org/learn"]
  },
  {
    title: "Modern JavaScript (ES6+)",
    description: "Understand modern JavaScript concepts and features for web apps.",
    category: "Web Development",
    resources: ["https://javascript.info/"]
  },
  {
    title: "Full Stack Open",
    description: "Learn to build full-stack web applications with React, Node.js, and MongoDB.",
    category: "Web Development",
    resources: ["https://fullstackopen.com/en/"]
  },
  {
    title: "Jetpack Compose Basics",
    description: "Learn modern Android UI development using Jetpack Compose.",
    category: "Android Development",
    resources: ["https://developer.android.com/jetpack/compose"]
  },
  {
    title: "Kotlin for Android",
    description: "Build Android apps with Kotlin, the modern language for Android.",
    category: "Android Development",
    resources: ["https://developer.android.com/kotlin"]
  },
  {
  title: "Introduction to Artificial Intelligence",
  description: "Learn the fundamentals of AI, including machine learning, neural networks, and real-world applications.",
  category: "AI",
  resources: [
    "https://www.ibm.com/cloud/learn/what-is-artificial-intelligence",
    "https://developers.google.com/machine-learning/crash-course"
  ]
},
{
  title: "Machine Learning Basics",
  description: "Understand supervised, unsupervised, and reinforcement learning, along with key algorithms and use cases.",
  category: "AI",
  resources: [
    "https://www.coursera.org/learn/machine-learning",
    "https://scikit-learn.org/stable/user_guide.html"
  ]
},
{
  title: "Deep Learning with Neural Networks",
  description: "Dive into deep learning concepts including CNNs, RNNs, and transformers, and learn how to build AI models.",
  category: "AI",
  resources: [
    "https://www.deeplearning.ai/",
    "https://pytorch.org/tutorials/"
  ]
},
{
  title: "Natural Language Processing (NLP)",
  description: "Explore techniques for text processing, sentiment analysis, and chatbot creation using AI.",
  category: "AI",
  resources: [
    "https://huggingface.co/transformers/",
    "https://www.nltk.org/"
  ]
},
{
  title: "AI Ethics and Responsible AI",
  description: "Understand the ethical challenges, bias issues, and best practices for building responsible AI systems.",
  category: "AI",
  resources: [
    "https://ethicsinaction.ieee.org/",
    "https://ai.google/responsibility/"
  ]
}
,
  {
    title: "Deep Learning Specialization",
    description: "Master deep learning, neural networks, and backpropagation.",
    category: "ML",
    resources: ["https://www.coursera.org/specializations/deep-learning"]
  },
  {
    title: "AI For Everyone",
    description: "Non-technical course introducing the concepts and impact of AI.",
    category: "ML",
    resources: ["https://www.coursera.org/learn/ai-for-everyone"]
  },
  {
    title: "Introduction to IoT",
    description: "Learn the foundations of Internet of Things and its real-world applications.",
    category: "IoT",
    resources: ["https://www.coursera.org/learn/iot"]
  },
  {
    title: "IoT Networking and Protocols",
    description: "Explore communication protocols used in IoT devices and systems.",
    category: "IoT",
    resources: ["https://www.edx.org/course/iot-communications"]
  },
  {
    title: "Arduino Programming for IoT",
    description: "Build IoT projects using Arduino and sensor modules.",
    category: "IoT",
    resources: ["https://create.arduino.cc/projecthub"]
  },
  {
    title: "Python for Data Science",
    description: "Analyze data using Python libraries like Pandas and NumPy.",
    category: "Data Science",
    resources: ["https://www.datacamp.com/courses/intro-to-python-for-data-science"]
  },
  {
    title: "Data Science Specialization",
    description: "Comprehensive program covering R, data wrangling, and visualization.",
    category: "Data Science",
    resources: ["https://www.coursera.org/specializations/jhu-data-science"]
  },
  {
    title: "SQL for Data Analysis",
    description: "Learn to query and analyze data using SQL.",
    category: "Data Science",
    resources: ["https://mode.com/sql-tutorial/"]
  },
  {
    title: "Java Programming Masterclass",
    description: "Become a Java developer by mastering Java SE from scratch.",
    category: "Java Developer",
    resources: ["https://www.udemy.com/course/java-the-complete-java-developer-course/"]
  },
  {
    title: "Spring Boot for Beginners",
    description: "Build Java backend applications using Spring Boot framework.",
    category: "Java Developer",
    resources: ["https://spring.io/guides"]
  },
  {
    title: "DSA in Java",
    description: "Learn Data Structures and Algorithms in Java for coding interviews.",
    category: "Java Developer",
    resources: ["https://www.geeksforgeeks.org/data-structures/"]
  },
  {
  title: "HTML & CSS Basics",
  description: "Master the core building blocks of web development, including HTML structure and CSS styling.",
  category: "Frontend Development",
  resources: ["https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web", "https://www.w3schools.com/html/"]
}, // Free

{
  title: "JavaScript Fundamentals",
  description: "Learn the essential concepts of JavaScript, the programming language of the web.",
  category: "Frontend Development",
  resources: ["https://javascript.info/", "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"]
}, // Free

{
  title: "Responsive Web Design",
  description: "Understand how to make web pages look great on all devices using media queries and flexible layouts.",
  category: "Frontend Development",
  resources: ["https://www.freecodecamp.org/learn/responsive-web-design/", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"]
}, // Free

{
  title: "React for Beginners",
  description: "Get started with React, one of the most popular JavaScript frameworks for building modern UIs.",
  category: "Frontend Development",
  resources: ["https://react.dev/learn", "https://www.codecademy.com/learn/react-101"]
}, // Mixed (First link Free, Second Paid)

{
  title: "Advanced CSS and Sass",
  description: "Enhance your styling skills with advanced CSS techniques and Sass for maintainable code.",
  category: "Frontend Development",
  resources: ["https://sass-lang.com/guide", "https://css-tricks.com/snippets/css/complete-guide-grid/"]
}, // Free

{
  title: "Web Accessibility",
  description: "Learn how to make your websites usable by people of all abilities.",
  category: "Frontend Development",
  resources: ["https://www.w3.org/WAI/fundamentals/accessibility-intro/", "https://developer.mozilla.org/en-US/docs/Learn/Accessibility"]
}, // Free,
{
  title: "Node.js Fundamentals",
  description: "Learn how to build backend applications using Node.js and understand the basics of server-side JavaScript.",
  category: "Backend Development",
  resources: ["https://nodejs.dev/en/learn/", "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/"]
}, // Paid

{
  title: "Express.js Crash Course",
  description: "Get started with Express.js, the fast and minimalist web framework for Node.js.",
  category: "Backend Development",
  resources: ["https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction", "https://www.youtube.com/watch?v=L72fhGm1tfE"]
}, // Free

{
  title: "REST API Development",
  description: "Learn to design and build RESTful APIs using backend technologies.",
  category: "Backend Development",
  resources: ["https://www.freecodecamp.org/news/rest-api-tutorial-rest-client-rest-service-and-api-calls-explained-with-code-examples/", "https://www.udemy.com/course/rest-api-design-the-complete-guide/"]
}, // Paid

{
  title: "Databases with MongoDB",
  description: "Master MongoDB for building modern, scalable applications.",
  category: "Backend Development",
  resources: ["https://www.mongodb.com/docs/manual/tutorial/getting-started/", "https://www.udemy.com/course/mongodb-the-complete-developers-guide/"]
}, // Paid

{
  title: "Authentication & Authorization",
  description: "Understand how to secure backend applications with JWT, OAuth, and other methods.",
  category: "Backend Development",
  resources: ["https://www.digitalocean.com/community/tutorial_series/oauth-2-0", "https://www.udemy.com/course/nodejs-jwt-authentication-oauth/"]
}, // Paid

{
  title: "Backend Deployment",
  description: "Learn how to deploy backend applications to cloud platforms like Heroku, AWS, and Render.",
  category: "Backend Development",
  resources: ["https://devcenter.heroku.com/articles/getting-started-with-nodejs", "https://www.udemy.com/course/aws-certified-developer-associate/"]
} // Paid
]

export default courses;

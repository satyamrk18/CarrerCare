const courses = [{
  title: "HTML & CSS Fundamentals",
  description: "Learn the core building blocks of web development, starting with HTML for structure and CSS for styling.",
  category: "Web Development",
  resources: [
    { url: "https://www.freecodecamp.org/learn/responsive-web-design/", type: "Free" },
    { url: "https://www.udemy.com/course/html-and-css-for-beginners-crash-course-learn-fast-easy/", type: "Paid" }
  ]
},
{
  title: "JavaScript Essentials",
  description: "Master the fundamentals of JavaScript, the programming language of the web.",
  category: "Web Development",
  resources: [
    { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide", type: "Free" },
    { url: "https://www.udemy.com/course/the-complete-javascript-course/", type: "Paid" }
  ]
},
{
  title: "Responsive Web Design",
  description: "Learn to create web pages that look great on all devices using CSS media queries and frameworks.",
  category: "Web Development",
  resources: [
    { url: "https://web.dev/learn/design/", type: "Free" },
    { url: "https://www.udemy.com/course/responsive-web-design-tutorial-course-html5-css3-bootstrap/", type: "Paid" }
  ]
},
{
  title: "Version Control with Git",
  description: "Learn how to use Git and GitHub for version control and collaboration in web projects.",
  category: "Web Development",
  resources: [
    { url: "https://git-scm.com/doc", type: "Free" },
    { url: "https://www.udemy.com/course/git-complete/", type: "Paid" }
  ]
},
{
  title: "Web Performance Optimization",
  description: "Understand techniques to improve website speed, accessibility, and SEO.",
  category: "Web Development",
  resources: [
    { url: "https://web.dev/learn/performance/", type: "Free" },
    { url: "https://www.udemy.com/course/website-performance-optimization/", type: "Paid" }
  ]
},
{
  title: "Modern Frontend Frameworks",
  description: "Get started with frameworks like React, Vue, and Angular to build interactive web applications.",
  category: "Web Development",
  resources: [
    { url: "https://react.dev/learn", type: "Free" },
    { url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/", type: "Paid" }
  ]
},{
  title: "Android Development for Beginners",
  description: "Learn to build Android apps using Java and Android Studio, starting from the basics.",
  category: "Android Development",
  resources: [
    { url: "https://developer.android.com/courses/android-basics-compose/course", type: "Free" },
    { url: "https://www.udemy.com/course/android-app-development-for-beginners/", type: "Paid" }
  ]
},
{
  title: "Kotlin for Android",
  description: "Master Kotlin, the preferred language for modern Android development.",
  category: "Android Development",
  resources: [
    { url: "https://developer.android.com/kotlin", type: "Free" },
    { url: "https://www.udemy.com/course/kotlin-android-developer-masterclass/", type: "Paid" }
  ]
},
{
  title: "Jetpack Compose Fundamentals",
  description: "Learn Jetpack Compose, Android's modern toolkit for building native UI.",
  category: "Android Development",
  resources: [
    { url: "https://developer.android.com/jetpack/compose/tutorial", type: "Free" },
    { url: "https://www.udemy.com/course/jetpack-compose-android-development/", type: "Paid" }
  ]
},
{
  title: "Android App Architecture",
  description: "Understand MVVM architecture, LiveData, ViewModel, and Room database in Android apps.",
  category: "Android Development",
  resources: [
    { url: "https://developer.android.com/jetpack/guide", type: "Free" },
    { url: "https://www.udemy.com/course/android-architecture-componentsmvvm-viewmodel-livedata-room/", type: "Paid" }
  ]
},
{
  title: "Publishing on Google Play Store",
  description: "Learn how to prepare, test, and publish your Android app on Google Play.",
  category: "Android Development",
  resources: [
    { url: "https://developer.android.com/distribute", type: "Free" },
    { url: "https://www.udemy.com/course/publish-your-android-app-on-google-play-store/", type: "Paid" }
  ]
},
{
  title: "Advanced Android Development",
  description: "Explore advanced Android features like background services, sensors, and APIs.",
  category: "Android Development",
  resources: [
    { url: "https://developer.android.com/guide", type: "Free" },
    { url: "https://www.udemy.com/course/advanced-android-app-development/", type: "Paid" }
  ]
},{
  title: "Introduction to Artificial Intelligence",
  description: "Understand the basics of AI, its history, and applications in various fields.",
  category: "AI",
  resources: [
    { url: "https://www.coursera.org/learn/introduction-to-ai", type: "Free" },
    { url: "https://www.udemy.com/course/artificial-intelligence-az/", type: "Paid" }
  ]
},
{
  title: "Machine Learning with Python",
  description: "Learn core machine learning concepts and implement them using Python libraries.",
  category: "AI",
  resources: [
    { url: "https://scikit-learn.org/stable/tutorial/index.html", type: "Free" },
    { url: "https://www.udemy.com/course/machinelearning/", type: "Paid" }
  ]
},
{
  title: "Deep Learning Fundamentals",
  description: "Explore neural networks, CNNs, RNNs, and deep learning frameworks like TensorFlow.",
  category: "AI",
  resources: [
    { url: "https://www.deeplearning.ai/courses/deep-learning-specialization/", type: "Free" },
    { url: "https://www.udemy.com/course/deeplearning/", type: "Paid" }
  ]
},
{
  title: "Natural Language Processing (NLP)",
  description: "Learn to process and analyze text data using NLP libraries and models.",
  category: "AI",
  resources: [
    { url: "https://web.stanford.edu/~jurafsky/NLP.html", type: "Free" },
    { url: "https://www.udemy.com/course/nlp-natural-language-processing-with-python/", type: "Paid" }
  ]
},
{
  title: "Computer Vision Basics",
  description: "Understand image processing, object detection, and recognition using OpenCV.",
  category: "AI",
  resources: [
    { url: "https://docs.opencv.org/master/d9/df8/tutorial_root.html", type: "Free" },
    { url: "https://www.udemy.com/course/computer-vision-a-z/", type: "Paid" }
  ]
},
{
  title: "AI in Real-world Applications",
  description: "Learn how AI is used in healthcare, finance, robotics, and other industries.",
  category: "AI",
  resources: [
    { url: "https://www.edx.org/course/artificial-intelligence-ai", type: "Free" },
    { url: "https://www.udemy.com/course/artificial-intelligence-real-world-projects/", type: "Paid" }
  ]
},{
  title: "Machine Learning Fundamentals",
  description: "Learn the core concepts of machine learning, including supervised and unsupervised learning.",
  category: "ML",
  resources: [
    { url: "https://www.coursera.org/learn/machine-learning", type: "Free" },
    { url: "https://www.udemy.com/course/machinelearning/", type: "Paid" }
  ]
},
{
  title: "Supervised Learning Techniques",
  description: "Dive deeper into regression, classification, and model evaluation methods.",
  category: "ML",
  resources: [
    { url: "https://scikit-learn.org/stable/supervised_learning.html", type: "Free" },
    { url: "https://www.udemy.com/course/supervised-machine-learning/", type: "Paid" }
  ]
},
{
  title: "Unsupervised Learning and Clustering",
  description: "Explore clustering methods like K-Means, DBSCAN, and dimensionality reduction techniques.",
  category: "ML",
  resources: [
    { url: "https://scikit-learn.org/stable/unsupervised_learning.html", type: "Free" },
    { url: "https://www.udemy.com/course/unsupervised-machine-learning/", type: "Paid" }
  ]
},
{
  title: "Model Deployment and MLOps",
  description: "Learn how to deploy ML models into production with Docker, Flask, and cloud services.",
  category: "ML",
  resources: [
    { url: "https://www.tensorflow.org/tfx/tutorials", type: "Free" },
    { url: "https://www.udemy.com/course/mlops-machine-learning-operations/", type: "Paid" }
  ]
},
{
  title: "Feature Engineering",
  description: "Understand techniques for extracting, selecting, and transforming features to improve model performance.",
  category: "ML",
  resources: [
    { url: "https://machinelearningmastery.com/discover-feature-engineering-how-to-engineer-features-and-how-to-get-good-at-it/", type: "Free" },
    { url: "https://www.udemy.com/course/feature-engineering-for-machine-learning/", type: "Paid" }
  ]
},
{
  title: "ML Project Case Studies",
  description: "Work on real-world ML problems and datasets to gain practical experience.",
  category: "ML",
  resources: [
    { url: "https://www.kaggle.com/learn/intro-to-machine-learning", type: "Free" },
    { url: "https://www.udemy.com/course/real-world-machine-learning-projects/", type: "Paid" }
  ]
}






]

export default courses ;
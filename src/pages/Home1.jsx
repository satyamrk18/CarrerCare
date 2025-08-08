import React, { useState } from 'react';

const HeroSection = () => (
  <section className="bg-blue-900 text-white py-20">
    <div className="max-w-screen-xl mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Revolutionize Learning with AI</h1>
      <p className="text-lg mb-8">Discover the future of education through cutting-edge AI courses and tools.</p>
      <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">Explore Courses</button>
    </div>
  </section>
);

const SkillsSection = () => (
  <section className="bg-white py-20">
    <div className="max-w-screen-xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Empower Your Skills</h2>
      <div className="flex flex-col md:flex-row items-center justify-around">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/student-learning-online-6337754-5235413.png" alt="Learning" className="w-80 mb-8 md:mb-0" />
        <div>
          <p className="text-lg mb-4 max-w-md">Explore personalized learning paths and upskill with courses tailored to your career goals.</p>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition">Start Learning</button>
        </div>
      </div>
    </div>
  </section>
);

const CoursesSection = () => {
  const courses = [
    { title: 'Prompt Engineering', image: 'https://cdn-icons-png.flaticon.com/512/1010/1010069.png' },
    { title: 'ChatGPT for Beginners', image: 'https://cdn-icons-png.flaticon.com/512/4305/4305564.png' },
    { title: 'ChatGPT for Developers', image: 'https://cdn-icons-png.flaticon.com/512/4429/4429393.png' },
    { title: 'Data Science with ChatGPT', image: 'https://cdn-icons-png.flaticon.com/512/4714/4714627.png' }
  ];

return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">ChatGPT Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <img src={course.image} alt={`Course image for ${course.title}`} className="w-20 h-20 mx-auto mb-4" loading="lazy" />
              <h3 className="text-xl font-semibold">{course.title}</h3>
            </div>
          ))}
        </div>
 <div className="text-center mt-8">
          <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition">Show all Data Science courses</button>
        </div>
      </div>
    </section>
  );
};

const CaseStudySection = () => {
  const cards = [
    {
      heading: '2000+ Employees Upskilled',
      description: 'A leading IT company used our platform to train their employees in AI and Data Science.',
      image: 'https://cdn-icons-png.flaticon.com/512/4285/4285733.png'
    },
    {
      heading: 'Increased Productivity',
      description: 'Training with ChatGPT tools led to a 30% boost in team productivity.',
      image: 'https://cdn-icons-png.flaticon.com/512/944/944722.png'
    },
    {
      heading: 'Better Employee Retention',
      description: 'Upskilling opportunities reduced attrition rates by 20%.',
      image: 'https://cdn-icons-png.flaticon.com/512/4714/4714727.png'
    }
  ];


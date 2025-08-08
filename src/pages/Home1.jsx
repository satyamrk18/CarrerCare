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



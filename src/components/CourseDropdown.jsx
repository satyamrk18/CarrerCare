import React from "react";

const categories = [
  "All",
  "Web Development",
  "Android Development",
  "AI",
  "ML",
  "IoT",
  "Data Science",
  "Java Developer",
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "iOS Development",
  "Cybersecurity",
  "Cloud Computing",
  "DevOps",
  "Blockchain Development",
  "Game Development",
  "AR/VR Development",
  "UI/UX Design",
  "Database Administration",
  "Software Testing / QA",
  "Python Developer",
  "C++ Developer",
  "Data Engineer",
  "Product Management"
];

const CourseDropdown = ({ value, onChange }) => (
  <div className="flex items-center justify-center">
    <select
      className="bg-white border border-gray-300 text-gray-900 text-m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-4"
      value={value}
      onChange={onChange}
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  </div>
);

export default CourseDropdown;

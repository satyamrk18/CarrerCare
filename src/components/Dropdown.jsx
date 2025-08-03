import React from 'react'

function Dropdown() {
  return (
    <div className='flex items-center justify-center'> 
        <select className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
            <option value="Web Development">Web Development</option>
            <option value="Android Development">Android Development</option>
            <option value="AI">AI</option>
            <option value="ML">ML</option>
            <option value="IoT">IoT</option>
            <option value="Data Science">Data Science</option>
            <option value="Java Development">Java Development</option>
        </select>
      
    </div>
  )
}

export default Dropdown

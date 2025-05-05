import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-11 mt-10 bg-slate-100 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">📝 About This App</h2>
      <p className="text-gray-700 mb-4">
        Welcome to <strong>My To-Do List Web App</strong> – a simple and efficient task manager designed to help you stay organized and productive.
        Whether you're managing daily chores, planning a project, or keeping track of goals, this app gives you a clean and easy-to-use interface to:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>✅ Add new tasks</li>
        <li>🗑️ Delete completed or unwanted tasks</li>
        <li>✏️ Edit task details</li>
        <li>📅 Track your progress</li>
      </ul>
      
    </div>
  );
};

export default About;

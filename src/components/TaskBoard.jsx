//TaskBoard

import React from 'react';


const TaskBoard = ({ tasks, resolved, handleComplete }) => {
  return (
    <div className="max-w-2xl">
      {/* --- ACTIVE TASKS SECTION --- */}
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Task Status
      </h2>

      {tasks.map(task => (
        <div
          key={task.id}
          // Wide card layout with padding matching the reference UI
          className="bg-white p-5 mb-4 shadow-sm border border-gray-100 rounded-lg"
        >
          {/* Task title with high contrast for readability */}
          <h3 className="text-[#0F172A] font-bold text-lg mb-4">
            {task.title}
          </h3>

          {/* ACTION BUTTON:  */}
            
          <button
            onClick={() => handleComplete(task)}
            className="w-full py-3 rounded-md text-white font-bold text-lg 
                       transition-all hover:brightness-110 active:scale-[0.98]
                       bg-gradient-to-r from-[#54CF68] to-[#00827A]"
          >
            Complete
          </button>
        </div>
      ))}

      {/* --- RESOLVED TASKS SECTION --- */}
      <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 border-t pt-6">
        Resolved Tasks
      </h2>

      {resolved.length === 0 ? (
        // Empty state handling for clean UX
        <p className="text-sm text-gray-400 italic">No tasks resolved yet.</p>
      ) : (
        resolved.map(task => (
          <div
            key={task.id}
            // Subdued green styling to indicate completion without distracting from active tasks
            className="bg-green-50 border border-green-100 p-4 mb-2 rounded-md text-green-700 font-semibold"
          >
            {task.title}
          </div>
        ))
      )}
    </div>
  );
};

export default TaskBoard;
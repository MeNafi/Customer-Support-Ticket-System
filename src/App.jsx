import { useEffect, useState, Suspense } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MainDashboard from "./components/MainDashboard";
import Footer from "./components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // --- States ---
  const [tickets, setTickets] = useState([]); // Available tickets
  const [tasks, setTasks] = useState([]); // Active tasks
  const [resolved, setResolved] = useState([]); // Completed tasks

  // Load initial data
  useEffect(() => {
    fetch("/ticket.json")
      .then(res => res.json())
      .then(data => setTickets(data));
  }, []);

  // Move ticket from available to tasks
  const handleAddTask = (ticket) => {
    setTasks([...tasks, ticket]);
    setTickets(tickets.filter(t => t.id !== ticket.id));
    toast.success("Ticket added to task!");
  };

  // Move task from active to resolved
  const handleComplete = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id));
    setResolved([...resolved, task]);
    toast.success("Task completed!");
  };

  return (
    // Main wrapper with global background #F5F5F5
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <Navbar />

      {/* Hero section with status counters */}
      <Banner 
        inProgress={tasks.length} 
        resolved={resolved.length} 
      />

      {/* Main layout container */}
      <div className="flex-grow">
        <Suspense fallback={<p className="text-center py-10">Loading...</p>}>
          <MainDashboard
            tickets={tickets}
            tasks={tasks}
            resolved={resolved}
            handleAddTask={handleAddTask}
            handleComplete={handleComplete}
          />
        </Suspense>
      </div>

      <Footer />
      
      {/* Global notifications */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
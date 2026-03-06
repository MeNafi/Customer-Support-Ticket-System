import React, { useState, useEffect, Suspense, lazy } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy loading the dashboard content
const MainDashboard = lazy(() => import('./components/MainDashboard'));

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  // Fetch data from public/ticket.json
  useEffect(() => {
    fetch('/ticket.json')
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => console.error("Error loading tickets:", err));
  }, []);

  // Move ticket to In-Progress
  const handleAddToProgress = (ticket) => {
    if (inProgressTasks.find((t) => t.id === ticket.id)) {
      toast.info("This ticket is already being processed!");
      return;
    }
    setInProgressTasks([...inProgressTasks, ticket]);
    toast.success("Ticket added to Task Status!");
  };

  // Complete a task
  const handleCompleteTask = (task) => {
    // 1. Remove from In-Progress
    setInProgressTasks(inProgressTasks.filter((t) => t.id !== task.id));
    // 2. Add to Resolved List
    setResolvedTasks([...resolvedTasks, task]);
    // 3. Remove from the Main Ticket list
    setTickets(tickets.filter((t) => t.id !== task.id));
    
    toast.success("Task marked as Completed!");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={<div className="text-center py-20"><span className="loading loading-spinner loading-lg"></span></div>}>
          <MainDashboard 
            tickets={tickets}
            inProgress={inProgressTasks}
            resolved={resolvedTasks}
            onAdd={handleAddToProgress}
            onComplete={handleCompleteTask}
          />
        </Suspense>
      </main>

      <Footer />
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default App;
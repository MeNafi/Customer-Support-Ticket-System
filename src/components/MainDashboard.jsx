import TicketCard from "./TicketCard";
import TaskBoard from "./TaskBoard";

const MainDashboard = ({
  tickets,
  tasks,
  resolved,
  handleAddTask,
  handleComplete
}) => {

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Ticket Section */}
        <div className="lg:col-span-2">

          <h2 className="text-xl font-bold mb-6">
            Customer Tickets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {tickets.map(ticket => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                handleAddTask={handleAddTask}
              />
            ))}

          </div>

        </div>

        {/* Task Board */}
        <div>

          <TaskBoard
            tasks={tasks}
            resolved={resolved}
            handleComplete={handleComplete}
          />

        </div>

      </div>

    </div>
  );
};

export default MainDashboard;
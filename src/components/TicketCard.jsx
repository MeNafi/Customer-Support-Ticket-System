import { Calendar } from "lucide-react"; // Import a calendar icon

const TicketCard = ({ ticket, handleAddTask }) => {
  return (
    <div
      className="bg-white shadow-sm rounded-lg p-5 cursor-pointer hover:shadow-md transition border border-gray-100"
      onClick={() => handleAddTask(ticket)}
    >
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-gray-800 text-lg leading-tight max-w-[75%]">
          {ticket.title}
        </h3>
        
        {/* Status Badge */}
        <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          {ticket.status}
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-2 line-clamp-2">
        {ticket.description}
      </p>

      <div className="flex justify-between items-center mt-6">
        
        {/* Left Side: ID and Priority */}
        <div className="flex items-center gap-3 text-[11px] font-bold tracking-wider">
          <span className="text-gray-400">#{ticket.id || "1001"}</span>
          <span className="text-red-500 uppercase">High Priority</span>
        </div>

        {/* Right Side: Customer and Date with Icon */}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="font-medium text-gray-600">{ticket.customer}</span>
          <div className="flex items-center gap-1.5">
            <Calendar size={16} className="text-gray-400" />
            <span>{ticket.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
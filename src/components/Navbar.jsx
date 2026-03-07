const Navbar = () => {
  return (
    // Keep the main wrapper full width with the shadow and background
    <div className="bg-base-100 shadow-md py-3">
      {/* Use the same container logic as your Banner section for consistent margins */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        
        <div className="flex-1">
          <h1 className="text-lg md:text-2xl font-bold">
            CS — Ticket System
          </h1>
        </div>

        <div className="hidden md:flex gap-6 items-center text-sm lg:text-base">
          <a className="hover:text-[#632EE3] cursor-pointer transition-colors">Home</a>
          <a className="hover:text-[#632EE3] cursor-pointer transition-colors">FAQ</a>
          <a className="hover:text-[#632EE3] cursor-pointer transition-colors">Changelog</a>
          <a className="hover:text-[#632EE3] cursor-pointer transition-colors">Blog</a>
          <a className="hover:text-[#632EE3] cursor-pointer transition-colors">Download</a>
          <a className="hover:text-[#632EE3] cursor-pointer transition-colors">Contact</a>

          <button className="btn btn-sm lg:btn-md border-none text-white hover:opacity-90 transition-opacity bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            + New Ticket
          </button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <button className="btn btn-ghost btn-circle">
            ☰
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
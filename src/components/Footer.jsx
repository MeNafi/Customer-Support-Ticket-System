const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">
              CS — Ticket System
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed">
             CS — Ticket System is a streamlined support management platform built to help teams track and resolve customer issues efficiently. By organizing tickets into active tasks and maintaining a resolved history, it ensures high-priority requests are never missed.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <p className="text-sm text-gray-400">About Us</p>
            <p className="text-sm text-gray-400">Our Mission</p>
            <p className="text-sm text-gray-400">Contact</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <p className="text-sm text-gray-400">Products</p>
            <p className="text-sm text-gray-400">Customer Stories</p>
            <p className="text-sm text-gray-400">Download Apps</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Information</h3>
            <p className="text-sm text-gray-400">Privacy Policy</p>
            <p className="text-sm text-gray-400">Terms</p>
            <p className="text-sm text-gray-400">Join Us</p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © 2026 CS — Ticket System. All rights reserved. Made by @menafi
        </div>

      </div>

    </footer>
  );
};

export default Footer;
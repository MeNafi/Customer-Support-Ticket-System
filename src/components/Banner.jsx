import bgBanner from "../assets/bgBanner.png";

const Banner = ({ inProgress = 0, resolved = 0 }) => {
  return (
    <div className="py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* In-Progress Card */}
          <div
            className="rounded-xl p-10 md:p-14 text-white flex flex-col items-center justify-center text-center 
                       bg-no-repeat bg-blend-soft-light"
            style={{
              // Layering: Gradient on top, then Left BG, then Right BG
              backgroundImage: `
                linear-gradient(to right, #632EE3, #9F62F2), 
                url(${bgBanner}), 
                url(${bgBanner})
              `,
              backgroundPosition: "center, left center, right center",
              backgroundSize: "cover, 40% auto, 40% auto", // Adjust 40% to make the gap larger/smaller
              backgroundColor: "#9F62F2",
            }}
          >
            <h2 className="text-lg md:text-xl font-medium opacity-90">
              In-Progress
            </h2>
            <p className="text-6xl md:text-7xl font-bold mt-2">{inProgress}</p>
          </div>

          {/* Resolved Card */}

          <div
            className="rounded-xl p-10 md:p-14 text-white flex flex-col items-center justify-center text-center 
             bg-no-repeat bg-blend-soft-light shadow-lg"
            style={{
              backgroundImage: `
              linear-gradient(to right, #54CF68, #00827A), 
              url(${bgBanner}), 
              url(${bgBanner})
              `,
              backgroundPosition: "center, left center, right center",
              backgroundSize: "cover, 40% auto, 40% auto",
              backgroundColor: "#54CF68", 
            }}
          >
            <h2 className="text-lg md:text-xl font-medium opacity-90">
              Resolved
            </h2>
            <p className="text-6xl md:text-7xl font-bold mt-2">{resolved}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

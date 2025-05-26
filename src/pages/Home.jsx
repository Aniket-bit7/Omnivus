import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    // Hero Section :
    <main className="min-h-screen bg-white font-sans">
      {/* Fullscreen Background Image */}
      <div className="h-screen bg-[url('https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?cs=srgb&dl=pexels-francesco-ungaro-281260.jpg&fm=jpg')] bg-cover bg-center">
        {/* Optional Dark Overlay */}
        <div className="h-full w-full bg-black bg-opacity-50 flex items-center">
          <section className="w-full">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full">
              {/* Left Text */}
              <div className="md:w-3/5 space-y-6 text-white">
                <span className="text-lg uppercase tracking-widest text-blue-300 font-semibold">
                  IT Business Consulting
                </span>
                <h1 className="text-2xl md:text-6xl font-extrabold leading-tight font-serif tracking-tight">
                  Best IT Solutions <br /> Provider Agency
                </h1>
                <p className="text-gray-200 text-lg max-w-xl font-light leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque totam rem aperiam.
                </p>
                <Link to="/services">
                  <button className="mt-4 inline-flex items-center px-6 py-3 bg-blue-800 text-white rounded hover:bg-white hover:text-blue-700 transition duration-300 font-medium">
                    Our Services <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>

              {/* Right Image */}
              <div className="md:w-3/5 mt-10 md:mt-0 flex justify-end pr-18">
                <img
                  src="https://html.webtend.net/omnivus/assets/img/banner/banner-img.png"
                  alt="Work"
                  className="w-[100%] max-w-md md:max-w-lg"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* What-We-Do */}
    </main>
  );
};

export default Home;

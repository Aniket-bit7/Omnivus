import { ArrowRight, Video } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaChalkboard,
  FaDatabase,
  FaFingerprint,
  FaLaptopCode,
} from "react-icons/fa";

const colorMap = {
  green: "text-green-700",
  blue: "text-blue-700",
  orange: "text-orange-700",
  red: "text-red-700",
};

const bgColorMap = {
  green: "bg-green-100",
  blue: "bg-blue-100",
  orange: "bg-orange-100",
  red: "bg-red-100",
};

const services = [
  { icon: <FaLaptopCode />, title: "IT Solutions", color: "green" },
  { icon: <FaFingerprint />, title: "Security System", color: "blue" },
  { icon: <FaChalkboard />, title: "Web Development", color: "orange" },
  { icon: <FaDatabase />, title: "Database Security", color: "red" },
];

const latestServices = [
  {icon: <FaLaptopCode />, title: "Desktop Computing", color: "red" },
  {icon: <FaLaptopCode />, title: "Desktop Computing", color: "orange" },
  {icon: <FaLaptopCode />, title: "Desktop Computing", color: "blue" },
  {icon: <FaLaptopCode />, title: "Desktop Computing", color: "blue" },
  {icon: <FaLaptopCode />, title: "Desktop Computing", color: "red" },
  {icon: <FaLaptopCode />, title: "Desktop Computing", color: "green" }
]

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

      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h6 className="text-xl font-medium text-blue-700">Services</h6>
          <h1 className="text-5xl font-semibold text-blue-950">What We Do</h1>
        </div>
        <div className="flex justify-center items-center gap-8 py-12 px-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center border p-6 rounded-lg shadow-lg cursor-pointer group w-72 bg-white text-black transition-all duration-500 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-xl hover:scale-105 transform"
            >
              {/* Icon Circle */}
              <div
                className={`mb-4 ${
                  bgColorMap[service.color]
                } w-28 h-28 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white`}
              >
                <div
                  className={`${
                    colorMap[service.color]
                  } text-4xl group-hover:text-${colorMap[service.color]}-600`}
                >
                  {service.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-500 group-hover:text-white mb-10">
                Sed ut perspiciatis unde omnis iste natus error volup
              </p>
            </div>
          ))}
        </div>
      </section>
    {/* Core Features */}
      <section className="bg-blue-100 py-20 px-20 flex">
        <div>
          <div className="mt-10">
            <img className="border-4 border-white" src="https://html.webtend.net/omnivus/assets/img/tile-gallery/tile-gallery-01.jpg"/>
          </div>
          <div className="px-12 mt-[-60px]">
            <img className="border-4 border-white" src="https://html.webtend.net/omnivus/assets/img/tile-gallery/tile-gallery-02.jpg" />
          </div>
        </div>

        <div className="mt-20 px-10 flex flex-col">
          <h4 className="text-blue-800 font-medium">CORE FEATURES</h4>
          <h1 className="text-blue-950 font-bold text-7xl">Get More Good <br/> Experience.</h1>
          <h2 className="text-blue-400 mt-10 font-medium text-3xl">Our knowledge of computers will help us</h2>
          <p className="text-base text-sky-500 mt-10 font-medium">Does any industry face a more complex audience journey and marketing sales <br/> process than B2B technology? Consider the number of people who influence a <br/> sale, the length of the decision-making cycle, the competing interests of the <br/> people who purchase, implement, manage, and use the technology. It’s a lot <br/> meaningful content here.</p>
          <div className="flex gap-10 mt-10">
            <button className="bg-blue-700 rounded text-white font-serif p-4 px-5 hover:bg-blue-950 text-white">Learn More</button>
            <button className="bg-gray-400 rounded text-white font-serif p-4 px-8 hover:bg-blue-950 
            text-white flex gap-2"><Video/> Intro Video</button>
          </div>
        </div>
      </section>
      {/* Latest Services */}
      <section className="flex flex-col mt-20 justify-center items-center">
          <div className="flex flex-col mb-20">
            <h3 className="font-medium text-blue-700 text-center">OUR LATEST SERVICES</h3>
            <h1 className="font-bold text-7xl text-center">We Offer Better Solution</h1>
            <h1 className="text-center font-bold text-7xl">For Your IT Business</h1>
          </div>
          <div className="grid grid-cols-3 gap-4 p-4">
            {latestServices.map((key, index) => (
              <div
              key={index}
              className="flex flex-col border p-6 rounded-lg cursor-pointer bg-white text-black bg-sky-50 mr-6 mb-4"
            >
              <div
                  className={`${
                    colorMap[key.color]
                  } text-5xl mb-2 group-hover:text-${colorMap[key.color]}-500`}
                >
                  {key.icon}
                </div>

                <h2 className="font-semibold text-2xl mb-2">{key.title}</h2>
                <p className="text-gray-500">Sed ut perspiciatis unde omnis iste natus <br/> error sit voluptatem accusantium <br/> doloremque laudantiutotam</p>
            </div>
            ))}
          </div>
      </section>
    </main>
  );
};

export default Home;

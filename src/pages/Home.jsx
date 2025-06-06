import { ArrowLeft, ArrowRight, Instagram, Video } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import {FaChalkboard, FaComment, FaCommentDots, FaDatabase, FaFacebook, FaFingerprint, FaInstagram,FaLaptopCode,FaTwitter,} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
  { icon: <FaLaptopCode />, title: "Desktop Computing", color: "red" },
  { icon: <FaLaptopCode />, title: "Desktop Computing", color: "orange" },
  { icon: <FaLaptopCode />, title: "Desktop Computing", color: "blue" },
  { icon: <FaLaptopCode />, title: "Desktop Computing", color: "blue" },
  { icon: <FaLaptopCode />, title: "Desktop Computing", color: "red" },
  { icon: <FaLaptopCode />, title: "Desktop Computing", color: "green" },
];

const Home = () => {
  return (
    // Hero Section :
    <main className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <Header />

      {/* Fullscreen Background Image */}
      <div className="h-screen bg-[url('https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?cs=srgb&dl=pexels-francesco-ungaro-281260.jpg&fm=jpg')] bg-cover bg-center">
        {/* Optional Dark Overlay */}
        <div className="h-full w-full bg-black bg-opacity-50 flex items-center">
          <section className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10 lg:gap-0">
              {/* Left Text */}
              <div className="w-full lg:w-1/2 space-y-4 text-white text-center lg:text-left">
                <span className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-widest text-blue-300 font-semibold">
                  IT Business Consulting
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight font-serif tracking-tight">
                  Best IT Solutions <br className="hidden sm:inline" /> Provider
                  Agency
                </h1>
                <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque totam rem aperiam.
                </p>
                <Link to="/services" className="w-full sm:w-auto">
                  <button
                    className="mt-4 inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-blue-800 text-white text-sm sm:text-base md:text-lg rounded hover:bg-white hover:text-blue-700 transition duration-300 font-medium w-full sm:w-auto max-w-xs sm:max-w-non">
                    Our Services
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </Link>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <img
                  src="https://html.webtend.net/omnivus/assets/img/banner/banner-img.png"
                  alt="Work"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* What-We-Do */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="text-center mb-8 sm:mb-12 px-4 max-w-3xl mx-auto">
          <h6 className="text-lg sm:text-xl font-medium text-blue-700">
            Services
          </h6>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-blue-950">
            What We Do
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-8 sm:py-12 px-4 sm:px-8 max-w-7xl mx-auto">
          {services.map((service, idx) => {
            // Static colors map for hover text (can't use dynamic class names)
            const hoverTextColors = {
              blue: "hover:text-blue-600",
              red: "hover:text-red-600",
              green: "hover:text-green-600",
              yellow: "hover:text-yellow-600",
              purple: "hover:text-purple-600",
            };
            // Static bg color map for icon circle bg on normal and hover state
            const bgColor = bgColorMap[service.color] || "bg-gray-200";
            const iconColor = colorMap[service.color] || "text-gray-600";
            const iconHoverText =
              hoverTextColors[service.color] || "hover:text-gray-800";

            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center border p-6 rounded-lg shadow-lg cursor-pointer group bg-white text-black transition-all duration-500 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-xl hover:scale-105 transform"
              >
                {/* Icon Circle */}
                <div
                  className={`${bgColor} w-20 h-20 sm:w-28 sm:h-28 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white`}
                >
                  <div
                    className={`${iconColor} text-2xl sm:text-4xl transition-colors duration-300 group-hover:text-blue-600`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <h2 className="text-lg sm:text-xl font-semibold mb-4 mt-4 sm:mt-6">
                  {service.title}
                </h2>
                <p className="text-gray-500 group-hover:text-white mb-6 sm:mb-10 text-sm sm:text-base leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error volup
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-blue-100 py-12 sm:py-20 px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row gap-10 lg:gap-20">
        {/* Left Images */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-6 sm:gap-8 lg:gap-6 w-full lg:w-1/2">
          <div className="mt-0 lg:mt-10 flex-shrink-0">
            <img
              className="border-4 border-white w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0 rounded-md object-cover"
              src="https://html.webtend.net/omnivus/assets/img/tile-gallery/tile-gallery-01.jpg"
              alt="Gallery 1"
            />
          </div>
          <div className="px-0 sm:px-6 lg:px-12 mt-4 sm:mt-0 lg:mt-6 flex-shrink-0">
            <img
              className="border-4 border-white w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0 rounded-md object-cover"
              src="https://html.webtend.net/omnivus/assets/img/tile-gallery/tile-gallery-02.jpg"
              alt="Gallery 2"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="mt-8 lg:mt-20 px-0 lg:px-10 flex flex-col text-center lg:text-left w-full lg:w-1/2">
          <h4 className="text-blue-800 font-medium text-sm sm:text-base">
            CORE FEATURES
          </h4>
          <h1
            className="text-blue-950 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto sm:mx-0 text-center sm:text-left break-words">
            Get More Good Experience.
          </h1>

          <h2 className="text-blue-400 mt-6 sm:mt-10 font-medium text-lg sm:text-xl lg:text-3xl">
            Our knowledge of computers will help us
          </h2>
          <p className="text-sm sm:text-base text-sky-500 mt-6 sm:mt-10 font-medium leading-relaxed">
            Does any industry face a more complex audience journey and marketing
            sales process than B2B technology? Consider the number of people who
            influence a sale, the length of the decision-making cycle, the
            competing interests of the people who purchase, implement, manage,
            and use the technology. It's a lot meaningful content here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-6 sm:mt-10 justify-center lg:justify-start">
            <button className="bg-blue-700 rounded text-white font-serif py-3 px-6 hover:bg-blue-950 transition-colors w-full sm:w-auto">
              Learn More
            </button>
            <button className="bg-gray-400 rounded text-white font-serif py-3 px-6 hover:bg-blue-950 flex gap-2 items-center justify-center transition-colors w-full sm:w-auto">
              <Video /> Intro Video
            </button>
          </div>
        </div>
      </section>

      {/* Latest Services */}
      <section className="flex flex-col mt-12 sm:mt-20 justify-center items-center px-4">
        <div className="flex flex-col mb-12 sm:mb-20 text-center">
          <h3 className="font-medium text-blue-700 text-base sm:text-lg">
            OUR LATEST SERVICES
          </h3>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl">
            We Offer Better Solution
          </h1>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl">
            For Your IT Business
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 max-w-7xl">
          {latestServices.map((key, index) => (
            <div
              key={index}
              className="flex flex-col border p-6 rounded-lg cursor-pointer bg-white text-black bg-sky-100"
            >
              <div
                className={`${
                  colorMap[key.color]
                } text-3xl sm:text-5xl mb-2 group-hover:text-${
                  colorMap[key.color]
                }-500`}
              >
                {key.icon}
              </div>

              <h2 className="font-semibold text-xl sm:text-2xl mb-2">
                {key.title}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantiutotam
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Case Study */}
      <section className="flex flex-col bg-blue-600 mt-12 sm:mt-20">
        <div className="px-4 sm:px-12 py-8 sm:py-12 mt-6 sm:mt-10 w-full max-w-screen-xl mx-auto">
          <h3 className="text-white font-medium text-lg sm:text-xl mb-4 text-center lg:text-left">
            Latest Case Studies
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 lg:gap-0">
            {/* Left Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight text-center lg:text-left">
              Reads Our Recent <br /> Case Studies
            </h1>

            {/* Right Arrow Buttons */}
            <div className="flex gap-4 shrink-0">
              <button className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full bg-white text-blue-900 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row px-4 sm:px-12 py-8 sm:py-12 mt-6 sm:mt-10 w-full max-w-screen-xl mx-auto gap-6 sm:gap-7">
          {[
            "https://html.webtend.net/omnivus/assets/img/portfolio/01.jpg",
            "https://html.webtend.net/omnivus/assets/img/portfolio/02.jpg",
            "https://html.webtend.net/omnivus/assets/img/portfolio/03.jpg",
          ].map((src, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg shadow-lg flex-1"
            >
              <img
                src={src}
                alt={`Portfolio ${idx}`}
                className="w-full h-64 sm:h-80 object-cover"
              />

              {/* Overlay Content */}
              <div
                className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/40 to-transparent 
                      opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4"
              >
                <h6 className="text-white text-base sm:text-lg font-semibold">
                  IT / Solutions
                </h6>
                <h4 className="text-white text-lg sm:text-2xl font-bold">
                  How To Improve <br /> IT Knowledge
                </h4>

                {/* Arrow Button */}
                <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center shadow-md hover:bg-blue-700 hover:text-white transition">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info */}
      <section className="bg-blue-950">
        <div className="flex flex-col sm:flex-row p-6 sm:p-8 gap-6 sm:gap-12 justify-center flex-wrap">
          {[
            { number: "280", label: "Our Branches", color: "bg-green-600" },
            { number: "782", label: "Projects Done", color: "bg-yellow-600" },
            { number: "1M", label: "Happy Users", color: "bg-red-600" },
            { number: "100", label: "Awards...", color: "bg-blue-600" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col border-2 border-gray-700 p-6 sm:p-8 gap-4 justify-center items-center w-full sm:w-60 ${
                idx % 2 !== 0 ? "sm:mt-16 sm:mb-10" : ""
              }`}
            >
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${item.color} flex items-center justify-center`}
              >
                <FaCommentDots className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                {item.number}
              </h1>
              <h6 className="text-xs sm:text-sm font-semibold text-white">
                {item.label}
              </h6>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members */}
      <section>
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center mt-10 sm:mt-16 px-4">
            <h4 className="text-blue-700 font-medium text-xl sm:text-2xl text-center">
              Our Team Member
            </h4>
            <h1 className="text-blue-950 font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
              Meet Our Exclusive
            </h1>
            <h1 className="text-blue-950 font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
              Leadership
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 sm:mt-20 px-4 sm:px-6 max-w-7xl mx-auto">
            {[
              {
                image:
                  "https://html.webtend.net/omnivus/assets/img/team/team-01.jpg",
                title: "Harry Garrett",
                prof: "Design Expert",
              },
              {
                image:
                  "https://html.webtend.net/omnivus/assets/img/team/team-02.jpg",
                title: "Doris Jordan",
                prof: "Design Expert",
              },
              {
                image:
                  "https://html.webtend.net/omnivus/assets/img/team/team-05.jpg",
                title: "Dianna Wagner",
                prof: "Design Expert",
              },
              {
                image:
                  "https://html.webtend.net/omnivus/assets/img/team/team-03.jpg",
                title: "Harry Garrett",
                prof: "Design Expert",
              },
              {
                image:
                  "https://html.webtend.net/omnivus/assets/img/team/team-04.jpg",
                title: "Johnny Ramirez",
                prof: "Design Expert",
              },
              {
                image:
                  "https://html.webtend.net/omnivus/assets/img/team/team-01.jpg",
                title: "Harry Garrett",
                prof: "Design Expert",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="relative group w-full border border-gray-200 rounded overflow-hidden shadow-md mx-auto max-w-sm"
              >
                <img
                  src={member.image}
                  alt={member.title}
                  className="w-full h-auto"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center p-12 sm:p-20 gap-2">
                  <button className="w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center shadow-md hover:bg-blue-700 hover:text-white transition">
                    <FaFacebook className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center shadow-md hover:bg-blue-700 hover:text-white transition">
                    <FaInstagram className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center shadow-md hover:bg-blue-700 hover:text-white transition">
                    <FaTwitter className="w-4 h-4" />
                  </button>
                </div>

                {/* Text below image */}
                <div className="flex flex-col items-center py-6 bg-white">
                  <h2 className="font-bold text-xl sm:text-2xl">
                    {member.title}
                  </h2>
                  <h5 className="text-sm text-gray-600">{member.prof}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client testimonial */}
      <section className="bg-sky-100 mt-12 sm:mt-16">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center py-12 sm:py-16 px-4">
            <h4 className="text-blue-700 font-medium text-xl sm:text-2xl text-center">
              Client Testimonials
            </h4>
            <h1 className="text-blue-950 font-bold text-4xl sm:text-5xl lg:text-6xl text-center">
              What our clients say
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-start mb-12 sm:mb-16 px-4 sm:px-6 max-w-7xl mx-auto">
            <div className="w-full">
              <div className="bg-white w-full h-auto p-6 border-t-4 border-red-700 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                amet fuga tempora quis error explicabo.
              </div>
              <div className="flex gap-3 mt-5">
                <img
                  src="https://html.webtend.net/omnivus/assets/img/testimonials/03.png"
                  alt="Philip Mendez"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col gap-1 sm:gap-3 mt-2">
                  <h4 className="font-bold text-sm sm:text-base">
                    Philip Mendez
                  </h4>
                  <h6 className="text-gray-500 text-xs sm:text-sm">
                    Consectetur
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-white w-full h-auto p-6 border-t-4 border-blue-700 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                amet fuga tempora quis error explicabo.
              </div>
              <div className="flex gap-3 mt-5">
                <img
                  src="https://html.webtend.net/omnivus/assets/img/testimonials/01.png"
                  alt="Eugene Freeman"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col gap-1 sm:gap-3 mt-2">
                  <h4 className="font-bold text-sm sm:text-base">
                    Eugene Freeman
                  </h4>
                  <h6 className="text-gray-500 text-xs sm:text-sm">
                    Tincidunt
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-full md:col-span-2 lg:col-span-1">
              <div className="bg-white w-full h-auto p-6 border-t-4 border-green-700 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                amet fuga tempora quis error explicabo.
              </div>
              <div className="flex gap-3 mt-5">
                <img
                  src="https://html.webtend.net/omnivus/assets/img/testimonials/02.png"
                  alt="Kelly Coleman"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col gap-1 sm:gap-3 mt-2">
                  <h4 className="font-bold text-sm sm:text-base">
                    Kelly Coleman
                  </h4>
                  <h6 className="text-gray-500 text-xs sm:text-sm">
                    Nulla nec
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-blue-700">
        <div className="flex flex-col lg:flex-row px-4 sm:px-12 py-12 w-full max-w-screen-xl mx-auto gap-6 lg:gap-7 items-center">
          <div className="flex flex-col justify-start lg:mr-64 mt-8 lg:mt-16 mb-8 lg:mb-16 text-center lg:text-left flex-1">
            <h4 className="font-medium text-xs sm:text-sm text-white">
              CALL TO ACTION
            </h4>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-white leading-tight">
              Let's Discuss With Us
            </h1>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-white leading-tight">
              Your Estimate.
            </h1>
          </div>
          <div className="flex-shrink-0">
            <button className="flex items-center p-4 gap-3 bg-white rounded hover:bg-gray-100 transition-colors">
              <FaComment className="text-blue-700" />{" "}
              <span className="text-blue-700 font-medium">Contact Us</span>
            </button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="flex flex-col">
        <div className="flex flex-col justify-center items-center pt-12 sm:pt-20 px-4">
          <h4 className="text-blue-700 font-medium text-xl sm:text-2xl text-center">
            Latest News
          </h4>
          <h1 className="text-blue-950 font-extrabold text-4xl sm:text-5xl lg:text-6xl text-center">
            Read Our Latest
          </h1>
          <h1 className="text-blue-950 font-extrabold text-4xl sm:text-5xl lg:text-6xl text-center">
            News & Blog
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 sm:pt-16 mb-12 sm:mb-16 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col justify-start border-2 border-gray-200 rounded-lg overflow-hidden">
            <img
              src="https://html.webtend.net/omnivus/assets/img/latest-news/01.jpg"
              alt="News 1"
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-4 flex flex-col gap-4">
              <h6 className="text-blue-700 font-bold font-serif text-sm">
                By Admin, 05 Aug 2019
              </h6>
              <h4 className="font-extrabold text-lg sm:text-xl lg:text-2xl leading-tight">
                Monthly Web Development Update Design Ethics & Clarity Over
                Solution
              </h4>
              <div className="flex gap-2 items-center">
                <h6 className="text-gray-600 text-sm sm:text-base">
                  Read More
                </h6>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start border-2 border-gray-200 rounded-lg overflow-hidden">
            <img
              src="https://html.webtend.net/omnivus/assets/img/latest-news/02.jpg"
              alt="News 2"
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-4 flex flex-col gap-4">
              <h6 className="text-blue-700 font-bold font-serif text-sm">
                By Admin, 05 Aug 2019
              </h6>
              <h4 className="font-extrabold text-lg sm:text-xl lg:text-2xl leading-tight">
                Design System: What It And How To Create One Using Indigo Design
                Sence
              </h4>
              <div className="flex gap-2 items-center">
                <h6 className="text-gray-600 text-sm sm:text-base">
                  Read More
                </h6>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start border-2 border-gray-200 rounded-lg overflow-hidden md:col-span-2 lg:col-span-1">
            <img
              src="https://html.webtend.net/omnivus/assets/img/latest-news/03.jpg"
              alt="News 3"
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-4 flex flex-col gap-4">
              <h6 className="text-blue-700 font-bold font-serif text-sm">
                By Admin, 05 Aug 2019
              </h6>
              <h4 className="font-extrabold text-lg sm:text-xl lg:text-2xl leading-tight">
                How We Used WebAssembly To Speed Up Our Web App By Omnivus
              </h4>
              <div className="flex gap-2 items-center">
                <h6 className="text-gray-600 text-sm sm:text-base">
                  Read More
                </h6>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;

import {
  FaBezierCurve,
  FaEyeDropper,
  FaGavel,
  FaHackerrank,
  FaMapMarkedAlt,
  FaUmbrella,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Footer from "../components/Footer";

const testimonial = [
  {
    image: "https://html.webtend.net/omnivus/assets/img/service-img/07.jpg",
    work: "UI/UX Design",
    icon: <FaEyeDropper color="white" className="w-10 h-10" />,
    des: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/service-img/08.jpg",
    work: "IT Consultancy",
    icon: <FaGavel color="white" className="w-10 h-10" />,
    des: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/service-img/09.jpg",
    work: "Technology Prof.",
    icon: <FaMapMarkedAlt color="white" className="w-10 h-10" />,
    des: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/service-img/10.jpg",
    work: "Web Development",
    icon: <FaHackerrank color="white" className="w-10 h-10" />,
    des: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/service-img/11.jpg",
    work: "Hardware",
    icon: <FaBezierCurve color="white" className="w-10 h-10" />,
    des: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/service-img/12.jpg",
    work: "Game Design",
    icon: <FaUmbrella color="white" className="w-10 h-10" />,
    des: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
  },
];

const news = [
  {
    image: "https://html.webtend.net/omnivus/assets/img/latest-news/04.jpg",
    post: "ImageDesign/SEO",
    des: "A series of iOS 7 inspired vector icons.",
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/latest-news/05.jpg",
    post: "ImageDesign/SEO",
    des: "A series of iOS 7 inspired vector icons.",
  },
  {
    image: "https://html.webtend.net/omnivus/assets/img/latest-news/06.jpg",
    post: "ImageDesign/SEO",
    des: "A series of iOS 7 inspired vector icons.",
  },
];

const Services = () => {
  const [period, setPeriod] = useState("Monthly");

  const handleClick = (value) => {
    setPeriod(value);
  };

  const pricingData = {
    Monthly: [
      {
        title: "Early Birds",
        price: "9",
        description:
          "The functional goal of technical content is to help people use a product successfully.",
      },
      {
        title: "Team",
        price: "32",
        description:
          "The functional goal of technical content is to help people use a product successfully.",
      },
      {
        title: "Personal",
        price: "69",
        description:
          "The functional goal of technical content is to help people use a product successfully.",
      },
      {
        title: "Platinum",
        price: "99",
        description:
          "The functional goal of technical content is to help people use a product successfully.",
      },
    ],
    Yearly: [
      {
        title: "Early Birds",
        price: "56",
        description:
          "The functional goal of technical content is to help people use a product successfully.",
      },
      {
        title: "Team",
        price: "99",
        description:
          "The functional goal of technical content is to help people use a product successfully.",
      },
      {
        title: "Personal",
        price: "133",
        description:
          "The functional goal of technical content is to help people use a product successfully.",
      },
      {
        title: "Platinum",
        price: "599",
        description:
          "The functional goal of technical content is to help people use a product successfully.",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center mt-16 text-center px-4">
        <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl text-blue-950">
          Services
        </h1>
        <h3 className="font-bold text-sky-600 text-xl sm:text-2xl">
          Home | Services
        </h3>
      </section>

      {/* Testimonials */}
      <section className="mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 max-w-7xl mx-auto">
          {testimonial.map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={item.image}
                alt={item.work}
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue-800/70 via-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4">
                <div className="flex gap-4 items-center">
                  {item.icon}
                  <h4 className="text-white text-lg sm:text-2xl font-bold">
                    {item.work}
                  </h4>
                </div>
                <p className="text-sm font-semibold text-white">
                  {item.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="bg-sky-100 mt-16">
        <div className="flex flex-col lg:flex-row justify-between items-center px-6 py-10 gap-6 max-w-7xl mx-auto">
          <div>
            <p className="font-semibold text-xl text-gray-700">Plans _____</p>
            <h1 className="font-extrabold text-blue-950 text-4xl sm:text-5xl">
              Here are the plans
            </h1>
          </div>
          <div className="flex gap-4 bg-white p-2 rounded-md">
            {["Monthly", "Yearly"].map((type) => (
              <button
                key={type}
                onClick={() => handleClick(type)}
                className={`text-lg sm:text-xl px-4 py-2 rounded ${
                  period === type
                    ? "bg-blue-700 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 px-4 pb-12 max-w-7xl mx-auto">
          {pricingData[period].map((plan, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-6 text-center w-full sm:w-[45%] lg:w-[22%] transition-all duration-300 group hover:bg-blue-700 hover:text-white"
            >
              <h2 className="text-xl font-bold text-blue-900 group-hover:text-white">
                {plan.title}
              </h2>
              <h3 className="text-5xl font-bold my-4">
                <span className="text-lg align-top">$</span>
                {plan.price}
              </h3>
              <p className="text-sm font-bold text-sky-400 group-hover:text-blue-200">
                {period === "Monthly" ? "Per Month" : "Per Year"}
              </p>
              <p className="text-sky-400 mb-3 group-hover:text-blue-200">
                _____
              </p>
              <p className="text-sky-600 mb-6 group-hover:text-blue-100">
                {plan.description}
              </p>
              <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded transition group-hover:bg-white group-hover:text-blue-700 hover:bg-blue-800">
                Purchase Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* News Feed */}
      <section className="bg-blue-900 py-16">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">News Feed</h1>
          <p className="font-medium text-sm sm:text-base">
            Does any industry face a more complex audience journey and
          </p>
          <p className="font-medium text-sm sm:text-base">
            marketing sales process than B2B technology.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 mt-12 px-4">
          {news.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-white max-w-xs text-center"
            >
              <img
                src={item.image}
                alt={item.post}
                className="rounded w-full"
              />
              <h3 className="text-xl sm:text-2xl font-bold mt-4">
                {item.post}
              </h3>
              <p className="font-serif font-semibold mb-6">{item.des}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;

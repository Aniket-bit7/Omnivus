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
  {image: "https://html.webtend.net/omnivus/assets/img/latest-news/04.jpg", post: "ImageDesign/SEO", des: "A series of iOS 7 inspired vector icons."},
  {image: "https://html.webtend.net/omnivus/assets/img/latest-news/05.jpg", post: "ImageDesign/SEO", des: "A series of iOS 7 inspired vector icons."},
  {image: "https://html.webtend.net/omnivus/assets/img/latest-news/06.jpg", post: "ImageDesign/SEO", des: "A series of iOS 7 inspired vector icons."}
]
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
          "The functional goal of technical content is to help people use a product successfully.v",
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
          "The functional goal of technical content is to help people use a product successfully..",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <Navbar />
      <section className="flex flex-col justify-center items-center mt-16">
        <h1 className="font-extrabold text-7xl text-blue-950">Services</h1>
        <h3 className="font-bold text-sky-600 text-2xl">Home | Services</h3>
      </section>

      {/* testimonial section */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 sm:mt-20 px-4 sm:px-6 max-w-7xl mx-auto">
          {testimonial.map((items, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg shadow-lg flex-1"
            >
              <img
                src={items.image}
                className="w-full h-64 sm:h-80 object-cover"
              />

              {/* Overlays Content */}
              <div className="flex flex-col absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue-800/70 via-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4">
                <div className="flex gap-4 items-center">
                  {items.icon}

                  <h4 className="text-white text-lg sm:text-2xl font-bold">
                    {items.work}
                  </h4>
                </div>
                <p className="text-sm font-semibold text-white">{items.des}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="bg-sky-100 mt-16">
        <div className="flex flex-col lg:flex-row justify-between p-8 mr-16 ml-16 gap-6">
          <div className="flex flex-col">
            <p className="font-semibold text-500 text-xl">Plans _____</p>
            <h1 className="font-extrabold text-blue-950 text-5xl">
              Here are the plans
            </h1>
          </div>
          <div className="mt-1 lg:mt-6 flex gap-5 bg-white p-4 rounded font-serif">
            <button
              onClick={() => handleClick("Monthly")}
              className={`text-xl px-4 py-2 rounded ${
                period === "Monthly"
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => handleClick("Yearly")}
              className={`text-xl px-4 py-2 rounded ${
                period === "Yearly"
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex gap-4 px-4 sm:px-8 pb-12">
          {pricingData[period].map((plan, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-6 text-center m-4 w-full sm:w-1/2 lg:w-1/3 transition-all duration-300 group hover:bg-blue-700 hover:text-white"
            >
              <h2 className="text-xl font-bold text-blue-900 group-hover:text-white">
                {plan.title}
              </h2>
              <h3 className="text-6xl font-bold my-4">
                <b className="text-lg align-top">$</b>
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
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded transition group-hover:bg-white group-hover:text-blue-700 hover:bg-blue-800">
                Purchase Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* News Feed */}
      
      <section className="bg-blue-900">
        <div className="flex flex-col text-white pt-16 justify-center items-center">
          <h1 className="text-6xl mb-6 font-extrabold">News Feed</h1>
          <p className="font-semibold text-sm">Does any industry face a more complex audience journey and </p>
          <p className="font-semibold text-sm">marketing sales process than B2B technology.</p>
        </div>
        <div className="flex gap-8 justify-center mt-16">
          {news.map((key, idx) => 
          <div key = {idx} className="flex flex-col gap-6 text-white justify-center items-center">
            <img src={key.image} className="rounded"/>
            <h3 className="text-2xl font-bold">{key.post}</h3>
            <p className="mb-8 font-serif font-semibold">{key.des}</p>
          </div>
        )}
        </div>
      </section>

      <Footer/>
    </main>
  );
};

export default Services;

import { FaBezierCurve, FaEyeDropper, FaGavel, FaHackerrank, FaMapMarkedAlt, FaUmbrella } from "react-icons/fa";
import Navbar from "../components/Navbar";
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
const Services = () => {
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
    </main>
  );
};

export default Services;

import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-blue-950">
      {/* Footer content grid */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row flex-wrap justify-between gap-12 px-6 py-16">
        {/* Column 1 */}
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4">
            Omnivus.
          </h1>
          <p className="text-white text-sm leading-relaxed mb-3">
            The web has changed a lot since Vitaly posted his first article back
            in 2006. The team at Smashing has changed too, as have the things
            that we bring to our community — conferences, books, and our
            membership added to the online magazine.
          </p>
          <p className="text-white text-sm">
            One thing that hasn’t changed is that we’re a small team — with most
            of us not working.
          </p>
        </div>

        {/* Column 2 - Pages */}
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4">
            Pages
          </h1>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex flex-col gap-3 text-white text-sm">
              <Link to="/" className="flex items-center gap-2">
                <FaAngleRight /> Home
              </Link>
              <Link to="/services" className="flex items-center gap-2">
                <FaAngleRight /> Services
              </Link>
              <Link to="#" className="flex items-center gap-2">
                <FaAngleRight /> About
              </Link>
              <Link to="#" className="flex items-center gap-2">
                <FaAngleRight /> Career
              </Link>
              <Link to="#" className="flex items-center gap-2">
                <FaAngleRight /> Refund
              </Link>
              <Link to="#" className="flex items-center gap-2">
                <FaAngleRight /> Terms
              </Link>
            </div>
            <div className="flex flex-col gap-3 text-white text-sm">
              <Link to="#" className="flex items-center gap-2">
                <FaAngleRight /> Details
              </Link>
              <Link to="#" className="flex items-center gap-2">
                <FaAngleRight /> Contact
              </Link>
              <Link to="#" className="flex items-center gap-2">
                <FaAngleRight /> Business
              </Link>
              <Link to="#" className="flex items-center gap-2">
                <FaAngleRight /> Affiliate
              </Link>
            </div>
          </div>
        </div>

        {/* Column 3 - Hours */}
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4">
            Working Hours
          </h1>
          <div className="text-white text-sm mb-6 space-y-1">
            <p>Monday - Friday: 7:00 - 17:00</p>
            <p>Saturday: 7:00 - 12:00</p>
            <p>Sunday and holidays: 8:00 - 10:00</p>
          </div>
          <p className="text-white text-sm mb-4">
            <b>For more than 30 years,</b> IT Service has been a reliable
            partner in the field of logistics and cargo forwarding.
          </p>
          <Link
            to="#"
            className="flex items-center gap-2 text-blue-400 hover:text-white font-bold text-sm"
          >
            <FaAngleRight /> Discover More
          </Link>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-4 mt-4 px-4">
        <h5 className="text-center text-white text-xs sm:text-sm">
          &copy; Copyright by @ <b>Webtend</b> - {new Date().getFullYear()}
        </h5>
      </div>
    </section>
  );
};

export default Footer;

import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-blue-950">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8 px-8 py-16">
        {/* Column 1 */}
        <div className="flex-1 min-w-[300px]">
          <h1 className="text-white text-3xl font-bold mb-6">Omnivus.</h1>
          <p className="text-white mb-4">
            The web has changed a lot since Vitaly posted his first article back
            in 2006. The team at Smashing has changed too, as have the things
            that we bring to our community — conferences, books, and our
            membership added to the online magazine.
          </p>
          <p className="text-white">
            One thing that hasn’t changed is that we’re a small team — with most
            of us not working.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-white text-3xl font-bold mb-6">Pages</h1>
          <div className="flex gap-12">
            <div className="flex flex-col gap-4 text-white">
              <Link to="/" className="flex items-center gap-1">
                <FaAngleRight /> Home
              </Link>
              <Link to="/services" className="flex items-center gap-1">
                <FaAngleRight /> Services
              </Link>
              <Link to="/" className="flex items-center gap-1">
                <FaAngleRight /> About
              </Link>
              <Link to="/" className="flex items-center gap-1">
                <FaAngleRight /> Career
              </Link>
              <Link to="/" className="flex items-center gap-1">
                <FaAngleRight /> Refund
              </Link>
              <Link to="/" className="flex items-center gap-1">
                <FaAngleRight /> Terms
              </Link>
            </div>
            <div className="flex flex-col gap-4 text-white">
              <Link to="/" className="flex items-center gap-1">
                <FaAngleRight /> Details
              </Link>
              <Link to="/" className="flex items-center gap-1">
                <FaAngleRight /> Contact
              </Link>
              <Link to="/" className="flex items-center gap-1">
                <FaAngleRight /> Business
              </Link>
              <Link to="/" className="flex items-center gap-1">
                <FaAngleRight /> Affiliate
              </Link>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex-1 min-w-[300px]">
          <h1 className="text-white text-3xl font-bold mb-6">Working Hours</h1>
          <div className="text-white mb-6 space-y-1">
            <h3>Monday - Friday: 7:00 - 17:00</h3>
            <h3>Saturday: 7:00 - 12:00</h3>
            <h3>Sunday and holidays: 8:00 - 10:00</h3>
          </div>
          <p className="text-white mb-4">
            <b>For more than 30 years,</b> IT Service has been a reliable
            partner in the field of logistics and cargo forwarding.
          </p>
          <Link className="flex items-center gap-1 text-blue-500 font-bold">
            <FaAngleRight /> Discover More
          </Link>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="border-t border-gray-700 py-4 mt-8">
        <h5 className="text-center text-white">
          &copy; {new Date().getFullYear()} <b>WebTend</b> — All rights reserved
        </h5>
      </div>
    </section>
  );
};

export default Footer;

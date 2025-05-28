import { FaArrowRight, FaCalendar, FaComment, FaEye, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <Navbar />
      <section className="flex flex-col justify-center items-center mt-16">
        <h1 className="font-extrabold text-7xl text-blue-950">News Standard</h1>
        <h3 className="font-bold text-sky-600 text-2xl">Home | News</h3>
      </section>
      {/* cards */}
      <section className="pt-16">
        <div className="flex p-32 gap-16">
          {/* cards for column 1 */}
          <div className="flex flex-col gap-8">
            {/* card-1 */}
            <div className="flex flex-col gap-4 border-2 border-gray-300">
              <img src="https://html.webtend.net/omnivus/assets/img/blog/blog-standard-1.jpg" />
              <div className="p-8">
                <button className="bg-blue-700 text-white p-2 text-sm mb-4 tracking-widest">
                  BUSINESE
                </button>
                <h3 className="font-bold text-4xl mb-6">
                  Lorem ipsum dolor sit amet, consecte cing <br /> elit, sed do
                  eiusmod tempor.
                </h3>
                <div className="flex gap-6 mb-6 text-blue-300 text-sm">
                  <p className="flex gap-2 items-center">
                    <FaEye /> 232 Views
                  </p>
                  <p className="flex gap-2 items-center">
                    <FaComment />
                    35 Comments
                  </p>
                  <p className="flex gap-2 items-center">
                    <FaCalendar />
                    24th March 2019
                  </p>
                </div>
                <p className="mb-8 text-base text-blue-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incidi-dunt ut <br /> labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris <br /> nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit <br /> esse cillum dolore.
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-5 items-center">
                    <img src="https://html.webtend.net/omnivus/assets/img/blog/blog-girl.png" />
                    <p>
                      by <b>Hetmayar</b>
                    </p>
                  </div>
                  <p className="flex items-center gap-3 pr-8 text-blue-700">
                    <FaArrowRight />
                    READ MORE
                  </p>
                </div>
              </div>
            </div>
            {/* card-2 */}
            <div className="flex flex-col gap-4 border-2 border-gray-300">
              <img src="https://html.webtend.net/omnivus/assets/img/blog/blog-standard-3.jpg" />
              <div className="p-8">
                <button className="bg-blue-700 text-white p-2 text-sm mb-4 tracking-widest">
                  BUSINESE
                </button>
                <h3 className="font-bold text-4xl mb-6">
                  Adipisicing elit, sed do eiusmod tempor <br /> incididunt ut
                  labore et dolore.
                </h3>
                <div className="flex gap-6 mb-6 text-blue-300 text-sm">
                  <p className="flex gap-2 items-center">
                    <FaEye /> 232 Views
                  </p>
                  <p className="flex gap-2 items-center">
                    <FaComment />
                    35 Comments
                  </p>
                  <p className="flex gap-2 items-center">
                    <FaCalendar />
                    24th March 2019
                  </p>
                </div>
                <p className="mb-8 text-base text-blue-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incidi-dunt ut <br /> labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris <br /> nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit <br /> esse cillum dolore.
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-5 items-center">
                    <img src="https://html.webtend.net/omnivus/assets/img/blog/blog-girl.png" />
                    <p>
                      by <b>Hetmayar</b>
                    </p>
                  </div>
                  <p className="flex items-center gap-3 pr-8 text-blue-700">
                    <FaArrowRight />
                    READ MORE
                  </p>
                </div>
              </div>
            </div>
            {/* card-3 */}
            <div className="flex flex-col gap-4 border-2 border-gray-300">
              <img src="https://html.webtend.net/omnivus/assets/img/blog/blog-standard-2.jpg" />
              <div className="p-8">
                <button className="bg-blue-700 text-white p-2 text-sm mb-4 tracking-widest">
                  BUSINESE
                </button>
                <h3 className="font-bold text-4xl mb-6">
                  Magna aliqua. Ut enim ad minim venia m, quis <br /> nostrud
                  exercitation ullamco
                </h3>
                <div className="flex gap-6 mb-6 text-blue-300 text-sm">
                  <p className="flex gap-2 items-center">
                    <FaEye /> 232 Views
                  </p>
                  <p className="flex gap-2 items-center">
                    <FaComment />
                    35 Comments
                  </p>
                  <p className="flex gap-2 items-center">
                    <FaCalendar />
                    24th March 2019
                  </p>
                </div>
                <p className="mb-8 text-base text-blue-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incidi-dunt ut <br /> labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris <br /> nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit <br /> esse cillum dolore.
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-5 items-center">
                    <img src="https://html.webtend.net/omnivus/assets/img/blog/blog-girl.png" />
                    <p>
                      by <b>Hetmayar</b>
                    </p>
                  </div>
                  <p className="flex items-center gap-3 pr-8 text-blue-700">
                    <FaArrowRight />
                    READ MORE
                  </p>
                </div>
              </div>
            </div>
            {/* card-4 */}
            <div className="flex flex-col gap-4 border-2 border-gray-300">
              <div className="p-8">
                <button className="bg-blue-700 text-white p-2 text-sm mb-4 tracking-widest">
                  BUSINESE
                </button>
                <h3 className="font-bold text-4xl mb-6">
                  In reprehenderit in voluptate velit esse cillum <br /> dolore
                  eu fugiat nulla pariatur.
                </h3>
                <div className="flex gap-6 mb-6 text-blue-300 text-sm">
                  <p className="flex gap-2 items-center">
                    <FaEye /> 232 Views
                  </p>
                  <p className="flex gap-2 items-center">
                    <FaComment />
                    35 Comments
                  </p>
                  <p className="flex gap-2 items-center">
                    <FaCalendar />
                    24th March 2019
                  </p>
                </div>
                <p className="mb-8 text-base text-blue-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incidi-dunt ut <br /> labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris <br /> nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit <br /> esse cillum dolore.
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-5 items-center">
                    <img src="https://html.webtend.net/omnivus/assets/img/blog/blog-girl.png" />
                    <p>
                      by <b>Hetmayar</b>
                    </p>
                  </div>
                  <p className="flex items-center gap-3 pr-8 text-blue-700">
                    <FaArrowRight />
                    READ MORE
                  </p>
                </div>
              </div>
            </div>
            {/* card-5 */}
            <div className="flex flex-col gap-4 border-2 border-gray-300">
              <img src="https://html.webtend.net/omnivus/assets/img/blog/blog-standard-3.jpg" />
              <div className="p-8">
                <button className="bg-blue-700 text-white p-2 text-sm mb-4 tracking-widest">
                  BUSINESE
                </button>
                <h3 className="font-bold text-4xl mb-6">
                  Magna aliqua. Ut enim ad minim venia m, quis <br /> nostrud
                  exercitation ullamco
                </h3>
                <div className="flex gap-6 mb-6 text-blue-300 text-sm">
                  <p className="flex gap-2 items-center">
                    <FaEye /> 232 Views
                  </p>
                  <p className="flex gap-2 items-center">
                    <FaComment />
                    35 Comments
                  </p>
                  <p className="flex gap-2 items-center">
                    <FaCalendar />
                    24th March 2019
                  </p>
                </div>
                <p className="mb-8 text-base text-blue-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incidi-dunt ut <br /> labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris <br /> nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit <br /> esse cillum dolore.
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-5 items-center">
                    <img src="https://html.webtend.net/omnivus/assets/img/blog/blog-girl.png" />
                    <p>
                      by <b>Hetmayar</b>
                    </p>
                  </div>
                  <p className="flex items-center gap-3 pr-8 text-blue-700">
                    <FaArrowRight />
                    READ MORE
                  </p>
                </div>
              </div>
            </div>
            {/* card-6 */}
            <div className="flex flex-col gap-4 border-2 border-gray-300">
              <img src="https://html.webtend.net/omnivus/assets/img/blog/blog-standard-2.jpg" />
              <div className="p-8">
                <button className="bg-blue-700 text-white p-2 text-sm mb-4 tracking-widest">
                  BUSINESE
                </button>
                <h3 className="font-bold text-4xl mb-6">
                  Magna aliqua. Ut enim ad minim venia m, quis <br /> nostrud
                  exercitation ullamco
                </h3>
                <div className="flex gap-6 mb-6 text-blue-300 text-sm">
                  <p className="flex gap-2 items-center">
                    <FaEye /> 232 Views
                  </p>
                  <p className="flex gap-2 items-center">
                    <FaComment />
                    35 Comments
                  </p>
                  <p className="flex gap-2 items-center">
                    <FaCalendar />
                    24th March 2019
                  </p>
                </div>
                <p className="mb-8 text-base text-blue-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incidi-dunt ut <br /> labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris <br /> nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit <br /> esse cillum dolore.
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-5 items-center">
                    <img src="https://html.webtend.net/omnivus/assets/img/blog/blog-girl.png" />
                    <p>
                      by <b>Hetmayar</b>
                    </p>
                  </div>
                  <p className="flex items-center gap-3 pr-8 text-blue-700">
                    <FaArrowRight />
                    READ MORE
                  </p>
                </div>
              </div>
            </div>
            {/* scroller */}
            <div className="flex gap-4 pl-60">
              <button className="w-12 h-12 text-sm rounded-full bg-blue-300 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 text-sm rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                01
              </button>
              <button className="w-12 h-12 text-sm rounded-full bg-blue-300 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                02
              </button>
              <button className="w-12 h-12 text-sm rounded-full bg-blue-300 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                ...
              </button>
              <button className="w-12 h-12 text-sm rounded-full bg-blue-300 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                10
              </button>
              <button className="w-12 h-12 text-sm rounded-full bg-blue-300 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* cards for column 2 */}
          <div className="flex flex-col gap-8">
            {/* card-1 */}
            <div className="border-2 border-gray-300 p-8">
              <div className="flex gap-4 mb-6">
                <h3 className="text-blue-700 font-bold">__ _</h3>
                <h3 className="text-blue-950 font-bold text-xl">About Me</h3>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://html.webtend.net/omnivus/assets/img/sidebar/blog-about.png"
                  className="mb-6"
                />
                <h3 className="text-blue-950 font-bold mb-4 text-xl">
                  Rosalina D. Willaimson
                </h3>
                <p className="text-base text-gray-400">
                  Lorem ipsum dolor sit amet, consecte-
                </p>
                <p className="text-base text-gray-400">
                  tur adipisicing elit, sed do eiusmod
                </p>
                <p className="text-base text-gray-400 mb-4">
                  tempor incididunt ut labore.
                </p>
                <div className="flex gap-3 items-center mb-4 pt-2 sm:mt-0 text-blue-700">
                  <Link
                    to="#"
                    className="hover:text-blue-500 transition-colors"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </Link>
                  <Link
                    to="#"
                    className="hover:text-blue-500 transition-colors"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </Link>
                  <Link
                    to="#"
                    className="hover:text-pink-500 transition-colors"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </Link>
                  <Link
                    to="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </Link>
                  <Link to="#" className="hover:text-red-600 transition-colors">
                    <FaYoutube className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </main>
  );
};

export default Blog;

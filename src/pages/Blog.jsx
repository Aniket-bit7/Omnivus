import {
  FaArrowRight,
  FaCalendar,
  FaComment,
  FaEye,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <Navbar />
      <section className="flex flex-col justify-center items-center mt-16 px-4">
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-950 text-center">
          News Standard
        </h1>
        <h3 className="font-bold text-sky-600 text-lg sm:text-xl md:text-2xl text-center">
          Home | News
        </h3>
      </section>
      {/* cards */}
      <section className="pt-8 md:pt-16">
        <div className="flex flex-col lg:flex-row p-4 sm:p-8 md:p-16 lg:p-32 gap-8 lg:gap-16">
          {/* cards for column 1 */}
          <div className="flex flex-col gap-8 w-full lg:w-2/3">
            {/* card-1 */}
            <div className="flex flex-col gap-4 border-2 border-gray-300">
              <img
                src="https://html.webtend.net/omnivus/assets/img/blog/blog-standard-1.jpg"
                className="w-full h-auto"
              />
              <div className="p-4 sm:p-6 md:p-8">
                <button className="bg-blue-700 text-white p-2 text-sm mb-4 tracking-widest">
                  BUSINESE
                </button>
                <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-6">
                  Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod
                  tempor.
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 text-blue-300 text-sm">
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
                  do eiusmod tempor incidi-dunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore.
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex gap-5 items-center">
                    <img
                      src="https://html.webtend.net/omnivus/assets/img/blog/blog-girl.png"
                      className="w-12 h-12 sm:w-auto sm:h-auto"
                    />
                    <p>
                      by <b>Hetmayar</b>
                    </p>
                  </div>
                  <p className="flex items-center gap-3 text-blue-700">
                    <FaArrowRight />
                    READ MORE
                  </p>
                </div>
              </div>
            </div>
            {/* card-2 */}
            <div className="flex flex-col gap-4 border-2 border-gray-300">
              <img
                src="https://html.webtend.net/omnivus/assets/img/blog/blog-standard-3.jpg"
                className="w-full h-auto"
              />
              <div className="p-4 sm:p-6 md:p-8">
                <button className="bg-blue-700 text-white p-2 text-sm mb-4 tracking-widest">
                  BUSINESE
                </button>
                <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-6">
                  Adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore.
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 text-blue-300 text-sm">
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
                  do eiusmod tempor incidi-dunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore.
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex gap-5 items-center">
                    <img
                      src="https://html.webtend.net/omnivus/assets/img/blog/blog-girl.png"
                      className="w-12 h-12 sm:w-auto sm:h-auto"
                    />
                    <p>
                      by <b>Hetmayar</b>
                    </p>
                  </div>
                  <p className="flex items-center gap-3 text-blue-700">
                    <FaArrowRight />
                    READ MORE
                  </p>
                </div>
              </div>
            </div>
            {/* card-3 */}
            <div className="flex flex-col gap-4 border-2 border-gray-300">
              <img
                src="https://html.webtend.net/omnivus/assets/img/blog/blog-standard-2.jpg"
                className="w-full h-auto"
              />
              <div className="p-4 sm:p-6 md:p-8">
                <button className="bg-blue-700 text-white p-2 text-sm mb-4 tracking-widest">
                  BUSINESE
                </button>
                <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-6">
                  Magna aliqua. Ut enim ad minim venia m, quis nostrud
                  exercitation ullamco
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 text-blue-300 text-sm">
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
                  do eiusmod tempor incidi-dunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore.
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex gap-5 items-center">
                    <img
                      src="https://html.webtend.net/omnivus/assets/img/blog/blog-girl.png"
                      className="w-12 h-12 sm:w-auto sm:h-auto"
                    />
                    <p>
                      by <b>Hetmayar</b>
                    </p>
                  </div>
                  <p className="flex items-center gap-3 text-blue-700">
                    <FaArrowRight />
                    READ MORE
                  </p>
                </div>
              </div>
            </div>
            {/* card-4 */}
            <div className="flex flex-col gap-4 border-2 border-gray-300">
              <div className="p-4 sm:p-6 md:p-8">
                <button className="bg-blue-700 text-white p-2 text-sm mb-4 tracking-widest">
                  BUSINESE
                </button>
                <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-6">
                  In reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 text-blue-300 text-sm">
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
                  do eiusmod tempor incidi-dunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore.
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex gap-5 items-center">
                    <img
                      src="https://html.webtend.net/omnivus/assets/img/blog/blog-girl.png"
                      className="w-12 h-12 sm:w-auto sm:h-auto"
                    />
                    <p>
                      by <b>Hetmayar</b>
                    </p>
                  </div>
                  <p className="flex items-center gap-3 text-blue-700">
                    <FaArrowRight />
                    READ MORE
                  </p>
                </div>
              </div>
            </div>
            {/* card-5 */}
            <div className="flex flex-col gap-4 border-2 border-gray-300">
              <img
                src="https://html.webtend.net/omnivus/assets/img/blog/blog-standard-3.jpg"
                className="w-full h-auto"
              />
              <div className="p-4 sm:p-6 md:p-8">
                <button className="bg-blue-700 text-white p-2 text-sm mb-4 tracking-widest">
                  BUSINESE
                </button>
                <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-6">
                  Magna aliqua. Ut enim ad minim venia m, quis nostrud
                  exercitation ullamco
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 text-blue-300 text-sm">
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
                  do eiusmod tempor incidi-dunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore.
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex gap-5 items-center">
                    <img
                      src="https://html.webtend.net/omnivus/assets/img/blog/blog-girl.png"
                      className="w-12 h-12 sm:w-auto sm:h-auto"
                    />
                    <p>
                      by <b>Hetmayar</b>
                    </p>
                  </div>
                  <p className="flex items-center gap-3 text-blue-700">
                    <FaArrowRight />
                    READ MORE
                  </p>
                </div>
              </div>
            </div>
            {/* card-6 */}
            <div className="flex flex-col gap-4 border-2 border-gray-300">
              <img
                src="https://html.webtend.net/omnivus/assets/img/blog/blog-standard-2.jpg"
                className="w-full h-auto"
              />
              <div className="p-4 sm:p-6 md:p-8">
                <button className="bg-blue-700 text-white p-2 text-sm mb-4 tracking-widest">
                  BUSINESE
                </button>
                <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-6">
                  Magna aliqua. Ut enim ad minim venia m, quis nostrud
                  exercitation ullamco
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 text-blue-300 text-sm">
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
                  do eiusmod tempor incidi-dunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore.
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex gap-5 items-center">
                    <img
                      src="https://html.webtend.net/omnivus/assets/img/blog/blog-girl.png"
                      className="w-12 h-12 sm:w-auto sm:h-auto"
                    />
                    <p>
                      by <b>Hetmayar</b>
                    </p>
                  </div>
                  <p className="flex items-center gap-3 text-blue-700">
                    <FaArrowRight />
                    READ MORE
                  </p>
                </div>
              </div>
            </div>
            {/* scroller */}
            <div className="flex gap-4 justify-center lg:justify-start lg:pl-60">
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
          <div className="flex flex-col gap-8 md:gap-12 w-full lg:w-1/3">
            {/* card-1 */}
            <div className="border-2 border-gray-300 p-4 sm:p-6 md:p-8">
              <div className="flex gap-4 mb-6">
                <h3 className="text-blue-700 font-bold">__ _</h3>
                <h3 className="text-blue-950 font-bold text-xl">About Me</h3>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://html.webtend.net/omnivus/assets/img/sidebar/blog-about.png"
                  className="mb-6 w-auto h-auto"
                />
                <h3 className="text-blue-950 font-bold mb-4 text-xl text-center">
                  Rosalina D. Willaimson
                </h3>
                <p className="text-base text-gray-400 text-center">
                  Lorem ipsum dolor sit amet, consecte-
                </p>
                <p className="text-base text-gray-400 text-center">
                  tur adipisicing elit, sed do eiusmod
                </p>
                <p className="text-base text-gray-400 mb-4 text-center">
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
            {/* card-2 */}
            <div className="border-2 border-gray-300 p-4 sm:p-6 md:p-8">
              <div className="flex gap-4 mb-6">
                <h3 className="text-blue-700 font-bold">__ _</h3>
                <h3 className="text-blue-950 font-bold text-xl">
                  Search Objects
                </h3>
              </div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search your keyword..."
                  className="bg-blue-100 px-4 sm:px-8 py-4 text-xs flex-1 min-w-0"
                />
                <button className="bg-blue-700 text-white px-4 sm:px-6 py-4 flex-shrink-0">
                  <FaSearch className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* card-3 */}
            <div className="border-2 border-gray-300 p-4 sm:p-6 md:p-8">
              <div className="flex gap-4 mb-6">
                <h3 className="text-blue-700 font-bold">__ _</h3>
                <h3 className="text-blue-950 font-bold text-xl">
                  Popular Feeds
                </h3>
              </div>
              <div className="flex flex-col gap-6 sm:gap-8">
                {[
                  {
                    des: <>Lorem ipsum dolor sit cing elit, sed do.</>,
                    images:
                      "https://html.webtend.net/omnivus/assets/img/sidebar/feeds-1.png",
                    date: "24th March 2019",
                  },
                  {
                    des: <>Lorem ipsum dolor sit cing elit, sed do.</>,
                    images:
                      "https://html.webtend.net/omnivus/assets/img/sidebar/feeds-2.png",
                    date: "24th March 2019",
                  },
                  {
                    des: <>Lorem ipsum dolor sit cing elit, sed do.</>,
                    images:
                      "https://html.webtend.net/omnivus/assets/img/sidebar/feeds-3.png",
                    date: "24th March 2019",
                  },
                  {
                    des: <>Lorem ipsum dolor sit cing elit, sed do.</>,
                    images:
                      "https://html.webtend.net/omnivus/assets/img/sidebar/feeds-4.png",
                    date: "24th March 2019",
                  },
                ].map((items, idx) => (
                  <div key={idx} className="flex gap-4 sm:gap-6">
                    <img
                      src={items.images}
                      className="w-16 h-16 sm:w-auto sm:h-auto flex-shrink-0"
                    />
                    <div className="flex flex-col gap-3 min-w-0">
                      <p className="text-blue-950 font-semibold text-sm sm:text-base">
                        {items.des}
                      </p>
                      <p className="flex gap-2 items-center text-sm text-blue-500">
                        <FaCalendar />
                        {items.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* card-4 */}
            <div className="border-2 border-gray-300 p-4 sm:p-6 md:p-8">
              <div className="flex gap-4 mb-6">
                <h3 className="text-blue-700 font-bold">__ _</h3>
                <h3 className="text-blue-950 font-bold text-xl">Categories</h3>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { category: "Business", numbers: 26 },
                  { category: "Consultant", numbers: 30 },
                  { category: "Creative", numbers: 71 },
                  { category: "UI/UX", numbers: 66 },
                  { category: "Technology", numbers: 60 },
                ].map((key, idx) => (
                  <div className="flex border-2 border-gray-400" key={idx}>
                    <button className="bg-blue-950 text-white px-6 sm:px-10 py-3 flex-1 text-left">
                      {key.category}
                    </button>
                    <button className="bg-black text-white px-4 sm:px-6 py-4 flex-shrink-0">
                      {key.numbers}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* card-5 */}
            <div className="border-2 border-gray-300 p-4 sm:p-6 md:p-8">
              <div className="flex gap-4 mb-6">
                <h3 className="text-blue-700 font-bold">__ _</h3>
                <h3 className="text-blue-950 font-bold text-xl">
                  Never Miss News
                </h3>
              </div>
              <div className="flex gap-3 items-center justify-center mb-4 pt-2 sm:mt-0 text-blue-700 flex-wrap">
                <div className="bg-black text-white p-2">
                  <Link
                    to="#"
                    className="hover:text-blue-500 transition-colors"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </Link>
                </div>

                <div className="bg-black text-white p-2">
                  <Link
                    to="#"
                    className="hover:text-blue-500 transition-colors"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </Link>
                </div>
                <div className="bg-black text-white p-2">
                  <Link
                    to="#"
                    className="hover:text-pink-500 transition-colors"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </Link>
                </div>
                <div className="bg-black text-white p-2">
                  <Link
                    to="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </Link>
                </div>
                <div className="bg-black text-white p-2">
                  <Link to="#" className="hover:text-red-600 transition-colors">
                    <FaYoutube className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            {/* card-6 */}
            <div className="border-2 border-gray-300 p-4 sm:p-6 md:p-8">
              <div className="flex gap-4 mb-6">
                <h3 className="text-blue-700 font-bold">__ _</h3>
                <h3 className="text-blue-950 font-bold text-xl">
                  Twitter Feeds
                </h3>
              </div>
              <div className="flex flex-col">
                {[
                  {
                    link: (
                      <>
                        Rescue - #Gutenberg ready @ wordpress <br /> Theme for
                        Creative Bloggers available on <br /> @ ThemeForest
                        https://t.co/2r1POjOjgV <br /> C…
                        https://t.co/rDAnPyClu1
                      </>
                    ),
                    date: "November 25, 2018",
                  },
                  {
                    link: (
                      <>
                        Rescue - #Gutenberg ready @ wordpress <br /> Theme for
                        Creative Bloggers available on <br /> @ ThemeForest
                        https://t.co/2r1POjOjgV <br /> C…
                        https://t.co/rDAnPyClu1
                      </>
                    ),
                    date: "November 25, 2018",
                  },
                  {
                    link: (
                      <>
                        Rescue - #Gutenberg ready @ wordpress <br /> Theme for
                        Creative Bloggers available on <br /> @ ThemeForest
                        https://t.co/2r1POjOjgV <br /> C…
                        https://t.co/rDAnPyClu1
                      </>
                    ),
                    date: "November 25, 2018",
                  },
                ].map((key, idx) => (
                  <div className="flex gap-4" key={idx}>
                    <Link className="flex-shrink-0 mt-1">
                      <FaTwitter className="text-blue-600" />
                    </Link>
                    <div className="flex flex-col gap-3 mb-2 min-w-0">
                      <Link className="text-xs text-blue-700 break-words">
                        {key.link}
                      </Link>
                      <p className="text-sm text-gray-700">{key.date}</p>
                      <hr />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* card-7 */}
            <div className="border-2 border-gray-300 p-4 sm:p-6 lg:p-8">
              <div className="flex gap-2 sm:gap-4 mb-4 sm:mb-6">
                <h3 className="text-blue-700 font-bold">__ _</h3>
                <h3 className="text-blue-950 font-bold text-lg sm:text-xl">
                  Instagram Feeds
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {[
                  {
                    image:
                      "https://html.webtend.net/omnivus/assets/img/sidebar/instagram-1.jpg",
                  },
                  {
                    image:
                      "https://html.webtend.net/omnivus/assets/img/sidebar/instagram-2.jpg",
                  },
                  {
                    image:
                      "https://html.webtend.net/omnivus/assets/img/sidebar/instagram-3.jpg",
                  },
                  {
                    image:
                      "https://html.webtend.net/omnivus/assets/img/sidebar/instagram-4.jpg",
                  },
                  {
                    image:
                      "https://html.webtend.net/omnivus/assets/img/sidebar/instagram-5.jpg",
                  },
                  {
                    image:
                      "https://html.webtend.net/omnivus/assets/img/sidebar/instagram-6.jpg",
                  },
                  {
                    image:
                      "https://html.webtend.net/omnivus/assets/img/sidebar/instagram-7.jpg",
                  },
                  {
                    image:
                      "https://html.webtend.net/omnivus/assets/img/sidebar/instagram-8.jpg",
                  },
                  {
                    image:
                      "https://html.webtend.net/omnivus/assets/img/sidebar/instagram-9.jpg",
                  },
                ].map((key, idx) => (
                  <img
                    key={idx}
                    src={key.image}
                    className="hover:cursor-pointer w-full h-auto aspect-square object-cover"
                  />
                ))}
              </div>
            </div>

            {/* card-8 */}
            <div className="border-2 border-gray-300 p-4 sm:p-6 lg:p-8">
              <div className="flex gap-2 sm:gap-4 mb-4 sm:mb-6">
                <h3 className="text-blue-700 font-bold">__ _</h3>
                <h3 className="text-blue-950 font-bold text-lg sm:text-xl">
                  Popular Tags
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2">
                {[
                  { tags: "Popular" },
                  { tags: "design" },
                  { tags: "ux" },
                  { tags: "usability" },
                  { tags: "develop" },
                  { tags: "icon" },
                  { tags: "business" },
                  { tags: "consult" },
                  { tags: "kit" },
                  { tags: "keyboard" },
                  { tags: "mouse" },
                  { tags: "tech" },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    className="bg-blue-100 p-2 text-black text-xs sm:text-sm hover:text-white hover:bg-blue-700 transition-colors duration-200 rounded-sm"
                  >
                    {item.tags}
                  </button>
                ))}
              </div>
            </div>

            {/* card-9 */}
            <div
              className="border-2 h-[12.5%] border-gray-300 text-center p-4 sm:p-6 lg:p-8 bg-cover bg-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] relative"
              style={{
                backgroundImage:
                  "url('https://html.webtend.net/omnivus/assets/img/sidebar/sidebar-ad-2.jpg')",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col text-white font-bold items-center bg-blue-700 py-4 sm:py-6 px-6 sm:px-8">
                  <h3 className="text-lg sm:text-xl">350x600</h3>
                  <h1 className="text-2xl sm:text-3xl">Add Banner</h1>
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

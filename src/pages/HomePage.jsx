import React from 'react';
import { Link } from 'react-router-dom';
import { User, MessageCircle } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="font-bold text-xl">FitnessBuddy</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="flex items-center px-3 py-2 rounded hover:bg-blue-700 transition">
                <User className="mr-1 h-5 w-5" />
                Profile
              </Link>
              <Link to="/buddychat" className="flex items-center px-3 py-2 rounded hover:bg-blue-700 transition">
                <MessageCircle className="mr-1 h-5 w-5" />
                Buddy Chat
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center" 
           style={{ backgroundImage: "url('/api/placeholder/800/400')" }}>
        <div className="bg-black bg-opacity-60 w-full h-full flex flex-col items-center justify-center px-4">
          <h1 className="text-white text-5xl font-bold">Find Your Perfect Workout Buddy</h1>
          <p className="text-gray-200 mt-4 text-lg">Achieve your fitness goals together!</p>
          <div className="mt-8 flex space-x-4">
            <Link to="/profile" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Create Profile
            </Link>
            <Link to="/buddychat" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Connect with Buddies
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Buddies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Workout Buddies</h2>
          <div className="flex flex-wrap justify-center">
            {/* Buddy Cards */}
            {['John', 'Lisa', 'Michael', 'Emily'].map((buddy, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={`/api/placeholder/200/200?name=${buddy}`}
                    alt={buddy}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold">{buddy}</h3>
                    <p className="text-gray-600 mt-2">Fitness Goal: Build Muscle</p>
                    <Link
                      to="/buddychat"
                      className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Message Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">FitnessBuddy</h4>
              <h5 className="text-lg mt-0 mb-2">Your personal fitness companion</h5>
              <div className="mt-6">
                <button className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fab fa-twitter"></i>
                </button>
                <button className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fab fa-instagram"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-300 text-sm font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm" href="#">About Us</a>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm" href="#">Blog</a>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm" href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-300 text-sm font-semibold mb-2">Other Resources</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm" href="#">Support</a>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm" href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm" href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-700" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-400 font-semibold py-1">
                Copyright © {new Date().getFullYear()} FitnessBuddy. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

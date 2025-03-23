import React from 'react';
import { useState } from 'react';
import { User, LogOut } from 'lucide-react';

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

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
              {isLoggedIn ? (
                <button 
                  onClick={handleLogout}
                  className="flex items-center px-3 py-2 rounded hover:bg-blue-700 transition"
                >
                  <LogOut className="mr-1 h-5 w-5" />
                  Logout
                </button>
              ) : (
                <button 
                  onClick={handleLogin}
                  className="flex items-center px-3 py-2 rounded hover:bg-blue-700 transition"
                >
                  <User className="mr-1 h-5 w-5" />
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center">
        <div className="bg-cover bg-center absolute top-0 w-full h-full" 
             style={{
               backgroundImage: "url('/api/placeholder/800/400')",
               filter: "brightness(0.7)"
             }}>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-bold text-5xl">
                  Your Fitness Journey Starts Here
                </h1>
                <p className="mt-4 text-lg text-gray-200">
                  Track workouts, monitor progress, and achieve your fitness goals with FitnessBuddy.
                </p>
                <button className="mt-8 bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-blue-200">
                  <i className="text-xl">🏋️</i>
                </div>
                <h5 className="text-xl font-bold">Workout Plans</h5>
                <p className="mt-2 mb-4 text-gray-600">
                  Access personalized workout plans designed for your fitness level and goals.
                </p>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="bg-green-100 p-6 rounded-lg shadow-lg">
                <div className="text-green-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-green-200">
                  <i className="text-xl">📊</i>
                </div>
                <h5 className="text-xl font-bold">Progress Tracking</h5>
                <p className="mt-2 mb-4 text-gray-600">
                  Track your progress with detailed metrics and visual charts.
                </p>
              </div>
            </div>

            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="bg-purple-100 p-6 rounded-lg shadow-lg">
                <div className="text-purple-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-purple-200">
                  <i className="text-xl">🥗</i>
                </div>
                <h5 className="text-xl font-bold">Nutrition Guidance</h5>
                <p className="mt-2 mb-4 text-gray-600">
                  Get nutrition tips and meal plans to complement your workout routine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Stats Section (Dummy Data) */}
      {isLoggedIn && (
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Your Fitness Dashboard</h2>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Workouts This Week</h3>
                  <p className="text-4xl font-bold text-blue-600">4</p>
                  <p className="text-sm text-gray-500">+2 from last week</p>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Total Minutes</h3>
                  <p className="text-4xl font-bold text-green-600">186</p>
                  <p className="text-sm text-gray-500">+42 from last week</p>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Calories Burned</h3>
                  <p className="text-4xl font-bold text-orange-600">1,450</p>
                  <p className="text-sm text-gray-500">+320 from last week</p>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Current Streak</h3>
                  <p className="text-4xl font-bold text-purple-600">6 days</p>
                  <p className="text-sm text-gray-500">Keep it up!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
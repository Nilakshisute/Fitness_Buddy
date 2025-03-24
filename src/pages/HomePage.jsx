// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, MessageCircle, LogIn, Search, Calendar, Dumbbell, Zap, Award, Heart, Settings, Bell } from 'lucide-react';

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change this based on auth logic
  const [workoutTips, setWorkoutTips] = useState([]);
  const [fitnessCategories, setFitnessCategories] = useState([]);
  const [featuredEvents, setFeaturedEvents] = useState([]);

  useEffect(() => {
    // Mock data for demonstration purposes
    setWorkoutTips([
      "Stay hydrated during intense workouts for maximum performance",
      "Try to vary your routine every 2-3 weeks to avoid plateaus",
      "Proper form is more important than heavy weights"
    ]);

    setFitnessCategories([
      { name: "Strength Training", icon: <Dumbbell className="h-10 w-10 text-red-500" />, count: 245 },
      { name: "Cardio", icon: <Zap className="h-10 w-10 text-blue-500" />, count: 184 },
      { name: "Yoga & Flexibility", icon: <Heart className="h-10 w-10 text-purple-500" />, count: 156 },
      { name: "Endurance", icon: <Award className="h-10 w-10 text-green-500" />, count: 120 }
    ]);

    setFeaturedEvents([
      { title: "Morning Park Run", date: "Mar 26", attendees: 24, location: "Central Park" },
      { title: "Group HIIT Session", date: "Mar 28", attendees: 12, location: "City Gym" },
      { title: "Outdoor Yoga Class", date: "Mar 30", attendees: 18, location: "Riverside" }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="font-bold text-xl">FitnessBuddy</span>
              {/* Navigation Links */}
              <div className="hidden md:flex ml-10 space-x-4">
                <Link to="/" className="px-3 py-2 rounded font-medium hover:bg-blue-700 transition">Home</Link>
                <Link to="/buddies" className="px-3 py-2 rounded font-medium hover:bg-blue-700 transition">Find Buddies</Link>
                <Link to="/workouts" className="px-3 py-2 rounded font-medium hover:bg-blue-700 transition">Workouts</Link>
                <Link to="/events" className="px-3 py-2 rounded font-medium hover:bg-blue-700 transition">Events</Link>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-blue-700 rounded-full px-3 py-1 flex-1 max-w-md mx-4">
              <Search className="h-5 w-5 text-blue-200" />
              <input
                type="text"
                placeholder="Find workout buddies, events, or routines..."
                className="bg-transparent border-none focus:outline-none text-white placeholder-blue-200 ml-2 flex-1"
              />
            </div>
            
            <div className="flex items-center space-x-3">
              {isLoggedIn ? (
                <>
                  <Link to="/notifications" className="relative p-2 rounded-full hover:bg-blue-700 transition">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs flex items-center justify-center">3</span>
                  </Link>
                  <Link to="/calendar" className="p-2 rounded-full hover:bg-blue-700 transition">
                    <Calendar className="h-5 w-5" />
                  </Link>
                  <Link to="/profile" className="p-2 rounded-full hover:bg-blue-700 transition">
                    <User className="h-5 w-5" />
                  </Link>
                  <Link to="/buddychat" className="flex items-center px-3 py-2 rounded-full bg-green-500 hover:bg-green-600 transition">
                    <MessageCircle className="mr-1 h-5 w-5" />
                    Chat
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/register" className="hidden md:flex items-center px-3 py-2 rounded-lg border border-white hover:bg-blue-700 transition">
                    Sign Up
                  </Link>
                  <Link to="/login" className="flex items-center px-4 py-2 rounded-lg bg-white text-blue-700 hover:bg-gray-100 transition font-medium">
                    <LogIn className="mr-1 h-5 w-5" />
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[600px] flex items-center justify-center text-center"
           style={{ backgroundImage: "url('/api/placeholder/1920/600')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            Find Your Perfect <span className="text-blue-400">Workout Buddy</span>
          </h1>
          <p className="text-gray-200 mt-6 text-xl max-w-2xl mx-auto">
            Connect with like-minded fitness enthusiasts, track your progress together, and achieve your fitness goals faster than ever!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <Link to="/register" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started Now
            </Link>
            <Link to="/how-it-works" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition">
              How It Works
            </Link>
          </div>
          <div className="mt-8 text-gray-300">
            <p>Join over 10,000+ fitness enthusiasts already on the platform</p>
          </div>
        </div>
      </div>

      {/* Daily Tips */}
      <div className="bg-blue-50 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center">
          <span className="font-bold text-blue-800 mr-4">TODAY'S TIP:</span>
          <div className="relative flex-1 overflow-hidden h-8">
            <div className="animate-marquee whitespace-nowrap">
              {workoutTips.map((tip, index) => (
                <span key={index} className="text-blue-700 mx-4">• {tip}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Find Buddies By Category</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Connect with workout partners who share your fitness interests and goals
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fitnessCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="p-8 text-center">
                  <div className="mx-auto rounded-full bg-gray-100 p-4 inline-flex mb-4">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-xl">{category.name}</h3>
                  <p className="text-gray-500 mt-2">{category.count} active members</p>
                  <Link to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="mt-5 inline-block text-blue-600 hover:text-blue-800 font-medium">
                    Find buddies →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold">Upcoming Workout Events</h2>
              <p className="text-gray-600 mt-2">Join group workouts and meet new fitness buddies</p>
            </div>
            <Link to="/events" className="text-blue-600 hover:text-blue-800 font-medium">
              View All Events →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-40 bg-blue-600 relative">
                  <img src={`/api/placeholder/400/200?text=${event.title}`} 
                       alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-white rounded-lg px-3 py-1 text-sm font-bold text-blue-800">
                    {event.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl">{event.title}</h3>
                  <div className="flex items-center mt-4 text-gray-600">
                    <User className="h-4 w-4 mr-2" />
                    <span>{event.attendees} attending</span>
                  </div>
                  <div className="flex items-center mt-2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <Link to={`/events/${index}`} 
                        className="mt-5 inline-block w-full text-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Join Event
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Buddies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Meet Featured Workout Buddies
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Connect with dedicated fitness enthusiasts who are ready to help you reach your goals
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {name: 'John', goal: 'Build Muscle', level: 'Advanced', availability: 'Mornings', specialty: 'Powerlifting'},
              {name: 'Lisa', goal: 'Weight Loss', level: 'Intermediate', availability: 'Evenings', specialty: 'HIIT Training'},
              {name: 'Michael', goal: 'Improve Endurance', level: 'Expert', availability: 'Weekends', specialty: 'Marathon Prep'},
              {name: 'Emily', goal: 'Tone & Flexibility', level: 'Intermediate', availability: 'Afternoons', specialty: 'Yoga & Pilates'}
            ].map((buddy, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={`/api/placeholder/300/300?name=${buddy.name}`}
                    alt={buddy.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4">
                    <h3 className="text-xl font-bold">{buddy.name}</h3>
                    <p className="text-sm">{buddy.level} • {buddy.availability}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <span className="text-sm font-semibold text-gray-600">FITNESS GOAL</span>
                    <p className="font-medium">{buddy.goal}</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-gray-600">SPECIALTY</span>
                    <p className="font-medium">{buddy.specialty}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Link
                      to={`/profile/${buddy.name.toLowerCase()}`}
                      className="flex-1 bg-gray-100 text-gray-800 text-center px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                    >
                      View Profile
                    </Link>
                    <Link
                      to={`/buddychat/${buddy.name.toLowerCase()}`}
                      className="flex-1 bg-blue-500 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      Message
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/buddies" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Discover More Buddies
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Choose FitnessBuddy?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our platform offers everything you need to find motivation, stay accountable, and achieve your fitness goals
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <User className="h-12 w-12 text-blue-500" />,
                title: "Smart Matching",
                description: "Our algorithm pairs you with workout partners who share your goals, experience level, and schedule preferences."
              },
              {
                icon: <Calendar className="h-12 w-12 text-blue-500" />,
                title: "Workout Scheduling",
                description: "Easily plan and schedule workout sessions with your buddies, with calendar integration and reminders."
              },
              {
                icon: <MessageCircle className="h-12 w-12 text-blue-500" />,
                title: "Real-time Chat",
                description: "Stay connected with your workout partners through our integrated messaging system."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center rounded-full bg-blue-100 p-4 mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah K.",
                image: "/api/placeholder/100/100?name=Sarah",
                quote: "Finding a workout buddy on this platform completely transformed my fitness journey. We keep each other accountable and I've finally reached my weight loss goals!",
                achievement: "Lost 30 pounds in 6 months"
              },
              {
                name: "Mark T.",
                image: "/api/placeholder/100/100?name=Mark",
                quote: "I was struggling to stay motivated to train for my first marathon. My fitness buddy here had run several, and his guidance and support got me across that finish line!",
                achievement: "Completed first marathon"
              },
              {
                name: "Jessica L.",
                image: "/api/placeholder/100/100?name=Jessica",
                quote: "As a beginner, gym anxiety was real. Meeting an experienced buddy here who showed me proper form and technique gave me the confidence I needed.",
                achievement: "Now training 4x weekly"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white text-gray-800 rounded-xl shadow-md p-6 relative">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-blue-600 text-sm">{testimonial.achievement}</p>
                  </div>
                </div>
                <p className="italic text-gray-600">"{testimonial.quote}"</p>
                <div className="absolute -bottom-3 left-10 w-6 h-6 bg-white transform rotate-45"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Workout Partner?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of fitness enthusiasts and take your workout routine to the next level!</p>
          <Link to="/register" className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Create Your Profile Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-semibold mb-4">FitnessBuddy</h4>
              <p className="text-gray-400 mb-4">
                Connecting fitness enthusiasts for better workout experiences and results.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold uppercase text-gray-300 mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Find Buddies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Workouts</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold uppercase text-gray-300 mb-4">Resources</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Support Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold uppercase text-gray-300 mb-4">Subscribe</h5>
              <p className="text-gray-400 mb-4">Get the latest fitness tips and updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-900"
                />
                <button className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-r-lg">
                  Join
                </button>
              </div>
            </div>
          </div>
          
          <hr className="my-8 border-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} FitnessBuddy. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
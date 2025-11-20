import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  
  const handleReportClick = () => {
    navigate("/report");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Marquee Section */}
      <div className="bg-gradient-to-r from-emerald-400 to-green-500 text-emerald-900 font-semibold p-4 overflow-hidden relative shadow-lg">
        <div className="animate-marquee whitespace-nowrap text-lg">
          🌍 Welcome to SafeCity — Stay aware, report emergencies fast, and help keep your community safe 🚨
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col">
        {/* Simple Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-12 scale-150"></div>
        </div>
        
        {/* Header */}
        <header className="relative z-10 text-center pt-20 pb-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                SafeCity
              </span>
            </h1>
            <div className="text-2xl md:text-3xl font-bold text-red-400 mb-4 animate-pulse">
              🚨 Stay Alert! SAVE LIVES 🚨
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Welcome Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white border-opacity-20 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Welcome to SafeCity
              </h2>
              
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
                Your platform to stay informed, report incidents, and help create a safer community. 
                Stay alert and connected to local alerts and safety updates.
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white bg-opacity-5 rounded-2xl p-6 border border-white border-opacity-10">
                  <div className="text-4xl mb-3">🚨</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Quick Reports</h3>
                  <p className="text-gray-300 text-sm">Report incidents instantly</p>
                </div>
                <div className="bg-white bg-opacity-5 rounded-2xl p-6 border border-white border-opacity-10">
                  <div className="text-4xl mb-3">🌍</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Community Safe</h3>
                  <p className="text-gray-300 text-sm">Keep your area secure</p>
                </div>
                <div className="bg-white bg-opacity-5 rounded-2xl p-6 border border-white border-opacity-10">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Fast Response</h3>
                  <p className="text-gray-300 text-sm">Get help when needed</p>
                </div>
              </div>

              {/* Report Button */}
              <button
                onClick={handleReportClick}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl hover:from-red-500 hover:to-red-600 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-400 to-red-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></span>
                <span className="relative flex items-center gap-2">
                  🚨 Report an Incident
                </span>
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-black text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Always Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-green-400 mb-2">100%</div>
                <div className="text-gray-300">Secure & Private</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-blue-400 mb-2">Fast</div>
                <div className="text-gray-300">Emergency Response</div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 bg-black bg-opacity-30 backdrop-blur-sm text-white py-8 px-6 text-center border-t border-white border-opacity-10">
          <p className="text-gray-300">
            © {new Date().getFullYear()} SafeCity. All rights reserved. | Making communities safer together.
          </p>
        </footer>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-marquee {
          display: inline-block;
          animation: marquee 25s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

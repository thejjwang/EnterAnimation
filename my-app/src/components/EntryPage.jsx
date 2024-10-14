import React from 'react';

const EntryPage = ({ onEnter }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 animate-gradient">
      <button
        onClick={onEnter}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 text-lg text-white bg-black bg-opacity-50 border-2 border-white rounded-md transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:text-black"
      >
        Enter
      </button>
      <style jsx>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradientAnimation 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default EntryPage;
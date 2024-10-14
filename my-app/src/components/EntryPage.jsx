import React, { useEffect, useState } from 'react';

const EntryPage = ({ onEnter }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();

    const moveParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.speedX + 100) % 100,
          y: (particle.y + particle.speedY + 100) % 100,
        }))
      );
    };

    const intervalId = setInterval(moveParticles, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-50"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
      <button
        onClick={onEnter}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 text-lg text-white bg-black bg-opacity-50 border-2 border-white rounded-md transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:text-black z-10"
      >
        Enter
      </button>
    </div>
  );
};

export default EntryPage;
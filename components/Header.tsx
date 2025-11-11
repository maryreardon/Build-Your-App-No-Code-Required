
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center w-full pt-8 md:pt-16">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        Build Your App, <span className="text-emerald-400">No Code Required</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
        From idea to launch, get your AI-generated roadmap for publishing on Google Play without writing a single line of code.
      </p>
    </header>
  );
};

export default Header;

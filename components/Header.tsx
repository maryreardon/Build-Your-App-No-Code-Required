import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center w-full pt-8 md:pt-16">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        Your App Idea, The <span className="text-emerald-400">Easiest Path to Launch</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
        From concept to customers, get an AI-generated roadmap that uses no-code tools and the simplest app stores to get you published.
      </p>
    </header>
  );
};

export default Header;
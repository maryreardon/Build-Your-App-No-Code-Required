
import React from 'react';

const RocketIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.12-.65-.82-2.12-.8-3.12.05z" />
    <path d="m12 15.5 6.04-6.04c.63-.63.63-1.65 0-2.28l-2.28-2.28a1.61 1.61 0 0 0-2.28 0L7.5 12" />
    <path d="M14.5 7.5 3 19" />
    <path d="m21 3-6 6" />
    <path d="m15 7.5.34.34" />
  </svg>
);


interface UserInputFormProps {
  userProfile: string;
  setUserProfile: (value: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

const UserInputForm: React.FC<UserInputFormProps> = ({ userProfile, setUserProfile, onGenerate, isLoading }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <textarea
          value={userProfile}
          onChange={(e) => setUserProfile(e.target.value)}
          placeholder="Describe your app idea (e.g., 'A social network for gardeners'). No technical details needed!"
          className="w-full h-24 md:h-16 p-4 pr-32 md:pr-48 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 resize-none"
          disabled={isLoading}
        />
        <button
          onClick={onGenerate}
          disabled={isLoading}
          className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 text-gray-900 font-bold rounded-md hover:bg-emerald-400 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
        >
          <RocketIcon />
          <span>{isLoading ? 'Generating...' : 'Create My Roadmap'}</span>
        </button>
      </div>
    </div>
  );
};

export default UserInputForm;

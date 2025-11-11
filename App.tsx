import React, { useState, useCallback } from 'react';
import { generatePlan } from './services/geminiService';
import Header from './components/Header';
import UserInputForm from './components/UserInputForm';
import MillionDollarPlan from './components/MillionDollarPlan';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [userProfile, setUserProfile] = useState<string>('');
  const [plan, setPlan] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasGenerated, setHasGenerated] = useState<boolean>(false);

  const handleGeneratePlan = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setPlan('');
    setHasGenerated(true);

    try {
      const result = await generatePlan(userProfile);
      setPlan(result);
    } catch (err) {
      setError('Failed to generate a plan. Please check your connection or API key and try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [userProfile]);

  return (
    <div className="relative min-h-screen w-full bg-gray-900 text-white font-sans flex flex-col items-center antialiased">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center opacity-10"></div>
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto px-4 pb-32 md:pb-40">
        <Header />
        
        <main className="w-full mt-8">
          {isLoading && <LoadingSpinner />}
          {error && <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg text-center">{error}</div>}
          
          {plan && (
            <div className="animate-fade-in-up">
              <MillionDollarPlan plan={plan} />
            </div>
          )}

          {!hasGenerated && !isLoading && (
             <div className="text-center text-gray-400 mt-16 animate-fade-in-up">
              <p className="text-lg">Ready to bring your app idea to life?</p>
              <p>Enter your concept below to get a personalized roadmap for the easiest path to market, no code required.</p>
            </div>
          )}

        </main>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-20 p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700">
        <UserInputForm 
            userProfile={userProfile} 
            setUserProfile={setUserProfile} 
            onGenerate={handleGeneratePlan} 
            isLoading={isLoading} 
        />
      </div>
    </div>
  );
};

export default App;
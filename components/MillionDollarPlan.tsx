import React from 'react';

interface MillionDollarPlanProps {
  plan: string;
}

const MillionDollarPlan: React.FC<MillionDollarPlanProps> = ({ plan }) => {
  const planLines = plan.split('\n').filter(line => line.trim() !== '');

  return (
    <div className="bg-gray-800/50 backdrop-blur-md p-6 md:p-8 rounded-xl border border-gray-700 shadow-2xl">
      <div className="text-left space-y-3 text-gray-300 leading-relaxed">
        {planLines.map((line, index) => {
          if (line.startsWith('**Phase')) {
            const cleanLine = line.replace(/\*\*/g, '');
            return (
              <h3 key={index} className="text-2xl font-bold text-emerald-400 mt-6 mb-3 border-b border-emerald-400/20 pb-2">
                {cleanLine}
              </h3>
            );
          }
          if (line.startsWith('* ')) {
            return (
              <div key={index} className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1">&#9670;</span>
                <p>{line.substring(2)}</p>
              </div>
            );
          }
          return <p key={index}>{line}</p>;
        })}
      </div>
    </div>
  );
};

export default MillionDollarPlan;
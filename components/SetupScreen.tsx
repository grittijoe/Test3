import React, { useState } from 'react';
import { UsersIcon } from './icons/UsersIcon';
import { CurrencyIcon } from './icons/CurrencyIcon';

interface SetupScreenProps {
  onStart: (teamCount: number, budget?: number) => void;
}

export const SetupScreen: React.FC<SetupScreenProps> = ({ onStart }) => {
  const [teamCount, setTeamCount] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const count = parseInt(teamCount, 10);
    if (isNaN(count) || count < 2) {
      setError('Bitte geben Sie eine gültige Anzahl von Teams ein (mindestens 2).');
      return;
    }
    
    const budgetValue = budget ? parseFloat(budget) : undefined;
    if (budget && (isNaN(budgetValue) || budgetValue < 0)) {
        setError('Bitte geben Sie einen gültigen positiven Betrag für das Budget ein.');
        return;
    }

    setError(null);
    onStart(count, budgetValue);
  };

  return (
    <div className="text-center p-8 bg-slate-800/50 rounded-2xl shadow-2xl backdrop-blur-sm border border-slate-700 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 mb-4">
        Turnierplan-Generator
      </h1>
      <p className="text-slate-400 mb-8 max-w-md mx-auto">
        Geben Sie die Anzahl der teilnehmenden Teams und optional das Budget pro Team ein, um die Turniergruppen zu erstellen.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <div className="relative w-full max-w-xs">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <UsersIcon className="w-5 h-5 text-slate-400" />
          </div>
          <input
            type="number"
            value={teamCount}
            onChange={(e) => setTeamCount(e.target.value)}
            placeholder="Anzahl der Teams"
            min="2"
            required
            className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition duration-300"
            aria-label="Anzahl der Teams"
          />
        </div>
         <div className="relative w-full max-w-xs">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <CurrencyIcon className="w-5 h-5 text-slate-400" />
          </div>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Budget pro Team (optional)"
            min="0"
            step="0.01"
            className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition duration-300"
            aria-label="Budget pro Team"
          />
        </div>
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        <button
          type="submit"
          className="w-full max-w-xs bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500"
        >
          Plan Erstellen
        </button>
      </form>
    </div>
  );
};

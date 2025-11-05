import React from 'react';
import type { Group } from '../types';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface TournamentScreenProps {
  groups: Group[];
  onBack: () => void;
}

export const TournamentScreen: React.FC<TournamentScreenProps> = ({ groups, onBack }) => {
  return (
    <div className="w-full animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
          Turnierplan
        </h1>
        <button
          onClick={onBack}
          className="flex items-center gap-2 bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold py-2 px-4 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Zurück
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div
            key={group.id}
            className="bg-slate-800/50 rounded-xl shadow-lg border border-slate-700 overflow-hidden transform transition-all duration-500 hover:shadow-sky-500/20 hover:-translate-y-1"
          >
            <div className="p-4 bg-slate-700/50">
              <h2 className="text-xl font-bold text-sky-400">{group.name}</h2>
            </div>
            <ul className="p-4 divide-y divide-slate-700">
              {group.teams.map((team, index) => (
                <li
                  key={team.id}
                  className="py-3 flex items-center justify-between text-slate-300"
                >
                  <span className="font-medium">{team.name}</span>
                  <div className="flex items-center gap-2">
                    {team.budget !== undefined && (
                       <span className="text-xs font-mono bg-slate-700/80 text-green-400 px-2 py-1 rounded-full">
                        {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(team.budget)}
                      </span>
                    )}
                    <span className="text-xs font-mono bg-slate-700/80 text-sky-400 px-2 py-1 rounded-full">
                      ID: {team.id}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useState, useCallback } from 'react';
import { SetupScreen } from './components/SetupScreen';
import { TournamentScreen } from './components/TournamentScreen';
import type { Group, Team } from './types';

const App: React.FC = () => {
  const [groups, setGroups] = useState<Group[] | null>(null);

  const handleGeneratePlan = useCallback((teamCount: number, budget?: number) => {
    const teams: Team[] = Array.from({ length: teamCount }, (_, i) => ({
      id: i + 1,
      name: `Team ${i + 1}`,
      budget: budget,
    }));

    if (teamCount <= 6) {
      setGroups([
        {
          id: 1,
          name: 'Turnier',
          teams: teams,
        },
      ]);
      return;
    }

    const numGroups = Math.ceil(teamCount / 6);
    const newGroups: Group[] = Array.from({ length: numGroups }, (_, i) => ({
      id: i + 1,
      name: `Gruppe ${i + 1}`,
      teams: [],
    }));

    teams.forEach((team, index) => {
      const groupIndex = index % numGroups;
      newGroups[groupIndex].teams.push(team);
    });

    setGroups(newGroups);
  }, []);

  const handleReset = useCallback(() => {
    setGroups(null);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-4 transition-all duration-500">
      <div className="w-full max-w-4xl mx-auto">
        {!groups ? (
          <SetupScreen onStart={handleGeneratePlan} />
        ) : (
          <TournamentScreen groups={groups} onBack={handleReset} />
        )}
      </div>
    </div>
  );
};

export default App;

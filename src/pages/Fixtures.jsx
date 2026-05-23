import { useState } from 'react';
import { getCurrentPlayer } from '../services/auth.js';
import { fixtures, getFixturesForTeam } from '../data/fixtures.js';
import FixtureCard from '../components/FixtureCard.jsx';
import Header from '../components/Header.jsx';

export default function Fixtures() {
  const player = getCurrentPlayer();
  const [view, setView] = useState('my');
  const myFixtures = getFixturesForTeam(player.teamId);
  const list = view === 'my' ? myFixtures : fixtures;

  return (
    <>
      <Header title="Fixtures" />
      <p className="page-subtitle">
        {view === 'my' ? 'Your franchise fixtures' : 'All league fixtures'}
      </p>

      <div className="segment-control">
        <button
          type="button"
          className={view === 'my' ? 'active' : ''}
          onClick={() => setView('my')}
        >
          My team
        </button>
        <button
          type="button"
          className={view === 'all' ? 'active' : ''}
          onClick={() => setView('all')}
        >
          All fixtures
        </button>
      </div>

      {list.length === 0 ? (
        <div className="empty-state">
          <p>No fixtures found</p>
        </div>
      ) : (
        list.map((fx) => (
          <FixtureCard
            key={fx.id}
            fixture={fx}
            highlight={view === 'my'}
          />
        ))
      )}
    </>
  );
}

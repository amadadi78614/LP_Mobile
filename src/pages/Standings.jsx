import { standings } from '../data/standings.js';
import { getTeamById } from '../data/teams.js';
import Header from '../components/Header.jsx';
import './Standings.css';

export default function Standings() {
  return (
    <>
      <Header title="League Table" />
      <p className="page-subtitle">Season 3 — Men's Franchise League</p>

      <div className="standings-table-wrap">
        <table className="standings-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>P</th>
              <th>W</th>
              <th>L</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((row) => {
              const team = getTeamById(row.teamId);
              return (
                <tr key={row.teamId}>
                  <td className="pos">{row.position}</td>
                  <td className="team-cell">
                    <span className="team-dot" style={{ background: team?.color }} />
                    {team?.shortName}
                  </td>
                  <td>{row.played}</td>
                  <td className="win">{row.won}</td>
                  <td className="loss">{row.lost}</td>
                  <td className="pts">{row.points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

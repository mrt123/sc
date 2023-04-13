import DisplayTeam, { PlayerStats } from "./DisplayTeam";
export type { PlayerStats } from "./DisplayTeam";

interface DisplayTeamsProps {
  teams: PlayerStats[][];
}

const DisplayTeams = ({ teams }: DisplayTeamsProps) => {
  if (teams.length < 2) return null;

  return (
    <div
      style={{
        fontSize: "14px",
        paddingBottom: "30px",
      }}
    >
      <DisplayTeam teamLabel="team1" players={teams[0]} />
      <DisplayTeam teamLabel="team2" players={teams[1]} />
    </div>
  );
};

export default DisplayTeams;

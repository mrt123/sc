import CopyTextInput from "../common/inputs/CopyTextInput";

export interface PlayerStats {
  playerName: string;
  kDRatio: number | null;
}

interface TeamsTextProps {
  teams: PlayerStats[][];
}

const getTeamText = (team: PlayerStats[]) => {
  const nameTextLimit = 8; // total chat limit in sc is 119 chars
  const playerNames = team.map((p) => p.playerName.substring(0, nameTextLimit));
  const playerNamesText = playerNames.join(", ");
  return playerNamesText;
};

const TeamsChatText = ({ teams }: TeamsTextProps) => {
  if (teams.length < 2) return null;
  const team1Text = getTeamText(teams[0]);
  const team2Text = getTeamText(teams[1]);

  const teamsText = `mrt123.github.io/sc ===> ${team1Text} ---VS---  ${team2Text} `;

  return (
    <>
      <CopyTextInput value={teamsText} />
    </>
  );
};

export default TeamsChatText;

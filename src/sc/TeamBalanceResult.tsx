import DisplayTeams, { PlayerStats } from "./DisplayTeams";
import TeamsChatText from "./TeamsChatText";

interface Props {
  show: boolean;
  teamsData: PlayerStats[][] | undefined;
}

const TeamBalanceResult = ({ show, teamsData }: Props) => {
  if (!show || !teamsData) return null;

  return (
    <>
      <DisplayTeams teams={teamsData} />
      <TeamsChatText teams={teamsData} />
    </>
  );
};

export default TeamBalanceResult;

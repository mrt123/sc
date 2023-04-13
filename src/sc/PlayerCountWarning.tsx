import { Alert } from "@mui/material";

interface Props {
  numberOfPlayers: number | undefined;
  hostIsPresent: boolean;
  checkWhen: boolean;
}
const PlayerCountWarning = ({
  numberOfPlayers,
  hostIsPresent,
  checkWhen: check,
}: Props) => {
  const playerNumberNotEvenMsg =
    numberOfPlayers === 0 || (numberOfPlayers && numberOfPlayers % 2 !== 0)
      ? "...you must wait for even numbers of players in order to generate teams"
      : null;

  const hostMissingInfoWarning = hostIsPresent
    ? null
    : "Host player info missing! Fill in your player stats first!";

  const warning = hostMissingInfoWarning || playerNumberNotEvenMsg;

  return check && warning ? <Alert severity="warning">{warning}</Alert> : null;
};

export default PlayerCountWarning;

export interface PlayerStats {
  playerName: string;
  wins: number | null;
  losses: number | null;
  kDRatio: number | null;
  value: number;
  isHost: boolean;
}

interface DisplayTeamProps {
  players: PlayerStats[];
  teamLabel: string;
}

const rowStyle = {
  textAlign: "left" as "left",
};

const getPlayerNameStyle = (isHost: boolean) => {
  const hostStyle = isHost
    ? {
        fontWeight: "bold",
        border: "1px solid black",
        borderRadius: "3px",
        background: "yellow",
      }
    : {};

  return {
    padding: "0 5px",
    ...hostStyle,
  };
};

interface PlayerNameProps {
  name: string;
  isHost: boolean;
}
const PlayerName: React.FC<PlayerNameProps> = ({ name, isHost }) => {
  return <span style={getPlayerNameStyle(isHost)}>{name}</span>;
};

const DisplayTeam = ({ players, teamLabel }: DisplayTeamProps) => {
  const playersEl = players.map((p, i) => (
    <tr key={i}>
      <td style={rowStyle}>
        <PlayerName name={p.playerName} isHost={p.isHost} />
      </td>
      <td style={rowStyle}>{p.wins}</td>
      <td style={rowStyle}>{p.losses}</td>
      <td style={rowStyle}>{p.kDRatio}</td>
      <td style={rowStyle}>{p.value}</td>
    </tr>
  ));

  return (
    <table style={{ width: "100%", margin: "10px 0", background: "lightgrey" }}>
      <thead>
        <tr>
          <th style={rowStyle}>player</th>
          <th style={rowStyle}>wins</th>
          <th style={rowStyle}>losses</th>
          <th style={rowStyle}>W/L ratio</th>
          <th style={rowStyle}>estimated value</th>
        </tr>
      </thead>
      <tbody>{playersEl}</tbody>
    </table>
  );
};

export default DisplayTeam;

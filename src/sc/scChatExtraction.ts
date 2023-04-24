export interface PlayerFormStats {
  name: string | null;
  wins: number | null;
  losses: number | null;
}

export const getPlayerChatEntry = (stats: PlayerFormStats) => {
  if (stats?.name && stats?.wins && stats.losses)
    return `${stats.name} has joined the game.\n${stats.name}: [???] Custom Games - Wins: ${stats.wins}, Losses: ${stats.losses}, Disconnects: 0.`;
  return "";
};

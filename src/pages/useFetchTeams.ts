import { useEffect, useState } from "react";

interface PlayerStats {
  playerName: string;
  wins: number | null;
  losses: number | null;
  kDRatio: number | null;
  value: number;
  isHost: boolean;
}

interface HookOptions {
  hostPlayerEntry: string;
  chatContents: string;
  hostPlayerName: string;
}

interface FetchedTeamsData {
  teams: PlayerStats[][];
  numberOfPlayers: number;
}

const fetchTeams = async (
  chatText: string,
  hostPlayerName: string,
  controller: AbortController
) => {
  const signal = controller.signal;
  // await new Promise((resolve) => setTimeout(resolve, 500));
  return fetch("http://localhost:3000/sc-chat/balanced-teams", {
    method: "post",
    signal,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chatText,
      hostPlayerName,
    }),
  });
};

const useFetchTeams = ({
  hostPlayerEntry,
  chatContents,
  hostPlayerName,
}: HookOptions) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<FetchedTeamsData | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchAndSetState = async () => {
      setIsLoading(true);
      setData(null);
      try {
        const response = await fetchTeams(
          chatContents + "\n" + hostPlayerEntry,
          hostPlayerName,
          abortController
        );
        setData(await response.json());
        setIsLoading(false);
      } catch (e) {
        if (!abortController.signal.aborted) {
          throw e;
        }
      }
    };

    if (hostPlayerEntry.length && chatContents.length) {
      fetchAndSetState();
    }

    return () => {
      abortController.abort();
    };
  }, [chatContents, hostPlayerEntry, hostPlayerName]);

  return {
    isLoading,
    data,
  };
};

export default useFetchTeams;

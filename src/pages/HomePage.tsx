import { useState } from "react";
import PlayerForm, { PlayerFormStats } from "../sc/PlayerForm";
import { Button, TextField } from "@mui/material";
import PlayerCountWarning from "../sc/PlayerCountWarning";
import useFetchTeams from "./useFetchTeams";
import LinearProgressLoader from "../common/LinearProgressLoader";
import TeamBalanceResult from "../sc/TeamBalanceResult";
import { getPlayerChatEntry } from "../sc/scChatExtraction";
import BugReportIcon from "@mui/icons-material/BugReport";

function HomePage() {
  const [chatContents, setChatContents] = useState("");
  const [hostPlayerEntry, setHostPlayerEntry] = useState("");
  const [hostPlayerName, setHostPlayerName] = useState("");

  const { data: teamsData, isLoading } = useFetchTeams({
    hostPlayerName,
    hostPlayerEntry,
    chatContents,
  });

  const updateHostPlayerEntry = (stats: PlayerFormStats) => {
    const chatEntry = getPlayerChatEntry(stats);
    if (stats.name) {
      setHostPlayerName(stats.name);
    }
    setHostPlayerEntry(chatEntry);
  };

  return (
    <div>
      <PlayerForm onChange={updateHostPlayerEntry} />
      <TextField
        id="chat-text"
        label="Chat text"
        value={chatContents}
        multiline
        rows={5}
        fullWidth
        onChange={(e) => setChatContents(e.target.value)}
        size="medium"
        style={{ margin: "20px 0" }}
        placeholder="Copy/Paste all chat contents from your game server here."
        focused
      />
      <PlayerCountWarning
        checkWhen={chatContents !== ""}
        numberOfPlayers={teamsData?.numberOfPlayers}
        hostIsPresent={!!hostPlayerEntry.length}
      />
      <TeamBalanceResult show={!isLoading} teamsData={teamsData?.teams} />
      <LinearProgressLoader show={isLoading} />
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="text"
          size="small"
          href="https://github.com/mrt123/sc/issues"
          target="_blank"
          endIcon={<BugReportIcon />}
        >
          report issue
        </Button>
      </div>
    </div>
  );
}

export default HomePage;

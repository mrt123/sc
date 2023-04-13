import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ChangeEventHandler, useState } from "react";

export interface PlayerFormStats {
  name: string | null;
  wins: number | null;
  losses: number | null;
}

interface Props {
  onChange: (stats: PlayerFormStats) => void;
}

const initialState = {
  name: "",
  wins: "",
  losses: "",
};

const PlayerForm = ({ onChange }: Props) => {
  const [state, setState] = useState(initialState);
  const updateFormState: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const newState = { ...state, [event.target.id]: event.target.value };
    setState(newState);
    const onChangeValueToPropagate = {
      name: newState.name.length ? newState.name : null,
      wins: newState.wins ? Number(newState.wins) : null,
      losses: newState.losses ? Number(newState.losses) : null,
    };
    onChange(onChangeValueToPropagate);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        style={{
          backgroundColor: "yellow",
        }}
        id="name"
        label="your name"
        variant="outlined"
        value={state.name}
        onChange={updateFormState}
        size="small"
        required
      />
      <TextField
        id="wins"
        label="your wins number"
        type="number"
        variant="outlined"
        value={state.wins}
        onChange={updateFormState}
        size="small"
        required
        style={{
          width: 100,
        }}
      />
      <TextField
        id="losses"
        label="your losses number"
        type="number"
        variant="outlined"
        value={state.losses}
        onChange={updateFormState}
        size="small"
        required
        style={{
          width: 100,
        }}
      />
    </Box>
  );
};

export default PlayerForm;

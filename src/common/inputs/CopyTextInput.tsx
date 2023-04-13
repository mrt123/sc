import IconButton from "@mui/material/IconButton";
import CopyIcon from "@mui/icons-material/ContentCopy";
import TextField from "@mui/material/TextField";
import { Tooltip } from "@mui/material";

interface Props {
  value: string;
}

const CopyTextInput = ({ value = "" }: Props) => {
  const CopyButton = () => (
    <Tooltip title="Copy to clipboard">
      <IconButton
        onClick={() => {
          navigator.clipboard.writeText(value);
        }}
      >
        <CopyIcon />
      </IconButton>
    </Tooltip>
  );

  const inputLabel =
    "copy contents, and paste to the chat, to let other players know of team balance";

  return (
    <TextField
      fullWidth
      size="medium"
      label={inputLabel}
      value={value}
      InputProps={{ readOnly: true, endAdornment: <CopyButton /> }}
    />
  );
};

export default CopyTextInput;

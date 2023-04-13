import { Box, LinearProgress } from "@mui/material";

interface CircleLoaderProps {
  show: boolean;
}

const LinearProgressLoader = ({ show }: CircleLoaderProps) => {
  if (!show) return null;
  return (
    <Box
      sx={{
        width: "70%",
        margin: "50px auto",
      }}
    >
      <LinearProgress />
    </Box>
  );
};

export default LinearProgressLoader;

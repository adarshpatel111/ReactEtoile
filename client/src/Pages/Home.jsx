import { Stack } from "@mui/material";
import QueAns from "../Components/QueAns/QueAns";
import Banner from "../Components/Banner/Banner";
const Home = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        BackgroundImage: "url(./Images/Background.png)",
      }}
    >
      <Banner />
      <Stack sx={{ width: { xs: "100%", md: "80%" }, margin: "auto" }}>
        <QueAns />
      </Stack>
    </Stack>
  );
};
export default Home;

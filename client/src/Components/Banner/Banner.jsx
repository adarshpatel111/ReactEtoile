import Lottie from "lottie-react";
import ni from "../../assets/animated_image.json";
import { Stack, Typography } from "@mui/material";
const Banner = () => {
  return (
    <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
      <Stack
        sx={{
          width: "80%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "80vh",
            gap: 2,
          }}
        >
          <Typography variant="h2" component={"h1"}>
            Master JavaScript and MERN Stack with Expert Q&A
          </Typography>
          <Typography variant="body1" component={"p"}>
            Get answers to all your JavaScript and MERN Stack questions and
            boost your development skills!
          </Typography>
        </Stack>
        <Stack
          sx={{
            
            width: "80%",
            height: "80vh",
          }}
        >
          <Lottie
            animationData={ni}
            play={true}
            style={{ width: 500, height: 500 }}
          />
        </Stack>
       
      </Stack>
    </Stack>
  );
};
export default Banner;

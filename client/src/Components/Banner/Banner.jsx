import Lottie from "lottie-react";
import ni from "../../assets/animated_image.json";
import { Stack, Typography, useTheme } from "@mui/material";

const Banner = () => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        py: 4,
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)", // nice subtle bg
      }}
    >
      <Stack
        sx={{
          width: "100%",
          maxWidth: "1300px",
          flexDirection: { xs: "column", md: "row" }, // column on mobile, row on desktop
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* LEFT TEXT SECTION */}
        <Stack
          sx={{
            flex: 1,
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            gap: 2,
            p: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 700,
              color: theme.palette.primary.main,
            }}
          >
            Master JavaScript and Frontend with Expert Q&A
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              maxWidth: "600px",
              color: theme.palette.text.secondary,
            }}
          >
            Get answers to all your JavaScript and MERN Stack questions and
            boost your development skills!
          </Typography>
        </Stack>

        {/* RIGHT ANIMATION SECTION */}
        <Stack
          sx={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Lottie
            animationData={ni}
            loop
            autoplay
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Banner;

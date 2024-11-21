import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

const Footer = () => {
  return (
    <Stack
      sx={{ backgroundColor: "#f1f1f1", width: "100%" }}
    >
      <Stack sx={{ padding: "70px 20px",flexDirection:"row",justifyContent:"space-between",alignItems:"center" }}>
        <Box display="flex" alignItems="center">
          <QuestionAnswerOutlinedIcon
            fontSize="large"
            sx={{ marginRight: 1 }}
          />
          <Typography variant="h6">Your Company</Typography>
        </Box>

        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;

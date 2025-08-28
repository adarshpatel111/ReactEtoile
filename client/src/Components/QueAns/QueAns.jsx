import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Chip,
  Stack,
  Tooltip,
  IconButton,
  Grid,
  Box,
  Container,
  Divider,
} from "@mui/material";
import Inventory2SharpIcon from "@mui/icons-material/Inventory2Sharp";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import { questionData } from "../../utilities/questionData";

const QueAns = () => {
  const [copiedExampleId, setCopiedExampleId] = useState(null);
  const [selectedChip, setSelectedChip] = useState("All");
  const [chips] = useState([
    { label: "All" },
    { label: "React" },
    { label: "JavaScript" },
    { label: "DSA" },
  ]);

  const handleCopy = async (id, text) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedExampleId(id);
      setTimeout(() => setCopiedExampleId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const filteredData =
    selectedChip === "All"
      ? questionData
      : questionData.filter((item) => item.queType === selectedChip);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
      {/* Page Header */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "bold",
          fontFamily: "Montserrat",
          mb: { xs: 3, md: 4 },
        }}
      >
        📘 Interview Questions
      </Typography>

      {/* Chip Section */}
      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          backgroundColor: "#f9fafb",
          p: 2,
          borderRadius: 3,
          justifyContent: "center",
          flexWrap: "wrap",
          mb: { xs: 3, md: 5 },
        }}
      >
        {chips.map((chip) => (
          <Chip
            key={chip.label}
            label={chip.label}
            clickable
            sx={{
              px: 1.5,
              fontWeight: selectedChip === chip.label ? "bold" : "normal",
              borderColor:
                selectedChip === chip.label ? "primary.main" : "gray",
              color: selectedChip === chip.label ? "primary.main" : "inherit",
              "&:hover": { borderColor: "primary.main", color: "primary.main" },
            }}
            variant="outlined"
            onClick={() => setSelectedChip(chip.label)}
          />
        ))}
      </Stack>

      {/* Questions Section */}
      {filteredData.length > 0 ? (
        <Grid container spacing={3}>
          {filteredData.map((item) => (
            <Grid item xs={12} sm={6} md={6} key={item.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
                }}
              >
                <CardHeader
                  title={
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Montserrat",
                        fontSize: { xs: "15px", md: "17px" },
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {`${item.id}. ${item.question}`}
                    </Typography>
                  }
                />
                <Divider />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: { xs: "14px", md: "15px" },
                      lineHeight: 1.6,
                      color: "text.secondary",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {item.answer}
                  </Typography>

                  {item.example && (
                    <Box
                      sx={{
                        position: "relative",
                        border: "1px solid #e5e7eb",
                        borderRadius: 2,
                        backgroundColor: "#1e293b",
                        color: "#f1f5f9",
                        p: 2,
                        mt: 2,
                        fontFamily: "monospace",
                        fontSize: { xs: "13px", md: "14px" },
                        minHeight: "80px",
                        maxHeight: "220px",
                        overflowY: "auto",
                      }}
                    >
                      <pre style={{ margin: 0 }}>
                        <code>{item.example}</code>
                      </pre>
                      <Tooltip
                        title={
                          copiedExampleId === item.id
                            ? "Copied!"
                            : "Copy to clipboard"
                        }
                        placement="top"
                      >
                        <IconButton
                          size="small"
                          sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            backgroundColor: "rgba(255,255,255,0.9)",
                            "&:hover": { backgroundColor: "#f0f0f0" },
                          }}
                          onClick={() => handleCopy(item.id, item.example)}
                        >
                          <ContentCopyIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Stack
          alignItems="center"
          justifyContent="center"
          height="60vh"
          textAlign="center"
        >
          <Inventory2SharpIcon sx={{ fontSize: "5rem", color: "gray" }} />
          <Typography variant="h6" sx={{ color: "gray", mt: 2 }}>
            No questions found
          </Typography>
        </Stack>
      )}
    </Container>
  );
};

export default QueAns;

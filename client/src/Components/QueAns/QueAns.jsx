import * as React from "react";
import {
  Container,
  Typography,
  Stack,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Inventory2SharpIcon from "@mui/icons-material/Inventory2Sharp";
import { useState } from "react";
import { questionData } from "../../utilities/questionData";

const QueAns = () => {
  // ✅ Correct useState without TS types
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
    <Container maxWidth="md" sx={{ py: { xs: 2, md: 4 } }}>
      {/* Page Header */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "bold",
          fontFamily: "Montserrat",
          mb: { xs: 2, md: 3 },
        }}
      >
        📘 Interview Questions
      </Typography>

      {/* Chip Filter */}
      <Stack
        direction="row"
        spacing={1.2}
        sx={{
          backgroundColor: "#f9fafb",
          p: 1.5,
          borderRadius: 3,
          justifyContent: "center",
          flexWrap: "wrap",
          mb: { xs: 3, md: 4 },
        }}
      >
        {chips.map((chip) => (
          <Chip
            key={chip.label}
            label={chip.label}
            clickable
            sx={{
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
        filteredData.map((item) => (
          <Accordion
            key={item.id}
            sx={{
              mb: 2,
              borderRadius: 2,
              overflow: "hidden",
              "&:before": { display: "none" },
              boxShadow: 2,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "#f1f5f9",
                "& .MuiTypography-root": {
                  fontWeight: "bold",
                  fontSize: { xs: "15px", md: "16px" },
                  fontFamily: "Montserrat",
                },
              }}
            >
              {`${item.id}. ${item.question}`}
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "white" }}>
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
                    border: "1px solid #e5e7eb",
                    borderRadius: 2,
                    backgroundColor: "#1e293b",
                    color: "#f1f5f9",
                    mt: 2,
                    fontFamily: "monospace",
                    fontSize: { xs: "13px", md: "14px" },
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    p={1}
                  >
                    <Typography sx={{ fontSize: "0.85rem", color: "#ccc" }}>
                      Example
                    </Typography>
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
                          backgroundColor: "rgba(255,255,255,0.9)",
                          "&:hover": { backgroundColor: "#f0f0f0" },
                        }}
                        onClick={() => handleCopy(item.id, item.example)}
                      >
                        <ContentCopyIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                  <Box sx={{ overflowX: "auto", p: 2 }}>
                    <pre style={{ margin: 0 }}>
                      <code>{item.example}</code>
                    </pre>
                  </Box>
                </Box>
              )}
            </AccordionDetails>
          </Accordion>
        ))
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

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
} from "@mui/material";
import Inventory2SharpIcon from "@mui/icons-material/Inventory2Sharp";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";

// ✅ Import your static data
import { questionData } from "../../utilities/questionData";

const QueAns = () => {
  const [copiedExampleId, setCopiedExampleId] = useState(null);
  const [selectedChip, setSelectedChip] = useState("React");
  const [chips] = useState([
    { label: "React", color: "default" },
    { label: "JavaScript", color: "default" },
    { label: "DSA", color: "default" },
  ]);

  // ✅ Modern copy functionality
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

  return (
    <Stack sx={{ width: "100%", margin: "auto", marginBottom: 4 }}>
      {/* Chip Section */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          backgroundColor: "#92dcf7",
          padding: 3,
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {chips.map((chip) => (
          <Chip
            key={chip.label}
            label={chip.label}
            sx={{
              cursor: "pointer",
              borderColor: selectedChip === chip.label ? "darkgreen" : "gray",
              color: selectedChip === chip.label ? "darkgreen" : "inherit",
              "&:hover": {
                borderColor:
                  selectedChip === chip.label ? "darkgreen" : "darkgray",
                color: selectedChip === chip.label ? "darkgreen" : "inherit",
              },
            }}
            variant="outlined"
            size="medium"
            onClick={() => setSelectedChip(chip.label)}
          />
        ))}
      </Stack>

      {/* Questions Section */}
      <Stack spacing={3} sx={{ mt: 3 }}>
        {questionData.length > 0 ? (
          questionData.map((item, index) => (
            <Card
              key={item.id}
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: "#fafafa",
              }}
            >
              <CardHeader
                title={
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "16px", md: "18px" },
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {`${index + 1}. ${item.question}`}
                  </Typography>
                }
              />
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: { xs: "14px", md: "16px" },
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {item.answer}
                </Typography>

                {/* ✅ Example/Solution Block */}
                {item.example && (
                  <Stack
                    sx={{
                      position: "relative",
                      border: "1px solid gray",
                      borderRadius: 2,
                      backgroundColor: "#DCDCDC",
                      p: 3,
                      gap: 2,
                      mt: "10px",
                      fontFamily: "monospace",
                      fontSize: { xs: "14px", md: "16px" },
                      minHeight: "100px",
                      maxHeight: "250px",
                      overflowY: "auto",
                    }}
                  >
                    <pre>
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
                        sx={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          backgroundColor: "#FFF",
                          "&:hover": { backgroundColor: "#f0f0f0" },
                        }}
                        onClick={() => handleCopy(item.id, item.example)}
                      >
                        <ContentCopyIcon />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                )}
              </CardContent>
            </Card>
          ))
        ) : (
          <Stack
            sx={{
              alignItems: "center",
              justifyContent: "center",
              height: "80vh",
              width: "100%",
            }}
          >
            <Inventory2SharpIcon sx={{ fontSize: "5rem", color: "gray" }} />
            <Typography variant="h6" sx={{ color: "gray" }}>
              No questions found
            </Typography>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default QueAns;

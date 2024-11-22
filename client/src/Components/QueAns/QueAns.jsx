import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Inventory2SharpIcon from "@mui/icons-material/Inventory2Sharp";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { useEffect, useState } from "react";

const QueAns = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [questionAnswer, setQuestionAnswer] = useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const backendUrl = import.meta.env.VITE_APP_BCKEND_URI;
  const [selectedChip, setSelectedChip] = useState("React");
  const [chips, setChips] = useState([
    { label: "React", color: "default" },
    { label: "JavaScript", color: "default" },
    { label: "DSA", color: "default" },
  ]);

  // Fetch questions and answers
  useEffect(() => {
    const fetchQuestionAnswer = async () => {
      try {
        const response = await axios.get(`${backendUrl}?language=React`);
        setQuestionAnswer(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuestionAnswer();
  }, []);

  // Handle chip click
  const handleChipClick = async (label) => {
    const newSelectedChip = selectedChip === label ? null : label;
    setSelectedChip(newSelectedChip);

    // Example API request using axios
    try {
      const response = await axios.get(`${backendUrl}?language=${label}`);
      setQuestionAnswer(response.data);
      console.log("Label",response.data);
    } catch (error) {
      console.error("Error making API request:", error);
    }
  };

  // Handle the copy action for a specific example
  const handleCopy = (_id, example, solution) => {
    const textArea = document.createElement("textarea");
    if (solution) {
      textArea.value = solution;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedId(_id);
    }
    if (example) {
      textArea.value = example;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedId(_id);
    }
  };
  return (
    <Stack sx={{ width: "100%", margin: "auto", marginBottom: 4 }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          backgroundColor: "#92dcf7",
          padding: 3,
          alignItems: "center",
          justifyContent: "center",
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
            icon={chip.icon}
            onClick={() => handleChipClick(chip.label)}
          />
        ))}
      </Stack>

      <Stack>
        {questionAnswer.length > 0 ? (
          questionAnswer.map((item,ind) => (
            <Accordion
              key={item._id}
              expanded={expanded === item._id}
              onChange={() =>
                setExpanded(expanded === item._id ? null : item._id)
              }
            >
              <AccordionSummary
                expandIcon={null} // Remove default arrow icon
                aria-controls={`panel-${item._id}-content`}
                id={`panel-${item._id}-header`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor:ind%2===0?'#f1f1f1':'#e0e0e0',
                }}
              >
                {expanded === item._id ? (
                  <IndeterminateCheckBoxOutlinedIcon sx={{ marginRight: 2 }} />
                ) : (
                  <AddBoxOutlinedIcon sx={{ marginRight: 2 }} />
                )}

                <Stack direction="row" alignItems="center">
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "14px", md: "18px" },
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {item.question} {"\n"}
                    {item.image && (
                      <img
                        src={item.image}
                        alt="image"
                        style={{
                          width: "100px",
                          height: "auto",
                          marginTop: "8px",
                        }}
                      />
                    )}
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: { xs: "14px", md: "18px" },
                  }}
                >
                  {item?.answer}
                </Typography>
              </AccordionDetails>
              {item?.example || item?.solution ? (
                <AccordionDetails>
                  <Typography variant="h5">
                    {item?.example ? "Example:" : "Solution:"}
                  </Typography>
                  <Stack
                    sx={{
                      position: "relative",
                      border: "1px solid gray",
                      borderRadius: 2,
                      backgroundColor: "#DCDCDC",
                      padding: 3,
                      gap: 2,
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "16px", md: "24px" },
                      minHeight: "150px",
                      maxHeight: "300px",
                      overflowY: "auto",
                    }}
                  >
                    <pre>
                      <code>
                        <Tooltip
                          title={
                            copiedId === item._id
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
                              "&:hover": {
                                backgroundColor: "#f0f0f0",
                              },
                            }}
                            onClick={() =>
                              handleCopy(item._id, item.example, item.solution)
                            }
                          >
                            <ContentCopyIcon />
                          </IconButton>
                        </Tooltip>
                        {item.example ? item.example : item.solution}
                      </code>
                    </pre>
                  </Stack>
                </AccordionDetails>
              ) : null}
            </Accordion>
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

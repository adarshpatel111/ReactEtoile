import { Stack } from "@mui/material";

const Navbar = () => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
        width: "100%",
        boxSizing: "border-box",
        height: "3rem",
        padding: "0 1rem",
        top: 0,
        left: 0,
        borderBottom: "1px solid #ccc",
        position: "sticky",
        zIndex: 100,
      }}
    >
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "1rem",
          fontFamily: "Montserrat",
        }}
      >
        ReactEtoile
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 3,
          alignItems: "center",
          cursor: "pointer",
          "& > :hover": { color: "#92dcf7" }, // incorrect syntax
          "& >": {
            // correct syntax
            "&:hover": { color: "#92dcf7" },
          },
          fontSize: "1rem",
          fontFamily: "Montserrat",
        }}
      >
        {links.map((link) => {
          return <div>{link}</div>;
        })}
      </Stack>
    </Stack>
  );
};
export default Navbar;

const links = ["Home", "About", "Contact"];

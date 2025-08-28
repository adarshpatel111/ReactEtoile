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
      {/* Logo / Brand */}
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1rem",
          fontFamily: "Montserrat",
          fontWeight: "bold",
        }}
      >
        ReactEtoile
      </Stack>

      {/* Navigation Links */}
      <Stack
        sx={{
          flexDirection: "row",
          gap: 3,
          alignItems: "center",
          cursor: "pointer",
          fontSize: "1rem",
          fontFamily: "Montserrat",
          "& > div:hover": { color: "#92dcf7" }, // ✅ correct hover syntax
        }}
      >
        {links.map((link, index) => (
          <div key={index}>{link}</div>
        ))}
      </Stack>
    </Stack>
  );
};

export default Navbar;

const links = ["Home", "About", "Contact"];

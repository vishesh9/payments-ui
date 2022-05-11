import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  fabClasses,
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Keypad from "../../Components/Keypad";

export default function Pin() {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box sx={{ width: "100%" }} justifyContent="center">
      <Box m={1} display="flex" justifyContent="center" textAlign="center">
        <h3>Please enter your social security number</h3>
      </Box>
      <Box m={1} display="flex" justifyContent="center" textAlign="center">
        <p>
          Federal regulations require us to verify your identity and match your
          SSN or ITIN with the one we have on file.
        </p>
      </Box>

      <Box sx={{ position: "relative" }}>
        <TextField
          type={showPassword ? "text" : "password"}
          inputMode="numeric"
          pattern={"[0-9]*"}
          name={"amount"}
          placeholder="XXX-XX-XXXX"
          sx={{ input: { textAlign: "center" } }}
          // className={classes.root}
          fullWidth
          value={value}
        />
        <Box sx={{ position: "absolute", right: "2%", top: "15%" }}>
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            // onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </Box>
      </Box>
      <Box m={1} display="flex" justifyContent="center" textAlign="center">
        <Keypad setValue={setValue} value={value} />
      </Box>
      <Box m={1} display="flex" justifyContent="center" textAlign="center">
        <Button
          variant="contained"
          color="primary"
          sx={{
            height: 40,
            minWidth: "100%",
          }}
        >
          Continue
        </Button>
      </Box>
      <Box m={1} display="flex" justifyContent="center" textAlign="center">
        <Button
          sx={{
            height: 40,
            minWidth: "100%",
          }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}

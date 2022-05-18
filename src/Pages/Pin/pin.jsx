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
import { useEffect, useRef, useState } from "react";
import Keypad from "../../Components/Keypad";
import InputMask from "react-input-mask";

export default function Pin() {
  const [leftValue, setLeftValue] = useState("");
  const [rightValue, setRightValue] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const rightInputRef = useRef(null);
  const leftInputRef = useRef(null);

  const handleLeftBoxChange = (e) => {
    const val = e.target.value;
    setLeftValue(val);
  };

  const handleRightBoxChange = (e) => {
    const val = e.target.value;
    setRightValue(val);
  };

  const handleRightKeyDown = (e) => {
    debugger;
    const rightValueWithoutHypen = rightValue.replace("-", "");
    if (
      rightValueWithoutHypen[0] === "x" &&
      leftInputRef.current &&
      (e.key === "Backspace" || e.key === "Delete")
    ) {
      leftInputRef.current.querySelector("input").focus();
    }
  };

  useEffect(() => {
    if (
      leftValue.length === 4 &&
      !Number.isNaN(+leftValue.slice(0, -1)) &&
      rightInputRef.current
    ) {
      rightInputRef.current.querySelector("input").focus();
    }
  }, [leftValue]);

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
        <InputMask
          mask="999-"
          value={leftValue}
          disabled={false}
          maskChar="x"
          onChange={(e) => handleLeftBoxChange(e)}
        >
          {() => (
            <TextField
              type={"text"}
              inputMode="numeric"
              pattern={"[0-9]*"}
              name={"amount"}
              placeholder="xxx-"
              sx={{ input: { textAlign: "right" }, width: "50%" }}
              value={leftValue}
              variant="standard"
              ref={leftInputRef}
            />
          )}
        </InputMask>
        <InputMask
          mask="99-9999"
          value={rightValue}
          disabled={false}
          maskChar="x"
          onChange={(e) => handleRightBoxChange(e)}
        >
          {() => (
            <TextField
              type={showPassword ? "text" : "password"}
              variant="standard"
              sx={{ input: { textAlign: "left" }, width: "50%" }}
              placeholder="xx-xxxx"
              ref={rightInputRef}
              onKeyDown={handleRightKeyDown}
              tabIndex={0}
            />
          )}
        </InputMask>

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
      {/* <Box m={1} display="flex" justifyContent="center" textAlign="center">
        <Keypad setValue={setValue} value={value} />
      </Box> */}
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

import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import Keypad from "../../Components/Keypad";

export default function Pin() {
  const [value, setValue] = useState("");
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
      <TextField
        inputMode="numeric"
        pattern={"[0-9]*"}
        name={"amount"}
        placeholder="XXX-XX-XXXX"
        sx={{ input: { textAlign: "center" } }}
        // className={classes.root}
        fullWidth
        value={value}
        // disabled={disabled}
        // onChange={(e) => {
        //   doStuff();
        // }}
      />
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

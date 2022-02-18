import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: "4px",
    // color: 'red',
    fontSize: "16px",
    fontWeight: 600,
  },
  "& .MuiInputBase-input": {
    height: "32px",
    color: "#B88080",
    borderRadius: 8,
    position: "relative",
    // backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "0px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      //   boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      //   borderColor: theme.palette.primary.main,
    },
  },
}));
export default function InputFeild(props) {
  const {
    defaultValue,
    id,
    sx,
    label,
    placeHolder,
    variant,
    value,
    onChange,
    name,
    type,
    pattern,
  } = props;

  return (
    <FormControl variant="standard">
      <InputLabel
        shrink
        htmlFor="bootstrap-input"
        style={{ color: "#809FB8", fontSize: "18px", fontWeight: 400 }}
      >
        {label}
      </InputLabel>
      <BootstrapInput
        defaultValue={defaultValue}
        id={id}
        sx={sx}
        label={label}
        variant={variant}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        inputProps={ {pattern} && { pattern: pattern }}
      />
    </FormControl>
  );
}

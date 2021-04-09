import React, { useState } from "react";

import AppBar from "./AppBar";

import emailjs from "emailjs-com";

import { Button, Typography, TextField } from "@material-ui/core";
import { useSnackbar } from "notistack";

import useStyles from "../Styles/ContactStyles";

const ContactComp = () => {
  const classes = useStyles();
  const ownerEmail = "Krzysztof Makówka";
  const [userEmail, setUserEmail] = useState("");
  const [text, setText] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  const handleTextFields = (e) => {
    e.preventDefault();
    if (e.target.type === "email") setUserEmail(e.target.value);
    if (e.target.name === "message") setText(e.target.value);
  };

  function sendEmail(e, variant) {
    e.preventDefault();
    if (text === "") return;

    emailjs
      .sendForm(
        "service_qu5ip1a",
        "template_rxnhy0c",
        e.target,
        "user_UYosc9RWSNIDMYdEpRAgH"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            enqueueSnackbar("Message has been send", { variant });
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setUserEmail("");
    setText("");
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4">Hello, it is nice too meet You</Typography>
      <AppBar />
      <form
        className={classes.contactForm}
        noValidate
        autoComplete="off"
        onSubmit={(e) => sendEmail(e, "success")}
      >
        <TextField
          id="standard-basic"
          variant="outlined"
          margin="normal"
          value={ownerEmail}
        />
        <TextField
          id="user-email"
          placeholder="Your email"
          variant="filled"
          margin="normal"
          value={userEmail}
          type="email"
          name="from_name"
          autoFocus={true}
          required={true}
          onChange={(e) => handleTextFields(e)}
        />
        <TextField
          id="user-message"
          placeholder="What would you like to say to me"
          variant="filled"
          margin="normal"
          multiline
          rows={6}
          value={text}
          type="text"
          name="message"
          required={true}
          onChange={(e) => handleTextFields(e)}
        />
        <Button variant="contained" type="submit">
          Send Email
        </Button>
      </form>
    </div>
  );
};

export default ContactComp;

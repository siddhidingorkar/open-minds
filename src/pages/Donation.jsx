import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  makeStyles,
  Paper,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
    backgroundColor: "white",
  },
  inputField: {
    marginBottom: theme.spacing(2),
  },
  form: {
    padding: theme.spacing(2), // Add padding to the form
  },
}));

function Donation() {
  const classes = useStyles();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleDonateNow = () => {
    if (!fullName || !email || !donationAmount || !paymentMethod) {
      alert("Please fill in all required fields.");
    } else {
      alert("Donation successful");
      // Clear the input fields
      setFullName("");
      setEmail("");
      setDonationAmount("");
      setPaymentMethod("");
    }
  };

  return (
    <Container maxWidth="md" className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Make a Donation
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                fullWidth
                className={classes.inputField}
                required
                type="fullname"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                className={classes.inputField}
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Donation Amount in ₹"
                fullWidth
                type="number"
                className={classes.inputField}
                required
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                label="Payment Method"
                fullWidth
                className={classes.inputField}
                required
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <MenuItem value="credit-card">Credit Card</MenuItem>
                <MenuItem value="debit-card">Debit Card</MenuItem>
                <MenuItem value="paypal">PayPal</MenuItem>
                <MenuItem value="upi">UPI</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            className={classes.inputField}
            onClick={handleDonateNow}
          >
            Donate Now
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Donation;

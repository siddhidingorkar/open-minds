import React from 'react';
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
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
  },
  inputField: {
    marginBottom: theme.spacing(2),
  },
}));

function Donation() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container} >
      <Paper elevation={3} className={classes.paper} >
        <Typography variant="h5" gutterBottom>
          Make a Donation
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                fullWidth
                className={classes.inputField}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                className={classes.inputField}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Donation Amount in ₹"
                fullWidth
                type="number"
                className={classes.inputField}
                required
              />
            </Grid>
            <Grid item xs={12}>
              
              <Select
                label="Payment Method"
                fullWidth
                className={classes.inputField}
                required
              >
             
                <MenuItem value="credit-card">Credit Card</MenuItem>
                <MenuItem value="paypal">Debit Card</MenuItem>
                <MenuItem value="paypal">PayPal</MenuItem>
                <MenuItem value="paypal">UPI</MenuItem>
               
              </Select>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.inputField}
          >
            Donate Now
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Donation;

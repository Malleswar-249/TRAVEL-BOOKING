import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Radio,
  RadioGroup,
  Divider,
  Paper,
} from '@mui/material';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handlePayment = () => {
    alert(`Payment via ${paymentMethod.toUpperCase()} initiated.`);
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
          Payment Details
        </Typography>

        <RadioGroup
          row
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          sx={{ justifyContent: 'center', mb: 4 }}
        >
          <FormControlLabel value="card" control={<Radio />} label="Credit / Debit Card" />
          <FormControlLabel value="upi" control={<Radio />} label="UPI" />
          <FormControlLabel value="wallet" control={<Radio />} label="Wallet" />
        </RadioGroup>

        <Divider sx={{ mb: 4 }} />

        {paymentMethod === 'card' && (
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Enter Card Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField label="Cardholder Name" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Card Number" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Expiry Date (MM/YY)" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="CVV" fullWidth type="password" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        )}

        {paymentMethod === 'upi' && (
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Enter UPI ID
              </Typography>
              <TextField label="e.g. yourname@upi" fullWidth />
            </CardContent>
          </Card>
        )}

        {paymentMethod === 'wallet' && (
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Select Wallet
              </Typography>
              <RadioGroup defaultValue="paytm">
                <FormControlLabel value="paytm" control={<Radio />} label="Paytm Wallet" />
                <FormControlLabel value="phonepe" control={<Radio />} label="PhonePe Wallet" />
                <FormControlLabel value="amazonpay" control={<Radio />} label="Amazon Pay" />
              </RadioGroup>
            </CardContent>
          </Card>
        )}

        <Box textAlign="center" mt={4}>
          <Button variant="contained" color="primary" size="large" onClick={handlePayment}>
            Pay Now
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Payment;

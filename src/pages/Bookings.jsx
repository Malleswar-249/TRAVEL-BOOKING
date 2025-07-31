import React from 'react';
import { useBookings } from '../context/BookingsContext';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Container,
  CardMedia,
  Divider,
} from '@mui/material';

const Bookings = () => {
  const { bookings, removeBooking } = useBookings();
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/payment');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
        Your Bookings
      </Typography>

      {bookings.length === 0 ? (
        <Typography variant="body1" align="center" color="text.secondary">
          No bookings yet.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {bookings.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {item.image && (
                  <CardMedia
                    component="img"
                    height="180"
                    image={item.image}
                    alt={item.title}
                  />
                )}

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle1" color="primary" fontWeight="bold">
                    ₹{item.price}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => removeBooking(item.id)}
                  >
                    Remove
                  </Button>
                  <Button variant="contained" color="primary" onClick={handlePayment}>
                    Pay Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Bookings;

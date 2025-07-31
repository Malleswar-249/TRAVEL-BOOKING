import React from 'react';
import { Button, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useBookings } from '../context/BookingsContext';
import parisImg from '../assets/paris.jpg';
import maldivesImg from '../assets/maldives.jpg';
import Goa from '../assets/Goa.jpg';
import Ram from '../assets/Ram.png';
import jaipur from '../assets/jaipur.jpg';
import Manali from '../assets/Manali.jpg';

const TourPackages = () => {
  const { addBooking } = useBookings();

  const packages = [
    {
      id: 1,
      name: 'Romantic Paris',
      description: '5 nights in Paris with Eiffel views.',
      price: 45000,
      image: parisImg,
    },
    {
      id: 2,
      name: 'Maldives Escape',
      description: 'Luxury beach villa for 3 nights.',
      price: 60000,
      image: maldivesImg,
    },
    {
      id: 3,
      name: 'Ramasethu',
      description: '3 days with beautiful architecture.',
      price: 25000,
      image: Ram,
    },
    {
      id: 4,
      name: 'Manali',
      description: '5 days with snow-rides.',
      price: 19999,
      image: Manali,
    },
    {
      id: 5,
      name: 'Jaipur',
      description: '5 nights explore pink city now.',
      price: 15000,
      image: jaipur,
    },
    {
      id: 6,
      name: 'Goa',
      description: '5 nights covers all the places.',
      price: 18000,
      image: Goa,
    }
  ];

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Explore Our Tour Packages
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {packages.map((pkg) => (
          <Grid item xs={12} sm={6} md={4} key={pkg.id}>
            <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
              <CardMedia
                component="img"
                height="180"
                image={pkg.image}
                alt={pkg.name}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {pkg.name}
                </Typography>
                <Typography variant="body2" sx={{ marginY: 1 }}>
                  {pkg.description}
                </Typography>
                <Typography color="primary" fontWeight="bold" gutterBottom>
                  ₹{pkg.price.toLocaleString()}
                </Typography>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => addBooking(pkg)}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TourPackages;

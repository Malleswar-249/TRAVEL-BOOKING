import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Grid, Divider } from '@mui/material';
import TravelCard from '../components/TravelCard';

// Mock data — replace with API or context data as needed
const mockData = [
  {
    id: 1,
    image: 'https://source.unsplash.com/featured/?paris',
    title: 'Paris Tour',
    rating: 4.7,
    price: 29999,
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/featured/?tokyo',
    title: 'Tokyo Experience',
    rating: 4.9,
    price: 45999,
  },
  {
    id: 3,
    image: 'https://source.unsplash.com/featured/?bali',
    title: 'Bali Escape',
    rating: 4.5,
    price: 24999,
  },
  // Add more mock items as needed
];

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get('q') || 'all';

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Search Results for: <span style={{ color: '#1976d2' }}>{searchTerm}</span>
      </Typography>

      <Divider sx={{ my: 3 }} />

      {mockData.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No results found.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {mockData.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <TravelCard data={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Rating,
  CardActions,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function TravelCard({ data }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        height: '100%',
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: '100%', sm: 200 },
          height: { xs: 180, sm: 'auto' },
          objectFit: 'cover',
        }}
        image={data.image}
        alt={data.title}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h6" fontWeight={600}>
            {data.title}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <Rating value={data.rating} precision={0.1} readOnly size="small" />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              {data.rating}
            </Typography>
          </Box>

          <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>
            ₹{data.price.toLocaleString()}
          </Typography>
        </CardContent>

        <CardActions sx={{ p: 2, pt: 0 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate(`/details/${data.id}`)}
          >
            View Details
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

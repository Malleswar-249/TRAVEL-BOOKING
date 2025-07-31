import React from 'react';
import { SwapHoriz } from '@mui/icons-material';

export default function SwapButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Swap"
      className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-200 text-blue-600"
    >
      <SwapHoriz />
    </button>
  );
}

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export interface ShortenedUrl {
  originalUrl: string;
  shortened: string;
}

export const shortenUrl = createAsyncThunk<
  ShortenedUrl | null,
  string, 
  { rejectValue: string } 
>(
  'url/shortenUrl',
  async (originalUrl, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://api-ssl.bitly.com/v4/shorten',
        { long_url: originalUrl },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        }
      );

      const shortenedUrl = {
        originalUrl,
        shortened: response.data.link,
      };

      return shortenedUrl;
    } catch (error) {
 
      console.error('Error during URL shortening:', error);
      return rejectWithValue('Failed to shorten URL');
    }
  }
);
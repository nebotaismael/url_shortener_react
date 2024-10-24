import { createSlice } from "@reduxjs/toolkit";
import { shortenUrl } from "./shortenerThunk";
import { toast } from "react-toastify";

interface UrlState {
  urls: { original: string; shortened: string }[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UrlState = {
  urls: [],
  isLoading: false,
  error: null,
};

const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    addUrl: (state, action) => {
      state.urls.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(shortenUrl.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(shortenUrl.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload != null) {
          state.urls.push({
            original: action.payload?.originalUrl,
            shortened: action.payload?.shortened,
          });
        }
      })
      .addCase(shortenUrl.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to shorten URL";
        toast.error("An error occured", {delay:2}); // Use toast to notify success
        state.error=null;
      });
  },
});

export default urlSlice.reducer;

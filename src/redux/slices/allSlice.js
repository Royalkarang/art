import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../Api.js";
// import { toast } from "react-toastify";

// For Unauthenticated User
// function logouterror() {
//   toast.error("Token Expired");
//   localStorage.removeItem("artwork-admin");
//   setTimeout(() => {
//     window.location.href = "/";
//   }, 1000);
// }

// Get All Banners
export const getAllHomeBanner = createAsyncThunk("/HomePage/getAllHomeBanner",async (_, { rejectWithValue }) => {
    try {
      const response = await api.getAllHomeBanner();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Gett All Artist
export const getAllArtist = createAsyncThunk("user/getAllArtist",async (_, { rejectWithValue }) => {
    try {
      const response = await api.getAllArtist();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
// Gett Single Artist
export const getSingleArtistById = createAsyncThunk("user/getSingleArtistById",async (formData, { rejectWithValue }) => {
    try {
      const response = await api.getSingleArtistById(formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Get All Artworks
export const getAllArtworks = createAsyncThunk("/artwork/getAllArtworks",async (_, { rejectWithValue }) => {
    try {
      const response = await api.getAllArtworks();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
// Get All Artworks
export const getArtworkByArtistId = createAsyncThunk("/artwork/getArtworkByArtistId",async (formData, { rejectWithValue }) => {
    try {
      const response = await api.getArtworkByArtistId(formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const allSlice = createSlice({
  name: "AllSlices",
  initialState: {
    allBanners: [],
    allArtists: [],
    allArtwork: [],
    singleArtistInfo:[],
    singleArtistArtwork:[],
    loading: false,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get all Banners
      .addCase(getAllHomeBanner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllHomeBanner.fulfilled, (state, action) => {
        state.loading = false;
        state.allBanners = action.payload?.banners;
      })
      .addCase(getAllHomeBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch Banners";
      })

      // All Artist
      .addCase(getAllArtist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllArtist.fulfilled, (state, action) => {
        state.loading = false;
        state.allArtists = action.payload?.artists;
      })
      .addCase(getAllArtist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch users";
      })

      // Single Artist
      .addCase(getSingleArtistById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleArtistById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleArtistInfo = action.payload?.artist;
      })
      .addCase(getSingleArtistById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch users";
      })

      // All Artworks
      .addCase(getAllArtworks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllArtworks.fulfilled, (state, action) => {
        state.loading = false;
        state.allArtwork = action.payload?.artWorks;
      })
      .addCase(getAllArtworks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch users";
      })

      // Artists Artworks
      .addCase(getArtworkByArtistId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getArtworkByArtistId.fulfilled, (state, action) => {
        state.loading = false;
        state.singleArtistArtwork = action.payload?.artWorks;
      })
      .addCase(getArtworkByArtistId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch users";
      });
  },
});

export default allSlice.reducer;

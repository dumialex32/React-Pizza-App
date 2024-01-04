import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAddress } from "../../services/apiGeocoding";

const initialState = {
  username: "",
  address: "",
  position: {},
  error: "",
};

function fetchPosition() {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject),
  );
}

export const fetchUserAddress = createAsyncThunk(
  "user/fetchUserAddress",
  async () => {
    const position = await fetchPosition();
    const { latitude, longitude } = position.coords;

    const userAddress = await fetchAddress({ latitude, longitude });

    const address = `${userAddress.countryName}, ${userAddress.locality}, ${userAddress.city}`;

    return { address, position: { latitude, longitude } };
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUsername(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAddress.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUserAddress.fulfilled, (state, action) => {
        state.address = action.payload.address;
        state.position = action.payload.position;
        console.log(state.address, state.position);
      })
      .addCase(fetchUserAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = `${action.error.message} / Please fill the address field manually.`;
      });
  },
});

export const getUser = (state) => state.user.username;
export const getPosition = (state) => state.user.position;
export const getAddress = (state) => state.user.address;

export default userSlice.reducer;
export const { createUsername } = userSlice.actions;

// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// async function fetchAddress() {
//   // 1) We get the user's geolocation position
//   const positionObj = await getPosition();
//   const position = {
//     latitude: positionObj.coords.latitude,
//     longitude: positionObj.coords.longitude,
//   };

//   // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
//   const addressObj = await getAddress(position);
//   const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

//   // 3) Then we return an object with the data that we are interested in
//   return { position, address };
// }

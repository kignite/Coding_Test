import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  profile: {
    account: "",
    password: "",
    isLogin: false,
  }
}

const adminSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    setLogin(state, action) {
      const { account, password } = action.payload      
      state.profile = {
        account: account,
        password: password,
        isLogin: true,
      }

    },
    setLogout(state) {
      state.profile = initialState
    }
  }
})

export const { setLogin, setLogout } = adminSlice.actions

export default adminSlice.reducer
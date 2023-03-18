import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import adminSlice from "./store/adminSlice";

const store = configureStore({
  reducer: {
    admin: adminSlice,
  }
})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="main" element={<MainPage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;

import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { configureStore } from "@reduxjs/toolkit";

import uploadReducer from "./reducers/upload-reducer";
import resumeReducer from "./reducers/resume-reducer";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";

const store = configureStore({
  reducer: {
    uploadImage: uploadReducer,
    resume: resumeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const App = () => {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Provider store={store}>
      {/* LocalizationProvider component receives your chosen date library's adapter and makes it accessible to all the Date and Time Pickers component using React context. */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* Parent of full width and height Divided into 2 panels Left Panel has
      Navigation, header, Resume Data Sections Right Panel has Rendered Resume
      and Resume Template Modifier */}
        <div className="w-screen h-screen flex">
          {/* Left side of screen for the navigation and data entry */}
          <div className="flex-none w-1/2">
            <LeftPanel handleThemeToggle={handleThemeToggle} />
          </div>
          {/* Right side of screen for showing the rendered resume and template selection */}
          <div className="flex-none w-1/2">
            <RightPanel />
          </div>
        </div>
      </LocalizationProvider>
    </Provider>
  );
};

export default App;

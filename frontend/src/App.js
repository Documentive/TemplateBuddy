import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { configureStore } from "@reduxjs/toolkit";

import uploadReducer from "./reducers/upload-reducer";
import resumeReducer from "./reducers/resume-reducer";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
  // To toggle themeswitch state
  const [darkMode, setDarkMode] = useState(false);

  // Set theme initially based on system preference, happens only once
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  // Re-render only when theme is changed
  useEffect(() => {
    if (darkMode) {
      // Need to use data-attribute to toggle dark mode as css modules are hindering
      document.documentElement.querySelector("body").setAttribute("data-mode", "dark");
    } else {
      document.documentElement.querySelector("body").removeAttribute("data-mode");
    }
  }, [darkMode]);

  // handle theme toggle
  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <Provider store={store}>
      {/* LocalizationProvider component receives your chosen date library's adapter and makes it accessible to all the Date and Time Pickers component using React context. */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* Parent of full width and height Divided into 2 panels Left Panel has
      Navigation, header, Resume Data Sections Right Panel has Rendered Resume
      and Resume Template Modifier */}
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <div className="w-screen h-screen flex">
            {/* Left side of screen for the navigation and data entry */}
            <div className="flex-none w-1/2">
              <LeftPanel
                check={darkMode}
                handleThemeToggle={handleThemeToggle}
              />
            </div>
            {/* Right side of screen for showing the rendered resume and template selection */}
            <div className="flex-none w-1/2">
              <RightPanel />
            </div>
          </div>
        </ThemeProvider>
      </LocalizationProvider>
    </Provider>
  );
};

export default App;

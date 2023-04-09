"use client";

import { configureStore } from "@reduxjs/toolkit";
import darkMode from "./features/darkMode";

export const store = configureStore({
  reducer: {
    darkMode,
  },
});

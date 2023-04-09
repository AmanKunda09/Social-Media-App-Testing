"use client";

import { configureStore } from "@reduxjs/toolkit";
import darklModeSlice from "./features/darkModeSlice";

export const store = configureStore({
  reducer: {
    darklModeSlice,
  },
});


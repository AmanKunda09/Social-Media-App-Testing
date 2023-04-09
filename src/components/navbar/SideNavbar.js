'use client'

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode } from "../../globalRedux/features/darkMode";

export default function SideNavbar() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  const switchDarkMode = () => {
    dispatch(setDarkMode(!darkMode));
  };

  return (
    <div className="flex flex-col">
      <h1>SideNavbar</h1>
      <button onClick={switchDarkMode}>Change mode</button>
    </div>
  );
}

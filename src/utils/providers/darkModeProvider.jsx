'use client'

import { useSelector } from "react-redux";

export default function DarkModeProvider({children}) {
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    return(
        <div className={darkMode ? "dark" : ""}>{children}</div>
    )
}
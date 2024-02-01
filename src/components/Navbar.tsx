"use client"

import "@/styles/navbar.css"
import { Link as ReactLink } from 'react-scroll';
import Link from "next/link";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect, useState } from "react";

enum Theme {
    light,
    dark,
    default
}

enum menu {
    open,
    closed
}

export default function Navbar() {

    const [theme, setTheme] = useLocalStorage<Theme>("theme",
        window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.dark : Theme.light
    )

    const [nav, setnav] = useState<menu>(menu.closed)

    console.log(theme)

    useEffect(() => {
        if (theme === Theme.dark) {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
        else {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        }
    }, [theme])

    return (
        <header className="container bgcolor">
            <div className="flex wrap" style={{ justifyContent: "space-between" }}>
                <Link href="/" className="logo" aria-label="Home Page"></Link>
                <nav className="flex navbar" style={{ gap: "1.5rem" }}>
                    <ReactLink to="hero" href="#hero" smooth offset={-100}>HOME</ReactLink>
                    <ReactLink to="About" href="#About" smooth offset={-50}>ABOUT</ReactLink>
                    <ReactLink to="Timeline" href="#Timeline" smooth offset={-50}>TIMELINE</ReactLink>
                    <ReactLink to="Team" href="#Team" smooth offset={-50}>TEAM</ReactLink>
                    <ReactLink to="Blog" href="#Blog" smooth offset={-50}>BLOG</ReactLink>
                    <ReactLink to="Contacts" href="#Contacts" smooth offset={-50}>CONTACT</ReactLink>
                </nav>
                <button className="mode"
                    onClick={() => { setTheme(theme === Theme.dark ? Theme.light : Theme.dark) }}
                >{theme === Theme.dark ? "DARK" : "LIGHT"}</button>
                <div className="icon"
                    onClick={() => { setnav(nav === menu.open ? menu.closed : menu.open) }}
                >
                    {nav === menu.closed ? "MENU" : "CLOSE"}
                </div>
            </div>
            <div className="mobile-nav" style={{ display: nav ? "none" : "block" }} onClick={() => setnav(menu.closed)}>
                <nav >
                    <ReactLink to="hero" href="#hero" smooth offset={-100}>HOME</ReactLink>
                    <ReactLink to="About" href="#About" smooth offset={-50}>ABOUT</ReactLink>
                    <ReactLink to="Timeline" href="#Timeline" smooth offset={-50}>TIMELINE</ReactLink>
                    <ReactLink to="Team" href="#Team" smooth offset={-50}>TEAM</ReactLink>
                    <ReactLink to="Blog" href="#Blog" smooth offset={-50}>BLOG</ReactLink>
                    <ReactLink to="Contacts" href="#Contacts" smooth offset={-50}>CONTACT</ReactLink>
                    <div onClick={() => { setTheme(theme === Theme.dark ? Theme.light : Theme.dark) }}
                    >{theme === Theme.dark ? "DARK" : "LIGHT"}</div>
                </nav>
            </div>
        </header>
    )
}

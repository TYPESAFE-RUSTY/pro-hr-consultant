"use client"
import { useState } from "react"
import "@/styles/w_accordion.css"

export default function AccordionWrapper(
    { children, heading, open, id }:
        { children: React.ReactNode, heading: string, id: string, open?: boolean }
) {
    const [active, setActive] = useState(false || open)
    return (
        <div className="accordion-panel">
            <h3>
                <button className="accordion-trigger" aria-expanded={active} onClick={() => { setActive(!active) }} aria-controls={id} >
                    {heading}
                </button>
            </h3>
            <div className="accordion-content" aria-hidden={!active} id={id}>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

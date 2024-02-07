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
                <button className="accordion-trigger" data-expanded={active} onClick={() => { setActive(!active) }} data-controls={id} >
                    {heading}
                </button>
            </h3>
            <div className="accordion-content" data-hidden={!active} id={id}>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

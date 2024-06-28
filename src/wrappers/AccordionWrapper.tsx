"use client"
import { useState, useRef, useEffect } from "react"
import "@/styles/w_accordion.css"

export default function AccordionWrapper(
    { children, heading, open, id }:
        { children: React.ReactNode, heading: string, id: string, open?: boolean }
) {
    const [active, setActive] = useState(false || open)


    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const elements = ref.current?.querySelectorAll('*');
        if (elements) {
            elements.forEach((element) => {
                if (element.tagName === "INPUT" || element.tagName === "TEXTAREA" || element.tagName === "A" || element.tagName.toUpperCase() === "BUTTON") {
                    // Only set tabIndex on visible and potentially focusable elements
                    if (active) {
                        element.setAttribute("tabIndex", "0");
                    } else {
                        element.setAttribute("tabIndex", "-1");
                    }
                }
            });
        }
    }, [ref, active]);


    return (
        <div className="accordion-panel">
            <h3>
                <button className="accordion-trigger" data-expanded={active} onClick={() => { setActive(!active) }} data-controls={id} >
                    {heading}
                </button>
            </h3>
            <div className="accordion-content" data-hidden={!active} id={id}>
                <div ref={ref}>
                    {children}
                </div>
            </div>
        </div>
    )
}

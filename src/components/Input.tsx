"use client";

import "@/styles/u_input.css"
import { HTMLInputTypeAttribute } from "react";

interface input {
    name: string,
    label: string,
    type: HTMLInputTypeAttribute | "textarea",
    className?: string,
    style?: React.CSSProperties,
    value: string,
    onChange: Function,
    required: boolean

    rows?: number,
    cols?: number
}

export default function Input({ name, label, className, style, value, onChange, required, type, rows, cols }: input) {
    return (
        <>
            <div
                className={`INPUT ${className ? className : ''}`}
                style={style}
            >
                {
                    type === "textarea" ?
                        <textarea
                            id={name}
                            name={name}
                            value={value}
                            onChange={(e) => onChange(e)}
                            rows={rows ? rows : 8}
                            cols={cols}
                            required={required}></textarea>
                        :
                        <input
                            id={name}
                            name={name}
                            value={value}
                            onChange={(e) => onChange(e)}
                            type={type}
                            required={required}
                        />

                }
                <label htmlFor={name}>{label}</label>
            </div>
        </>
    )
}
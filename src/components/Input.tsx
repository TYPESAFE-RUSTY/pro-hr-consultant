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
}

export default function Input({ name, label, className, style, value, onChange, required, type }: input) {
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
                            rows={8}
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
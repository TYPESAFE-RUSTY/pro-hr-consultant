"use client";

import React, { useState } from "react"
import Input from "../Input"
import useLocalStorage from "@/hooks/useLocalStorage";
import { Languages as template } from "@/utils/client/dataStructure";

const description = 'Include a language proficiency section, specifying fluency and relevant certifications. Highlight languages relevant to the job and industry, emphasizing bilingual or multilingual abilities if applicable.'

const Card = ({ data, index, deleteCard }: { data: string, index: number, deleteCard: Function }) => {
    return (
        <div className='str-card'>
            <p style={{ color: "#1d1d1d" }}>{data}</p>
            <button onClick={() => deleteCard(index)} tabIndex={-1}>X</button>
        </div>
    )
}


export default function Language() {

    const [languages, setlanguages] = useLocalStorage<string[]>('Languages', template)
    const [language, setlanguage] = useState<string>('')

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target
        setlanguage(value)
    }

    function handleClick(e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setlanguages(old => ([...old, language]))
    }

    const deleteCard = (index: number) => {
        setlanguages(old => {
            const newArray = [...old];
            newArray.splice(index, 1);
            return newArray;
        })
    };

    return (
        <div style={{ padding: "1rem" }}>
            <div className="summary flex wrap align-center" style={{ justifyContent: "space-between", gap: "1rem", marginBlockEnd: "1rem" }}>
                <form className='flex wrap align-center' style={{ maxWidth: "65ch", gap: "1rem" }} onSubmit={e => handleClick(e)}>
                    <Input
                        label='Language'
                        name='language'
                        type='text'
                        value={language}
                        onChange={handleChange}
                        required
                    />
                    <button style={{ paddingBlock: "0.66rem" }} onClick={e => handleClick(e)}>+</button>
                </form>
                <p className="description" style={{ maxWidth: "60ch" }}>{description}</p>
            </div>
            <div className="flex wrap" style={{ gap: "0.5rem" }}>
                {
                    languages
                        .map((element, index) => (
                            <Card key={index} index={index} data={element} deleteCard={deleteCard} />
                        ))
                }
            </div>
        </div>
    )
}

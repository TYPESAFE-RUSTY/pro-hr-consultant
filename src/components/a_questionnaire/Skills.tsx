"use client";

import React, { useState } from "react"
import Input from "../Input"
import useLocalStorage from "@/hooks/useLocalStorage";
import { skills as template } from "@/utils/dataStructure";

const description = 'List a combination of technical soft skills and relevant abilities.Customize the skills section for each job application, emphasizing the most relevant skills.'


const Card = ({ data, index, deleteCard }: { data: string, index: number, deleteCard: Function }) => {
    return (
        <div className='str-card'>
            <p style={{ color: "#1d1d1d" }}>{data}</p>
            <button onClick={() => deleteCard(index)}>X</button>
        </div>
    )
}


export default function Skills() {

    const [skills, setlanguages] = useLocalStorage<string[]>('Skills', template)
    const [skill, setlanguage] = useState<string>('')

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target
        setlanguage(value)
    }

    function handleClick(e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setlanguages(old => ([...old, skill]))
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
            <div className="flex wrap" style={{ gap: "0.5rem" }}>
                {
                    skills
                        .map((element, index) => (
                            <Card key={index} index={index} data={element} deleteCard={deleteCard} />
                        ))
                }
            </div>
            <div className="summary flex wrap align-center" style={{ justifyContent: "space-between", gap: "1rem", marginBlockEnd: "1rem" }}>
                <p className="description" style={{ maxWidth: "60ch" }}>{description}</p>
                <form className='flex wrap align-center' style={{ maxWidth: "65ch", gap: "1rem" }} onSubmit={e => handleClick(e)}>
                    <Input
                        label='Skill'
                        name='skill'
                        type='text'
                        value={skill}
                        onChange={handleChange}
                        required
                    />
                    <button onClick={e => handleClick(e)}>+</button>
                </form>
            </div>
        </div>
    )
}

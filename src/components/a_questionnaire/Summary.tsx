"use client";
import React, { useEffect, useState } from 'react'
import useLocalStorage from '@/hooks/useLocalStorage';

import { Summary as template, summary, social } from '@/utils/client/dataStructure';

import Input from '../Input';

const description: string = "Craft a concise and impactful professional summary for your resume by highlighting your background, key skills, and career objective. Tailor it to each job application, showcasing your unique value proposition and how you align with the role's requirements. Use relevant keywords and focus on showcasing what sets you apart from other candidates."

const Card = ({ data, index, deleteCard }: { data: social, index: number, deleteCard: Function }) => {
    return (
        <div className='summary-card'>
            <a href={data.url}>{data.name}</a>
            <button onClick={() => deleteCard(index)} tabIndex={-1}>X</button>
        </div>
    )
}

export default function Summary() {
    const [Summary, setSummary] = useLocalStorage<summary>('Summary', template)
    const [social, setsocial] = useState<social>({ name: "", url: "" })

    useEffect(() => {
        setsocial({ name: '', url: '' })
    }, [Summary.socials])


    function handleSummaryChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const { value } = e.target
        setSummary(old => ({
            ...old,
            content: value
        }))
    }

    function handleSocialChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setsocial(old => ({
            ...old,
            [name]: value
        }))
    }

    const deleteCard = (index: number) => {
        setSummary((prevState) => {
            const newArray = [...prevState.socials];
            newArray.splice(index, 1);
            return { ...prevState, socials: newArray };
        });
    };

    function handleClick(e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setSummary(old => ({
            ...old,
            socials: [...old.socials, social]
        }))
    }

    return (
        <div style={{ padding: "1rem" }}>
            <div className="summary flex wrap align-center" style={{ justifyContent: "space-between", gap: "1rem", marginBlockEnd: "1rem" }}>
                <div className="summary">
                    <Input
                        label='Summary'
                        name='content'
                        type='textarea'
                        value={Summary.content}
                        onChange={handleSummaryChange}
                        required
                        cols={70}
                    />
                </div>
                <p className="description" style={{ maxWidth: "60ch" }}>{description}</p>
            </div>
            <div className="socials">
                <p style={{ maxWidth: "60ch" }}>
                    <b>ADD SOCIALS</b>
                    <span style={{ fontWeight: 'lighter', fontSize: 'xx-small' }}> (optional)</span>
                </p>
                <form className='flex wrap align-center' style={{ maxWidth: "65ch", gap: "1rem" }} onSubmit={e => handleClick(e)}>
                    <Input
                        label='Social'
                        name='name'
                        type='text'
                        value={social.name}
                        onChange={handleSocialChange}
                        required
                    />
                    <Input
                        label='URL'
                        name='url'
                        type='text'
                        value={social.url}
                        onChange={handleSocialChange}
                        required
                    />
                    <button onClick={e => handleClick(e)} tabIndex={-1}>+</button>
                </form>
            </div>
            <div className="flex wrap" style={{ gap: "0.5rem" }}>
                {
                    Summary.socials
                        .map((element, index) => (
                            <Card key={index} index={index} data={element} deleteCard={deleteCard} />
                        ))}
            </div>
        </div>
    )
}

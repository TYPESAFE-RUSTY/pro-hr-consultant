'use client';
import { Experience as template, Experiences as templateArray, experience } from "@/utils/dataStructure";
import Input from "../Input"
import useLocalStorage from "@/hooks/useLocalStorage";
import { setPropByString } from "@/utils/utilityFunctions";
import { useEffect, useState } from "react";

const description = 'Highlight relevant work experiences by including key details like company name, job title, employment duration, and concise descriptions of responsibilities and achievements. Tailor the information to showcase how your past experiences align with the target job and emphasize quantifiable results and skills developed.'


const Card = ({ data, index, deleteCard }: { data: experience, index: number, deleteCard: Function }) => {
    return (
        <div className="obj-card flex glass" style={{ gap: '1rem' }}>
            <div>
                <b>
                    Year :
                </b> {data.year.start} - {data.year.end ? data.year.end : "Current"}<br />
                <b>
                    Company :
                </b> {data.company}<br />
                <b>
                    Position :
                </b> {data.position}<br />
                <b>
                    Description :
                </b> {data.description.slice(0, 20)}{data.description.length > 20 && "..."}
            </div>
            <button onClick={() => deleteCard(index)}>X</button>
        </div>
    )
}

export default function Experience() {

    const [Experiences, setExperiences] = useLocalStorage<experience[]>('Experience', templateArray)
    const [Experience, setExperience] = useState<experience>(template)

    useEffect(() => {
        setExperience({ year: { start: '', end: '' }, position: '', company: '', description: '' })
    }, [Experiences])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let { name, value } = e.target

        if (name.includes('.')) {
            let newObj = Experience
            setPropByString(newObj, name, e.target.value)
            setExperience(newObj)
        }

        setExperience(old => ({ ...old, [name]: value }))
    }

    function handleClick(e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setExperiences(old => ([...old, Experience]))
    }

    function deleteCard(index: number) {
        setExperiences(old => {
            const newArray = [...old];
            newArray.splice(index, 1);
            return newArray;
        })
    }

    return (
        <div style={{ padding: "1rem" }}>
            <div className="flex wrap" style={{ gap: "0.5rem" }}>
                {
                    Experiences
                        .map((element, index) => (
                            <Card key={index} index={index} data={element} deleteCard={deleteCard} />
                        ))
                }
            </div>
            <div className="summary flex wrap align-center" style={{ justifyContent: "space-between", gap: "1rem", marginBlockEnd: "1rem" }}>
                <p className="description" style={{ maxWidth: "60ch" }}>{description}</p>
                <form className='flex wrap align-center' style={{ maxWidth: "40ch", gap: "1rem" }} onSubmit={e => handleClick(e)}>
                    <Input
                        label='Start Year'
                        name='year.start'
                        type='text'
                        value={Experience.year.start}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label='End Year'
                        name='year.end'
                        type='text'
                        value={Experience.year.end ? Experience.year.end : ""}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label='Company Name'
                        name='company'
                        type='text'
                        value={Experience.company}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label='Position'
                        name='position'
                        type='text'
                        value={Experience.position}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Job Description"
                        name="description"
                        type="textarea"
                        value={Experience.description}
                        onChange={handleChange}
                        cols={48}
                        required
                    />
                    <button onClick={e => handleClick(e)} style={{ flexGrow: '1', borderRadius: "100vh" }}>ADD</button>
                </form>
            </div>
        </div>
    )
}

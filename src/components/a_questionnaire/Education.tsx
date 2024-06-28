'use client';
import { Education as template, Educations as templateArray, education } from "@/utils/client/dataStructure";
import Input from "../Input"
import useLocalStorage from "@/hooks/useLocalStorage";
import { setPropByString } from "@/utils/client/utilityFunctions";
import { useEffect, useState } from "react";

const description = 'Incorporate your education information by including essential details such as your highest level of education, university/college name, major, graduation year, and relevant certifications. Highlight academic achievements and emphasize your qualifications, especially if you have limited work experience.'


const Card = ({ data, index, deleteCard }: { data: education, index: number, deleteCard: Function }) => {
    return (
        <div className="obj-card " style={{ gap: '1rem', minWidth: "17rem", position: "relative" }}>
            <b>
                Year :
            </b> {data.year.start} - {data.year.end ? data.year.end : "Current"}<br />
            <b>
                Location :
            </b> {data.location}<br />
            <b>
                Degree :
            </b> {data.degree}<br />
            <b>
                University :
            </b> {data.university}<br />
            <b>
                Description :
            </b> {data.description.slice(0, 20)}{data.description.length > 20 && "..."}
            <button style={{ position: "absolute", right: "10px", top: "10px" }} onClick={() => deleteCard(index)} tabIndex={-1}>X</button>
        </div>
    )
}

export default function Education() {

    const [Educations, setExperiences] = useLocalStorage<education[]>('Educations', templateArray)
    const [Education, setExperience] = useState<education>(template)

    useEffect(() => {
        setExperience({
            year: {
                start: '',
                end: ''
            },
            location: '',
            degree: '',
            university: '',
            description: ''
        })
    }, [Educations])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let { name, value } = e.target

        if (name.includes('.')) {
            let newObj = Education
            setPropByString(newObj, name, e.target.value)
            setExperience(newObj)
        }

        setExperience(old => ({ ...old, [name]: value }))
    }

    function handleClick(e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setExperiences(old => ([...old, Education]))
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

            <div className="summary flex wrap align-center" style={{ justifyContent: "space-between", gap: "1rem", marginBlockEnd: "1rem" }}>
                <form className='flex wrap align-center' style={{ maxWidth: "40ch", gap: "1rem" }} onSubmit={e => handleClick(e)}>
                    <Input
                        label='Start Year'
                        name='year.start'
                        type='text'
                        value={Education.year.start}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label='End Year'
                        name='year.end'
                        type='text'
                        value={Education.year.end ? Education.year.end : ""}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label='Location'
                        name='location'
                        type='text'
                        value={Education.location}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label='Degree'
                        name='degree'
                        type='text'
                        value={Education.degree}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label='University'
                        name='university'
                        type='text'
                        value={Education.university}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Description"
                        name="description"
                        type="textarea"
                        value={Education.description}
                        onChange={handleChange}
                        cols={48}
                        required
                    />
                    <button onClick={e => handleClick(e)} style={{ flexGrow: '1', borderRadius: "100vh" }}>ADD</button>
                </form>
                <div>
                    <p className="description" style={{ maxWidth: "60ch", marginBlockEnd: "2rem" }}>{description}</p>
                    <div className="flex card-container" style={{ gap: "0.5rem", maxWidth: "50rem" }}>
                        {
                            Educations
                                .map((element, index) => (
                                    <Card key={index} index={index} data={element} deleteCard={deleteCard} />
                                ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

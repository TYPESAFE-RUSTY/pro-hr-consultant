"use client";

import { useEffect, useState } from "react";

import "@/styles/a_r_resume.css"
import {
    applicantData, ApplicantData as template,
    generalInfo, GeneralInformation,
    summary, Summary,
    education, Educations,
    experience, Experiences,
    skills, Languages
} from "@/utils/dataStructure";

type stordTypes = generalInfo | summary | education[] | experience[] | string[]

function getFromLocalStorage<T extends stordTypes>(key: string, initialVal: T) {
    const item = localStorage.getItem(key);
    if (!item) {
        return initialVal;
    }

    try {
        const parsedItem = JSON.parse(item) as T;
        return parsedItem;
    } catch (error) {
        console.error(`Error parsing item ${key}:`, error);
        return initialVal;
    }
}


export default function Page() {

    const [content, setcontent] = useState<applicantData>(template)

    useEffect(() => {
        let tapplicantData = getFromLocalStorage<generalInfo>('GeneralInformation', GeneralInformation);
        let tskills = getFromLocalStorage<string[]>('Skills', skills);
        let tlanguages = getFromLocalStorage<string[]>('Languages', Languages);
        let texperience = getFromLocalStorage<experience[]>('Experience', Experiences);
        let tsummary = getFromLocalStorage<summary>('Summary', Summary);
        let teducation = getFromLocalStorage<education[]>('Educations', Educations);

        let DATA: applicantData = {
            ...tapplicantData,
            skills: tskills,
            languages: tlanguages,
            experiences: texperience,
            educations: teducation,
            summary: tsummary
        };

        setcontent(DATA);

    }, [])


    function handleClick() {
        let header = document.querySelector('header')
        let footer = document.querySelector('footer')
        let buttons = document.querySelectorAll('button')
        let Resume = document.querySelector("#Resume")
        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark')
            document.body.classList.add('light')
        }
        Resume?.classList.toggle('container')
        header?.classList.toggle('print')
        footer?.classList.toggle('print')
        buttons.forEach(button => button.style.display = "none")
        window.print()
        location.reload()
    }

    return (
        <div className="container" id="Resume" style={{ marginBlockEnd: '2rem' }}>
            <div className="grid">
                <div className="aside">
                    <a href={`mailto:${content.email}`}>{content.email}</a>
                    <p>{content.phone}</p>
                    <p>{content.address}</p>
                    <div>
                        <h3>
                            <b>SKILLS</b>
                        </h3>
                        {content.skills.map((skill, index) => (<p key={index}>{skill}</p>))}
                    </div>
                    <div>
                        <h3>
                            <b>EDUCATION</b>
                        </h3>
                        {content.educations.map((education, index) => {
                            return (
                                <div key={index} className="education">
                                    <b>{education.degree}</b>
                                    <p>{`${education.year.start} - ${education.year.end || 'Current'}`}</p>
                                    <p>{education.university}</p>
                                    <p>{education.location}</p>
                                    <div>{education.description.split('\n').map((data, index) => <p key={index}>{data}</p>)}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <h3>
                            <b>LANGUAGES</b>
                        </h3>
                        {content.languages.map((language, index) => (<p key={index}>{language}</p>))}
                    </div>
                    <div>
                        <h3>
                            <b>SOCIALS</b>
                        </h3>
                        {content.summary.socials.map((social, index) => <p key={index}><a href={social.url}>{social.name}</a></p>)}
                    </div>
                </div>
                <div className="main">
                    <h2>{content.name}</h2>
                    <div>
                        <h3>
                            <b>SUMMARY</b>
                        </h3>
                        <p>{content.summary.content}</p>
                    </div>
                    <div>
                        <h3>
                            <b>EXPERIENCE</b>
                        </h3>
                        {content.experiences.map((experience, index) => {
                            return (
                                <div key={index} className="experience">
                                    <b>{experience.company}</b>
                                    <p>{`${experience.year.start} - ${experience.year.end || 'Current'}`}</p>
                                    <p>{experience.position}</p>
                                    <div>{experience.description.split('\n').map((data, index) => <p key={index}>{data}</p>)}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="flex " style={{ padding: "2rem" }}>
                <button className="print" onClick={handleClick}>PRINT</button>
            </div>
        </div>
    )
}

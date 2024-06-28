"use client"
import useLocalStorage from "@/hooks/useLocalStorage";
import Input from "./Input"
import { GeneralInformation, generalInfo } from "@/utils/client/dataStructure";

import "@/styles/a_profile.css"
import { setPropByString } from "@/utils/client/utilityFunctions";
import Image from "next/image";


function Form({ data, changeHandler }: { data: generalInfo, changeHandler: Function }) {
    return (
        <div className="info glass">
            <div className="flex wrap" style={{ gap: "1rem", maxWidth: "40ch" }}>
                <Input
                    name="name"
                    type="text"
                    label="Full Name"
                    value={data.name}
                    onChange={changeHandler}
                    required
                />
                <Input
                    name="email"
                    type="email"
                    label="Email"
                    value={data.email}
                    onChange={changeHandler}
                    required
                />
                <Input
                    name="phone"
                    type="tel"
                    label="Mobile No."
                    value={data.phone}
                    onChange={changeHandler}
                    required
                />
                <Input
                    name="location"
                    type="text"
                    label="Current Location"
                    value={data.location}
                    onChange={changeHandler}
                    required
                />
            </div>
            <Input
                name="address"
                className="address"
                type="text"
                label="Adderess"
                value={data.address}
                onChange={changeHandler}
                required
            />
            <div className="flex wrap" style={{ gap: "1rem", maxWidth: "40ch" }}>
                <Input
                    name="position"
                    type="text"
                    label="Current Position"
                    value={data.position}
                    onChange={changeHandler}
                    required
                />
                <Input
                    name="availablity"
                    type="text"
                    label="Availablity"
                    value={data.availablity}
                    onChange={changeHandler}
                    required
                />
            </div>
            <div>
                <label htmlFor="exp" style={{ marginInlineEnd: "1rem" }}>Experience:</label>
                <select id="exp" name="experience" value={data.experience?.toString()} onChange={(e) => changeHandler(e)}>
                    <option value="true">Fresher</option>
                    <option value="false">Experienced</option>
                </select>
                {!data.experience && <div className="flex wrap" style={{ gap: "1rem", maxWidth: "40ch" }}>
                    <Input
                        name="exp.totalExp"
                        type="text"
                        label="Total Experience"
                        value={data.exp.totalExp}
                        onChange={changeHandler}
                        required
                    />
                    <Input
                        name="exp.annualSalary"
                        type="text"
                        label="Annual Salary"
                        value={data.exp.annualSalary}
                        onChange={changeHandler}
                        required
                    />
                </div>
                }
            </div>
        </div>
    )
}

function Card({ name, position, experience }: { name: string, position: string, experience?: string | undefined }) {
    return (
        <div className="card glass">
            <div className="profile">
                <svg height="300px" width="300px" style={{ position: "absolute" }}>
                    <filter id="grainy">
                        <feTurbulence type="fractalNoise" baseFrequency="0.6" />
                        <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
                    </filter>
                    <circle cx={150} cy={150} r={150} filter="url(#grainy)" />
                </svg>
                <Image src="/images/about/3.jpg" alt="Profile Picture" width={150} height={150} priority />
            </div>
            <div className="name"><b>Name: </b>{name}</div>
            <div className="position"><b>Position: </b>{position}</div>
            {experience !== undefined &&
                <div className="experinence"><b>Experience: </b>{experience}</div>
            }
        </div>
    )
}

export default function Profile() {

    const [data, setdata] = useLocalStorage<generalInfo>("GeneralInformation", GeneralInformation)

    function changeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        let { name, value } = e.target

        let newVal = value === "true" ? true : value === "false" ? false : value

        if (name.includes('.')) {
            let newObj = data
            setPropByString(newObj, name, e.target.value)
            setdata(newObj)
        }

        setdata(current => ({ ...current, [name]: newVal }))
    }

    return (
        <section id="Profile" className="container section-padding" style={{ overflow: "clip" }}>
            <div className="flex wrap align-center" style={{ justifyContent: "space-evenly", gap: "2rem" }}>
                <Card name={data.name} position={data.position} experience={data.exp.totalExp} />
                <Form data={data} changeHandler={changeHandler} />
            </div>
        </section>
    )
}

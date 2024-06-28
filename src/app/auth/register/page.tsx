"use client";

import * as z from "zod";
import React, { useState } from "react";
import { registerSchema } from "@/utils/validatorSchema";
import { register } from "@/actions/auth";
import Input from "@/components/Input";
import { loginWithGoogle } from "@/actions/auth";

export default function Page() {

    const [data, setdata] = useState<z.infer<typeof registerSchema>>({
        name: "",
        email: "",
        password: ""
    })

    // const [response, setresponse] = useState<typeof register>()

    function change(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setdata(prev => {
            return ({
                ...prev,
                [name]: value
            })
        })
    }

    async function submit(e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const validation = registerSchema.safeParse(data)
        if (!validation) {
            return alert("oops something went wrong");
        }
        const res = await register(data);
        console.log(res)
    }

    return (
        <div>
            <form onSubmit={e => submit(e)}>
                <Input name="name" label="Name" value={data.name} onChange={change} type={"text"} required={true} style={{ width: "100%" }} />
                <Input name="email" label="Email" value={data.email} onChange={change} type={"email"} required={true} />
                <Input name="password" label="Password" value={data.password} onChange={change} type={"password"} required={true} />
                <button type="submit" onClick={e => submit(e)}>SUBMIT</button>
                <p className="fs-xs">Already have an Account ? <a href="/auth/signin">login</a> </p>
                <div className="flex centre " style={{ margin: 0, placeContent: "center" }}>
                    <p className="fs-xs" style={{ fontWeight: "bold" }}>OR</p>
                </div>
                <button onClick={() => loginWithGoogle()}>Login with Google</button>
            </form>
        </div>
    )
}

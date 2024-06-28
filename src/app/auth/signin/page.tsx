"use client";

import * as z from "zod";
import React, { useState } from "react";
import { loginSchema } from "@/utils/validatorSchema";
import { login, register, loginWithGoogle } from "@/actions/auth";
import { signIn } from "@/auth";
import Input from "@/components/Input";

export default function Page() {

    const [data, setdata] = useState<z.infer<typeof loginSchema>>({

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
        const validation = loginSchema.safeParse(data)
        if (!validation) {
            return alert("oops something went wrong");
        }
        const res = await login(data);
        console.log(res)
    }


    return (
        <div>
            <form onSubmit={e => submit(e)}>
                <Input name="email" label="Email" value={data.email} onChange={change} type={"email"} required={false} />
                <Input name="password" label="Password" value={data.password} onChange={change} type={"password"} required={false} />
                <button type="submit" onClick={e => submit(e)}>SUBMIT</button>
                <p className="fs-xs" style={{ fontWeight: 100 }}>Don&apos;t have an Account ? <a href="/auth/register">Register</a> </p>
                <div className="flex centre " style={{ margin: 0, placeContent: "center" }}>
                    <p className="fs-xs" style={{ fontWeight: "bold" }}>OR</p>
                </div>
                <button onClick={() => loginWithGoogle()}>Login with Google</button>
            </form>
        </div>
    )
}

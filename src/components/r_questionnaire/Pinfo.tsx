"use client";
import Input from "../Input"
import { PinfoSchema } from "@/utils/validatorSchema";
import useForm from "@/hooks/useForm";
import { PinfoAction } from "@/actions/recruiterQuestionnaire";

export default function Pinfo() {

    const { data, changeHandler, error, success, submitFn } = useForm(PinfoSchema, {
        ["FULL NAME"]: "",
        ["COMPANY NAME"]: "",
        ["PHONE NO"]: "",
        ["JOB TITLE"]: "",
        ["EMAIL"]: "",
        ["LINKED IN PROFILE"]: ""
    }, PinfoAction)

    return (
        <div className="flex wrap" style={{ padding: "1rem", placeContent: "space-between" }}>
            <p>Please provide your personal information.</p>
            <form action="" className="flex wrap" style={{ gap: "2rem", marginBlockStart: "1rem" }}>
                <Input
                    name={"FULL NAME"}
                    label={"FULL NAME"}
                    type={"text"}
                    value={data["FULL NAME"]}
                    onChange={changeHandler}
                    required={true}
                />
                <Input
                    name={"COMPANY NAME"}
                    label={"COMPANY NAME"}
                    type={"text"}
                    value={data["COMPANY NAME"]}
                    onChange={changeHandler}
                    required={true}
                />
                <Input
                    name={"PHONE NO"}
                    label={"PHONE NO"}
                    type={"tel"}
                    value={data["PHONE NO"]}
                    onChange={changeHandler}
                    required={true}
                />
                <Input
                    name={"JOB TITLE"}
                    label={"JOB TITLE"}
                    type={"text"}
                    value={data["JOB TITLE"]}
                    onChange={changeHandler}
                    required={true}
                />
                <Input
                    name={"EMAIL"}
                    label={"EMAIL"}
                    type={"email"}
                    value={data["EMAIL"]}
                    onChange={changeHandler}
                    required={true}
                />
                <Input
                    name={"LINKED IN PROFILE"}
                    label={"LINKED IN PROFILE"}
                    type={"text"}
                    value={data["LINKED IN PROFILE"]}
                    onChange={changeHandler}
                    required={true}
                />
            </form>
            <div style={{ marginBlockStart: "0.5rem" }}>
                {error.length !== 0 && <p style={{ color: "red" }}>{error[0]}</p>}
                {success.length !== 0 && <p style={{ color: "var(--accent)" }}>{success}</p>}
                <button onClick={submitFn}>SUBMIT</button>
            </div>
        </div>
    )
}

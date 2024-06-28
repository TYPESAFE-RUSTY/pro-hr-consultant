"use client";
import { CncAction } from "@/actions/recruiterQuestionnaire";
import Input from "../Input";
import useForm from "@/hooks/useForm";
import { CncSchema } from "@/utils/validatorSchema";

export default function Cnc() {
    const { data, changeHandler, error, success, submitFn } = useForm(CncSchema, {
        ["HIRING MANAGER COORDINATION"]: "",
        ["CANDIDATE COMMUNICATION METHODS"]: "",
    }, CncAction)
    return (
        <div style={{ padding: "1rem" }}>
            <p style={{ marginBlockEnd: "3rem" }}>Please provide information about how you collaborate and communicate during the recruitment process.</p>
            <form action="" className="flex wrap" style={{ gap: "2rem", marginBlockStart: "1rem" }}>
                <Input
                    name={"HIRING MANAGER COORDINATION"}
                    label={"HIRING MANAGER COORDINATION"}
                    type={"textarea"}
                    value={data["HIRING MANAGER COORDINATION"]}
                    onChange={changeHandler}
                    required={true}
                />
                <Input
                    name={"CANDIDATE COMMUNICATION METHODS"}
                    label={"CANDIDATE COMMUNICATION METHODS"}
                    type={"textarea"}
                    value={data["CANDIDATE COMMUNICATION METHODS"]}
                    onChange={changeHandler}
                    cols={50}
                    required={true}
                />
            </form>
            <div>
                {error.length !== 0 && <p style={{ color: "red" }}>{error[0]}</p>}
                {success.length !== 0 && <p style={{ color: "var(--accent)" }}>{success}</p>}
                <button onClick={submitFn}>SUBMIT</button>
            </div>
        </div>
    )
}

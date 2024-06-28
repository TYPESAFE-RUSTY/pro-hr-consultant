"use client";
import { AcAction } from "@/actions/recruiterQuestionnaire";
import Input from "../Input"
import useForm from "@/hooks/useForm";
import { AcSchema } from "@/utils/validatorSchema";

export default function Ac() {
    const { data, changeHandler, error, success, submitFn } = useForm(AcSchema, {
        ["ADDITIOINAL COMMENT"]: ""
    }, AcAction)
    return (
        <>
            <div className="flex wrap" style={{ padding: "1rem", placeContent: "space-between" }}>
                <p style={{ maxWidth: "50ch" }}>If there is anything else you would like to share about your recruitment experience or any additional information you would like to provide, please do so in the field below.</p>
                <form action="">
                    <Input
                        name={"ADDITIOINAL COMMENT"}
                        label={"COMMENT"}
                        type={"textarea"}
                        value={data["ADDITIOINAL COMMENT"]}
                        onChange={changeHandler}
                        cols={50}
                        required={false}
                    />
                </form>
            </div>
            <div>
                {error.length !== 0 && <p style={{ color: "red" }}>{error[0]}</p>}
                {success.length !== 0 && <p style={{ color: "var(--accent)" }}>{success}</p>}
                <button className="submit" onClick={submitFn}>SUBMIT</button>
            </div>
        </>
    )
}

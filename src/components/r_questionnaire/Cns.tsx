"use client";
import { CnsAction } from "@/actions/recruiterQuestionnaire";
import Input from "../Input"
import useForm from "@/hooks/useForm";
import { CnsSchema } from "@/utils/validatorSchema";

export default function Cns() {
    const { data, changeHandler, error, success, submitFn } = useForm(CnsSchema, {
        ["RECRUITMENT CHALLENGES"]: "",
        ["OVERCOMING STRATIGIES"]: "",
    }, CnsAction)
    return (
        <div style={{ padding: "1rem" }}>
            <p style={{ marginBlockEnd: "3rem" }}>Please provide information about common challenges you face in recruitment and how you overcome them.</p>
            <form action="" className="flex wrap" style={{ gap: "2rem", marginBlockStart: "1rem" }}>
                <Input
                    name={"RECRUITMENT CHALLENGES"}
                    label={"RECRUITMENT CHALLENGES"}
                    type={"textarea"}
                    value={data["RECRUITMENT CHALLENGES"]}
                    onChange={changeHandler}
                    cols={50}
                    required={false}
                />
                <Input
                    name={"OVERCOMING STRATIGIES"}
                    label={"OVERCOMING STRATIGIES"}
                    type={"textarea"}
                    value={data["OVERCOMING STRATIGIES"]}
                    onChange={changeHandler}
                    cols={50}
                    required={false}
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

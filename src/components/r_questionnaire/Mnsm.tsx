"use client";
import { MnsmAction } from "@/actions/recruiterQuestionnaire";
import Input from "../Input";
import useForm from "@/hooks/useForm";
import { MnsmSchema } from "@/utils/validatorSchema";

export default function Mnsm() {
    const { data, changeHandler, error, success, submitFn } = useForm(MnsmSchema, {
        ["RECRUITMENT CHALLENGES"]: "",
        ["OVERCOMING STRATIGIES"]: "",
    }, MnsmAction)
    return (
        <div style={{ padding: "1rem" }}>
            <p style={{ marginBlockEnd: "3rem" }}>Please provide information about how you measure the success of your recruitment efforts.</p>
            <form action="" className="flex wrap" style={{ gap: "2rem", marginBlockStart: "1rem" }}>
                <Input
                    name={"RECRUITMENT SUCCESS MEASUREMENT"}
                    label={"RECRUITMENT SUCCESS MEASUREMENT"}
                    type={"textarea"}
                    value={data["RECRUITMENT SUCCESS MEASUREMENT"]}
                    onChange={changeHandler}
                    required={false}
                />
                <Input
                    name={"KPI'S TRACKED"}
                    label={"KPI'S TRACKED"}
                    type={"textarea"}
                    value={data["KPI'S TRACKED"]}
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

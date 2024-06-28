"use client";
import { RneAction } from "@/actions/recruiterQuestionnaire";
import Input from "../Input"
import useForm from "@/hooks/useForm";
import { RneSchema } from "@/utils/validatorSchema";

export default function Rne() {
    const { data, changeHandler, error, success, submitFn } = useForm(RneSchema, {
        ["YEARS OF EXPERIENCE"]: 0,
        ["POSITIONS LOOKING"]: "",
        ["SPECIALIZATION"]: "",
        ["RECRUITMENT METHODS"]: "",
        ["MONTHLY RECRUITMENTS"]: 0,
    }, RneAction)
    return (
        <div className="flex wrap" style={{ padding: "1rem", placeContent: "space-between" }}>
            <p>Please provide details about your recruitment experience.</p>
            <form action="" className="flex wrap" style={{ gap: "2rem", marginBlockStart: "1rem" }}>
                <Input
                    name={"YEARS OF EXPERIENCE"}
                    label={"YEARS OF EXPERIENCE"}
                    type={"number"}
                    value={data["YEARS OF EXPERIENCE"]}
                    onChange={changeHandler}
                    required={true}
                />
                <Input
                    name={"POSITIONS LOOKING"}
                    label={"POSITIONS LOOKING"}
                    type={"text"}
                    value={data["POSITIONS LOOKING"]}
                    onChange={changeHandler}
                    required={true}
                />
                <Input
                    name={"SPECIALIZATION"}
                    label={"SPECIALIZATION"}
                    type={"text"}
                    value={data["SPECIALIZATION"]}
                    onChange={changeHandler}
                    required={true}
                />
                <Input
                    name={"RECRUITMENT METHODS"}
                    label={"RECRUITMENT METHODS"}
                    type={"textarea"}
                    value={data["RECRUITMENT METHODS"]}
                    onChange={changeHandler}
                    cols={50}
                    required={true}
                />
                <Input
                    name={"MONTHLY RECRUITMENTS"}
                    label={"MONTHLY RECRUITMENTS"}
                    type={"number"}
                    value={data["MONTHLY RECRUITMENTS"]}
                    onChange={changeHandler}
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

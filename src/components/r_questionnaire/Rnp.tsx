"use client";
import { RnpAction } from "@/actions/recruiterQuestionnaire";
import Input from "../Input";
import useForm from "@/hooks/useForm";
import { RnpSchema } from "@/utils/validatorSchema";

export default function Rnp() {
    const { data, changeHandler, error, success, submitFn } = useForm(RnpSchema, {
        ["SOURCING METHODS"]: "",
        ["CANDIDATE EVALUATION CRITERIA"]: "",
        ["INTERVIEW METHODS"]: "",
        ["BACKGROUND CHECKS"]: "",
        ["SKILLS ASSESSMENT METHODS"]: ""
    }, RnpAction)
    return (
        <div className="flex wrap" style={{ padding: "1rem", placeContent: "space-between" }}>
            <p>Please provide details about your recruitment process.</p>
            <form action="" className="flex wrap" style={{ gap: "2rem", marginBlockStart: "1rem" }}>
                <Input
                    name={"SOURCING METHODS"}
                    label={"SOURCING METHODS"}
                    type={"textarea"}
                    value={data["SOURCING METHODS"]}
                    onChange={changeHandler}
                    required={true}
                />
                <Input
                    name={"CANDIDATE EVALUATION CRITERIA"}
                    label={"CANDIDATE EVALUATION CRITERIA"}
                    type={"textarea"}
                    value={data["CANDIDATE EVALUATION CRITERIA"]}
                    onChange={changeHandler}
                    cols={50}
                    required={true}
                />
                <Input
                    name={"INTERVIEW METHODS"}
                    label={"INTERVIEW METHODS"}
                    type={"textarea"}
                    value={data["INTERVIEW METHODS"]}
                    onChange={changeHandler}
                    required={true}
                />
                <Input
                    name={"BACKGROUND CHECKS"}
                    label={"BACKGROUND CHECKS"}
                    type={"textarea"}
                    value={data["BACKGROUND CHECKS"]}
                    onChange={changeHandler}
                    cols={50}
                    required={true}
                />
                <Input
                    name={"SKILLS ASSESSMENT METHODS"}
                    label={"SKILLS ASSESSMENT METHODS"}
                    type={"textarea"}
                    value={data["SKILLS ASSESSMENT METHODS"]}
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

"use client";
import { TntAction } from "@/actions/recruiterQuestionnaire";
import Input from "../Input";
import useForm from "@/hooks/useForm";
import { TntSchema } from "@/utils/validatorSchema";

export default function Tnt() {
    const { data, changeHandler, error, success, submitFn } = useForm(TntSchema, {
        ["RECRUITMENT SOFTWARE AND TOOLS"]: "",
        ["ATS FAMILIARITY"]: "",
    }, TntAction)
    return (
        <div style={{ padding: "1rem" }}>
            <p style={{ marginBlockEnd: "3rem" }}>Please provide information about the technology and tools you use for recruitment.</p>
            <form action="" className="flex wrap" style={{ gap: "2rem", marginBlockStart: "1rem" }}>
                <Input
                    name={"RECRUITMENT SOFTWARE AND TOOLS"}
                    label={"RECRUITMENT SOFTWARE AND TOOLS"}
                    type={"textarea"}
                    value={data["RECRUITMENT SOFTWARE AND TOOLS"]}
                    onChange={changeHandler}
                    required={true}
                />
                <Input
                    name={"ATS FAMILIARITY"}
                    label={"ATS FAMILIARITY"}
                    type={"textarea"}
                    value={data["ATS FAMILIARITY"]}
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

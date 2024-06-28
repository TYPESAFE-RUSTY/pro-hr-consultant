"use client";
import useForm from "@/hooks/useForm";
import Input from "../Input"
import { CinfoSchema } from "@/utils/validatorSchema";
import { CinfoAction } from "@/actions/recruiterQuestionnaire";


export default function Cinfo() {
    const { data, changeHandler, error, success, submitFn } = useForm(CinfoSchema, {
        ["COMPANY SIZE"]: "",
        ["INDUSTRY"]: "",
        ["COMPANY LOCATION"]: ""
    }, CinfoAction)
    return (
        <div className="flex wrap" style={{ padding: "1rem", placeContent: "space-between" }}>
            <p>Please provide information about your company.</p>
            <form action="" className="flex wrap" style={{ gap: "2rem", marginBlockStart: "1rem" }}>
                <Input
                    name={"COMPANY SIZE"}
                    label={"COMPANY SIZE"}
                    type={"text"}
                    value={data["COMPANY SIZE"]}
                    onChange={changeHandler}
                    required={true}
                />
                <Input
                    name={"INDUSTRY"}
                    label={"INDUSTRY"}
                    type={"text"}
                    value={data["INDUSTRY"]}
                    onChange={changeHandler}
                    required={true}
                />
                <Input
                    name={"COMPANY LOCATION"}
                    label={"COMPANY LOCATION"}
                    type={"text"}
                    value={data["COMPANY LOCATION"]}
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

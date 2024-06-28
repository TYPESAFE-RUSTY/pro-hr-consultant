"use server";
import * as z from "zod"
import { db } from "@/utils/server/prismaClient";
import { AcSchema, CinfoSchema, CncSchema, CnsSchema, MnsmSchema, PinfoSchema, RneSchema, RnpSchema, TntSchema } from "@/utils/validatorSchema";
import { Session } from "next-auth";

export async function PinfoAction(Pinfo: z.infer<typeof PinfoSchema>, session: Session): Promise<{ error?: string, success?: string }> {
    let contents = PinfoSchema.safeParse(Pinfo);
    if (!contents.success) {
        return { error: "Server Responded with : " + contents.error.errors[0].message }
    }
    let recruiterData = await db.recruiterData.create({
        data: {
            job_title: contents.data["JOB TITLE"],
            phone: contents.data["PHONE NO"],
            linked_in_profile: contents.data["LINKED IN PROFILE"],
            userId: session.user.id
        }
    })

    let companyData = await db.company.create({
        data: {
            name: contents.data["COMPANY NAME"],
            recruiterDataId: recruiterData.id
        }
    })

    if (!recruiterData) {
        return { error: "Server Responded with : Unable to create entry in db" }
    }
    return { success: "form submitted sucessfully" }
}

export async function CinfoAction(Cinfo: z.infer<typeof CinfoSchema>, session: Session): Promise<{ error?: string, success?: string }> {
    let contents = CinfoSchema.safeParse(Cinfo);
    if (!contents.success) {
        return { error: "Server Responded with : " + contents.error.errors[0].message }
    }
    try {
        let recruiterDataId = await db.recruiterData.findUnique({
            where: {
                userId: session.user.id
            }
        })

        let companyData = await db.company.update({
            data: {
                size: parseInt(contents.data["COMPANY SIZE"]),
                industry: contents.data["INDUSTRY"],
                location: contents.data["COMPANY LOCATION"]
            },
            where: { recruiterDataId: recruiterDataId?.id }
        })

        if (!recruiterDataId || companyData) return { error: "Server Responded with : Unable to update your information" }

        return { success: "form submitted sucessfully" }
    }
    catch (e) {
        console.log(e)
        return { error: "Server Responded with : Unable to update entry in db" }
    }
}

export async function RneAction(Rne: z.infer<typeof RneSchema>, session: Session): Promise<{ error?: string, success?: string }> {
    let contents = RneSchema.safeParse(Rne);
    if (!contents.success) {
        return { error: "Server Responded with : " + contents.error.errors[0].message }
    }
    try {
        let recruiterData = await db.recruiterData.update({
            data: {
                years_of_experience: contents.data["YEARS OF EXPERIENCE"],
                positions_looking: contents.data["POSITIONS LOOKING"],
                specialization: contents.data["SPECIALIZATION"],
                recruitment_methods: contents.data["RECRUITMENT METHODS"],
                monthly_recruitment: contents.data["MONTHLY RECRUITMENTS"]
            },
            where: { userId: session.user.id }
        })

        if (!recruiterData) return { error: "Server Responded with : Unable to update your information" }


        return { success: "Form submitted sucessfully" }
    } catch (e) {
        console.log(e);
        return { error: "Server Responded with : Unable to update entry in db" }
    }
}

export async function RnpAction(Rnp: z.infer<typeof RnpSchema>, session: Session): Promise<{ error?: string, success?: string }> {
    let contents = RnpSchema.safeParse(Rnp);
    if (!contents.success) {
        return { error: "Server Responded with : " + contents.error.errors[0].message }
    }
    try {
        let recruiterDataId = await db.recruiterData.findUnique({
            where: {
                userId: session.user.id
            }
        })

        let company = await db.company.update({
            data: {
                sourcing_method: contents.data["SOURCING METHODS"],
                candidate_evaluation_criteria: contents.data["CANDIDATE EVALUATION CRITERIA"],
                interview_methods: contents.data["INTERVIEW METHODS"],
                background_checks: contents.data["BACKGROUND CHECKS"],
                skills_assessment_methods: contents.data["SKILLS ASSESSMENT METHODS"]
            },
            where: { recruiterDataId: recruiterDataId?.id }
        })

        if (!company || !recruiterDataId) return { error: "Server Responded with : Unable to update your information" }


        return { success: "Form submitted sucessfully" }
    } catch (e) {
        console.log(e);
        return { error: "Server Responded with : Unable to update entry in db" }
    }
}

export async function TntAction(Tnt: z.infer<typeof TntSchema>, session: Session): Promise<{ error?: string, success?: string }> {
    let contents = TntSchema.safeParse(Tnt);
    if (!contents.success) {
        return { error: "Server Responded with : " + contents.error.errors[0].message }
    }
    try {
        let recruiterDataId = await db.recruiterData.findUnique({
            where: {
                userId: session.user.id
            }
        })

        let company = await db.company.update({
            data: {
                recruitment_software_and_tools: contents.data["RECRUITMENT SOFTWARE AND TOOLS"],
                ats_familiarity: contents.data["ATS FAMILIARITY"]
            },
            where: { recruiterDataId: recruiterDataId?.id }
        })
        if (!company || !recruiterDataId) return { error: "Server Responded with : Unable to update your information" }


        return { success: "Form submitted sucessfully" }
    } catch (e) {
        console.log(e);
        return { error: "Server Responded with : Unable to update entry in db" }
    }
}

export async function CncAction(Cnc: z.infer<typeof CncSchema>, session: Session): Promise<{ error?: string, success?: string }> {
    let contents = CncSchema.safeParse(Cnc);
    if (!contents.success) {
        return { error: "Server Responded with : " + contents.error.errors[0].message }
    }
    try {
        let recruiterData = await db.recruiterData.update({
            data: {
                hiring_manager_coordination: contents.data["HIRING MANAGER COORDINATION"],
                candidate_communication_methods: contents.data["CANDIDATE COMMUNICATION METHODS"]
            },
            where: {
                userId: session.user.id
            }
        })
        if (!recruiterData) return { error: "Server Responded with : Unable to update your information" }

        return { success: "Form submitted sucessfully" }
    } catch (e) {
        console.log(e);
        return { error: "Server Responded with : Unable to update entry in db" }
    }
}

export async function MnsmAction(Mnsm: z.infer<typeof MnsmSchema>, session: Session): Promise<{ error?: string, success?: string }> {
    let contents = MnsmSchema.safeParse(Mnsm);
    if (!contents.success) {
        return { error: "Server Responded with : " + contents.error.errors[0].message }
    }
    try {
        let recruiterDataId = await db.recruiterData.findUnique({
            where: {
                userId: session.user.id
            }
        })

        let company = await db.company.update({
            data: {
                kpi_tracked: contents.data["KPI'S TRACKED"],
                recruitment_success_measurement: contents.data["RECRUITMENT SUCCESS MEASUREMENT"]
            },
            where: { recruiterDataId: recruiterDataId?.id }
        })
        if (!company || !recruiterDataId) return { error: "Server Responded with : Unable to update your information" }


        return { success: "Form submitted sucessfully" }
    } catch (e) {
        console.log(e);
        return { error: "Server Responded with : Unable to update entry in db" }
    }
}

export async function CnsAction(Cns: z.infer<typeof CnsSchema>, session: Session): Promise<{ error?: string, success?: string }> {
    let contents = CnsSchema.safeParse(Cns);
    if (!contents.success) {
        return { error: "Server Responded with : " + contents.error.errors[0].message }
    }
    try {
        let recruiterData = await db.recruiterData.update({
            data: {
                recruitment_challenges: contents.data["RECRUITMENT CHALLENGES"],
                overcoming_stratigies: contents.data["OVERCOMING STRATIGIES"]
            },
            where: {
                userId: session.user.id
            }
        })
        if (!recruiterData) return { error: "Server Responded with : Unable to update your information" }


        return { success: "Form submitted sucessfully" }
    } catch (e) {
        console.log(e);
        return { error: "Server Responded with : Unable to update entry in db" }
    }
}

export async function AcAction(Ac: z.infer<typeof AcSchema>, session: Session): Promise<{ error?: string, success?: string }> {
    let contents = AcSchema.safeParse(Ac);
    if (!contents.success) {
        return { error: "Server Responded with : " + contents.error.errors[0].message }
    }
    try {
        let recruiterData = await db.recruiterData.update({
            data: {
                comment: contents.data["ADDITIOINAL COMMENT"]
            },
            where: {
                userId: session.user.id
            }
        })
        if (!recruiterData) return { error: "Server Responded with : Unable to update your information" }


        return { success: "Form submitted sucessfully" }
    } catch (e) {
        console.log(e);
        return { error: "Server Responded with : Unable to update entry in db" }
    }
}
import * as z from "zod"

export let loginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export let registerSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string()
})


// for recruiter questionnaire
export let PinfoSchema = z.object({
    ["FULL NAME"]: z.string().min(1, { message: "FULL NAME Required" }),
    ["COMPANY NAME"]: z.string().min(1, { message: "COMPANY NAME Required" }),
    ["PHONE NO"]: z.string().max(10).min(1, { message: "PHONE NO Required" }),
    ["JOB TITLE"]: z.string().min(1, { message: "JOB TITLE Required" }),
    ["EMAIL"]: z.string().email({ message: "Invalid email" }),
    ["LINKED IN PROFILE"]: z.string().startsWith("https://www.linkedin.com/", { message: "Invalid linkedin url" })
})

export let CinfoSchema = z.object({
    ["COMPANY SIZE"]: z.string().min(1, { message: "COMPANY SIZE Required" }),
    ["INDUSTRY"]: z.string().min(1, { message: "INDUSTRY Required" }),
    ["COMPANY LOCATION"]: z.string().min(1, { message: "COMPANY LOCATION Required" })
})

export let RneSchema = z.object({
    ["YEARS OF EXPERIENCE"]: z.number().min(0, { message: "YEARS OF EXPERIENCE cannot be negative" }),
    ["POSITIONS LOOKING"]: z.string().min(1, { message: "POSITIONS LOOKING is Required" }),
    ["SPECIALIZATION"]: z.string().min(1, { message: "SPECIALIZATION Required" }),
    ["RECRUITMENT METHODS"]: z.string().min(1, { message: "RECRUITMENT METHODS Required" }),
    ["MONTHLY RECRUITMENTS"]: z.number(),
})

export let RnpSchema = z.object({
    ["SOURCING METHODS"]: z.string().min(1, { message: "SOURCING METHODS Required" }),
    ["CANDIDATE EVALUATION CRITERIA"]: z.string().min(1, { message: "CANDIDATE EVALUATION CRITEIA Required" }),
    ["INTERVIEW METHODS"]: z.string().min(1, { message: "INTERVIEW METHODS Required" }),
    ["BACKGROUND CHECKS"]: z.string().min(1, { message: "BACKGROUND CHECKS Required" }),
    ["SKILLS ASSESSMENT METHODS"]: z.string().min(1, { message: "SKILL ASSESSMENT METHODS Required" }),
})

export let TntSchema = z.object({
    ["RECRUITMENT SOFTWARE AND TOOLS"]: z.string().min(1, { message: "RECRUITMENT SOFTWARE AND TOOLS Required" }),
    ["ATS FAMILIARITY"]: z.string().min(1, { message: "ATS FAMILIARITY Required" })
})

export let CncSchema = z.object({
    ["HIRING MANAGER COORDINATION"]: z.string().min(1, { message: "RECRUITMENT SOFTWARE AND TOOLS Required" }),
    ["CANDIDATE COMMUNICATION METHODS"]: z.string().min(1, { message: "ATS FAMILIARITY Required" })
})

export let MnsmSchema = z.object({
    ["RECRUITMENT SUCCESS MEASUREMENT"]: z.string().min(1, { message: "RECRUITMENT SUCCESS MEASUREMENT cannot be empty" }),
    ["KPI'S TRACKED"]: z.string().min(1, { message: "KPI'S TRACKED cannot be empty" })
})

export let CnsSchema = z.object({
    ["RECRUITMENT CHALLENGES"]: z.string().min(1, { message: "RECRUITMENT CHALLENGES cannot be empty" }),
    ["OVERCOMING STRATIGIES"]: z.string().min(1, { message: "OVERCOMING STRATIGIES cannot be empty" })
})

export let AcSchema = z.object({
    ["ADDITIOINAL COMMENT"]: z.string().min(1, { message: "ADDITIOINAL COMMENT cannot be empty" })
})

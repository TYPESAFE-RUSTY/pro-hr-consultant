export interface generalInfo {
    name: string,
    phone: string,
    email: string,
    address: string,
    location: string,
    experience: boolean,
    exp: { totalExp: string, annualSalary: string },
    availablity: string,
    position: string
}

export interface social {
    name: string,
    url: string
}

export interface summary {
    content: string,
    socials: social[]
}

export interface year {
    start: string,
    end?: string
}

export interface experience {
    year: year,
    position: string,
    company: string,
    description: string
}

export interface education {
    year: year,
    location: string,
    degree: string,
    university: string,
    description: string
}






// HELPERS
export const GeneralInformation: generalInfo = {
    name: '',
    phone: '',
    email: '',
    address: '',
    location: '',
    experience: true,
    exp: { totalExp: '', annualSalary: '' },
    availablity: '',
    position: ''
}

export const Summary: summary = {
    content: "",
    socials: []
}

export const Experience: experience = {
    year: {
        start: '',
        end: ''
    },
    position: '',
    company: '',
    description: ''
}

export const Education: education = {
    year: {
        start: '',
        end: ''
    },
    location: '',
    degree: '',
    university: '',
    description: ''
}

export const Languages: string[] = []

export const skills: string[] = []

export const Educations: education[] = []

export const Experiences: experience[] = []
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
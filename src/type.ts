export interface PersonData {
    dateOfBirth: Date
    country: Countries
    region: string | null;
    gender: Gender
}

export type JMBG = `${number}`

export enum Countries {
    Bosnia = "Bosnia and Herzegovina",
    NorthMacedonia = "North Macedonia",
    Slovenia = "Slovenia",
    Serbia = "Serbia",
    Unknown = "Unknown"
}

export type Gender = "Male" | "Female"


// export interface IBasicDetails {
//     bannerImg: string;
//     slogan: string;
//     aboutUs: string;
//     mission: string;
//     vision: string;
//     goal: string;
//     problem: string;
//     solution: string;
//     contactNumPh: string;
//     contactNumUs: string;
//     contactNumUk: string;
// }

export interface IBasicDetails {
    col_name: string;
    title: string;
    content: string;
}

export interface IPageDetails {
    id: number;
    title: string;
    img?: string;
    position?: string;
    location?: string;
    page_module: number;
    description: string;
}

export interface IDynamicFormData {
    id: number;
    title: string;
    description: string;
    img?: string;
    position?: string;
    location?: string;
}

export interface IHomePageData {
    basic_details: IBasicDetails[];
    goals: IDynamicFormData[];
    services: IDynamicFormData[];
    why_us: IDynamicFormData[];
    why_our_services: IDynamicFormData[];
}

export type IFetchAttributes = 'fetchGoals' | 'fetchServices' | 'fetchWhyUs' | 'fetchWhyOurServices' | 'fetchOurTeam' | 'fetchCareers';

export type IUpdateAttributes = 'updateGoals' | 'updateServices' | 'updateWhyUs' | 'updateWhyOurServices' | 'updateOurTeam' | 'updateCareers';

export type IPageModules = 'Goals' | 'Services' | 'WhyUs' | 'WhyOurServices' | 'OurTeam' | 'Careers';

export interface ILeads {
    id: number;
    name: string;
    email: string;
    contact_number: string;
    company_name: string;
}

export interface IEmails extends ILeads{
    subject: string;
    body: string;
    send_to: string;
}
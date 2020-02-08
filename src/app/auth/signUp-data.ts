export const SIGNUPWIZARD = [
    {
        "step1": {
            label: '',
            prompts: [
                {
                    id: "company_name",
                    stepLabel: "Company Name",
                    inputType: "text",
                }, {
                    id: "company_industry",
                    stepLabel: "Company Name",
                    inputType: "select",
                    options:[
                        "Business Administration",
                        "Construction Trades",
                        "Technology & Design"
                    ]
                }, {
                    id: "hiring_manager",
                    stepLabel: "Hiring Manager",
                    inputType: "text",
                },
                {
                    id: "company_address_one",
                    stepLabel: "Address",
                    inputType: "text",
                },
                {
                    id: "company_address_two",
                    stepLabel: "Address2",
                    inputType: "text",
                },
                {
                    id: "company_address_two",
                    stepLabel: "Address2",
                    inputType: "text",
                },
                {
                    id: "phone_number",
                    stepLabel: "Address2",
                    inputType: "text",
                }
            ]
        },
        "step2": {
            label: '',
            prompts: [
                {
                    id: "website",
                    stepLabel: "Business Website",
                    inputType: "text",
                }, {
                    id: "activelicense",
                    stepLabel: "Are you licensed or insured ?",
                    inputType: "select",
                    options: [
                        "Yes",
                        "No"
                    ],
                },
                {
                    id: "industry_certification",
                    stepLabel: "Address",
                    inputType: "text",
                    options: [
                        "NY : DBE",
                        "NY : MBE",
                        "NY : VOB",
                        "NY : WBE",
                        "NYS : DBE",
                        "NYS : MBE",
                        "NYS : VOB",
                        "NYS : WBE",
                        "PANYNJ : DBE",
                        "PANYNJ : MBE",
                        "PANYNJ : VOB",
                        "PANYNJ : WBE",
                    ]
                }
            ]
        },

    }
];

export const USERWIZARD = [
    {
        "step1": {
            label: '',
            prompts: [
                {
                    id: "first_name",
                    stepLabel: "First Name",
                    inputType: "text",
                },{
                    id: "middle_name",
                    stepLabel: "Middle Name",
                    inputType: "text",
                },{
                    id: "last_name",
                    stepLabel: "Last Name",
                    inputType: "text",
                }, 
                {
                    id: "home_address_line",
                    stepLabel: "Address",
                    inputType: "text",
                },
                {
                    id: "home_address_line2",
                    stepLabel: "Address2",
                    inputType: "text",
                },
                {
                    id: "City",
                    stepLabel: "city",
                    inputType: "text",
                },
                {
                    id: "State",
                    stepLabel: "State",
                    inputType: "text",
                },
                {
                    id: "Zip",
                    stepLabel: "zip",
                    inputType: "text",
                },
                {
                    id: "phone_number",
                    stepLabel: "Address2",
                    inputType: "text",
                }
            ]
        },
        "step2": {
            label: '',
            prompts: [
                {
                    id: "website",
                    stepLabel: "Business Website",
                    inputType: "text",
                }, {
                    id: "twitter_profile",
                    stepLabel: "Are you licensed or insured ?",
                    inputType: "text"
                }, {
                    id: "linkedin_profile",
                    stepLabel: "Are you licensed or insured ?",
                    inputType: "text"
                }, {
                    id: "facebook_profile",
                    stepLabel: "Are you licensed or insured ?",
                    inputType: "text"
                },{
                    id: "licenseIssuer",
                    stepLabel: "Enter License/Insurance",
                    inputType: "text"
                    
                },
                {
                    id: "industry_certification",
                    stepLabel: "Address",
                    inputType: "text",
                    options: [
                        "NY : DBE",
                        "NY : MBE",
                        "NY : VOB",
                        "NY : WBE",
                        "NYS : DBE",
                        "NYS : MBE",
                        "NYS : VOB",
                        "NYS : WBE",
                        "PANYNJ : DBE",
                        "PANYNJ : MBE",
                        "PANYNJ : VOB",
                        "PANYNJ : WBE",
                    ]
                }
            ]
        },

    }
]
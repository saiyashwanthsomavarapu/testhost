export interface FromFields {
        firstName: string;
        middleName?: string;
        lastName: string;
        title?: string;
        email: string;
        phone: string;
        ext: string;
        role: string;
        primaryContact: string;   
        webAccess: string;
        planNotification: string;

};
export const validationSchema:any = {
    personalInformation: [
        {
            name:"firstName",
            required: true,
            isError: false
        },
        {
            name:"middleName",
            reuired: false,
            isError: false
        },
        {
            name:"lastName",
            required: true,
            isError: false
        },
        {
            name:"title",
            required: false,
            isError: false
        },
        {
            name:"email",
            required: true,
            isError: false
        },
        {
            name:"phone",
            required: true,
            isError: false
        },
        {
            name:"ext",
            required: false,
            isError: false
        },
        {
            name: "role",
            required: true,
            isError: false
        },
        {
            name:"primaryContact",
            required: true,
            isError: false
        }
    ],
    webAccess:[
        {
            name: "webAccess",
            required: true
        }
    ],
    planNotification: [
        {
            name: 'planNotification',
            required: true
        }
    ]
}

export const breadCrumbs = [

    {
        label: "HOME",
        path: "/"
    },
    {
        label: "INTIATE SERVICE REQUEST ",
        path: "/conatct"
    },
    {
        label: "CONTACT CHANGE",
        path: "/contact"
    },
    {
        label:"PLAN SPONSOR CONTACT ",
        path:"/contact"
    }
];


export const steps = [
    'Personal <br/> Information',
    'Web <br /> Access',
    'Plan <br /> Notification'
];

export const StepHeading = [
    "Step1: Personal Information",
    "Step2: Contact Permissions",
    "Step3: Plan Notification"
];

export const ButtonNames = [
    "Web Access",
    "Plan Notification",
    "Save Changes"
]

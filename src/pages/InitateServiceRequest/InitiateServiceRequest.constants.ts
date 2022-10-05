import { default as ContactsIcon } from '../../assets/icons/ContactsIcon.svg';
import {default as ContridefbutionIcon} from '../../assets/icons/ContributionIcon.svg';
import {default as LoanIcon } from '../../assets/icons/LoanIcon.svg';
import {default as PlanDetailsIcon } from '../../assets/icons/PlanDetailsIcon.svg';
import {default as RolloverIcon } from '../../assets/icons/RolloverIcon.svg';
import {default as UnsureIcon } from '../../assets/icons/UnsureIcon.svg';

export const breadCrumbs = [

    {
        label: "HOME",
        path: "/rps-clienthub/"
    },
    {
        label: "INITIATE SERVICE REQUEST ",
        path: "/rps-clienthub/initiate-service-rquest"
    }
]

export const InitiateServiceRequestCardsData = [
    {
        type: 'CONTACT',
        header: 'contacts',
        path: '/rps-clienthub/initiate-service-request/contact-change',
        icons: ContactsIcon,
        description: 'Add or change your plan contacts, TPA, or Advisor.',
        draft: "",
        enable: true
    },
    {
        type: 'PLAN_DETAILS',
        header: "Plan Details",
        path: '/',
        icons: PlanDetailsIcon,
        description: "View or make changes to your retirement plan.",
        enable: false
    },
    {
        tyep: "CONTRIBUTION_AND_VESTING_PROVISIONS",
        header: "Contributiona and vesting provisions",
        path: "/",
        icons: ContridefbutionIcon,
        description: "View or make changes to your Contribution and Vesting Provisions.",
        enable: false
    },
    {
        tyep: "LOAN_AND_WITHDRWAL_PROVISIONS",
        header: "Loan and withdrawal provisions",
        path: "/",
        icons: LoanIcon,
        description: "View or make changes to your Loan and Withdrawal Provisions.",
        enable: true
    },
    {
        tyep: "AUTHORIZE_INCOMING_ROLLOVER",
        header: "Authorize Incoming Rollover",
        path: "/",
        icons: RolloverIcon,
        description: "Authorize an Incoming Rollover for a plan participant.",
        enable: true
    },
    {
        tyep: "UNSURE_WHERE_TO_START",
        header: "Unsure Where to start",
        path: "/",
        icons: UnsureIcon,
        description: "Let use help you find the service request needed to complete your request."
    }

] 

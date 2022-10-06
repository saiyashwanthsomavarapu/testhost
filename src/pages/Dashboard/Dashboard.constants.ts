import InitiateRequestIcon from '../../assets/icons/Hand.svg'
import DraftsIcon from '../../assets/icons/Draft.svg'
import SubmissionIcon from '../../assets/icons/Submit.svg'
import ApprovalIcon from '../../assets/icons/Approval.svg'

export const DashboadHeading = {
    heading: 'RPS Client hub',
    subheading: 'A & F Web TST A/C INNOVATION'
}

export const SelectOptionText = 'Please select an option below'
export const InstructionsLink= "https://pr.retire.americanfunds.com/account/online-forms-rkd.htm#/forms"
export const RequestCardsData = [
    
    {
        type: 'INITIATE_SERVICE_REQUEST',
        header: 'INITIATE SERVICE REQUEST',
        path: '/dashboard/initiate-service-request',
        icons: InitiateRequestIcon,
        description: 'is simply dummy text of the printing and typesetting industry.',
        draft: "",
        enable: true,
    },
    {

        type: 'APPROVAL_TASK',
        header: 'APPROVAL TASKS',
        path: '/rps-clienthub/approval-tasks',
        icons: ApprovalIcon,
        description: 'is simply dummy text of the printing and typesetting industry.',
        draft: '6 Open Tasks',
        enable: false,
    },
    {
        type: 'DRAFTS',
        header: 'DRAFTS',
        path: '/rps-clienthub/drafts',
        icons: DraftsIcon,
        description: 'is simply dummy text of the printing and typesetting industry.',
        draft: '10 Open Drafts',
        enable: false,
    },
    {
        type: 'SUBMITTED_SERVICE_REQUEST',
        header: 'SUBMITTED SERVICE REQUESTS',
        path: '/rps-clienthub/submitted-service-request',
        icons: SubmissionIcon,
        description: 'is simply dummy text of the printing and typesetting industry.',
        draft: '',
        enable: false,
    }
]

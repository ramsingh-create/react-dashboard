import * as Icons from 'lucide-react';

type IconKeys = keyof typeof Icons;

export type MenuItemType = {
    name: string;
    icon: IconKeys;
    path: string;
    subItems?: { name: string; path?: string; isExternalLink?: boolean }[];
};

export const menuItems: MenuItemType[] = [
    {
        name: "Dashboard",
        icon: "Home",
        path: "/dashboard",
        subItems: [
            { name: "Home", path: "/dashboard/home" },
            { name: "Verify", path: "/verify" },
        ],
    },
    {
        name: "KYC",
        icon: "Home",
        path: "/kyc",
        subItems: [
            { name: "Maker Dashboard", path: "maker-dashboard-uat", isExternalLink: true },
            { name: "Checker Dashboard", path: "checker-dashboard-uat", isExternalLink: true },
        ],
    },
    {
        name: "Call Center",
        icon: "Home",
        path: "/callCenter",
        subItems: [
            { name: "Dashboard", path: "CallCenterUat", isExternalLink: true },
            { name: "Summary", path: "summary-dashboard-uat", isExternalLink: true },
        ],
    },
    {
        name: "Credit",
        icon: "FileText",
        path: "/credit",
        subItems: [
            { name: "Credit Dashboard", path: "credit-dashboard-uat", isExternalLink: true },
            { name: "Credit Report", path: "/credit/report" },
            { name: "Tally", path: "/credit/tally" },
            { name: "Credit Jobs", path: "/credit/jobs" },
        ],
    },
    {
        name: "Onboarding",
        icon: "Home",
        path: "/onboarding",
        subItems: [
            { name: "Customer List", path: "onboarding-uat", isExternalLink: true },
        ],
    },
    {
        name: "Lead Dashboard",
        icon: "Home",
        path: "/leadDashboard",
        subItems: [
            { name: "Lead Bulk Upload", path: "/dashboard/leadBulkUpload" },
        ],
    },
    {
        name: "Loan Application",
        icon: "Home",
        path: "/loanApplication",
        subItems: [
            { name: "Disbursment", path: "/dashboard/disbursment" },
            { name: "Refund", path: "/dashboard/refund" },
            { name: "Mandate Order", path: "/dashboard/mandate" },
            { name: "Uber Order", path: "/dashboard/uber" },
        ],
    },
    {
        name: "Enkash",
        icon: "Home",
        path: "/enkash",
        subItems: [
            { name: "Enkash Transaction", path: "/dashboard/ransaction" },
            { name: "Enkash Statement", path: "/dashboard/statement" },
            { name: "Repayment Status", path: "/dashboard/repayment" },
        ],
    },
    {
        name: "Upload",
        icon: "Home",
        path: "/upload",
        subItems: [
            { name: "Uber Payment Data", path: "/dashboard/home" },
            { name: "Bulk Repayment Data", path: "/dashboard/verify" },
            { name: "Generate Repayment", path: "/dashboard/verify" },
            { name: "Invoice", path: "/dashboard/verify" },
            { name: "Bulk Borrower Creation", path: "/dashboard/verify" },
            { name: "Enkash Trans Recon", path: "/dashboard/verify" },
        ],
    },
    {
        name: "Manage",
        icon: "Home",
        path: "/manage",
        subItems: [
            { name: "ADD IFSC", path: "/dashboard/addIFSC" },
        ],
    },
    {
        name: "Admin",
        icon: "Home",
        path: "/admin",
        subItems: [
            { name: "Program Master", path: "programMaster-uat", isExternalLink: true },
            { name: "Financing Plan Master", path: "programMaster-uat", isExternalLink: true },
            { name: "User List", path: "/dashboard/verify" },
            { name: "Add Manager", path: "/dashboard/verify" },
            { name: "Deactivate User", path: "/dashboard/verify" },
        ],
    },
    {
        name: "Supplier SmartDash",
        icon: "Home",
        path: "/supplier",
        subItems: [
            { name: "My Profile", path: "/dashboard/home" },
            { name: "Dealer List", path: "/dashboard/verify" },
            { name: "Dashboards", path: "/dashboard/verify" },
            { name: "Reports", path: "/dashboard/verify" },
        ],
    },
    {
        name: "Operations",
        icon: "Home",
        path: "/operations",
        subItems: [
            { name: "Dashboard", path: "operations-dashboard-uat", isExternalLink: true },
            { name: "Supplier List", path: "/dashboard/verify" },
            { name: "Operation Jobs", path: "/dashboard/verify" },
        ],
    },
    {
        name: "Finance SmartDash",
        icon: "Home",
        path: "/finance",
        subItems: [
            { name: "Report", path: "/dashboard" },
            { name: "Dashboard", path: "accountsUat", isExternalLink: true },
        ],
    },
];

export const Supplier: MenuItemType[] = [
    {
        name: "Anchor Smartdash",
        icon: "Home",
        path: "/anchor-dashboard",
        subItems: [
            {
                name: "My Profile",
            },
            {
                name: "Dealer List",
            },
            {
                name: "Anchor Jobs",
            },
            {
                name: "Anchor Dashboard",
            },
            {
                name: "Anchor Report",
            }
        ]
    }
];

export const Ugro: MenuItemType[] = [
    {
        name: "Lender",
        icon: "HomeIcon",
        path: 'ugro',
        subItems: [
            {
                path: "/ugro",
                name: "UGRO",
            },

        ],
    },
];

export const JioMartList: MenuItemType[] = [
    {
        path: "",
        name: "Partner Smartdash",
        icon: "HomeIcon",
        subItems: [
            {
                path: "/PartnerRetailList",
                name: "Dealer List",
            },
            {
                path: "/PartnerOrder",
                name: "Orders",  
            },
            {
                path: "/PartnerInvoices",
                name: "Invoices",
            },
            {
                path: "/PartnerRefund",
                name: "Refunds",
            }
            
        ]
    }
]
export const Credit = menuItems.filter(item => ['Credit', 'Call Center'].includes(item.name)); // in Call Center only Dashboard should be there
export const CreditAnalyst = menuItems.filter(item => ['Credit', 'Enkash', 'Call Center'].includes(item.name)); // in Call Center only Dashboard should be there
export const KycList = menuItems.filter(item => ['KYC', 'Call Center'].includes(item.name)); // in Call Center only Dashboard should be there
export const OperationKyc = menuItems.filter(item => ['Operations', 'Call Center', "Loan Application"].includes(item.name)); // Checker needs to be added
export const OperationList = menuItems.filter(item => ['Operations', 'Call Center', "Loan Application"].includes(item.name));
export const Onboarding = menuItems.filter(item => ['Call Center', "Onboarding"].includes(item.name)); // summary dashboard needs to be added
export const Sales = menuItems.filter(item => ['Call Center', "Onboarding"].includes(item.name)); // summary dashboard needs to be added
export const LoanOps = menuItems.filter(item => ['Finance SmartDash', "Operations", "Loan Application", "Manage"].includes(item.name)); // few subItems needs to be sliced
export const CallCenter = menuItems.filter(item => ["Call Center"].includes(item.name));
export const RiskManage = menuItems.filter(item => ["Credit", "KYC", "Call Center", "Manage"].includes(item.name));
export const Finance = menuItems.filter(item => ["Call Center", "Finance SmartDash", 'Upload'].includes(item.name)); //need to add few

const roleGroups = [
    { roles: [11, 12], menu: Credit },
    { roles: [10], menu: CreditAnalyst },
    { roles: [8, 9], menu: KycList },
    { roles: [13], menu: OperationKyc },
    { roles: [14], menu: OperationList },
    { roles: [3], menu: Onboarding },
    { roles: [25], menu: Supplier },
    { roles: [6], menu: Ugro },
    { roles: [4], menu: JioMartList },
    { roles: [27, 28], menu: LoanOps },
    { roles: [21, 22, 23], menu: Sales },
    { roles: [17, 18, 19, 20], menu: CallCenter },
    { roles: [30], menu: RiskManage },
    { roles: [15, 16, 29], menu: Finance },
    { roles: [1], menu: menuItems },
];

export const getNavBarItems = (roleID: number) => {

    for (const group of roleGroups) {
        if (group.roles.includes(roleID)) {
            return group.menu;
        }
    }

    return Sales;
}


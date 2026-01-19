import * as Icons from 'lucide-react';
import { LucideProps } from 'lucide-react';

type IconKeys = keyof typeof Icons;

export const getLucideIcon = (iconName: IconKeys, props: LucideProps) => {
    const IconComponent = Icons[iconName] as React.ElementType;
    if (!IconComponent) {
        throw new Error(`Icon "${iconName}" does not exist in lucide-react library.`);
    }
    return <IconComponent {...props} />;
};

export function getDifferenceInDays(date1: string, date2: string) {
    // Convert both dates to timestamps
    const timestamp1 = new Date(date1).getTime();
    const timestamp2 = new Date(date2).getTime();

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = Math.abs(timestamp2 - timestamp1);

    // Calculate the difference in days, hours, and minutes
    const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );

    // Format the result as "X Day(s) HH:MM hrs"
    const formattedDifference = `${days} Day${days !== 1 ? "s" : ""} ${String(
        hours
    ).padStart(2, "0")}:${String(minutes).padStart(2, "0")} hrs`;

    return formattedDifference;
}

export function amountFormatter(amount: number): string {
    if (amount) {
        return `${(Math.floor(amount / 100000)).toLocaleString('en-IN')}L`
    }
    else {
        return "__ __";
    }
}
interface FeatureProps {
    image: string;
    title: string;
    description: string;
}

interface StoryProps {
    image: string;
    title: string;
    author: string;
}

interface TierProps {
    title: string;
    description: string;
    price: {
        monthly: string;
        yearly: string;
    };
}

type CompareItemProps = [string, boolean, boolean, boolean];

type PricingPeriod = "Monthly" | "Yearly";

type NavItem = { title: string; href: string };

export type {
    FeatureProps,
    StoryProps,
    TierProps,
    CompareItemProps,
    PricingPeriod,
    NavItem,
};

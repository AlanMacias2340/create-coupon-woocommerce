export type CouponData = {
    code: string;
    amount: string;
    discount_type: "percent" | "fixed_cart" | "fixed_product";
    description: string;
    individual_use: boolean;
    usage_limit: number;
    usage_limit_per_user: number;
    date_expires: string;
    limit_usage_to_x_items: number;
};
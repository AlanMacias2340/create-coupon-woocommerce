import { createCoupon } from "@/lib/create-coupon/create-coupon";

type CouponData = {
    code: string;
    amount: string;
    discount_type: "percent" | "fixed_cart" | "fixed_product";
    description: string;
    individual_use: boolean;
    usage_limit: number;
    usage_limit_per_user: number;
    date_expires: string;
};


export function CreateCouponSet(data: CouponData, value: number){
    let codeNumber = "";
    for (let i = 1; i <= value; i++){
        if (i < 10){
            codeNumber = `${data.code}00${i}`;
        }
        if (i >= 10 && i < 100){
            codeNumber = `${data.code}0${i}`;
        }
        if (i >= 100 && i < 1000){
            codeNumber = `${data.code}${i}`;
        }
        const dataCoupon = {
            ...data,
            code: codeNumber,
        };
        createCoupon(dataCoupon);
    }
}
import { createCoupon } from "@/lib/create-coupon/create-coupon";
import { CouponData } from "@/types/types";

export async function CreateCouponSet(data: CouponData, value: number, changeStatusSend: (status: boolean) => void) {
  changeStatusSend(true);

  let getText = {};
  let codeNumber = "";
  for (let i = 1; i <= value; i++) {
    if (i < 10) {
      codeNumber = `${data.code}00${i}`;
    }
    if (i >= 10 && i < 100) {
      codeNumber = `${data.code}0${i}`;
    }
    if (i >= 100 && i < 1000) {
      codeNumber = `${data.code}${i}`;
    }
    const dataCoupon = {
      ...data,
      code: codeNumber,
    };
    getText = await createCoupon({data: dataCoupon});
  }
  
  changeStatusSend(false);
  return getText;
}

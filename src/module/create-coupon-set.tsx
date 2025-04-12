import React from "react";
import { FormCouponSet } from "@/pages/form-coupon-set";

type Props = {};

function CreateCouponSet({}: Props) {
  return (
    <div className="bg-slate-800 mt-1 mb-1 rounded-xl p-5 w-[800px] h-[500px] overflow-hidden">
      <FormCouponSet />
    </div>
  );
}

export default CreateCouponSet;

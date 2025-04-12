import React, { useEffect } from "react";
import { FormCoupon } from "@/components/form-coupon";

type Props = {};

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

export function FormCouponSet({}: Props) {
  const [dataCoupon, setDataCoupon] = React.useState<CouponData>(
    {} as CouponData
  );
  const [amount, setAmount] = React.useState(1);
  const [codeCoupon, setCodeCoupon] = React.useState("");

  const getDataCoupon = (data: any) => {
    setDataCoupon(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value < 100) {
      setAmount(value);
    }
  };

  const handleChangeCouponCode = (value: string) =>{
    setCodeCoupon(value);
  }

  useEffect(() => {
    if (Object.keys(dataCoupon).length > 0) {
      console.log("Data Coupon Set: ", dataCoupon);
    }
  }, [dataCoupon]);

  return (
    <div className="">
      <h1 className="w-full flex justify-center text-2xl font-bold mb-4 text-white">
        Creación de conjunto de cupones
      </h1>
      <div className="flex flex-row gap-4 w-full mb-4 items-center justify-between">
        <div>
          <label htmlFor="" className="ml-4 text-white">
            Cantidad
          </label>
          <input
            type="number"
            className="border m-4 w-auto text-white pl-2 pr-2 pt-1 pb-1"
            value={amount}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="" className="mr-4 text-white">
          <p>Código cupón: {codeCoupon}001</p>
        </label>
      </div>
      <FormCoupon functionOnSubmit={getDataCoupon} functionChangeCodeCoupon={handleChangeCouponCode}/>
    </div>
  );
}

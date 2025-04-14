import React, { useEffect } from "react";
import { FormCoupon } from "@/components/form-coupon";
import { ButtonOption } from "@/components/button-option";
import { useNavigate } from "react-router-dom";
import { createCoupon } from "@/lib/create-coupon/create-coupon";

type Props = {};

function CreateCoupon({}: Props) {
  const navigate = useNavigate();
  const [dataCoupon, setDataCoupon] = React.useState({});
  const [codeCoupon, setCodeCoupon] = React.useState("");

  const handleClick = () => {
    navigate("/create/coupon/set");
  };

  const handleChangeCouponCode = (value: string) =>{
    setCodeCoupon(value);
  }

  const getDataCoupon = (data: any) => {
    setDataCoupon(data);
  };

  useEffect(() => {
    if (Object.keys(dataCoupon).length > 0) {
      createCoupon(dataCoupon);
    }
  }, [dataCoupon]);

  return (
    <div className="bg-slate-800 mt-1 mb-1 rounded-xl p-5 w-auto h-auto overflow-hidden">
      <h1 className="w-full flex justify-center text-2xl font-bold mb-2 text-white">
        <span className="text-2xl font-bold text-white">Crear cupones</span>
      </h1>
      <div className="flex flex-row gap-2 w-full items-center text-white justify-end">
        <label htmlFor="" className="ml-4 text-white">
          Código del cupón:
        </label>
        <p className="w-[300px] h-auto bg-red-500 overflow-x-auto overflow-y-hidden mr-4 pl-2 pr-2 p-1">
          {codeCoupon}
        </p>
      </div>
      <FormCoupon functionOnSubmit={getDataCoupon} functionChangeCodeCoupon={handleChangeCouponCode}/>
      <div className="pl-4 pr-4 w-full flex flex-col">
        <ButtonOption textButton="Crear set cupones" handleClick={handleClick} />
      </div>
    </div>
  );
}

export default CreateCoupon;

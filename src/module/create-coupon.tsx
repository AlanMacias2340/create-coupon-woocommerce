import React, { useEffect } from "react";
import { FormCoupon } from "@/components/form-coupon";
import { ButtonOption } from "@/components/button-option";
import { useNavigate } from "react-router-dom";
import {createCoupon} from "@/lib/create-coupon/create-coupon"

type Props = {};

function CreateCoupon({}: Props) {
  const navigate = useNavigate();
  const [dataCoupon, setDataCoupon] = React.useState({});

  const handleClick = () => {
    navigate("/create/coupon/set");
  };

  const getDataCoupon = (data: any) => {
    setDataCoupon(data);
  };

  useEffect(() => {
    if (Object.keys(dataCoupon).length > 0) {
      createCoupon(dataCoupon);
    }
  }, [dataCoupon]);

  return (
    <div className="bg-slate-800 mt-1 mb-1 rounded-xl p-5 w-[800px] h-[500px] overflow-hidden">
      <FormCoupon functionOnSubmit={getDataCoupon}/>
      <ButtonOption textButton="Crear cupones" handleClick={handleClick} />
    </div>
  );
}

export default CreateCoupon;

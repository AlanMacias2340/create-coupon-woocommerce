import React, { useEffect } from "react";
import { FormCoupon } from "@/components/form-coupon";
import { CreateCouponSet } from "@/lib/create-coupon/create-coupon-set";
import { CouponData } from "@/types/types";
import { LoadingPage } from "@/components/load-create-coupon";

type Props = {};

export function FormCouponSet({}: Props) {
  const [dataCoupon, setDataCoupon] = React.useState<CouponData>(
    {} as CouponData
  );
  const [amount, setAmount] = React.useState(1);
  const [codeCoupon, setCodeCoupon] = React.useState("");
  const [textStatus, setTextStatus] = React.useState(
    "No se ha creado ningún cupón"
  );
  const [statusSend, setStatusSend] = React.useState(false);

  let getText = {};

  const changeTextStatus = (text: any) => {
    setTextStatus(text);
  };

  const changeStatusSend = (status: boolean) => {
    setStatusSend(status);
  };

  const getDataCoupon = (data: any) => {
    setDataCoupon(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= 100) {
      setAmount(value);
    }
  };

  const handleChangeCouponCode = (value: string) => {
    setCodeCoupon(value);
  };

  const functionProcessCoupon = async () => {
    getText = await CreateCouponSet(dataCoupon, amount, changeStatusSend);
    changeTextStatus(getText);
  };

  useEffect(() => {
    if (Object.keys(dataCoupon).length > 0) {
      functionProcessCoupon();
    }
  }, [dataCoupon]);

  return (
    <>
      <div className="">
        <h1 className="w-full flex justify-center text-2xl font-bold mb-4 text-white">
          Creación de conjunto de cupones
        </h1>
        <div className="w-full pr-4 pl-4 flex justify-start items-center text-white mt-2 mb-2">
          <p>Estado: {textStatus}</p>
        </div>
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
        <FormCoupon
          functionOnSubmit={getDataCoupon}
          functionChangeCodeCoupon={handleChangeCouponCode}
        />
      </div>
      {statusSend && <LoadingPage textLoad="Creando Cupón" />}
    </>
  );
}

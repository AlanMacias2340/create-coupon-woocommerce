import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { ButtonOption } from "./button-option";
import { CouponData } from "@/types/types";

type Props = {
  functionOnSubmit?: (data: CouponData) => void;
  functionChangeCodeCoupon?: (code: string) => void;
};

export function FormCoupon({
  functionOnSubmit,
  functionChangeCodeCoupon,
}: Props) {
  const { register, handleSubmit } = useForm<CouponData>();
  const [codeCoupon, setCodeCoupon] = useState("");

  const onSubmit: SubmitHandler<CouponData> = (data) => {
    if (functionOnSubmit) {
      functionOnSubmit(data);
    }
  };

  const handleChangeCouponCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCodeCoupon(value);
  };

  useEffect(() => {
    if (functionChangeCodeCoupon) {
      functionChangeCodeCoupon(codeCoupon);
    }
  }, [codeCoupon]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full p-4 text-white"
    >
      <div className="flex flex-row gap-4 w-full mb-4 gap-x-10">
        <div className="flex flex-col gap-4 w-full">
          <div className="">
            Código del cupón
            <input
              {...register("code", { required: true })}
              className="border p-2 w-full"
              value={codeCoupon}
              onChange={handleChangeCouponCode}
            />
          </div>

          <div>
            Monto del descuento
            <input
              {...register("amount", { required: true })}
              className="border p-2 w-full"
            />
          </div>

          <div>
            Tipo de descuento
            <select
              {...register("discount_type", { required: true })}
              className="border p-2 w-full"
            >
              <option value="percent" className="text-slate-700">
                Porcentaje
              </option>
              <option value="fixed_cart" className="text-slate-700">
                Fijo en el carrito
              </option>
              <option value="fixed_product" className="text-slate-700">
                Fijo por producto
              </option>
            </select>
          </div>

          <div>
            Descripción
            <input {...register("description")} className="border p-2 w-full" />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full justify-end">
          <div>
            Límite de uso por producto
            <input
              {...register("limit_usage_to_x_items")}
              className="border p-2 w-full"
            />
          </div>

          <div>
            Límite de uso total
            <input
              type="number"
              {...register("usage_limit")}
              className="border p-2 w-full"
            />
          </div>

          <div>
            Límite de uso por usuario
            <input
              type="number"
              {...register("usage_limit_per_user")}
              className="border p-2 w-full"
            />
          </div>

          <div>
            Fecha de expiración
            <input
              type="date"
              {...register("date_expires")}
              className="border p-2 w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center justify-start gap-2 h-[65.6px]">
            <input type="checkbox" {...register("individual_use")} />
            Uso individual
          </div>
          <div className="flex items-center justify-start gap-2 h-[65.6px]">
            <input type="checkbox" {...register("exclude_sale_items")} />
            Excluir artículos rebajados
          </div>
        </div>
      </div>
      <ButtonOption textButton="Crear cupón" />
    </form>
  );
}

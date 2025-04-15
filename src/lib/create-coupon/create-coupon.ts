import axios from "axios";
import { Base64 } from "js-base64"; // Install this if needed: npm install base-64

const consumerKey = import.meta.env.VITE_KEY_CONSUMER;
const consumerSecret = import.meta.env.VITE_SECRET_CONSUMER;

const auth = "Basic " + Base64.encode(`${consumerKey}:${consumerSecret}`);

type Props = {
  data: any;
  setStatusSend?: (status: boolean) => void;
}

export const createCoupon = async ({data, setStatusSend}: Props) => {
  try {
    if (setStatusSend) {
      setStatusSend(true);
    }

    await axios.post(
      import.meta.env.VITE_URL + "/wp-json/wc/v3/coupons",
      {
        code: data.code,
        discount_type: data.discount_type,
        amount: data.amount,
        individual_use: data.individual_use,
        description: data.description,
        usage_limit: data.usage_limit,
        usage_limit_per_user: data.usage_limit_per_user,
        date_expires: data.date_expires,
        limit_usage_to_x_items: data.limit_usage_to_x_items,
        exclude_sale_items: data.exclude_sale_items,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
      }
    );
    if (setStatusSend) {
      setStatusSend(false);
    }
    return "Proceso completado con éxito";
  } catch (error) {
    if (setStatusSend) {
      setStatusSend(false);
    }
    return "Error al crear el cupón. " + "El cupón ya existe o no se ha podido crear";
  }
};

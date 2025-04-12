import axios from 'axios';
import {Base64} from 'js-base64'; // Install this if needed: npm install base-64

const consumerKey = import.meta.env.VITE_KEY_CONSUMER;
const consumerSecret = import.meta.env.VITE_SECRET_CONSUMER;

const auth = 'Basic ' + Base64.encode(`${consumerKey}:${consumerSecret}`);

export const createCoupon = async (data: any) => {
  try {
    const response = await axios.post(
      import.meta.env.VITE_URL + '/wp-json/wc/v3/coupons',
      {
        code: data.code,
        discount_type: data.discount_type,
        amount: data.amount,
        individual_use: data.individual_use,
        description: data.description,
        usage_limit: data.usage_limit,
        usage_limit_per_user: data.usage_limit_per_user,
        date_expires: data.date_expires,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: auth,
        },
      }
    );

    console.log('Coupon created:', response.data);
  } catch (error) {
    console.error('Error creating coupon:', error);
  }
};
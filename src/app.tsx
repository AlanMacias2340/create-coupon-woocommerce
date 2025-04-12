import React from "react";
import CreateCoupon from "./module/create-coupon.tsx";
import CreateCouponSet from "./module/create-coupon-set.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


type Props = {};

function App({}: Props) {
  return (
    <div className="w-dvw h-dvh overflow-y-auto flex justify-center items-center bg-slate-900">
      <Router>
        <Routes>
          <Route path="/" element={<CreateCoupon />} />
          <Route path="/create/coupon/set" element={<CreateCouponSet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

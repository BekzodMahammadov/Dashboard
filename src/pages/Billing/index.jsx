import React from "react";
import Head from "../../components/Billing/Head";
import BillinIformation from "../../components/Billing/Information/BillinIformation";
import Transaction from "../../components/Billing/Information/Transaction";
import Footer from "../../components/Footer";

export default () => {
  return (
    <div>
      <Head />
      <div className="mt-[20px] billiing_column lg:flex gap-[20px] px-[20px] md:px-[40px]">
        <div className="lg:w-[60%] md:w-[50%] w-[100%]">
          <BillinIformation />
        </div>
        <div className="lg:w-[40%] md:w-[50%] w-[100%]">
          <Transaction />
        </div>
      </div>
      <Footer />
    </div>
  );
};

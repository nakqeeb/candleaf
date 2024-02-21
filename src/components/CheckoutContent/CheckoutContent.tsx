import { useState } from "react";
import "./CheckoutContent.css";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutForm from "./CheckoutForm";
import CheckoutCostInfo from "./CheckoutCostInfo";

const CheckoutContent = () => {
  const [step, setStep] = useState<number>(0);
  const [confirmed, setConfirmed] = useState<boolean>(false);
  return (
    <div className="checkout">
      <div className="left-half">
        <CheckoutHeader step={step} />
        <CheckoutForm
          paymentConfiremd={confirmed}
          onChangeStep={(curStep: any) => setStep(curStep)}
          onSubmit={() => {
            console.log("submitted");
            setConfirmed(true);
          }}
          step={step}
        />
      </div>
      <div className="right-half">
        <CheckoutCostInfo paymentConfiremd={confirmed} step={step} />
      </div>
    </div>
  );
};

export default CheckoutContent;

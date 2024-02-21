import { useState } from "react";
import "./CheckoutContent.css";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutForm from "./CheckoutForm";
import CheckoutCostInfo from "./CheckoutCostInfo";

const CheckoutContent = () => {
  const [step, setStep] = useState<number>(0);
  return (
    <div className="checkout">
      <div className="left-half">
        <CheckoutHeader step={step} />
        <CheckoutForm
          onChangeStep={(curStep: any) => setStep(curStep)}
          onSubmit={() => {
            console.log("submitted");
          }}
          step={step}
        />
      </div>
      <div className="right-half">
        <CheckoutCostInfo step={step} />
      </div>
    </div>
  );
};

export default CheckoutContent;

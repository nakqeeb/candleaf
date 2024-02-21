import { FC, useEffect, useState } from "react";
import CustomLink from "../../shared/components/UIElements/CustomLink";
import "./CheckoutFooter.css";
import CustomButton from "../../shared/components/UIElements/CustomButton";
import { useNavigate } from "react-router-dom";

const CheckoutFooter: FC<{ step: number; onChangeStep?: any | undefined }> = ({
  step,
  onChangeStep,
}) => {
  const [currentStep, setCurrentStep] = useState<number>();
  const linkNames = ["Back to cart", "Back to details", "Back to shipping"];
  const btnNames = ["Go to shipping", "Go to payment", "Pay now"];
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentStep(step);
  }, [onChangeStep, step]);
  return (
    <div className="checkout-footer">
      {linkNames.map(
        (_, index) =>
          currentStep === index && (
            <>
              <CustomLink
                onClick={() => {
                  if (currentStep === 0) {
                    navigate(-1); // navigate back
                  } else {
                    setCurrentStep((prev) => onChangeStep(prev! - 1));
                  }
                }}
                name={linkNames[index]}
              />
              <CustomButton
                type="submit"
                className="checkout-btn"
                name={btnNames[index]}
                onClick={() => {
                  if (currentStep === 2) {
                    return;
                  }
                  setCurrentStep((prev) => onChangeStep(prev! + 1));
                  // onChangeStep(currentStep);
                }}
              />
            </>
          )
      )}
    </div>
  );
};

export default CheckoutFooter;

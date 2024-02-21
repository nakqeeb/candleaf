import { FC, useEffect, useRef, useState } from "react";
import CustomInput from "../../shared/components/UIElements/CustomInput";
import CheckoutFooter from "./CheckoutFooter";
import "./CheckoutForm.css";
import CustomLink from "../../shared/components/UIElements/CustomLink";

interface FormData {
  email: string;
  fname: string;
  lname: string;
  address_number: string;
  shipping_note: string;
  city: string;
  postal_code: string;
  province: string;
  country: string;
  save_info: boolean;
}
const CheckoutForm: FC<{
  step: number;
  onChangeStep?: any | undefined;
  onSubmit?: any | undefined;
}> = ({ step, onChangeStep, onSubmit }) => {
  const [email, setEmail] = useState<string>();
  const [inputValues, setInputValues] = useState<FormData>();
  const [currentStep, setCurrentStep] = useState<number>();
  const emailRef = useRef();
  useEffect(() => {
    setCurrentStep(step);
    console.log(inputValues);
  }, [inputValues, step]);
  return (
    <form
      className="checkout-form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target);
        onSubmit();
      }}
    >
      <div>
        {/* Details */}
        {currentStep === 0 && (
          <>
            <div className="contact">
              <h2>Contact</h2>
              <CustomInput
                type="email"
                value={inputValues?.email}
                name="email"
                className="custom-input"
                placeholder="Email or mobile phone number"
                onChange={(e: any) => {
                  // setCurrentStep((prev) => prev! + 1);
                  //setEmail(e.target.value);
                  setInputValues({
                    ...inputValues!,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="shipping-address">
              <h2>Shipping Address</h2>
              <div className="customer-name">
                <CustomInput
                  className="custom-input"
                  value={inputValues?.fname}
                  name="fname"
                  placeholder="First Name"
                  onChange={(e: any) => {
                    // setCurrentStep((prev) => prev! + 1);
                    //setEmail(e.target.value);
                    setInputValues({
                      ...inputValues!,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                <CustomInput
                  className="custom-input"
                  value={inputValues?.lname}
                  name="lname"
                  placeholder="Second Name"
                  onChange={(e: any) => {
                    // setCurrentStep((prev) => prev! + 1);
                    //setEmail(e.target.value);
                    setInputValues({
                      ...inputValues!,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
              <CustomInput
                className="custom-input"
                placeholder="Address and Number"
                value={inputValues?.address_number}
                name="address_number"
                onChange={(e: any) => {
                  // setCurrentStep((prev) => prev! + 1);
                  //setEmail(e.target.value);
                  setInputValues({
                    ...inputValues!,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <CustomInput
                className="custom-input"
                placeholder="Shipping note (optional)"
                value={inputValues?.shipping_note}
                name="shipping_note"
                onChange={(e: any) => {
                  // setCurrentStep((prev) => prev! + 1);
                  //setEmail(e.target.value);
                  setInputValues({
                    ...inputValues!,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <div className="city-info">
                <CustomInput
                  className="custom-input"
                  value={inputValues?.city}
                  name="city"
                  placeholder="City"
                  onChange={(e: any) => {
                    // setCurrentStep((prev) => prev! + 1);
                    //setEmail(e.target.value);
                    setInputValues({
                      ...inputValues!,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                <CustomInput
                  className="custom-input"
                  value={inputValues?.postal_code}
                  name="postal_code"
                  placeholder="Postal Code"
                  onChange={(e: any) => {
                    // setCurrentStep((prev) => prev! + 1);
                    //setEmail(e.target.value);
                    setInputValues({
                      ...inputValues!,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                <CustomInput
                  className="custom-input"
                  value={inputValues?.province}
                  name="province"
                  placeholder="Province"
                  onChange={(e: any) => {
                    // setCurrentStep((prev) => prev! + 1);
                    //setEmail(e.target.value);
                    setInputValues({
                      ...inputValues!,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
              <CustomInput
                className="custom-input"
                placeholder="Country/Region"
                value={inputValues?.country}
                name="country"
                onChange={(e: any) => {
                  // setCurrentStep((prev) => prev! + 1);
                  //setEmail(e.target.value);
                  setInputValues({
                    ...inputValues!,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <label className="check-box">
                <input
                  type="checkbox"
                  checked={inputValues?.save_info}
                  name="save_info"
                  onChange={(e: any) => {
                    // setCurrentStep((prev) => prev! + 1);
                    //setEmail(e.target.value);
                    setInputValues({
                      ...inputValues!,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                Save this informations for a future fast checkout
              </label>
            </div>
          </>
        )}

        {/* Shipping */}
        {currentStep === 1 && (
          <>
            <div className="shipping">
              <div className="content">
                <div className="content-info first-content">
                  <p>
                    <span>Contact</span> joe.spagnuolo@uxbly.com
                  </p>
                  <CustomLink
                    className={"edit-btn"}
                    name="Edit"
                    onClick={() => {
                      //setCurrentStep(0);
                      //onChangeStep(currentStep)
                      setCurrentStep((prev) => onChangeStep(prev! - 1));
                    }}
                  />
                </div>
                <div className="content-info last-content">
                  <p>
                    <span>Ship to</span> Via Firenze 23, 92023, Campobello di
                    Licata AG, Italia
                  </p>
                  <CustomLink
                    className={"edit-btn"}
                    name="Edit"
                    onClick={() => {
                      //setCurrentStep(0);
                      //onChangeStep(currentStep)
                      setCurrentStep((prev) => onChangeStep(prev! - 1));
                    }}
                  />
                </div>
              </div>
              <div className="shipping-method">
                <h2>Shipping method</h2>
                <div className="content">
                  <div className="content-info">
                    <label className="radio-btn">
                      <input type="radio" name="" id="" /> Standard Shipping
                    </label>
                    <p style={{ fontWeight: "bold" }}>Free</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Payment */}
        {currentStep === 2 && (
          <div className="payment">
            <div className="content">
              <div className="content-info first-content">
                <p>
                  <span>Contact</span> joe.spagnuolo@uxbly.com
                </p>
                <CustomLink className={"edit-btn"} name="Edit" />
              </div>
              <div className="content-info first-content">
                <p>
                  <span>Ship to</span> Via Firenze 23, 92023, Campobello di
                  Licata AG, Italia
                </p>
                <CustomLink className={"edit-btn"} name="Edit" />
              </div>
              <div className="content-info last-content">
                <p>
                  <span>Ship to</span> Standard Shipping - <span>FREE</span>
                </p>
                <CustomLink className={"edit-btn"} name="Edit" />
              </div>
            </div>
          </div>
        )}
      </div>

      <CheckoutFooter
        onChangeStep={(curStep: any) => {
          setCurrentStep((prev) => prev! + 1);
          onChangeStep(curStep);
        }}
        step={currentStep!}
      />
    </form>
  );
};

export default CheckoutForm;

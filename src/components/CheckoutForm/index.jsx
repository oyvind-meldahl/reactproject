import { StyledCheckoutForm } from "../../styles/components/CheckoutForm.styles";
import PrimaryButton from "../PrimaryButton";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useProductsStore } from "../../utils/stateManagement/dataManagement";
import { shallow } from "zustand/shallow";

//used for credit card validation
const date = new Date();
const year = date.getFullYear().toString().slice(-2);
const currentYear = Number(year);
const expiryYear = Number(currentYear) + 3;

const schema = yup
  .object({
    fullName: yup
      .string()
      .trim()
      .min(3, "Must be at least 3 characters long")
      .required(),
    address: yup
      .string()
      .trim()
      .min(3, "Must be at least 3 characters long")
      .required(),
    city: yup
      .string()
      .trim()
      .matches(/^[a-zA-Z\s]*$/, "Must not contain any numbers or symbols")
      .min(3, "Must be at least 3 characters long")
      .required(),
    code: yup
      .string()
      .trim()
      .min(2, "Must be at least 2 characters long")
      .required(),
    email: yup
      .string()
      .matches(/\S+@\S+\.\S+/, "Must be a valid email address")
      .required(),
    
    cardName: yup
      .string()
      .trim()
      .min(3, "Must be at least 3 characters long")
      .required(),
    month: yup
      .number()
      .typeError("Month is required")
      .min(1, "Month must be between 1 and 12")
      .max(12, "Month must be between 1 and 12")
      .integer("Month must be a whole number")
      .required(),
    year: yup
      .number()
      .typeError("Year is required")
      .min(currentYear, "Year cannot be previous to current year")
      .max(expiryYear, "Year must be a valid expiry year")
      .integer("Year must be a whole number")
      .required(),
    cvv: yup
      .string()
      .matches(/^[0-9]+$/, "Must be a valid CVV")
      .min(3, "Must be 3 characters long")
      .max(3)
      .required(),
  })
  .required();

export default function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { clearCart } = useProductsStore(
    (state) => ({
      clearCart: state.clearCart,
    }),
    shallow
  );

  const navigate = useNavigate();

  function handleSubmission() {
    clearCart();
    navigate("/checkoutSuccess");
  }

  return (
    <StyledCheckoutForm onSubmit={handleSubmit(handleSubmission)}>
      <fieldset>
        <legend>Shipping information</legend>
        <label htmlFor="fullName">Full name</label>
        <input
          {...register("fullName", {
            required: true,
            minLength: 3,
          })}
          name="fullName"
          placeholder="Full name"
        ></input>
        <p className="error-message">{errors.fullName?.message}</p>

        <label htmlFor="address">Address</label>
        <input
          {...register("address", {
            required: true,
            minLength: 3,
          })}
          name="address"
          placeholder="Address"
        ></input>
        <p className="error-message">{errors.address?.message}</p>

        <div className="small-field">
          <div>
            <label htmlFor="city">City</label>
            <input
              {...register("city", {
                required: true,
                minLength: 3,
              })}
              name="city"
              placeholder="City"
            ></input>
            <p className="error-message">{errors.city?.message}</p>
          </div>

          <div>
            <label htmlFor="code">Postal code</label>
            <input
              {...register("code", {
                required: true,
                minLength: 3,
              })}
              name="code"
              placeholder="Postal code"
            ></input>
            <p className="error-message">{errors.code?.message}</p>
          </div>
        </div>

       

        <label htmlFor="email">Email</label>
        <input
          {...register("email", {
            required: true,
          })}
          type="email"
          name="email"
          placeholder="Email"
        ></input>
        <p className="error-message">{errors.email?.message}</p>

       
      </fieldset>

      <fieldset className="payment">
        <legend>payment information</legend>

        <div>
          <label htmlFor="cardName">Cardholder's name</label>
          <input
            {...register("cardName", {
              required: true,
              minLength: 3,
            })}
            name="cardName"
            placeholder="Cardholder's name"
          ></input>
          <p className="error-message">{errors.cardName?.message}</p>

          <div className="small-field">
            <div>
              <label htmlFor="month">Expiry month (MM)</label>
              <input
                {...register("month", {
                  required: true,
                  minLength: 2,
                  maxLength: 2,
                })}
                name="month"
                placeholder="Expiry month"
              ></input>
              <p className="error-message">{errors.month?.message}</p>
            </div>

            <div>
              <label htmlFor="year">Expiry year (YY)</label>
              <input
                {...register("year", {
                  required: true,
                  minLength: 2,
                  maxLength: 2,
                })}
                name="year"
                placeholder="Expiry year"
              ></input>
              <p className="error-message">{errors.year?.message}</p>
            </div>
          </div>

          <label htmlFor="cvv">CVV</label>
          <input
            {...register("cvv", {
              required: true,
              minLength: 3,
              maxLength: 3,
            })}
            name="cvv"
            placeholder="CVV"
            className="cvv"
          ></input>
          <p className="error-message">{errors.cvv?.message}</p>
        </div>

        <div className="button-container">
          <PrimaryButton text={"Place order"} />
        </div>
      </fieldset>
    </StyledCheckoutForm>
  );
}

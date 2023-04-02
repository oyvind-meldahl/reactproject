import { StyledContactForm } from "../../styles/components/ContactForm.styles";
import PrimaryButton from "../PrimaryButton";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    fullName: yup
      .string()
      .trim()
      .min(3, "Must be at least 3 characters long")
      .required(),
    subject: yup
      .string()
      .trim()
      .min(3, "Must be at least 3 characters long")
      .required(),
    email: yup
      .string()
      .matches(/\S+@\S+\.\S+/, "Must be a valid email address")
      .required(),
    body: yup
      .string()
      .trim()
      .min(3, "Must be at least 3 characters long")
      .max(5000, "Cannot be longer than 5000 characters")
      .required(),
  })
  .required();

export default function ContactForm() {
  useEffect(() => {
    document.title = "Another Heaven Boutique | Get in touch";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  function handleSubmission(data) {
    console.log(data);
    navigate("/contactSuccess");
  }

  return (
    <StyledContactForm onSubmit={handleSubmit(handleSubmission)}>
      <fieldset>
        <legend>All fields are required</legend>
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

        <label htmlFor="subject">Subject</label>
        <input
          {...register("subject", {
            required: true,
            minLength: 3,
          })}
          name="subject"
          placeholder="Subject"
        ></input>
        <p className="error-message">{errors.subject?.message}</p>

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

        <label htmlFor="body">Message</label>
        <textarea
          {...register("body", {
            required: true,
            minLength: 3,
          })}
          name="body"
          placeholder="Write your message here"
        ></textarea>
        <p className="error-message">{errors.body?.message}</p>

        <div className="button-container">
          <PrimaryButton text={"Submit"} />
        </div>
      </fieldset>
    </StyledContactForm>
  );
}

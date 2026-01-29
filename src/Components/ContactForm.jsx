import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  inputBase,
  inputFocus,
  labelBase,
  fieldWrapper,
  twoColWrapper,
} from "../ContactStyles";
import Loader from "./Loader";

const ContactForm = () => {
  const [formData, setformData] = useState({
    name: "",
    company: "",
    email: "",
    phNumber: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setformData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    const templateParams = {
      ...formData,
      time: new Date().toISOString(),
    };
    emailjs
      .send(
        "service_stcobuo",
        "template_xe952mc",
        templateParams,
        "iQoOAZgc_qYGjmlcg",
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);

        setformData({
          name: "",
          company: "",
          email: "",
          phNumber: "",
          address: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("EmailJS error", err);
        setLoading(false);
        setError(true);
      });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-15 bg-white rounded-2xl p-4 mb-30 text-gray-700 xl:w-7/12 xl:p-15 xl:mb-0"
    >
      <h1 className="text-3xl mt-5 text-gray-900 xl:mt-0 xl:text-4xl xl:tracking-wide">
        We'd love to hear from you!
        <br />
        Let’s get in touch
      </h1>

      <div className={`mt-10 xl:mt-12 ${twoColWrapper}`}>
        <div className={`${fieldWrapper} xl:w-6/12`}>
          <label className={labelBase}>Full Name</label>
          <input
            type="text"
            required
            value={formData.name}
            name="name"
            onChange={handleChange}
            className={`${inputBase} ${inputFocus}`}
          />
        </div>

        <div className={`${fieldWrapper} mt-7 xl:mt-0 xl:w-6/12`}>
          <label className={labelBase}>Company</label>
          <input
            type="text"
            value={formData.company}
            name="company"
            onChange={handleChange}
            required
            className={`${inputBase} ${inputFocus}`}
          />
        </div>
      </div>

      <div className={`mt-7 ${twoColWrapper}`}>
        <div className={`${fieldWrapper} xl:w-6/12`}>
          <label className={labelBase}>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            required
            placeholder="✉ olivia@untitledul.com"
            className={`${inputBase} ${inputFocus}`}
          />
        </div>

        <div className={`${fieldWrapper} mt-7 xl:mt-0 xl:w-6/12`}>
          <label className={labelBase}>Phone number</label>
          <input
            type="tel"
            value={formData.phNumber}
            onChange={handleChange}
            name="phNumber"
            required
            placeholder="+1 (555) 000-0000"
            className={`${inputBase} ${inputFocus}`}
          />
        </div>
      </div>

      <div className={`${fieldWrapper} mt-7 xl:mt-7 xl:w-12/12`}>
        <label className={labelBase}>Address</label>
        <input
          type="text"
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
          className={`${inputBase} ${inputFocus}`}
        />
      </div>

      <div className={`${fieldWrapper} mt-7 xl:mt-7 xl:w-12/12`}>
        <label className={labelBase}>Your Message</label>
        <textarea
          value={formData.message}
          onChange={handleChange}
          name="message"
          required
          placeholder="Type your message here"
          className={`${inputBase} ${inputFocus} h-34 resize-none`}
        />
      </div>

      {success && (
        <p className="mt-2 text-[18px] text-green-800 font-medium absolute">
          Message sent successfully!
        </p>
      )}

      {error && (
        <p className="mt-4 text-red-600 font-medium">
          Something went wrong. Try again
        </p>
      )}

      <button
        type="submit"
        className="mt-10 w-full rounded-[11px] bg-[rgb(66,49,97)] p-3 text-[17px] tracking-wide text-gray-100 transition hover:opacity-90 xl:mt-14"
      >
        {loading ? <Loader /> : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;

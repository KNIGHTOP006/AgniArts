"use client";

import { useState } from "react";

type FormType = "workshop" | "performance";

export function EnquiryForm({ type = "workshop" }: { type?: FormType }) {
  const [submitted, setSubmitted] = useState(false);
  const isWorkshop = type === "workshop";

  if (submitted) {
    return (
      <div className="form-success">
        <span>✓</span>
        <h3>Thank you for reaching out to Agni.</h3>
        <p>We&apos;ll get back to you soon.</p>
        <button className="text-link" onClick={() => setSubmitted(false)}>Send another enquiry ↗</button>
      </div>
    );
  }

  return (
    <form className="enquiry-form" action="https://wa.me/919740781481" method="get" noValidate>
      <div className="form-row">
        <label className="field">
          <span>Full name *</span>
          <input name="text" type="text" required />
        </label>
        <label className="field">
          <span>Phone number *</span>
          <input name="phone" type="tel" required />
        </label>
      </div>
      <div className="form-row">
        <label className="field">
          <span>Email *</span>
          <input name="email" type="email" required />
        </label>
        {isWorkshop ? (
          <label className="field">
            <span>City</span>
            <input name="city" type="text" />
          </label>
        ) : (
          <label className="field">
            <span>Organisation</span>
            <input name="organisation" type="text" />
          </label>
        )}
      </div>
      <label className="field field-full">
        <span>Message</span>
        <textarea name="message" rows={5} placeholder="Tell us a little more about what you have in mind." />
      </label>
      <button className="button" type="submit">
        {isWorkshop ? "Send enquiry" : "Enquire for performance"} <span>↗</span>
      </button>
    </form>
  );
}

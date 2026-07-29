"use client";

import { FormEvent, useState } from "react";

type FormType = "workshop" | "performance";
export function EnquiryForm({ type = "workshop" }: { type?: FormType }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const isWorkshop = type === "workshop";
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const data = new FormData(event.currentTarget); if (!data.get("name") || !data.get("email") || !data.get("phone")) { setError("Please complete your name, phone number and email."); return; } setError(""); setSubmitted(true); event.currentTarget.reset(); }
  if (submitted) return <div className="form-success"><span>✓</span><h3>Thank you for reaching out to Agni.</h3><p>We&apos;ll get back to you soon.</p><button className="text-link" onClick={() => setSubmitted(false)}>Send another enquiry ↗</button></div>;
  return <form className="enquiry-form" onSubmit={submit} noValidate><div className="form-row"><Field name="name" label="Full name" required /><Field name="phone" label="Phone number" type="tel" required /></div><div className="form-row"><Field name="email" label="Email" type="email" required />{isWorkshop ? <Field name="city" label="City" /> : <Field name="organisation" label="Organisation" />}</div>{isWorkshop ? <><div className="form-row"><Select name="age" label="Age group" options={["Select age group", "Under 16", "16–25", "26–40", "40+"]} /><Select name="interest" label="Interested in" options={["Select an option", "Parai", "Folk Arts", "Performance", "Workshop", "Other"]} /></div><Field name="location" label="Preferred location" /></> : <><div className="form-row"><Field name="event" label="Event name" /><Field name="date" label="Event date" type="date" /></div><div className="form-row"><Field name="location" label="Location" /><Field name="audience" label="Expected audience" type="number" /></div><Field name="performance" label="Performance type" /></>}<label className="field field-full"><span>Message</span><textarea name="message" rows={5} placeholder="Tell us a little more about what you have in mind." /></label>{error && <p className="form-error" role="alert">{error}</p>}<button className="button" type="submit">{isWorkshop ? "Send enquiry" : "Enquire for performance"} <span>↗</span></button></form>;
}
function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) { return <label className="field"><span>{label}{required && " *"}</span><input name={name} type={type} required={required} /></label>; }
function Select({ name, label, options }: { name: string; label: string; options: string[] }) { return <label className="field"><span>{label}</span><select name={name}>{options.map((option, index) => <option key={option} value={index ? option : ""}>{option}</option>)}</select></label>; }

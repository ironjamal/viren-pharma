"use client";

import { useState } from "react";

const inquiryTypes = ["General inquiry", "Business partnership", "Healthcare professional", "Careers"];

export function ContactForm({ initialType = "General inquiry", initialProduct = "" }: { initialType?: string; initialProduct?: string }) {
  const normalizedType = inquiryTypes.find((item) => item.toLowerCase() === initialType.toLowerCase()) ?? "General inquiry";
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inquiryType, setInquiryType] = useState(normalizedType);
  const [product, setProduct] = useState(initialProduct);

  return (
    <form className={`contact-form${errorMessage ? " has-error" : ""}`} onInvalidCapture={() => { setErrorMessage("Please check the required name, valid email address, and message before continuing."); setSubmitted(false); }} onSubmit={(event) => { event.preventDefault(); setErrorMessage(""); setSubmitted(true); }} onChange={() => { setSubmitted(false); setErrorMessage(""); }}>
      <div className="contact-form__intro"><p className="eyebrow"><span className="eyebrow__line" />A local demo interaction</p><h2>Tell us what you need.</h2><p>Complete the fields below to see the example confirmation state. Your information stays in this browser page and is not sent or saved.</p></div>
      <div className="form-grid">
        <div className="field-wrap"><label htmlFor="contact-name">Full name <span aria-hidden="true">*</span></label><input className="field" id="contact-name" name="name" autoComplete="name" aria-describedby={errorMessage ? "contact-form-feedback" : undefined} required /></div>
        <div className="field-wrap"><label htmlFor="contact-email">Work email <span aria-hidden="true">*</span></label><input className="field" id="contact-email" name="email" type="email" autoComplete="email" aria-describedby={errorMessage ? "contact-form-feedback" : undefined} required /></div>
        <div className="field-wrap"><label htmlFor="contact-phone">Phone <span className="field__optional">Optional</span></label><input className="field" id="contact-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" /></div>
        <div className="field-wrap"><label htmlFor="contact-company">Company or organization <span className="field__optional">Optional</span></label><input className="field" id="contact-company" name="company" autoComplete="organization" /></div>
        <div className="field-wrap"><label htmlFor="contact-type">Inquiry type</label><select className="field" id="contact-type" name="inquiryType" value={inquiryType} onChange={(event) => setInquiryType(event.target.value)}>{inquiryTypes.map((type) => <option key={type}>{type}</option>)}</select></div>
        <div className="field-wrap"><label htmlFor="contact-product">Product or role reference <span className="field__optional">Optional</span></label><input className="field" id="contact-product" name="product" value={product} onChange={(event) => setProduct(event.target.value)} /></div>
        <div className="field-wrap field-wrap--full"><label htmlFor="contact-message">How can we help? <span aria-hidden="true">*</span></label><textarea className="field field--textarea" id="contact-message" name="message" aria-describedby={errorMessage ? "contact-form-feedback" : undefined} required rows={5} /></div>
      </div>
      <div className="contact-form__bottom"><p>Required fields are marked with an asterisk. Do not include personal health information.</p><button className="button button--primary" type="submit">Show demo confirmation<span aria-hidden="true">→</span></button></div>
      {errorMessage ? <p className="form-error" id="contact-form-feedback" role="alert">{errorMessage}</p> : null}
      {submitted ? <p className="form-confirmation" role="status"><span className="form-confirmation__icon" aria-hidden="true">✓</span><span><strong>Demo state complete.</strong> Nothing was sent or stored, and no follow-up will occur.</span></p> : null}
    </form>
  );
}

"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import { Button as StatefulButton } from "../components/statefulButton";
import { useToasts } from "../context/ToastContext";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const { addToast } = useToasts();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      addToast("Please fill out all the required fields.", { type: "error" });
      return Promise.reject("Form is incomplete.");
    }
    setLoading(true);

    if (!formRef.current) { 
      console.error("Form reference is not available");
      setLoading(false); 
      return Promise.reject("Form reference not found"); 
    }
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      addToast("Thank you! I will get back to you soon.", { type: "success" });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      addToast("Something went wrong. Please try again.", { type: "error" });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding scroll-mt-nav">
      <div className="w-full flex-col-center">
        <div className="font-semibold md:text-5xl text-3xl text-center">
          Let’s Connect & Collaborate!
        </div>
        <div className="mt-10 w-full max-w-xl">
          <div className="card-border rounded-2xl p-8 md:p-10">
            <form
              ref={formRef}
              // onSubmit={handleSubmit}
              className="w-full flex flex-col gap-8" >

              <fieldset 
                disabled={loading} 
                className="flex flex-col gap-8">
                <div>
                  <label htmlFor="name">Your name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    placeholder="Please enter your good name!" 
                    required />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={form.email} 
                    onChange={handleChange} 
                    placeholder="Please enter your email address!" 
                    required />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={form.message} 
                    onChange={handleChange} 
                    placeholder="How can I help you?" 
                    rows={5} required />
                </div>
              </fieldset>

              <StatefulButton 
                type="button" 
                onClick={handleSubmit} 
                disabled={loading}
              >
                Send Message
              </StatefulButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
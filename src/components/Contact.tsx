"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    emailjs
      .send(
        "service_0o3rk6v", // replace with your EmailJS service ID
        "template_g5bt0l5", // replace with your EmailJS template ID
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "9pOJCjhxD999ZAuuT" // replace with your EmailJS user/public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setStatus("Failed to send message. Please try again later.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
        {status && (
          <div className="text-center mt-4 text-sm text-gray-700">{status}</div>
        )}
      </form>
    </section>
  );
}

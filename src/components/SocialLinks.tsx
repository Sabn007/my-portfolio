"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  FacebookIcon,
  InstagramIcon,
} from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Sabn007", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sabin-maharjan-3159b3148",
    label: "LinkedIn",
  },
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/sabn.mhzn",
    label: "Facebook",
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/sabin_sheriff",
    label: "Instagram",
  },
  { icon: Mail, href: "mailto:sabin007.maharjan@gmail.com", label: "Email" },
];

export default function SocialLinks() {
  return (
    <motion.div
      className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background hover:bg-muted text-foreground p-2 rounded-full shadow-lg transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={link.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <link.icon className="w-6 h-6" />
        </motion.a>
      ))}
    </motion.div>
  );
}

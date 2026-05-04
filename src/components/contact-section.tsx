"use client";

import { useState, useRef, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

type ContactSectionProps = {
  dict: any;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactSection({ dict }: ContactSectionProps) {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/zielisgabriel@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 4000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 4000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 4000);
    }
  };

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/zielisgabriel",
      icon: <FaGithub className="h-5 w-5" />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/josgabrielalmeida/",
      icon: <FaLinkedin className="h-5 w-5" />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/zielis085/",
      icon: <FaInstagram className="h-5 w-5" />,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-foreground/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-foreground/[0.03] rounded-full blur-3xl" />
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-16 space-y-4" variants={itemVariants}>
          <Badge
            variant="outline"
            className="px-4 py-1 text-xs uppercase tracking-[0.2em]"
          >
            {dict.contact.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {dict.contact.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {dict.contact.description}
          </p>
          <div className="w-20 h-1 bg-foreground mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <motion.div variants={itemVariants}>
            <Card className="border-border/60 bg-card/50 backdrop-blur-sm rounded-2xl">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name" className="text-sm font-medium">
                        {dict.contact.form.name}
                      </Label>
                      <Input
                        id="contact-name"
                        name="name"
                        placeholder={dict.contact.form.name_placeholder}
                        required
                        className="bg-background/50 border-border/60 focus:border-foreground/30 rounded-xl h-11 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email" className="text-sm font-medium">
                        {dict.contact.form.email}
                      </Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder={dict.contact.form.email_placeholder}
                        required
                        className="bg-background/50 border-border/60 focus:border-foreground/30 rounded-xl h-11 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-subject" className="text-sm font-medium">
                      {dict.contact.form.subject}
                    </Label>
                    <Input
                      id="contact-subject"
                      name="_subject"
                      placeholder={dict.contact.form.subject_placeholder}
                      required
                      className="bg-background/50 border-border/60 focus:border-foreground/30 rounded-xl h-11 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message" className="text-sm font-medium">
                      {dict.contact.form.message}
                    </Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder={dict.contact.form.message_placeholder}
                      required
                      rows={5}
                      className="bg-background/50 border-border/60 focus:border-foreground/30 rounded-xl resize-none transition-colors"
                    />
                  </div>

                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={formStatus === "sending"}
                    className="w-full rounded-xl h-12 font-medium tracking-wide transition-all"
                  >
                    {formStatus === "sending" ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        {dict.contact.form.sending}
                      </span>
                    ) : formStatus === "success" ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        {dict.contact.form.success}
                      </span>
                    ) : formStatus === "error" ? (
                      <span className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        {dict.contact.form.error}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        {dict.contact.form.send}
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div className="space-y-4" variants={itemVariants}>
            <Card className="border-border/60 bg-card/50 backdrop-blur-sm rounded-2xl">
              <CardContent className="p-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-foreground/5 border border-border/60">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {dict.contact.info.email_label}
                    </p>
                    <Link
                      href="mailto:zielisgabriel@gmail.com"
                      className="text-sm text-foreground hover:underline underline-offset-4 transition-colors"
                    >
                      josegabrielas0586@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="h-px bg-border/60" />

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-foreground/5 border border-border/60">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {dict.contact.info.location_label}
                    </p>
                    <p className="text-sm text-foreground">
                      {dict.contact.info.location_value}
                    </p>
                  </div>
                </div>

                <div className="h-px bg-border/60" />

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-foreground/5 border border-border/60">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {dict.contact.info.availability_label}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      <p className="text-sm text-foreground">
                        {dict.contact.info.availability_value}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/50 backdrop-blur-sm rounded-2xl">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  {dict.contact.info.social_label}
                </p>
                <div className="flex gap-2">
                  {socials.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group relative p-3 rounded-xl border border-border/60 bg-background/50 hover:bg-foreground/5 hover:border-foreground/20 transition-all"
                    >
                      {social.icon}
                      <ArrowUpRight className="absolute top-1.5 right-1.5 h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

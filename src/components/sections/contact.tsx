import { useState } from "react";
import { motion } from "motion/react";
import { Loader2, Mail } from "lucide-react";

import { SectionHeading, SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { socials } from "@/data/socials";

// Public by design — Web3Forms keys are meant to ship in the client bundle
// and are rate-limited per domain.
const WEB3FORMS_ACCESS_KEY = "be291e7f-a9fa-4bd2-88a8-ebca82eacff2";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type FormStatus = "idle" | "sending" | "success" | "error";

// Lucide no longer ships brand icons, so LinkedIn is inlined.
function LinkedinIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const icons = { mail: Mail, linkedin: LinkedinIcon };

function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    // Honeypot: real visitors never fill this; bail silently on bots.
    if (data.get("botcheck")) return;

    setStatus("sending");
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New message from your portfolio",
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <SectionShell id="contact">
      <SectionHeading>Contact</SectionHeading>
      <motion.div
        className="grid gap-8 md:grid-cols-[1fr_auto]"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Card className="max-w-xl">
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-1.5">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    placeholder="Ada Lovelace"
                    required
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="ada@example.com"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Let's build something."
                  className="min-h-28"
                  required
                />
              </div>
              <div className="flex items-center gap-3">
                <Button type="submit" disabled={status === "sending"}>
                  {status === "sending" && (
                    <Loader2 className="animate-spin" data-icon="inline-start" />
                  )}
                  {status === "sending" ? "Sending..." : "Send"}
                </Button>
                {status === "success" && (
                  <p className="font-heading text-xs text-primary">
                    Message sent — thanks! I'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="font-heading text-xs text-destructive">
                    Something went wrong — please email me directly instead.
                  </p>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="flex flex-row gap-2 md:flex-col">
          {socials.map((social) => {
            const Icon = icons[social.icon];
            return (
              <Button key={social.label} variant="outline" asChild>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  <Icon data-icon="inline-start" />
                  {social.label}
                </a>
              </Button>
            );
          })}
        </div>
      </motion.div>
      <p className="mt-16 font-heading text-xs text-muted-foreground">
        $ echo "thanks for scrolling"
      </p>
    </SectionShell>
  );
}

export { Contact };

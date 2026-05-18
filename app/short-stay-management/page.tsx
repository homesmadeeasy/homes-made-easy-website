import React from "react";
import { Home, Sparkles, CalendarCheck, ShieldCheck, ClipboardList, Wrench, Star, ArrowRight, Mail } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Guest-ready presentation",
    text: "Support with property setup, styling standards, amenities, linen, cleaning expectations and guest-ready checklists.",
  },
  {
    icon: CalendarCheck,
    title: "Booking support",
    text: "Help with short-stay listing structure, guest communication processes, availability, pricing reviews and booking performance.",
  },
  {
    icon: ClipboardList,
    title: "Cleaner coordination",
    text: "Clear cleaning workflows, changeover checklists, maintenance notes and reliable communication between owners and contractors.",
  },
  {
    icon: Wrench,
    title: "Maintenance oversight",
    text: "Practical systems to track repairs, recurring property needs, owner approvals and follow-up after guest stays.",
  },
];

const inclusions = [
  "Short-stay setup review",
  "Listing and guest experience recommendations",
  "Cleaner and linen process support",
  "Maintenance and issue tracking",
  "Owner communication and reporting",
  "Income, expense and profitability visibility",
];

export default function ShortStayManagementPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-950">
      <header className="border-b border-stone-200 bg-stone-50/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Holiday Homes Made Easy"
              className="h-11 w-11 rounded-2xl object-cover"
            />
            <div>
              <p className="text-lg font-semibold tracking-tight">
                Holiday Homes Made Easy
              </p>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Short Stays • Accounting • Advisory
              </p>
            </div>
          </a>

          <a
            href="/#contact"
            className="rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
          >
            Send an enquiry
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:py-20">
        <div className="flex flex-col justify-center">
          <p className="mb-5 w-fit rounded-full bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
            Short-stay property management
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Holiday home management with business clarity.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            We help holiday home owners create better guest experiences, reduce operational stress and understand how their property is performing financially.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-medium text-white hover:bg-slate-800"
            >
              Discuss your property <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-medium text-slate-950 hover:bg-stone-100"
            >
              Back to home
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200">
          <img
            src="/hero-property.jpg"
            alt="Managed holiday home with pool"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 text-center shadow-sm">
          <p className="mx-auto max-w-4xl text-xl leading-8 text-slate-700">
            Short-stay success is not just about taking bookings. It depends on presentation, cleaning, maintenance, guest experience, pricing, reporting and clear owner communication.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
            What we support
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Practical help across the full short-stay experience.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-stone-100">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-18">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
              Why it matters
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Better operations lead to better owner returns.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Guests notice the details. Owners notice the numbers. Our approach connects both sides so your property feels professionally managed and financially organised.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {inclusions.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-3xl border border-stone-200 bg-stone-50 p-5"
              >
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
                <p className="font-medium leading-6 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
            Property standards
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Designed for owners who want more than a listing.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We help owners think through the practical systems behind a high-performing short-stay property.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-slate-200">
            <img
              src="/exterior-1.png"
              alt="Holiday home living room"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-slate-200">
            <img
              src="/exterior-2.png"
              alt="Holiday home bedroom"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-slate-200">
            <img
              src="/exterior-3.png"
              alt="Holiday property exterior"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
              How we start
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              A simple process for understanding your property.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              ["1", "Tell us about your property", "Share the property type, location, current setup and what you need help with."],
              ["2", "We review the current position", "We look at guest experience, operations, bookings, costs and reporting needs."],
              ["3", "We identify opportunities", "We highlight practical improvements across presentation, systems and financial clarity."],
              ["4", "You receive next steps", "You get a clear direction for improving the property and managing it with confidence."],
            ].map(([number, title, text]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white">
                  {number}
                </div>

                <h3 className="text-xl font-semibold">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_0.75fr]">
            <div>
              <Star className="h-8 w-8" />

              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Want help managing your holiday home more professionally?
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                Send us a few details about your property and we’ll respond by email with the best next step.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
              <p className="text-xl font-semibold">Start an enquiry</p>

              <p className="mt-3 leading-7 text-slate-600">
                Email us with your property location, current short-stay setup and what you would like help with.
              </p>

              <a
                href="mailto:enquiries@holidayhomesmadeeasy.com.au"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-medium text-white hover:bg-slate-800"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send an email enquiry
              </a>
            </div>
          </div>
        </div>
      </section>
<footer className="border-t border-stone-200 bg-white">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm text-slate-600 md:flex-row">
    <p>© Holiday Homes Made Easy</p>

    <div className="flex gap-6">
      <a href="/">Home</a>
      <a href="/short-stay-management">Short Stays</a>
      <a href="/accounting-bookkeeping">Accounting</a>
      <a href="/business-advisory">Advisory</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>
  </div>
</footer>

    </main>
  );
}


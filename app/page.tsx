"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Calculator, TrendingUp, CalendarCheck, Sparkles, ShieldCheck, ArrowRight, CheckCircle2, BarChart3, FileText, Star, Phone } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Short-stay property management",
    text: "Guest-ready setup, listing strategy, bookings, cleaner coordination, maintenance follow-up and owner communication.",
  },
  {
    icon: Calculator,
    title: "Accounting & bookkeeping",
    text: "Clear income and expense tracking for short-stay, trade, service and small business operators.",
  },
  {
    icon: TrendingUp,
    title: "Business financial planning",
    text: "Cash-flow forecasting, pricing reviews, tax planning support and practical growth advice for business owners.",
  },
];

const features = [
  "Booking-ready property setup",
  "Owner statements and income summaries",
  "Cleaner, linen and maintenance coordination",
  "Stripe, Airbnb, Stayz and direct booking reconciliation",
  "GST, BAS and expense organisation support",
  "Profitability reviews and forward cash-flow planning",
];

const stats = [
  ["operations", "Guest-ready systems and owner support"],
  ["Clear records", "Income, expenses and reporting organised"],
  ["Advisory", "Cash-flow, pricing and growth decisions"],
];

export default function ShortStayFinanceWebsite() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
  src="/logo.png"
  alt="Logo"
  className="h-11 w-11 rounded-2xl object-cover"
/>
            <div>
              <p className="text-lg font-semibold tracking-tight">Holiday Homes Made Easy</p>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">SHORT STAYS • ACCOUNTING • ADVISORY</p>
            </div>
          </div>
        
<nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
  <a href="/" className="hover:text-slate-950">
    Home
  </a>

  <a
    href="/short-stay-management"
    className="hover:text-slate-950"
  >
    Short Stays
  </a>

  <a
    href="/accounting-bookkeeping"
    className="hover:text-slate-950"
  >
    Accounting
  </a>

  <a
    href="/business-advisory"
    className="hover:text-slate-950"
  >
    Advisory
  </a>

  <a href="/about" className="hover:text-slate-950">
    About
  </a>

  <a href="/contact" className="hover:text-slate-950">
    Contact
  </a>
</nav>

          
<a
  href="/contact"
  className="rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
>
  Send an enquiry
</a>


        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(15,23,42,0.12),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(120,113,108,0.18),_transparent_35%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-10 md:grid-cols-[1fr_1fr] md:py-16">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col justify-center">
              <Badge className="mb-6 w-fit rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm hover:bg-white">Short-stay management meets business finance</Badge>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                Short-stay management backed by smarter business accounting.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-650">
                We help holiday home owners and small business operators improve bookings, control costs, organise their accounts and make clearer financial decisions.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="rounded-full bg-slate-950 px-7 text-white hover:bg-slate-800">
                  Discuss your property <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-slate-300 bg-white px-7">
                  See how we help
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
              
                
                  
<div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200">
  <img
    src="/hero-property.jpg"
    alt="Luxury holiday property"
    className="h-full w-full object-cover"
  />
</div>

            </motion.div>
          </div>
        </section>
<section className="mx-auto max-w-7xl px-6 py-10">
  <div className="rounded-[2rem] border border-stone-200 bg-white p-8 text-center shadow-sm">
    <p className="mx-auto max-w-4xl text-xl leading-8 text-slate-700">
      Built for holiday home owners, Airbnb hosts and small business operators who want practical support across operations, bookkeeping and financial planning.
    </p>
  </div>
</section>
        <section id="services" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">What we do</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">One partner across property operations and business numbers.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="rounded-[2rem] border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-7">
                    <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-stone-100">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{service.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="why" className="bg-white py-18">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">Why it works</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Short-stay profit is not just nightly rates.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Real returns come from occupancy, guest experience, cost control, reliable contractors, tax-ready records and regular financial review. We connect all of it.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex gap-3 rounded-3xl border border-stone-200 bg-stone-50 p-5">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
                  <p className="font-medium leading-6 text-slate-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

<section className="mx-auto max-w-7xl px-6 py-20">
  <div className="mb-12 max-w-3xl">
    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
      Real properties
    </p>

    <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
      Real holiday homes. Practical business support.
    </h2>

    <p className="mt-5 text-lg leading-8 text-slate-600">
      We understand the details that affect both guest experience and owner returns —
      presentation, bookings, cleaning, maintenance, reporting and cash flow.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-3">
    <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-slate-200">
      <img
        src="/exterior-1.png"
        alt="Holiday property"
        className="h-[420px] w-full object-cover"
      />
    </div>

    <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-slate-200">
      <img
        src="/exterior-2.png"
        alt="Living room"
        className="h-[420px] w-full object-cover"
      />
    </div>

    <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-slate-200">
      <img
        src="/exterior-3.png"
        alt="Bedroom"
        className="h-[420px] w-full object-cover"
      />
    </div>
  </div>
</section>


        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-5 md:grid-cols-3">
            {stats.map(([number, label]) => (
              <Card key={number} className="rounded-[2rem] border-0 bg-slate-950 text-white shadow-xl shadow-slate-200">
                <CardContent className="p-8">
                  <p className="text-5xl font-semibold tracking-tight">{number}</p>
                  <p className="mt-3 text-slate-300">{label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">How we start</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">A simple path from scattered records to clear decisions.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {[
  {
    icon: CalendarCheck,
    title: "Review",
    text: "We look at the property, bookings, revenue sources, expenses and current systems.",
  },
  {
    icon: FileText,
    title: "Organise",
    text: "We clean up categories, owner records, contractor costs and recurring obligations.",
  },
  {
    icon: Calculator,
    title: "Report",
    text: "You get useful monthly summaries that show what is working and what is leaking money.",
  },
  {
    icon: TrendingUp,
    title: "Plan",
    text: "We map next steps for pricing, cash flow, tax preparation and growth.",
  },
].map((item) => {
  const Icon = item.icon;

  return (
    <Card
      key={item.title}
      className="rounded-[2rem] border-stone-200 bg-white"
    >
      <CardContent className="p-6">
        <Icon className="h-7 w-7" />

        <h3 className="mt-5 text-xl font-semibold">
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {item.text}
        </p>
      </CardContent>
    </Card>
  );
})}
          </div>
        </section>

        <section className="bg-stone-100 py-18">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <Star className="mx-auto h-8 w-8" />
            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">Built for owners who want more than a booking calendar.</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Whether you manage one holiday home or a growing portfolio, the goal is the same: reliable stays, accurate accounts and confident business planning.
            </p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
          <Card className="overflow-hidden rounded-[2rem] border-0 bg-slate-950 text-white shadow-2xl shadow-slate-200">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_0.75fr] md:p-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-300">Get in touch</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Get your property and numbers working together.</h2>
                <p className="mt-5 max-w-2xl leading-8 text-slate-300">
  Send us a few details and we’ll respond by email with the next best step for your property, accounts or business planning.
</p>

<div className="mt-8 space-y-3 text-slate-300">
  <p>Email: enquiry@holidayhomesmadeeasy.com.au</p>
  <p>Service area: Perth, Western Australia and selected short-stay locations</p>
  <p>Response time: We usually respond within 1–2 business days</p>
</div>
              </div>
              <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
                <p className="text-xl font-semibold">Enquiry form</p>
                <div className="mt-5 space-y-3">
                  <input className="w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-950" placeholder="Name" />
                  <input className="w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-950" placeholder="Email" />
                  <select className="w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-950">
                    <option>Short-stay property management</option>
                    <option>Accounting services</option>
                    <option>Financial planning for business</option>
                    <option>All of the above</option>
                  </select>
                  <textarea className="h-28 w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-950" placeholder="Tell us about your property or business" />
                  <Button className="w-full rounded-full bg-slate-950 py-6 text-white hover:bg-slate-800"><Phone className="mr-2 h-4 w-4" />Submit enquiry</Button>
                </div>
              </div>
            </CardContent>
          </Card>
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
    </div>
  );
}

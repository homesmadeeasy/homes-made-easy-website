import React from "react";
import {
  ArrowRight,
  Home,
  Calculator,
  TrendingUp,
  ShieldCheck,
  Star,
  Mail,
} from "lucide-react";

const values = [
  {
    icon: Home,
    title: "Property-focused",
    text: "We understand the practical realities behind managing holiday homes, guest expectations and maintaining presentation standards.",
  },
  {
    icon: Calculator,
    title: "Financially organised",
    text: "Clear records, visibility over costs and practical financial thinking help owners make better long-term decisions.",
  },
  {
    icon: TrendingUp,
    title: "Growth-minded",
    text: "Our approach is focused on improving operational clarity, guest experience and sustainable property performance.",
  },
];

const principles = [
  "Clear communication",
  "Practical systems",
  "Reliable support",
  "Professional presentation",
  "Financial visibility",
  "Long-term thinking",
];

export default function AboutPage() {
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
            About us
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            A practical approach to holiday homes and business support.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Holiday Homes Made Easy was built around the idea that successful
            short-stay properties require more than bookings alone. Strong
            operations, guest experience, organised systems and financial
            clarity all work together to create better outcomes for owners.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/short-stay-management"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-medium text-white hover:bg-slate-800"
            >
              Explore our services
              <ArrowRight className="ml-2 h-4 w-4" />
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
            alt="Luxury holiday property"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 text-center shadow-sm">
          <p className="mx-auto max-w-4xl text-xl leading-8 text-slate-700">
            We believe holiday homes perform best when hospitality, operations
            and financial organisation are treated as part of the same system —
            not separate pieces.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
            Our approach
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Built around practical support and long-term thinking.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-stone-100">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-semibold tracking-tight">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {value.text}
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
              What matters to us
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Calm systems. Better experiences. Clearer decisions.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We focus on creating organised, professional systems that support
              owners, guests and the long-term performance of each property.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((item) => (
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
            Professional presentation matters.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Guest expectations are shaped by details — presentation, comfort,
            cleanliness, communication and consistency.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-slate-200">
            <img
              src="/living-room.jpg"
              alt="Living room"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-slate-200">
            <img
              src="/bedroom.jpg"
              alt="Bedroom"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-slate-200">
            <img
              src="/property-exterior.jpg"
              alt="Property exterior"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-18">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Star className="mx-auto h-8 w-8" />

          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            Built for owners who want clarity, professionalism and reliable support.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Whether you manage one property or a growing portfolio, we believe
            organised systems and thoughtful support make the biggest difference
            over time.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_0.75fr]">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Want to learn more about how we work?
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                Send us a few details about your property or business and we’ll
                respond by email.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
              <p className="text-xl font-semibold">Get in touch</p>

              <p className="mt-3 leading-7 text-slate-600">
                We’re happy to answer questions about short-stay management,
                operations, bookkeeping or advisory support.
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
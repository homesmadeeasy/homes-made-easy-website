import React from "react";
import {
  Mail,
  MapPin,
  Clock3,
  ArrowRight,
  Phone,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
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
            href="/"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-950 hover:bg-stone-100"
          >
            Back to home
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <div className="flex flex-col justify-center">
          <p className="mb-5 w-fit rounded-full bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
            Contact us
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Let’s discuss your property or business.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Whether you need help with short-stay operations, bookkeeping,
            financial organisation or business advisory support, we’re happy to
            hear more about what you need.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Mail className="h-5 w-5" />
              </div>

              <div>
                <p className="font-semibold">Email</p>
                <p className="mt-1 text-slate-600">
                  enquiries@holidayhomesmadeeasy.com.au
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <p className="font-semibold">Service area</p>
                <p className="mt-1 text-slate-600">
                  Perth, Western Australia and selected short-stay locations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Clock3 className="h-5 w-5" />
              </div>

              <div>
                <p className="font-semibold">Response time</p>
                <p className="mt-1 text-slate-600">
                  We usually respond within 1–2 business days
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-200">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
              Send an enquiry
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Tell us what you need help with.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              The more information you provide, the easier it is for us to
              understand your property, business or current setup.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Full name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-4 outline-none transition focus:border-slate-950"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email address
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-4 outline-none transition focus:border-slate-950"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Service
              </label>

              <select className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-4 outline-none transition focus:border-slate-950">
                <option>Short-stay property management</option>
                <option>Accounting and bookkeeping</option>
                <option>Business advisory</option>
                <option>More than one service</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Property or business details
              </label>

              <textarea
                placeholder="Tell us what you need help with"
                className="h-40 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-4 outline-none transition focus:border-slate-950"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Submit enquiry
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
                  Before you enquire
                </p>

                <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                  Helpful information to include.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  Sharing a few details upfront helps us better understand your
                  current setup and provide more useful guidance.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Property location",
                  "Current booking platforms",
                  "Approximate number of properties",
                  "Operational or financial challenges",
                  "Whether you need ongoing support or advice",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4"
                  >
                    <ArrowRight className="h-4 w-4 shrink-0" />

                    <p className="font-medium text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200">
          <img
            src="/hero-property.jpg"
            alt="Holiday property"
            className="h-[500px] w-full object-cover"
          />
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
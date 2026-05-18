import React from "react";
import {
  Calculator,
  FileText,
  ReceiptText,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Mail,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: ReceiptText,
    title: "Bookkeeping support",
    text: "Organised income and expense tracking so your records stay clear, current and easier to understand.",
  },
  {
    icon: FileText,
    title: "Tax-ready records",
    text: "Support preparing clean records for BAS, GST, tax time and discussions with your accountant or adviser.",
  },
  {
    icon: BarChart3,
    title: "Monthly reporting",
    text: "Clear summaries that help you understand revenue, costs, profit and business performance over time.",
  },
  {
    icon: TrendingUp,
    title: "Cash-flow visibility",
    text: "Practical support to help business owners see what is coming in, what is going out and what needs attention.",
  },
];

const inclusions = [
  "Income and expense organisation",
  "Short-stay booking reconciliation",
  "Supplier and contractor cost tracking",
  "Monthly reporting support",
  "GST and BAS record preparation",
  "Profitability and cash-flow visibility",
];

export default function AccountingBookkeepingPage() {
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
            href="/contact"
            className="rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
          >
            Send an enquiry
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:py-20">
        <div className="flex flex-col justify-center">
          <p className="mb-5 w-fit rounded-full bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
            Accounting & bookkeeping
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Clearer records for better business decisions.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            We help short-stay property owners and small business operators keep
            their income, expenses and reporting organised so they can understand
            performance with more confidence.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-medium text-white hover:bg-slate-800"
            >
              Send an enquiry <ArrowRight className="ml-2 h-4 w-4" />
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
            src="/lookout.png"
            alt="Organised short-stay property"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 text-center shadow-sm">
          <p className="mx-auto max-w-4xl text-xl leading-8 text-slate-700">
            Strong bookkeeping is not just compliance. It gives owners and
            business operators a clearer view of revenue, costs, profit and
            cash flow.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
            What we support
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Practical accounting support for property and business owners.
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
              Better records create better visibility.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              When income, expenses and property costs are properly organised,
              it becomes easier to understand what is profitable, what needs
              attention and what decisions should come next.
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
            Designed for clarity
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Simple reporting that helps you understand the numbers.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            The aim is to make financial information easier to read, easier to
            discuss and easier to act on.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              "Income",
              "Track booking revenue, service income and other business earnings clearly.",
            ],
            [
              "Expenses",
              "Organise supplier costs, maintenance, cleaning, software, fees and recurring outgoings.",
            ],
            [
              "Performance",
              "Review profit, cash flow and business trends so you can make more confident decisions.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl shadow-slate-200"
            >
              <Calculator className="h-7 w-7 text-stone-300" />
              <h3 className="mt-6 text-3xl font-semibold tracking-tight">
                {title}
              </h3>
              <p className="mt-4 leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-100 py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
              How we start
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              A simple process for organising your records.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              [
                "1",
                "Understand your setup",
                "We look at your business, property income, platforms, expenses and current record-keeping process.",
              ],
              [
                "2",
                "Organise the records",
                "We help bring structure to income, expenses, categories and supporting documents.",
              ],
              [
                "3",
                "Review the numbers",
                "We identify what the records show about costs, profitability and cash-flow pressure points.",
              ],
              [
                "4",
                "Create next steps",
                "You receive practical guidance to improve financial clarity and ongoing organisation.",
              ],
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
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Want clearer records for your property or business?
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                Send us a few details about your current setup and we’ll respond
                by email with the best next step.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
              <p className="text-xl font-semibold">Start an enquiry</p>

              <p className="mt-3 leading-7 text-slate-600">
                Email us with the type of business, your current bookkeeping
                setup and what you would like help organising.
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
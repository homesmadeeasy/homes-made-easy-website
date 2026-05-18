import React from "react";
import {
  TrendingUp,
  LineChart,
  Wallet,
  ArrowRight,
  ShieldCheck,
  Mail,
  Star,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: Wallet,
    title: "Cash-flow visibility",
    text: "Understand where money is moving, what pressures exist and how to improve financial clarity across the business.",
  },
  {
    icon: LineChart,
    title: "Performance reviews",
    text: "Review revenue, operating costs, property performance and business trends to support better decision-making.",
  },
  {
    icon: TrendingUp,
    title: "Growth planning",
    text: "Practical guidance around pricing, systems, expansion opportunities and operational improvements.",
  },
  {
    icon: Briefcase,
    title: "Business structure support",
    text: "Support understanding the practical side of organising operations, reporting and long-term business direction.",
  },
];

const focusAreas = [
  "Revenue and profitability visibility",
  "Operational efficiency",
  "Property and business growth planning",
  "Cost management",
  "Financial organisation",
  "Long-term sustainability",
];

export default function BusinessAdvisoryPage() {
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
            Business advisory
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Practical business guidance backed by financial clarity.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            We help property owners and business operators better understand
            performance, identify operational improvements and make more
            confident long-term decisions.
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
            src="/hero-property.jpg"
            alt="Business and property advisory"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 text-center shadow-sm">
          <p className="mx-auto max-w-4xl text-xl leading-8 text-slate-700">
            Better business decisions come from understanding both the numbers
            and the operations behind them.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
            Advisory support
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Practical guidance for property and business owners.
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
              What we focus on
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Organised systems create stronger businesses.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Advisory support should be practical, understandable and grounded
              in the real operational side of running a business or managing a
              property portfolio.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((item) => (
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
            Long-term thinking
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Built around sustainability, clarity and growth.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We believe strong businesses are built through consistent systems,
            organised records and clear visibility over performance.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              "Operations",
              "Create clearer systems and workflows that support smoother day-to-day management.",
            ],
            [
              "Visibility",
              "Understand revenue, costs and performance trends with greater clarity.",
            ],
            [
              "Direction",
              "Make more confident decisions around growth, pricing and long-term planning.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl shadow-slate-200"
            >
              <TrendingUp className="h-7 w-7 text-stone-300" />

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
              How we work
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              A practical process focused on clarity.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              [
                "1",
                "Understand your situation",
                "We learn more about your property, business structure, operations and current challenges.",
              ],
              [
                "2",
                "Review the numbers",
                "We assess financial visibility, reporting, costs and operational pressure points.",
              ],
              [
                "3",
                "Identify opportunities",
                "We highlight practical improvements across systems, performance and organisation.",
              ],
              [
                "4",
                "Create next steps",
                "You receive practical direction designed to support long-term improvement and clarity.",
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
              <Star className="h-8 w-8" />

              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Looking for practical business support?
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                Send us a few details about your property or business and we’ll
                respond by email with the best next step.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
              <p className="text-xl font-semibold">Start an enquiry</p>

              <p className="mt-3 leading-7 text-slate-600">
                We’re happy to discuss operational clarity, business
                organisation, reporting and long-term planning support.
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
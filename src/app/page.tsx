import Image from "next/image";
import { Lora, Montserrat } from "next/font/google";
import { Diamond, Heart, Mail, Newspaper, Phone, Send } from "lucide-react";

const headingFont = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-heading",
});

const bodyFont = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const navItems = [
  { label: "PRODUCTS", href: "#about" },
  { label: "PRICING", href: "#services" },
  { label: "GALLERY", href: "#portfolio" },
  { label: "CONTACT", href: "#contact" },
];

const serviceItems = [
  {
    title: "Premium Prints",
    description:
      "From business cards to posters, we deliver sharp colors and clean finishes every time.",
    Icon: Diamond,
  },
  {
    title: "Fast Turnaround",
    description:
      "Need it quickly? Our print team handles urgent orders without compromising quality.",
    Icon: Send,
  },
  {
    title: "Modern Design",
    description:
      "We create fresh, brand-ready layouts for flyers, menus, packaging, and more.",
    Icon: Newspaper,
  },
  {
    title: "Made with Care",
    description:
      "Every print job is checked in detail to make sure your final result looks perfect.",
    Icon: Heart,
  },
];

const portfolioItems = [
  {
    src: "/portfolio/print1.jpg",
    alt: "Letterpress tools and print materials",
  },
  {
    src: "/portfolio/print2.jpg",
    alt: "Printed cards and paper samples",
  },
  {
    src: "/portfolio/print3.jpg",
    alt: "Design pencils and print layout tools",
  },
  {
    src: "/portfolio/print4.jpg",
    alt: "Letterpress tools and print materials",
  },
  {
    src: "/portfolio/print5.jpg",
    alt: "Printed cards and paper samples",
  },
  {
    src: "/portfolio/print6.jpg",
    alt: "Design pencils and print layout tools",
  },
];

export default function Home() {
  return (
    <div className={`${headingFont.variable} ${bodyFont.variable} text-white`} id="top">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-[#1f1f23]/90 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-14">
          <a
            href="#top"
            className="flex items-center gap-3 font-[family-name:var(--font-heading)] text-2xl font-extrabold tracking-wide text-white"
          >
            <Image
              src="/logo-4f.svg"
              alt="4F logo"
              width={34}
              height={26}
              priority
              className="h-[26px] w-auto"
            />
            AI PRINTS
          </a>

          <nav className="hidden lg:block" aria-label="Primary navigation">
            <ul className="flex items-center gap-10 font-[family-name:var(--font-heading)] text-[0.95rem] font-bold tracking-wide text-white/80">
              {navItems.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/background.jpg"
          alt=""
          fill
          priority
          className="absolute inset-0 object-cover object-left-top"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,32,33,0.58)_0%,rgba(36,32,33,0.62)_45%,rgba(36,32,33,0.68)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-12 pt-[94px] sm:px-10 lg:px-14">
          <main className="flex flex-1 items-start justify-center pt-14 sm:pt-16 lg:pt-20">
            <section className="max-w-6xl text-center">
              <h1 className="font-[family-name:var(--font-heading)] text-[2rem] font-extrabold uppercase leading-[1.18] tracking-[0.04em] text-white sm:text-[2.9rem] lg:text-[3.55rem]">
                <span className="block sm:whitespace-nowrap">YOUR CREATIVE STUDIO FOR</span>
                <span className="mt-1 block sm:whitespace-nowrap">PRINT AND DESIGN SOLUTIONS</span>
              </h1>

              <div className="mx-auto mt-8 h-1 w-14 rounded-full bg-[#f26a44]" />

              <p className="mx-auto mt-8 max-w-3xl font-[family-name:var(--font-body)] text-[1.05rem] leading-[1.5] text-white/88 sm:text-[1.25rem] lg:max-w-[760px] lg:text-[1.35rem]">
                We help businesses stand out with professional print and brand
                <br className="hidden lg:block" />
                design. From cards and flyers to banners and packaging, we
                <br className="hidden lg:block" />
                bring every idea to life with detail and quality.
              </p>

              <a
                href="#"
                className="mt-11 inline-flex h-[64px] w-[236px] items-center justify-center rounded-full bg-[#f26a44] font-[family-name:var(--font-heading)] text-[1.08rem] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#fb7a57]"
              >
                Explore services
              </a>
            </section>
          </main>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-[92px] bg-[#f26443] px-6 py-24 sm:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-[2rem] font-bold text-white sm:text-[2.45rem]">
            We&apos;ve got what you need!
          </h2>

          <div className="mx-auto mt-6 h-1 w-[4.5rem] rounded-full bg-white/90" />

          <p className="mx-auto mt-7 max-w-4xl font-[family-name:var(--font-body)] text-[1.08rem] leading-[1.55] text-white/90 sm:text-[1.45rem]">
            From premium business cards to large-format banners, our print and
            design team delivers polished visuals that help your brand stand out
            in every space.
          </p>

          <a
            href="#"
            className="mt-10 inline-flex h-[64px] w-[220px] items-center justify-center rounded-full bg-white font-[family-name:var(--font-heading)] text-[1.02rem] font-bold uppercase tracking-wide text-black transition-colors hover:bg-zinc-100"
          >
            Get started!
          </a>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-[92px] bg-[#f2f2f2] px-6 pb-24 pt-[7.5rem] sm:px-10 sm:pb-28 sm:pt-[8.5rem] lg:px-14 lg:pb-[7.5rem] lg:pt-[9.5rem]"
      >
        <div className="mx-auto max-w-6xl text-center text-[#111827]">
          <h2 className="font-[family-name:var(--font-heading)] text-[2rem] font-bold sm:text-[2.65rem]">
            At Your Service
          </h2>

          <div className="mx-auto mt-7 h-1 w-[4.5rem] rounded-full bg-[#f26a44]" />

          <div className="mt-16 grid grid-cols-1 gap-14 md:grid-cols-2 xl:grid-cols-4">
            {serviceItems.map(({ title, description, Icon }) => (
              <article key={title} className="mx-auto max-w-[270px] text-center">
                <Icon className="mx-auto h-[3.9rem] w-[3.9rem] text-[#f26a44]" strokeWidth={1.9} />
                <h3 className="mt-6 font-[family-name:var(--font-heading)] text-[2rem] font-bold leading-[1.12] text-[#0f172a]">
                  {title}
                </h3>
                <p className="mt-5 font-[family-name:var(--font-body)] text-[1.08rem] leading-[1.5] text-[#5f6c7b]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-[92px] bg-[#111111]" id="portfolio">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map(({ src, alt }) => (
            <a
              key={src}
              href={src}
              target="_blank"
              rel="noreferrer"
              className="group relative block h-[220px] overflow-hidden sm:h-[240px] lg:h-[260px]"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-[#f26a44]/0 transition-colors duration-300 group-hover:bg-[#f26a44]/45" />
            </a>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen bg-[#f2f2f2] px-6 py-[6.5rem] sm:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-5xl text-center text-[#0f172a]">
          <h2 className="font-[family-name:var(--font-heading)] text-[2.1rem] font-medium sm:text-[2.8rem]">
            Let&apos;s Get In Touch!
          </h2>

          <div className="mx-auto mt-6 h-1 w-[4.5rem] rounded-full bg-[#f26a44]" />

          <p className="mx-auto mt-8 max-w-4xl font-[family-name:var(--font-body)] text-[1.12rem] leading-[1.45] text-[#1f2937] sm:text-[1.25rem]">
            Ready to start your next project with us? That&apos;s great! Give us
            a call or send us an email and we will get back to you as soon as
            possible!
          </p>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-20">
            <div className="flex flex-col items-center">
              <Phone className="h-11 w-11 text-[#0f172a]" strokeWidth={1.8} />
              <p className="mt-5 font-[family-name:var(--font-body)] text-[1.75rem] text-[#0f172a]">
                123-456-6789
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Mail className="h-11 w-11 text-[#0f172a]" strokeWidth={1.8} />
              <a
                href="mailto:email@example.com"
                className="mt-5 font-[family-name:var(--font-body)] text-[1.75rem] text-[#f26a44] underline decoration-[#f26a44] underline-offset-4"
              >
                email@example.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

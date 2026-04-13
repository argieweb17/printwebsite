import Image from "next/image";
import { Lora, Montserrat } from "next/font/google";

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

const navItems = ["PRODUCTS", "PRICING", "GALLERY", "CONTACT"];

export default function Home() {
  return (
    <div className={`${headingFont.variable} ${bodyFont.variable} text-white`}>
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/background.jpg"
          alt=""
          fill
          priority
          className="absolute inset-0 object-cover object-left-top"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,32,33,0.58)_0%,rgba(36,32,33,0.62)_45%,rgba(36,32,33,0.68)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-12 pt-[24px] sm:px-10 lg:px-14">
          <header className="flex items-center justify-between">
            <p className="font-[family-name:var(--font-heading)] text-2xl font-extrabold tracking-wide">
              AI PRINTS
            </p>

            <nav className="hidden lg:block" aria-label="Primary navigation">
              <ul className="flex items-center gap-10 font-[family-name:var(--font-heading)] text-[0.95rem] font-bold tracking-wide text-white/80">
                {navItems.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition-colors hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          <main className="flex flex-1 items-start justify-center pt-20 sm:pt-24 lg:pt-28">
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

      <section className="bg-[#f26443] px-6 py-24 sm:px-10 lg:px-14">
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
    </div>
  );
}

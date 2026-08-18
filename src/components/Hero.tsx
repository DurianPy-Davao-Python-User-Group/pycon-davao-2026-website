import Image from 'next/image';
import heroLogo from '@/assets/hero/hero-logo.svg';
import heroBridgePattern from '@/assets/hero/hero-bridge-pattern.svg';
import heroMountainLeftBg from '@/assets/hero/hero-mountain-left-bg.svg';
import heroMountainLeftFg from '@/assets/hero/hero-mountain-left-fg.svg';
import heroMountainRight from '@/assets/hero/hero-mountain-right.svg';
import heroBg from '@/assets/hero/hero-bg.svg';
import pattern4 from '@/assets/hero/pattern-4.svg';

export default function Hero() {
  return (
    <section className="from-pycon-beige to-pycon-beige relative flex min-h-[100dvh] w-full flex-col justify-between overflow-hidden bg-gradient-to-b via-[#fcf5de] via-50%">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <Image
          src={heroBridgePattern}
          alt=""
          fill
          className="hidden object-cover object-top opacity-25 md:block"
          priority
        />

        <Image
          src={heroBg}
          alt=""
          fill
          className="object-cover object-center opacity-60 md:opacity-50"
          priority
        />
      </div>

      <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 pt-16 pb-16 text-center sm:px-8 md:pt-24 md:pb-24 lg:pt-28">
        <div className="relative mb-4 w-full max-w-[280px] sm:mb-6 sm:max-w-[440px] md:max-w-[540px] lg:max-w-[620px]">
          <Image
            src={heroLogo}
            alt="PyCon Davao 2026 Logo"
            width={968}
            height={472}
            className="h-auto w-full drop-shadow-xs"
            priority
          />
        </div>

        <h1 className="font-heading text-pycon-teal-dark mb-3 text-xl leading-snug tracking-tight sm:mb-4 sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem]">
          <span className="font-bold">PAGLANTAW</span>
          <span className="font-medium">: Envisioning the Future Through Python</span>
        </h1>

        <p className="text-pycon-dark-blue/90 mb-6 max-w-[600px] font-sans text-base leading-relaxed sm:mb-10 sm:text-lg md:text-xl">
          Mindanao&apos;s largest Python summit returns for its second full-scale edition, ready to
          jump-start your next breakthrough.
        </p>

        <div className="relative z-30">
          <button
            type="button"
            className="font-heading group bg-pycon-teal text-pycon-beige-light inline-flex cursor-pointer items-center justify-center rounded-full px-8 py-3.5 text-base font-bold shadow-[0px_4px_24px_0px_rgba(4,177,164,0.35)] transition-all duration-200 hover:scale-[1.03] hover:bg-[#039d91] hover:shadow-[0px_8px_32px_0px_rgba(4,177,164,0.45)] active:scale-[0.98] sm:px-10 sm:py-4 sm:text-lg md:text-xl"
          >
            <span>Early-Bird Tickets Opening Soon</span>
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden select-none md:block">
        <div
          className="absolute bottom-[8vh] left-[-55vw] w-[120vw] max-w-[1600px] min-w-[650px] sm:bottom-[12vh] sm:left-[-45vw] sm:w-[100vw] md:bottom-[16vh] md:left-[-40vw] md:w-[95vw] lg:bottom-[20vh] lg:left-[-35vw] lg:w-[80vw]"
          style={{
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 85%, rgba(0,0,0,0) 100%)',
            maskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 85%, rgba(0,0,0,0) 100%)',
          }}
        >
          <Image
            src={heroMountainLeftBg}
            alt=""
            width={2106}
            height={1020}
            className="h-auto w-full translate-y-0.5 object-contain object-bottom opacity-90"
            priority
          />
        </div>

        <div
          className="absolute bottom-0 left-[-30vw] w-[85vw] max-w-[1100px] min-w-[500px] sm:left-[-25vw] sm:w-[70vw] md:left-[-25vw] md:w-[75vw] lg:left-[-20vw] lg:w-[60vw]"
          style={{
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)',
            maskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)',
          }}
        >
          <Image
            src={heroMountainLeftFg}
            alt=""
            width={1171}
            height={519}
            className="h-auto w-full translate-y-0.5 object-contain object-bottom opacity-70"
            priority
          />
        </div>

        <div
          className="absolute right-[-50vw] bottom-[-4vh] w-[110vw] max-w-[1600px] min-w-[600px] sm:right-[-45vw] sm:bottom-[-6vh] sm:w-[95vw] md:right-[-45vw] md:bottom-[-6vh] md:w-[95vw] lg:right-[-40vw] lg:bottom-[-8vh] lg:w-[80vw]"
          style={{
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)',
            maskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)',
          }}
        >
          <Image
            src={heroMountainRight}
            alt=""
            width={1773}
            height={786}
            className="h-auto w-full translate-y-0.5 object-contain object-bottom opacity-70"
            priority
          />
        </div>
      </div>

      <div className="relative z-20 w-full overflow-hidden leading-none">
        <Image
          src={pattern4}
          alt=""
          width={1920}
          height={99}
          className="h-6 w-full object-cover object-center sm:h-9 md:h-12"
          priority
        />
      </div>
    </section>
  );
}

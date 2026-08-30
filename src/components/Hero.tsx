import Image from 'next/image';
import heroLogo from '@/assets/hero/hero-logo.svg';
import heroBridgePattern from '@/assets/hero/hero-bridge-pattern.svg';
import heroMountainLeftBg from '@/assets/hero/hero-mountain-left-bg.svg';
import heroMountainLeftFg from '@/assets/hero/hero-mountain-left-fg.svg';
import heroMountainRight from '@/assets/hero/hero-mountain-right.svg';
import heroBg from '@/assets/hero/hero-bg.svg';
import pattern4 from '@/assets/hero/pattern-4.svg';
import heroMascot from '@/assets/hero/hero-mascot.svg'
import heroSnake from '@/assets/hero/hero-snake.svg'

export default function Hero() {
  return (
    <section className="from-pycon-beige to-pycon-beige relative flex min-h-[55dvh] w-full flex-col justify-between overflow-hidden bg-gradient-to-b via-[#fcf5de] via-50% md:min-h-[65dvh] lg:min-h-[95dvh]">
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

      <div className="relative z-20 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 pt-10 pb-24 text-center sm:px-8 sm:pt-16 sm:pb-28 md:px-16 md:pt-20 md:pb-32 lg:px-24 lg:pt-24 lg:pb-36 xl:px-28">
        <div className="relative mb-3 w-full max-w-[210px] sm:mb-5 sm:max-w-[320px] md:mb-6 md:max-w-[420px] lg:max-w-[500px] xl:max-w-[560px]">
          <Image
            src={heroLogo}
            alt="PyCon Davao 2026 Logo"
            width={968}
            height={472}
            className="h-auto w-full drop-shadow-xs"
            priority
          />
        </div>

        <h1 className="font-heading text-pycon-teal-dark mb-2.5 max-w-[290px] text-lg leading-snug tracking-tight sm:mb-3.5 sm:max-w-[480px] sm:text-xl md:mb-4 md:max-w-[620px] md:text-xl lg:max-w-[740px] lg:text-2xl xl:max-w-[800px] xl:text-[1.90rem]">
          <span className="font-bold">PAGLANTAW</span>
          <span className="font-medium">: Envisioning the Future Through Python</span>
        </h1>

        <p className="text-pycon-dark-blue/90 mb-5 max-w-[280px] font-sans text-xs leading-relaxed sm:mb-7 sm:max-w-[420px] sm:text-sm md:mb-8 md:max-w-[520px] md:text-base lg:max-w-[580px] lg:text-lg">
          Davao&apos;s largest Python summit returns for its second full-scale edition, ready to
          jump-start your next breakthrough.
        </p>

        <div className="relative z-30">
          <button
            type="button"
            className="font-heading group bg-pycon-teal text-pycon-beige-light inline-flex cursor-pointer items-center justify-center rounded-full px-5 py-2.5 text-xs font-bold shadow-[0px_4px_24px_0px_rgba(4,177,164,0.35)] transition-all duration-200 hover:scale-[1.03] hover:bg-[#039d91] hover:shadow-[0px_8px_32px_0px_rgba(4,177,164,0.45)] active:scale-[0.98] sm:px-7 sm:py-3.5 sm:text-base md:px-9 md:py-4 md:text-lg lg:text-xl"
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

      {/* Characters: Mascot (Left) & Snake (Right) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 select-none">
        {/* Left Mascot */}
        <div className="absolute -left-6 bottom-6 w-[130px] sm:-left-10 sm:bottom-8 sm:w-[180px] md:-left-14 md:bottom-10 md:w-[240px] lg:-left-16 lg:bottom-12 lg:w-[260px] xl:-left-0 xl:w-[320px]">
          <Image
            src={heroMascot}
            alt="PyCon Davao Mascot"
            className="h-auto w-full object-contain object-bottom drop-shadow-[0px_8px_24px_rgba(0,0,0,0.12)]"
            priority
          />
        </div>

        {/* Right Snake */}
        <div className="absolute -right-6 bottom-6 w-[125px] sm:-right-10 sm:bottom-8 sm:w-[175px] md:-right-14 md:bottom-10 md:w-[230px] lg:-right-16 lg:bottom-12 lg:w-[250px] xl:-right-0 xl:w-[305px]">
          <Image
            src={heroSnake}
            alt="Python Snake"
            className="h-auto w-full object-contain object-bottom drop-shadow-[0px_8px_24px_rgba(0,0,0,0.12)]"
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

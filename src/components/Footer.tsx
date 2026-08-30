import Image from 'next/image';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import footerFrame from '@/assets/hero/footer-frame.svg';
import footerInfoPattern from '@/assets/hero/footer-info-pattern-1.svg';
import footerInfoPattern2 from '@/assets/hero/footer-info-pattern-2.svg';
import footerVerticalPattern from '@/assets/hero/footer-vertical-pattern.svg';
import footerBottomMountain from '@/assets/hero/footer-bottom-mountain.svg';

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/durianpy',
    icon: FaFacebookF,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/durianpy.dvo',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/durianpy',
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/orgs/DurianPy-Davao-Python-User-Group',
    icon: FaGithub,
  },
];

export default function Footer() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FBEFCF]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[-4px] z-10 h-[28px] overflow-hidden sm:top-[-6px] sm:h-[38px] md:top-[-8px] md:h-[50px] lg:top-[-10px] lg:h-[68px]"
        >
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url(${footerInfoPattern.src})`,
              backgroundRepeat: 'repeat-x',
              backgroundPosition: 'center top',
              backgroundSize: 'auto 100%',
            }}
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(251,239,207,0) 34.62%, #FBEFCF 100%)',
          }}
        />

        <div className="relative z-[1] mx-auto flex w-full max-w-[1510px] flex-col gap-5 px-5 pt-[108px] pb-[145px] sm:px-8 sm:pt-[125px] sm:pb-[165px] md:pt-[135px] lg:flex-row lg:items-start lg:justify-center lg:gap-[84px] lg:px-10 lg:pt-[160px] lg:pb-[180px]">
          <article className="w-full rounded-[28px] bg-[#F99508] px-7 py-8 text-[#FDDEB2] sm:px-9 sm:py-9 lg:w-[742px] lg:rounded-[29px] lg:px-[40px] lg:py-[30px]">
            <h2
              className="font-heading text-[24px] leading-[1.15] font-bold tracking-[-0.02em] sm:text-[27px] md:text-[30px] lg:text-[32px]"
              style={{
                color: '#FFF2D8',
                opacity: 1,
              }}
            >
              Contact Information
            </h2>

            <p className="mt-6 font-sans text-[14px] leading-[1.6] font-medium text-[#FDDEB2] sm:text-[15px] md:text-[17px] lg:mt-[28px] lg:text-[19px] lg:leading-[30px]">
              If you believe someone is violating the Code of Conduct or if you have any other
              concerns, please reach out to a member of the PyCon Davao 2025 Code of Conduct
              workgroup immediately. You can contact them via email at{' '}
              <a href="mailto:contact@durianpy.org" className="transition-opacity hover:opacity-75">
                contact@durianpy.org
              </a>
              .
            </p>
          </article>

          <article className="w-full rounded-[28px] bg-[#5DA144] px-7 py-8 text-[#FDDEB2] sm:px-9 sm:py-9 lg:w-[541px] lg:rounded-[29px] lg:px-[40px] lg:py-[30px]">
            <h2
              className="font-heading text-[24px] leading-[1.15] font-bold tracking-[-0.02em] sm:text-[27px] md:text-[30px] lg:text-[32px]"
              style={{
                color: '#FFF2D8',
                opacity: 1,
              }}
            >
              License
            </h2>

            <p className="mt-6 font-sans text-[14px] leading-[1.6] font-medium text-[#FDDEB2] sm:text-[15px] md:text-[17px] lg:mt-[28px] lg:text-[19px] lg:leading-[30px]">
              This Code of Conduct is adapted from the PyCon US 2015 Code of Conduct and is licensed
              under a Creative Commons Attribution 3.0 Unported License.
            </p>
          </article>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-[-4px] z-10 h-[28px] overflow-hidden sm:bottom-[-6px] sm:h-[38px] md:bottom-[-8px] md:h-[50px] lg:bottom-[-10px] lg:h-[68px]"
        >
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url(${footerInfoPattern2.src})`,
              backgroundRepeat: 'repeat-x',
              backgroundPosition: 'center bottom',
              backgroundSize: 'auto 100%',
            }}
          />
        </div>
      </section>

      <footer className="relative overflow-hidden bg-[#FBEFCF] text-[#072E47]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-[-4px] z-10 w-[28px] overflow-hidden sm:left-[-6px] sm:w-[38px] md:left-[-8px] md:w-[50px] lg:left-[-10px] lg:w-[68px]"
        >
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url(${footerVerticalPattern.src})`,
              backgroundRepeat: 'repeat-y',
              backgroundPosition: 'left center',
              backgroundSize: '100% auto',
            }}
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-[-4px] z-10 w-[28px] overflow-hidden sm:right-[-6px] sm:w-[38px] md:right-[-8px] md:w-[50px] lg:right-[-10px] lg:w-[68px]"
        >
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url(${footerVerticalPattern.src})`,
              backgroundRepeat: 'repeat-y',
              backgroundPosition: 'right center',
              backgroundSize: '100% auto',
            }}
          />
        </div>

        <div className="relative mx-auto h-[590px] w-full max-w-[1920px] sm:h-[625px] md:h-[660px] lg:h-[700px]">
          <div className="relative z-20 flex flex-col items-center px-5 pt-16 sm:pt-20 lg:pt-24">
            <Image
              src={footerFrame}
              alt="PyCon Davao 2026"
              width={875}
              height={461}
              priority
              draggable={false}
              className="h-auto w-[320px] max-w-[86vw] select-none sm:w-[370px] md:w-[430px] lg:w-[500px]"
            />

            <button
              type="button"
              disabled
              className="disabled:pointer-events-none contrast-50 font-heading mt-5 inline-flex h-[52px] w-[290px] cursor-pointer items-center justify-center rounded-full bg-[#F99508] px-8 text-base font-medium text-[#FBEFCF] shadow-[0px_4px_24px_0px_rgba(249,149,8,0.28)] transition-all duration-200 hover:scale-[1.03] hover:bg-[#e98a00] hover:shadow-[0px_8px_32px_0px_rgba(249,149,8,0.38)] active:scale-[0.98] sm:h-[54px] sm:w-[300px] sm:text-lg md:w-[300px] lg:h-[56px] lg:w-[335px] lg:text-xl"
            >
              TICKETS OPENING SOON
            </button>

            <p className="mt-6 max-w-[960px] px-5 text-center font-sans text-[18px] leading-[1.45] font-medium sm:text-[18px] md:text-[19px] lg:mt-7 lg:text-[20px]">
              Message us at{' '}
              <a
                href="mailto:contact@durianpy.org"
                className="font-medium transition-opacity hover:opacity-70"
              >
                contact@durianpy.org
              </a>{' '}
              for questions and inquiries
            </p>

            <div className="mt-4 flex items-center justify-center gap-[12px] sm:gap-[14px]">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#372544] text-[#FBEFCF] transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:opacity-85 focus-visible:ring-2 focus-visible:ring-[#372544] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBEFCF] focus-visible:outline-none sm:h-9 sm:w-9"
                >
                  <Icon aria-hidden="true" className="h-[16px] w-[16px] sm:h-[17px] sm:w-[17px]" />
                </a>
              ))}
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-center overflow-hidden"
          >
            <Image
              src={footerBottomMountain}
              alt=""
              width={1920}
              height={322}
              priority
              draggable={false}
              className="h-auto w-[220%] min-w-[780px] max-w-none select-none sm:w-[160%] sm:min-w-[960px] md:w-[130%] md:min-w-[1200px] lg:w-full lg:min-w-0"
            />
          </div>
        </div>
      </footer>

      <style>{`
        html,
        body {
          overscroll-behavior-y: none;
        }
      `}</style>
    </>
  );
}

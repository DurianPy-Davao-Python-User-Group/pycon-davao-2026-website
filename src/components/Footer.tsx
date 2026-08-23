import Image from 'next/image';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import footerFrame from '@/assets/hero/footer-frame.svg';
import footerInfoPattern from '@/assets/hero/footer-info-pattern.svg';
import footerMntn from '@/assets/hero/footer-mntn.svg';
import footerRattle from '@/assets/hero/footer-rattle.svg';
import footerTail from '@/assets/hero/footer-tail.svg';
import footerTail2 from '@/assets/hero/footer-tail2.svg';
import footerVector from '@/assets/hero/footer-vector.svg';

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
      <section className="relative overflow-hidden bg-[#04B1A4]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[-8px] z-10 h-[55px] overflow-hidden sm:h-[58px] md:h-[62px] lg:top-[-10px] lg:h-[68px]"
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

          <article className="w-full rounded-[28px] bg-[#F99508] px-7 py-8 text-[#FDDEB2] sm:px-9 sm:py-9 lg:w-[541px] lg:rounded-[29px] lg:px-[40px] lg:py-[30px]">
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
      </section>

      <footer className="relative overflow-hidden bg-[#FBEFCF] text-[#072E47]">
        <div className="relative mx-auto h-[590px] w-full max-w-[1920px] sm:h-[625px] md:h-[660px] lg:h-[700px]">
          <div className="relative z-20 flex flex-col items-center px-5 pt-7 sm:pt-8 lg:pt-7">
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
              className="font-heading mt-5 inline-flex h-[52px] w-[250px] cursor-pointer items-center justify-center rounded-full bg-[#F99508] px-8 text-base font-medium text-[#FBEFCF] shadow-[0px_4px_24px_0px_rgba(249,149,8,0.28)] transition-all duration-200 hover:scale-[1.03] hover:bg-[#e98a00] hover:shadow-[0px_8px_32px_0px_rgba(249,149,8,0.38)] active:scale-[0.98] sm:h-[54px] sm:w-[280px] sm:text-lg md:w-[300px] lg:h-[56px] lg:w-[315px] lg:text-xl"
            >
              GET TICKETS
            </button>

            <p className="mt-6 max-w-[960px] px-5 text-center font-sans text-[18px] leading-[1.45] font-medium sm:text-[18px] md:text-[19px] lg:mt-7 lg:text-[20px]">
              Message us at{' '}
              <a
                href="mailto:durianpy.davao@gmail.com"
                className="font-medium transition-opacity hover:opacity-70"
              >
                durianpy.davao@gmail.com
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
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[205px] sm:h-[225px] md:h-[250px] lg:h-[275px]"
          >
            <div className="absolute inset-x-0 bottom-0 h-full overflow-hidden">
              <Image
                src={footerTail2}
                alt=""
                width={564}
                height={342}
                draggable={false}
                className="absolute bottom-[-14px] left-[61%] z-[1] h-auto w-[190px] max-w-none select-none sm:right-[6%] sm:left-auto sm:w-[240px] md:right-[12%] md:w-[280px] lg:right-[15%] lg:bottom-[-18px] lg:w-[315px]"
              />

              <Image
                src={footerMntn}
                alt=""
                width={788}
                height={343}
                draggable={false}
                className="absolute bottom-[-38px] left-1/2 z-[2] h-auto w-[420px] max-w-none -translate-x-1/2 select-none sm:bottom-[-44px] sm:w-[470px] md:bottom-[-52px] md:w-[525px] lg:bottom-[-62px] lg:w-[590px]"
              />

              <Image
                src={footerVector}
                alt=""
                width={728}
                height={119}
                draggable={false}
                className="absolute bottom-[-4px] left-1/2 z-[3] h-auto w-[380px] max-w-none -translate-x-1/2 select-none sm:w-[425px] md:w-[475px] lg:w-[530px]"
              />

              <div
                className="absolute bottom-[-55px] left-1/2 z-[4] w-[820px] max-w-none origin-center sm:w-[1080px] md:w-[1270px] lg:w-[1120px]"
                style={{
                  transform: 'translateX(-82%) rotate(10deg)',
                }}
              >
                <div className="w-[90%] overflow-hidden">
                  <Image
                    src={footerTail}
                    alt=""
                    width={5590}
                    height={922}
                    draggable={false}
                    className="h-auto w-[111.111%] max-w-none select-none"
                  />
                </div>
              </div>

              <Image
                src={footerRattle}
                alt=""
                width={131}
                height={352}
                draggable={false}
                className="absolute bottom-[8px] left-[72%] z-[2] hidden h-auto w-[38px] max-w-none select-none sm:right-[4%] sm:left-auto sm:block sm:w-[48px] md:right-[9%] md:w-[57px] lg:right-[13%] lg:bottom-[10px] lg:w-[68px]"
              />
            </div>
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

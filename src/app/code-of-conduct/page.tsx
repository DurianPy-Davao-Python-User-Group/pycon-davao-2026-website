import Image from 'next/image';
import bridgePattern from '@/assets/code-of-conduct/Bridge_Pattern.svg';
import tail4 from '@/assets/code-of-conduct/Tail4.svg';
import border from '@/assets/code-of-conduct/Border.svg';
import mountain from '@/assets/code-of-conduct/Mountain.svg';
import frame from '@/assets/code-of-conduct/Frame_10.svg'

export default function Home() {
  return (
    <>
      <main className="bg-background relative flex min-h-[100dvh] flex-col justify-between overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
          <Image
            src={bridgePattern}
            alt=""
            fill
            className="object-cover object-center opacity-95"
            priority
          />
        </div>
        {/* Header Hero Banner */}
        <section className="relative z-10 w-full">
          <div className="relative mx-auto flex w-full items-center justify-between gap-4 px-6 pt-8 pb-6 sm:px-10 sm:pt-12 sm:pb-8 md:px-14 md:pt-16 md:pb-10 lg:px-20 lg:pt-20 lg:pb-12 xl:px-24 xl:pt-24 xl:pb-14">
            <div className="relative z-10 flex flex-col gap-2 sm:gap-3 md:gap-4">
              <h1 className="font-heading text-pycon-orange text-4xl font-extrabold leading-[0.88] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9.5rem]">
                <span className="block">CODE OF</span>
                <span className="block">CONDUCT</span>
              </h1>
              <h2 className="font-heading text-pycon-teal text-base font-bold tracking-tight sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                PYCON DAVAO 2026
              </h2>
            </div>
            <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 shrink-0 select-none">
              <div className="w-24 sm:w-40 md:w-56 lg:w-[360px] xl:w-[440px] 2xl:w-[560px]">
                <Image
                  src={tail4}
                  alt=""
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bottom Pattern Border Ribbon */}
          <div className="relative z-20 w-full overflow-hidden leading-none select-none">
            <Image
              src={border}
              alt=""
              width={1920}
              height={56}
              draggable={false}
              className="h-6 w-full object-cover object-center sm:h-8 md:h-10 lg:h-12 xl:h-14"
              priority
            />
          </div>
        </section>

        <div className="relative z-10 mx-auto flex w-full flex-1 flex-col gap-6 p-6 sm:p-10 md:p-14 lg:p-20">
          <div className="flex flex-col gap-6 text-base leading-relaxed sm:gap-8 sm:text-lg md:gap-10 md:text-xl lg:text-2xl">
            <p>
              <strong className="text-pycon-teal">PyCon Davao</strong> is a community event
              dedicated to promoting collaboration, learning, and innovation within the Python
              community. We are committed to providing a welcoming, safe, and inclusive environment
              for all participants. All attendees, speakers, exhibitors, organizers, and volunteers
              at PyCon Davao are required to adhere to the following Code of Conduct, which will be
              enforced throughout the event.
            </p>

            <p>
              <strong className="text-pycon-teal">
                Harassment, in any form, will not be tolerated.
              </strong>{' '}
              Harassment includes, but is not limited to, offensive verbal comments related to
              gender, gender identity and expression, sexual orientation, disability, physical
              appearance, body size, race, religion, or status. This also includes the display of
              sexual images in public spaces, deliberate intimidation, stalking, following,
              harassing photography or recording, sustained disruption of talks or other events,
              inappropriate physical contact, and unwelcome sexual attention.
            </p>

            <p>
              <strong className="text-pycon-teal">All participants</strong> are expected to avoid
              using language or behavior that might be offensive or exclusionary. This includes
              sexist, racist, or other discriminatory jokes, excessive swearing, and any conduct
              that may create a hostile environment.
            </p>

            <p>
              <strong className="text-pycon-teal">
                Exhibitors and sponsors must also adhere to this policy.
              </strong>{' '}
              This includes refraining from the use of sexualized images, activities, or materials
              in their displays, and ensuring that all booth staff and volunteers maintain a
              professional and inclusive demeanor.
            </p>

            <p>
              <strong className="text-pycon-teal">If a participant</strong> engages in harassing
              behavior, PyCon Davao organizers may take any action they deem appropriate, including
              warning the offender or expelling them from the event without a refund.
            </p>

            <p>
              <strong className="text-pycon-teal">
                If you are being harassed, notice that someone else is being harassed, or have any
                other concerns, please contact a member of the event staff immediately.
              </strong>{' '}
              Staff members can be identified by their official event badges. We will be happy to
              help you contact venue security, local law enforcement, or otherwise assist you in
              feeling safe during the event.
            </p>
          </div>
        </div>
        <div className="relative pointer-events-none z-10 flex w-full select-none">
          <div className="absolute bottom-[-30] w-full h-[500px] lg:h-[700px]">
            <Image src={frame} alt="" className="to-pycon-beige from-transparent h-auto w-full opacity-40 object-contain" priority />
          </div>
          <div className="w-full z-10">
            <Image src={mountain} alt="" className="h-auto w-full object-contain" priority />
          </div>
        </div>
      </main>
    </>
  );
}

import Image from 'next/image';
import bridgePattern from '@/assets/code-of-conduct/Bridge_Pattern.svg';
import tail from '@/assets/code-of-conduct/Tail.svg';

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
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 p-6 sm:p-10 md:p-14 lg:p-20">
          <div className="font-heading leading-none">
            <h1 className="text-pycon-orange text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
              CODE OF
            </h1>
            <h1 className="text-pycon-orange text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
              CONDUCT
            </h1>
          </div>
          <h2 className="font-heading text-pycon-teal text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            PYCON DAVAO 2026
          </h2>
          <div className="flex flex-col gap-6 text-base leading-relaxed sm:gap-8 sm:text-lg md:gap-10 md:text-xl lg:text-2xl">
            <p>
              <strong className="text-pycon-teal">PyCon Davao 2026</strong> is a community event
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
        <div className="pointer-events-none z-10 flex w-full justify-end select-none">
          <div className="w-48 sm:w-64 md:w-80 lg:w-[420px] xl:w-[500px]">
            <Image src={tail} alt="" className="h-auto w-full object-contain" priority />
          </div>
        </div>
      </main>
    </>
  );
}

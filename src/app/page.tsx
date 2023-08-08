/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

function LandingPage() {
  return (
    <div className='w-[100vw] h-[100vh] items-center'>
      <div className='flex flex-col text-center  p-4'>
        <Link className='text-7xl border-slate-50 border-2' href={'/furniture'}>
          Check it out <span className='animate-pulse'>▶</span>
        </Link>
        <a
          className='text-3xl underline underline-offset-2 text-pink-500'
          href='https://dribbble.com/shots/21753130-Int-rieur-Interior-Design-Agency-Landing-Page-Website'
        >
          Original Dribble
        </a>
      </div>
      <div className='flex justify-center'>
        <img src='/bg.png' className='' />
      </div>
    </div>
  );
}

export default LandingPage;

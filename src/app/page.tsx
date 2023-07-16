import Link from 'next/link';

function LandingPage() {
  return (
    <div className='w-[100vw] h-[100vh] grid grid-cols-1 grid-rows-1 items-center'>
      <img src='/bg.png' className='col-start-1 col-end-2' />
      <div className='flex flex-col text-center col-start-1 col-end-2 '>
        <Link className='text-7xl border-slate-50 border-2' href={'/furniture'}>
          Check it out
        </Link>
        <a
          className='text-3xl text-pink-500'
          href='https://dribbble.com/shots/21753130-Int-rieur-Interior-Design-Agency-Landing-Page-Website'
        >
          Original Dribble
        </a>
      </div>
    </div>
  );
}

export default LandingPage;

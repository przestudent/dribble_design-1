/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
function Main() {
  return (
    <main className='py-14 border-b-2 border-zinc-600 '>
      <h1 className='text-[11rem] leading-[7rem]'>
        <div>
          Transfo
          <span className='relative'>
            rm
            <div className='absolute left-0'>
              <img alt='couch' className='' src={'/couch-1.jpg'} />
            </div>
          </span>
        </div>
        <div>your space</div>
      </h1>
    </main>
  );
}

export default Main;

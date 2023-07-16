/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import ContentDivison from './ContentDivision';
import GradientSphere from '../lib/GradientSphere';
function Main() {
  return (
    <ContentDivison>
      <h1 className='text-[11rem] leading-[7rem]'>
        <div>Transform</div>
        <div>your space</div>
      </h1>
      <div className='mr-28'>
        <div className=' relative '>
          <div className='flex justify-end'>
            <img src='/couch-1.jpg' alt='' />
          </div>
          <GradientSphere className='top-0 right-0 translate-x-[50%] -translate-y-[50%]' />
          <div className='absolute top-[50%] left-0 -translate-y-[50%] flex items-center justify-between w-[70%]'>
            <h2>
              <div>Interior design agency</div>
              <div>since 1998</div>
            </h2>
            <div>
              <button className='mr-14'>Start Project</button>
              <button>Learn More</button>
            </div>
          </div>
          <div className='absolute right-0 top-[25%] text-right translate-x-[50%] text-zinc-300'>
            <div>
              <div>The mind creates the</div>
              <div>beatiful, the heart creates</div>
              <div>the home. home sweet home</div>
            </div>
          </div>
        </div>
      </div>
    </ContentDivison>
  );
}

export default Main;

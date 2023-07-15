import Button from './Button';

function VideoSection() {
  return (
    <section className='flex justify-between py-28 border-b-2 border-zinc-500'>
      <div className='w-1/3'>
        <h2 className='text-zinc-500 text-5xl'>
          Capture
          <span className='text-slate-50'>
            {' '}
            the spirit of
            <br />
            spring
          </span>{' '}
          in your home
        </h2>
        <p className='text-zinc-500 my-24 text-xl'>
          We provide guidance and direction in <br />
          your interior design project, inspire your <br />
          space through art and design, create a <br />
          space that reflects who your are
        </p>
        <Button text='Learn more' justify='' className='pt-20' />
      </div>
      <div className='w-3/5 relative flex justify-end'>
        <img src='/wide.jpg' alt='wide' />
        <div className='absolute flex items-center top-0 left-0 h-full w-full justify-center'>
          <div className='text-7xl  p-10 backdrop-blur-lg border-2 border-slate-50 rounded-[100%]'>
            <span className='translate-x-12'>▶ </span>
            {/* TODO: Fix? ^ */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;

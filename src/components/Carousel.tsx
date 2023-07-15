import Image from 'next/image';
import ContentDivison from './ContentDivision';

function Carousel() {
  const count = [1, 2, 3, 4];
  return (
    <ContentDivison>
      <div className='text-zinc-500 flex justify-between py-28 items-center'>
        <h2 className=' text-3xl'>
          Decorate{' '}
          <span className='text-slate-50'>
            every inch of the <br />
            house{' '}
          </span>
          to make it feel homey
        </h2>
        <h3>
          Carve out a little piece of paradise <br />
          with some of our top, the home <br />
          of your dreams begins with the <br />
          perfect palette for every room
        </h3>
      </div>
      <div className='grid justify-items-center items-center justify-between grid-cols-4'>
        {count.map((e) => {
          return (
            <Image
              alt='couch'
              width={305}
              height={90}
              className=' aspect-[9/16]'
              src={'/couch-1.jpg'}
              key={e}
            />
          );
        })}
      </div>
    </ContentDivison>
  );
}

export default Carousel;

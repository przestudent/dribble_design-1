import Image from 'next/image';
import ContentDivison from './ContentDivision';

function ListWithArrows() {
  const data = [
    { title: 'Home Design' },
    { title: 'Interior Detailing' },
    { title: 'Furniture Layout' },
  ];
  return (
    <ContentDivison>
      {data.map((el, idx) => {
        return (
          <div
            key={el.title}
            className={` ${
              idx === 0 ? '' : ' border-zinc-500 border-t-2'
            } flex justify-between items-center  text-zinc-600 text-5xl  `}
          >
            <h3 className='hover:text-slate-50 transition-all duration-700'>
              {el.title}
            </h3>
            <div className='relative flex items-center justify-end'>
              <Image
                src='/wide.jpg'
                alt='wide'
                height={20}
                width={300}
                className='mr-16'
              />
              <span className='absolute'>Arrow</span>
            </div>
          </div>
        );
      })}
    </ContentDivison>
  );
}

export default ListWithArrows;

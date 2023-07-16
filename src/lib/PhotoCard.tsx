'use client';
import { FC, useState } from 'react';
import Image from 'next/image';
import LearnMore from './LearnMore';
const PhotoCard: FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className='relative'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Image
        alt='couch'
        width={305}
        height={90}
        className=' aspect-[9/16]'
        src={'/couch-1.jpg'}
      />
      <div className='absolute top-0 left-0 flex w-full h-full items-center justify-center'>
        <LearnMore
          isHovering={isHovering}
          className={`${
            isHovering ? 'opacity-100' : 'opacity-0'
          } backdrop-blur-sm`}
        />
      </div>
    </div>
  );
};

export default PhotoCard;

import { FC } from 'react';

interface LearnMoreProps {
  className?: string;
  isHovering: boolean;
}

const LearnMore: FC<LearnMoreProps> = ({ className = '', isHovering }) => {
  return (
    <button
      className={`${className}  transition-opacity  border-2 border-slate-50 py-3 px-8 flex justify-center items-center rounded-[100px]`}
    >
      Learn More
    </button>
  );
};

export default LearnMore;

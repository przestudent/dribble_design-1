import { FC } from 'react';

interface GradientSphereProps {
  className?: string;
}

const GradientSphere: FC<GradientSphereProps> = ({
  className = 'bottom-0 right-0 translate-y-[50%] translate-x-[50%]',
}) => {
  return (
    <div
      className={` ${className}  gradient-sphere rounded-[100%] drop-shadow-md  absolute w-28 h-28`}
    ></div>
  );
};

export default GradientSphere;

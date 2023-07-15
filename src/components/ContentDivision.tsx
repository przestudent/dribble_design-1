import { FC, PropsWithChildren } from 'react';

interface ContentDivisonProps {
  className?: string;
}

const ContentDivison: FC<PropsWithChildren<ContentDivisonProps>> = ({
  children,
  className = '',
}) => {
  return (
    <section className={`py-28 border-b-2 border-zinc-500   ${className} `}>
      {children}
    </section>
  );
};

export default ContentDivison;

function Button({
  text,
  className = '',
  justify = 'justify-end',
}: {
  text: string;
  justify?: string;
  className?: string;
}) {
  return (
    <div className={`flex ${justify} ${className} `}>
      <button className='flex g-6 items-center  py-3 px-8 text-2xl border-[3px] rounded-[100px] border-slate-50'>
        <div>{text}</div> <span className='text-5xl'> &#8594;</span>
      </button>
    </div>
  );
}

export default Button;

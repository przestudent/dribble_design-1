function ListWithArrows() {
  const data = [{ title: 'Home Design' }, { title: 'Interior Detailing' }];
  return (
    <ul className='py-28 border-b-2 border-zinc-500'>
      {data.map((el, idx) => {
        return (
          <li
            key={el.title}
            className={` ${
              idx === 0 ? '' : ' border-zinc-500 border-t-2'
            }  py-20`}
          >
            <h3>{el.title}</h3>
          </li>
        );
      })}
    </ul>
  );
}

export default ListWithArrows;

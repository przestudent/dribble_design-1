import Button from './Button';
import ContentDivison from './ContentDivision';

/* eslint-disable react/no-unescaped-entities */
function AboutUsSection() {
  const listElements = [
    { number: '300+', title: 'Success projects' },
    { number: '200+', title: 'Product launches' },
    { number: '180K', title: 'Happy customers' },
  ];
  return (
    <ContentDivison className=' flex  justify-between'>
      <div>
        <img src='/couch-1.jpg' alt='couch' />
      </div>
      <aside>
        <div>
          <h2 className='text-right text-zinc-500 text-5xl'>
            The key difference between ordinary and
            <br />
            special,
            <span className='text-slate-50'>
              {' '}
              No matter the season, our spaces
              <br />
              are as nuanced as the lifestyles they reflect,
            </span>
            <br />
            don't just dream it.
          </h2>
          <ul className='flex text-center justify-end gap-10 my-24'>
            {listElements.map((el) => {
              return (
                <li key={el.title}>
                  <div className='text-7xl'>{el.number}</div>
                  <div className='text-zinc-500 text-xl'>{el.title}</div>
                </li>
              );
            })}
          </ul>
          <Button text='About Us' />
        </div>
      </aside>
    </ContentDivison>
  );
}

export default AboutUsSection;

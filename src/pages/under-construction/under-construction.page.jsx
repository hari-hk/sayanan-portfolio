import './under-construction.page.scss';

export const UnderConstructionPage = () => {
  return (
    <div className='under-construction'>
      <h1>Page Under construction</h1>
      <div class='progress progress-infinite'>
        <div class='progress-bar'></div>
      </div>

      <div className='follow-me'>
        <div className='title'>Follow Me</div>
        <div className='list'>
          <div className='item'>
            <a href='https://www.artstation.com/sayanans' target='_blank' rel="noreferrer">
              <img src='/assets/icons/artstation.png' alt='' srcset='' />
            </a>
          </div>
          <div className='item'>
            <a href='https://www.linkedin.com/in/sayanans/' target='_blank' rel="noreferrer">
              <img src='/assets/icons/linkedin_icon.png' alt='' srcset='' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useEffect } from 'react';
import './home.page.scss';
import Masker from '../../components/masker/masker.component';
const HomePage = () => {
  useEffect(() => {
    handleImage();
  }, []);

  const handleImage = () => {
    const masker = document.getElementById('masker');
    if (!masker) {
      handleImage();
    }
    masker.addEventListener('mousemove', (e) => {
      const width = 500;
      const height = 500;
      const xPercentage = (e.layerX / width) * 100;
      const yPercentage = (e.layerY / height) * 100;
      masker.style.clipPath = `circle(15% at ${xPercentage}% ${yPercentage}%)`;
    });
    masker.addEventListener('mouseenter', () => {
      masker.style.opacity = `1`;
    });
    masker.addEventListener('mouseleave', () => {
      masker.style.clipPath = `unset`;
      masker.style.opacity = `0`;
    });
  };

  return (
    <div className='cover-page'>
      <img
        className='cover-image'
        src='/assets/images/landing.png'
        alt=''
        srcset=''
      />

      <div className='list'>
        <div className='item'>
          <div className='title'>Header</div>
          <Masker
            size={500}
            background={'/assets/images/1-fore.png'}
            foreground={'/assets/images/1-back.png'}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

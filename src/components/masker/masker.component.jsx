import { useEffect } from 'react';
import './masker.component.scss';
const Masker = ({ size, background, foreground }) => {
  const baseStyle = {
    height: size,
    width: size,
  };

  useEffect(() => {
    handleImage();
  }, []);

  const handleClip = (element, e) => {
    const width = size;
    const height = size;
    const xPercentage = (e.layerX / width) * 100;
    const yPercentage = (e.layerY / height) * 100;
    element.style.clipPath = `circle(15% at ${xPercentage}% ${yPercentage}%)`;
    //   masker.style.clipPath = `url('/assets/images/mask.png')`;
  };
  const addStyle = (element) => {
    element.style.opacity = `1`;
  };
  const removeStyle = (element) => {
    element.style.clipPath = `unset`;
    element.style.opacity = `0`;
  };

  const handleImage = () => {
    const masker = document.getElementById('masker');
    if (!masker) {
      handleImage();
    }
    masker.addEventListener('mousemove', (e) => {
      handleClip(masker, e);
    });
    masker.addEventListener('mouseenter', () => {
      addStyle(masker);
    });
    masker.addEventListener('mouseleave', () => {
      removeStyle(masker);
    });
  };

  return (
    <div className='masker' style={baseStyle}>
      <img className='back' src={background} alt='' />
      <img id='masker' className='front' src={foreground} alt='' />
    </div>
  );
};

Masker.defaultProps = {
  size: 500,
};

export default Masker;

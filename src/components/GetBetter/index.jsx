import './style.css';
import GetBetterImg from '../../assets/GetBetter_image.png'
import GetBetterImgMobile from '../../assets/GetBetter_image_mobile.png';

export default function GetBetter () {
    return (
      <section className="getbetter_section">
        <div className="getbetter_text">
          <h1>Get better everyday</h1>
          <p>Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</p>
          <div class="getbetter_button">Start Now</div>
        </div>

        <div className="getbetter_image">
          <picture>
            <source media="(max-width: 768px)" srcSet={GetBetterImgMobile} />
          <img src={GetBetterImg} alt="Illustration representing screens" className="getbetter-image" />
        </picture>
        </div>
      </section>
    );
  };
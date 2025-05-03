import './style.css'
import Card from '../CardTemplate/index.jsx';
import Card1Image from '../../assets/Card1Image.png'
import Card2Image from '../../assets/Card2Image.png'
import Card3Image from '../../assets/Card3Image.png'
import Card4Image from '../../assets/Card4Image.png'
import Card1Avatar from '../../assets/Card1Avatar.png'
import Card2Avatar from '../../assets/Card2Avatar.png'
import Card3Avatar from '../../assets/Card3Avatar.png'
import Card4Avatar from '../../assets/Card4Avatar.png'
import ArrowLeft from '../../assets/ArrowLeft.png';
import ArrowRight from '../../assets/ArrowRight.png';

export default function Stories () {
    return (
      <section className="stories_section">

        <div className="stories_text">
          <h1>Stories from our users</h1>
          <p>Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</p>
        </div>

        <div className="stories_wrapper">
          <div className="nav_button left">
            <img src={ArrowLeft} alt="Left Arrow" />
          </div>

          <div className="stories_posts">
            <Card 
              image={Card1Image}
              title="Flower Decorations"
              author="by Melvina Spring"
              avatar={Card1Avatar}
              isPromoted={true}
            />
            <Card 
              image={Card2Image}
              title="Flower Decorations"
              author="by Melvina Spring"
              avatar={Card2Avatar}
            />
            <Card 
              image={Card3Image}
              title="Splash"
              author="by Rwanda Melflor"
              avatar={Card3Avatar}
            />
            <Card 
              image={Card4Image}
              title="Colorful Face"
              author="by Melvina Spring"
              avatar={Card4Avatar}
            />
          </div>

          <div className="nav_button right">
            <img src={ArrowRight} alt="Right Arrow" />
          </div>
        </div>
      </section>
    );
  };
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';
import IMG7 from '../../assets/portfolio7.jpg';
import IMG8 from '../../assets/portfolio8.jpg';
import IMG9 from '../../assets/portfolio9.jpg';
// import IMG from '../../assets/portfolio_live_demo.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Social Media Web Application',
    github: 'https://github.com/vinay-a1coder',
    demo: require('../../assets/portfolio_live_demo.jpg')
    // demo: 'https://dribbble.com/shots/21648065-Online-Educational-Website'
  },
  {
    id: 2,
    image: IMG2,
    title: ' E-commerce Web Application Template',
    github: 'https://github.com/vinay-a1coder/HTML-CSS-Ecommerce-Template',
    demo: 'https://tangerine-platypus-9a2f39.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'upGrad Website Homepage Clone',
    github: 'https://github.com/vinay-a1coder/upGrad-Project',
    demo: 'https://vinay-a1coder.github.io/upGrad-Project/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Image Search App',
    github: 'https://github.com/vinay-a1coder/Image-Search-App',
    demo: 'https://imaginative-peony-2d941d.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'News Web App',
    github: 'https://github.com/vinay-a1coder/News-app',
    demo: 'https://github.com/vinay-a1coder/News-app'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Weather Web App',
    github: 'https://github.com/vinay-a1coder/Weather-app',
    demo: 'https://jade-genie-2b4ce8.netlify.app/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Resume Web page',
    github: 'https://github.com/vinay-a1coder/Resume_webpage',
    demo: 'https://vinayyadavresume.netlify.app/'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Desktop-Assistant',
    github: 'https://github.com/vinay-a1coder/Desktop-Assistant',
    demo: 'https://github.com/vinay-a1coder/Desktop-Assistant/blob/main/jarvis.py'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Rock Paper Scissor Game',
    github: 'https://github.com/vinay-a1coder/Rock_Paper_Scissor_Game',
    demo: 'https://github.com/vinay-a1coder/Rock_Paper_Scissor_Game/blob/main/src/com/company/game.java'
  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            )
          })
        }

        
      </div>
    </section>
  )
}

export default Portfolio
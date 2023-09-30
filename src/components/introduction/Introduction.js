import Video from '../video/Video'
import Img from '../images/main-bgi.jpg'
import './Introduction.css'
const Introduction = () => {
  return (
    <div 
      className='introduction'
      style={{backgroundImage: `url(${Img})`}}
    >
      <h5 className="introduction__title">Видео о нашей работе</h5>
      <p className="introduction__offer">Просто посмотрите, как мы работаем</p>
      <Video></Video>
    </div>
  )
}

export default Introduction
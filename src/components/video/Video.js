import BgImg from '../images/construction.png'
import PlayIcon from '../images/play-button.png'
import './Video.css'

const Video = () => {
  return (
    <div className='video'>
      <div
        className="video__section"
        style={{backgroundImage: `url(${BgImg})`}}
      >
        <div className="video__section-play">
          <img src={PlayIcon} className='play-icon' alt="icon" />
          <p className="play-text">Смотреть видео</p>
        </div>
      </div>
      <div className="video__line"></div>
    </div>
  )
}

export default Video
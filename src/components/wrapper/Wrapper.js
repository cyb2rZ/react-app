import Header from '../header/Header'
import Offer from '../offer/Offer'
import './Wrapper.css'
import Img from '../images/main-bgi.jpg'
const Wrapper = () => {
  return (
    <div 
      className='wrapper'
      style={{backgroundImage: `url(${Img})`}}  
    >
      <Header></Header>
      <div className="line"></div>
      <Offer></Offer>
    </div>
  )
}

export default Wrapper
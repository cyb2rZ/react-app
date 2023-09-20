import Header from '../header/Header'
import './Wrapper.css'
import Img from '../images/main-bgi.jpg'
const Wrapper = () => {
  return (
    <div 
      className='wrapper'
      style={{backgroundImage: `url(${Img})`}}  
    >
      <Header></Header>
    </div>
  )
}

export default Wrapper
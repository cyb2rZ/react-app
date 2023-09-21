import ServiceItem from '../service-item/Service-Item'
import MainButton from '../main-button/Main-Button'
import './Service.css'
const Service = () => {
  console.log(MainButton)
  return (
    <div className='service'>
      <h4 className="service-head">
        Мы создаем мобильные приложения
        для крупных корпораций
      </h4>
      <p className="service-about">
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. 
      </p>
      <div className="services">
        <ServiceItem></ServiceItem> 
      </div>
      <MainButton></MainButton>
    </div>
  )
}

export default Service
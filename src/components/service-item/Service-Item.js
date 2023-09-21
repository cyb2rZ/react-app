import { useState } from 'react'
import Icon from '../images/item-icon.png'
import './Service-Item.css'


const ServiceItem = () => {
  const [item,setItem] = useState([
    {
      img: {Icon},
      title: 'Создание сайтов',
      description: `
        Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.
      `
    },
    {
      img: {Icon},
      title: 'Создание сайтов',
      description: `
        Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.
      `
    },
    {
      img: {Icon},
      title: 'Создание сайтов',
      description: `
        Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.
      `
    },
    
  ])
  return (
    <div className='service-item'>
      {item.map((item,ind)=>(
        <div key={ind} className="item">
          <section className='icon-block'>
            <img src={item.img.Icon} alt="" className="item-icon" />
          </section>
          <section className="data-block">
            <h6 className="data__block-title">{item.title}</h6>
            <p className="data__block-descr">{item.description}</p>
          </section>
        </div>
      ))}
    </div>

  )
}

export default ServiceItem
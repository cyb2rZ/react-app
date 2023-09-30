import { useState } from 'react'
import TeamImg from '../images/team.png'

import './Team-list.css'

const TeamList = () => {
  const [team,setTeam] = useState([
    {
      img: {TeamImg},
      title: 'Исследование и упаковка',
      description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
      link: 'Подробнее'
    },
    {
      img: {TeamImg},
      title: 'Исследование и упаковка',
      description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
      link: 'Подробнее'
    },
    {
      img: {TeamImg},
      title: 'Исследование и упаковка',
      description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
      link: 'Подробнее'
    },
  ])
  console.log(team)
  return (
    <div className='team__list'>
      {team.map((item,ind)=>(
        <div key={ind} className='team__list-item'>
          <img src={item.img.TeamImg} alt="image" className="team__list-img" />
          <h5 className="team__list-title">
            <span className="list__item-part">0{ind+1}.</span>
            {item.title}
          </h5>
          <p className="team__list-description">{item.description}</p>
          <a href="#" className="team__list-link">{item.link}</a>
        </div>
      ))}
    </div>
  )
}

export default TeamList
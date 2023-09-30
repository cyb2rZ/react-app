import { useState } from "react"
import Icon from '../images/project-icon.png'
import './Project-item.css'
const ProjectItem = () => {
  const [projectHandlerItem,setProjectHandlerItem] = useState([
    {num: 120, name: 'Project1'},
    {num: 130, name: 'Project2'},
    {num: 140, name: 'Project3'},
    {num: 150, name: 'Project4'},
    {num: 160, name: 'Project5'},
  ])
  return (
    <div className='project__list'>
      {
        projectHandlerItem.map((item,ind)=>(
          <div key={ind} className="project__list-item">
            <img className="list__item-icon" src={Icon} alt="icon" />
            <p className="list__item-num">{item.num}</p>
            <p className="list__item-name">{item.name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ProjectItem
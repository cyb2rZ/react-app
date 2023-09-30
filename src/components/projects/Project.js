import Img from '../images/project-main-img.jpg'
import ProjectItem from '../project-item/Project-item'
import './Project.css'

const Project = () => {
  console.log(Img)
  return (
    <div className='project'>
      <div className="project__main">
        <div className="project__main-info">
          <h4 className="project__main-title">
            Высокие стандарты
            разработки
          </h4>
          <p className="project__main-paragraph">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.  стандартной "рыбой" для текстов на латинице с начала XVI века. 
          </p>
          <a href="#" className="project__main-link">Подробнее о компании</a>
        </div>
        <img src={Img} alt="project-image" className='project__main-img' />
      </div>
      <ProjectItem></ProjectItem>
    </div>
  )
}

export default Project
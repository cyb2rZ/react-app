import TeamList from '../team-list/Team-list'
import MainButton from '../main-button/Main-Button'
import './Team.css'

const Team = () => {
  return (
    <div className='team'>
      <div className="team__info">
        <h5 className="team__info-title">
          Наши работы, на которых 
          мы специализируемся
        </h5>
        <MainButton></MainButton>
      </div>
      <div className="teams">
        <TeamList></TeamList>
      </div>
    </div>
  )
}

export default Team
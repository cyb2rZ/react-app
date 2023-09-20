import React from 'react'

const Header = () => {
  const listNav = ['Главная','Наши проекты','Услуги','Новости','Контакты']
  return (
    <div className='header'>
      <nav>
        <ul className='navbar'>
          {listNav.map((item,ind) => (
            <li key={ind}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
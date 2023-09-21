import './Header.css'
const Header = () => {
  const listNav = [
    {name: 'Главная',isActive: true},
    {name: 'Наши проекты',isActive: false},
    {name:'Услуги',isActive: false},
    {name:'Новости',isActive: false},
    {name:'Контакты',isActive: false}
  ]
  return (
    <div className='header'>
      <nav>
        <ul className='navbar'>
          {listNav.map((item,ind) => (
            <li className={`navbar__list ${item.isActive&&'active'}`} key={ind}>
              <a className='navbar__list-item' href="#">{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
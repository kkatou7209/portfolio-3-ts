import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer id='l-footer'>
      <nav id='l-nav__footer'>
        <li className='nav__item'><Link to={'/about'}>About</Link></li>
        <li className='nav__item'><Link to={'/contact'}>Contact</Link></li>
      </nav>
    </footer>
  )
}

export default Footer;
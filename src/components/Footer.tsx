import { Link } from 'react-router-dom';

import { navItem } from './index';


const Footer = () => {
  return (
    <footer id='l-footer'>
      <nav id='l-nav__footer'>
        {navItem.map((item, key) => {
          return (
            <li className='nav__item' key={key.toString()}>
              <Link to={`/${item.link}`}>{item.linkText}</Link>
            </li>
          )
        })}
      </nav>
    </footer>
  )
}

export default Footer;
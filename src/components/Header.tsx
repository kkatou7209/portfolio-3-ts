import { Link } from "react-router-dom";

import { navItem } from "./index";

const Header = () => {
  return (
    <>
      <header id='l-header' className='bg-white'>
        <div id="l-logo">
            <div className='logo__text'>
              <Link to='/' className='text--smaller'>NOTEMAN</Link>
            </div>
        </div>
        <nav id='l-nav__header'>
          {navItem.map((item, key) => {
            return (
              <li className='nav__item' key={key.toString()}>
                <Link to={`/${item.link}`} className='text--smaller'>{item.linkText}</Link>
              </li>
            )
          })}
        </nav>
      </header>
    </>
  )
}

export default Header;
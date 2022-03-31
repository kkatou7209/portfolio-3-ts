import { Link } from "react-router-dom";

// dataset.ts からのインポート
import { navItem } from "../index";

const Home =() => {
  return (
    <>
      <div id='l-top'>
        <h1 className='top__title'>NOTEMAN</h1>
        <p className='top__text'>
          哲学好きが作る、クライアントのために考え抜かれたWebサイト制作。
        </p>
        <nav className='l-nav__top'>
          {navItem.map((item, key: number) => {
            return (
              <li className='nav__item' key={key.toString()}>
                <Link to={`/${item.link}`}>{item.linkText}</Link>
                <p className='text'>
                  {item.text}
                </p>
              </li>
            );
          })}
        </nav>
      </div>
    </>
  )
}

export default Home;
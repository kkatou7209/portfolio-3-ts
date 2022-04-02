import { Link } from "react-router-dom";

// dataset.ts からのインポート
import { navItem } from "../index";

const Home =() => {
  return (
    <>
      <div id='l-top'>
        <h1 id='l-top__title' className='text--larger text--center'>NOTEMAN</h1>
      </div>
      <nav id='l-nav__home'>
        {navItem.map((item, key: number) => {
          return (
            <li className='l-nav__item' key={key.toString()}>
              <div className='l-nav__title'>
                <Link to={`/${item.link}`} className='text--large'>
                  {item.linkText}
                </Link>
              </div>
              <div className='l-text'>
                <p className='text text--smallest'>
                  {item.text}
                </p>
              </div>
            </li>
          );
        })}
      </nav>
    </>
  )
}

export default Home;
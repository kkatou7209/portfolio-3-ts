import { business } from "../index";

const Service = () => {
  return (
    <>
      <h2 className='l-page__title text--large'>Service</h2>
      <ul className='services'>
        {business.map((item, key)=> {
          return (
            <li className='services__item' key={key.toString()}>
              <h3 className='services__title'>{item.title}</h3>
              <p className='text'>{item.text}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Service;
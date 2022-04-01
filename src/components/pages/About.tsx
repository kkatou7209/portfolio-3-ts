import { aboutSection } from "../index";

const About = () => {
  return (
    <>
      <h2 className='l-page__title text--large'>About</h2>
      <section className='l-about__section'>
        <h3 className='section__title text--medium'>
          About Works
        </h3>
        {aboutSection.map((item, key) => {
          return (
            <article className='l-about__article' key={key.toString()}>
              <h4 className='article__title text--small'>
                {item.title}
              </h4>
              <p className='text text--smaller line--wide'>
                {item.text}
              </p>
            </article>
          )
        })}
      </section>
      <section className='l-about__section'>
        <h3 className='section__title text--medium'>
          About Myself
        </h3>
        <article className='l-about__article'>
          <h4 className='article__title text--small'></h4>
        </article>
      </section>
    </>
    )
}

export default About;
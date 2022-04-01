import { aboutSection } from "../index";

const About = () => {
  return (
    <>
      <h2 className='l-page__title text--large text--center'>About</h2>
      {aboutSection.map((item, key) => {
        return (
          <section className='l-about__section' key={key.toString()}>
            <h2 className='section__title text--midium'>
              {item.title}
            </h2>
            <p className='text'>
              {item.text}
            </p>
          </section>
        )
      })}
    </>
    )
}

export default About;
import { aboutArticle } from "../index";

const About = () => {
  return (
    <>
      <div className='l-page__title'>
        <h2 className='page__title text--larger'>About</h2>
      </div>
      <section className='l-about__section'>
        <div className='l-section__title'>
          <h3 className='section__title text--medium'>
            About Works
          </h3>
        </div>
        {aboutArticle.map((item, key) => {
          key.toString();
          let line = item.text.split('\n');
          return (
            <article className='l-about__article' key={key}>
              <div className='l-article__title'>
                <h4 className='article__title text--small'>
                  {item.title}
                </h4>
              </div>
              {line.map((value, key) => {
                key.toString();
                return (
                  <p className='text text--smallest line--small' key={key}>
                    {value}
                  </p>
                )
              })}
              </article>
          )
        })}
      </section>
      <section className='l-about__section'>
        <div className='l-section__title'>
          <h3 className='section__title text--medium'>
            About Myself
          </h3>
        </div>
        <article className='l-about__article'>
          <h4 className='article__title text--medium'></h4>
        </article>
      </section>
    </>
    )
}

export default About;
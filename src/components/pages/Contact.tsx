import { business } from "../index";

const Contact = () => {

  return (
    <>
      <h2 className='l-page__title text--large'>
        Contact
      </h2>
      <div id='l-form'>
        {/* 連絡フォームの記述 */}
        <form>
          
          {/* 名前の入力 */}
          <section className='l-form__section'>
            <label className='section__title text--smaller block'>
              お名前
            </label>
            <div className='section__name'>
              <label className='text--smallest'>
                <input
                  id='last-name'
                  className='input__name border-bottom text--smallest'
                  type='text'
                  min={1}
                  max={10}
                  placeholder='姓'
                  required
                />
              </label>
              <label className='text--smallest'>
                <input
                  id='first-name'
                  className='input__name border-bottom text--smallest'
                  type='text'
                  min={1}
                  max={10}
                  placeholder='名'
                  required
                />
              </label>
            </div>
          </section>

          {/* メールアドレスの入力 */}
          <section className='l-form__section'>
            <label className='section__title text--smaller block' htmlFor='email'>
              メールアドレス
            </label>
            <div className='section__email'>
              <input
                id='email'
                className='input__email border-bottom'
                type='email'
                // placeholder="メールアドレス"
                required
              />
            </div>
          </section>

          {/* 用件の選択 */}
          <section className='l-form__section'>
            <label className='section__title text--smaller block'>
              ご依頼内容
            </label>
            <div className='section__business'>
              <div className='business__option'>
                {business.map((item, key) => {
                  key.toString();
                  let option: string = item.option;
                  let title: string = item.title;
                  return (
                    <div key={key} className='option__item text--smallest'>
                      <input
                        id={option}
                        type='checkbox'
                        />
                      <label htmlFor={option}>
                        {title}
                      </label>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </form>
      </div>
    </>
  )
}

export default Contact;
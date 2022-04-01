import { business } from "../index";

const Contact = () => {

  return (
    <>
      <h2 className='l-page__title text--large'>Contact</h2>
      <div id='l-contact'>
        {/* 連絡フォームの記述 */}
        <form>
          {/* 名前の入力 */}
          <label>
            お名前をどうぞ。
            <input
              className='input__name last-name'
              type='text'
              min={1}
              max={10}
              placeholder='姓'
              required
            >
            </input>
            <input
              className='input__name first-name'
              type='text'
              min={1}
              max={10}
              placeholder='名'
              required
            >
            </input>
          </label>
          {/* メールアドレスの入力 */}
          <label>
            メールアドレスをお願いします。
            <input
              className='input__email'
              type='email'
              placeholder="メールアドレス"
              required
            >
            </input>
          </label>
          {/* 用件の選択 */}
          <label>
            ご用件をお伺いします。
            {business.map((item, key) => {
              return (
                <div key={key.toString()}>
                  <input
                    className={'option__business item' + key.toString()}
                    type='checkbox'
                    name='option__business'
                  />
                  <label>
                    {item.title}
                  </label>
                </div>
              )
            })}
          </label>
        </form>
      </div>
    </>
  )
}

export default Contact;
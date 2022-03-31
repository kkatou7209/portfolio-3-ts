const Contact = () => {
  let business: string[] = [
    'Webページの作成',
    'UI画面のデザイン・作成',
    'JavaScriptを使った内部機能の作成'
  ]

  return (
    <>
      <h2>Contact</h2>
      <div id='l-contact'>
        {/* 連絡フォームの記述 */}
        <form>
          {/* 名前の入力 */}
          <label htmlFor='input__name'>
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
          <label htmlFor='input__email'>
            メールアドレスをお願いします。
            <input
              className='input__email'
              name='input__name'
              type='email'
              placeholder="メールアドレス"
              required
            >
            </input>
          </label>
          {/* 用件の選択 */}
          <label htmlFor='option__business'>
            ご用件をお伺いします。
            {business.map((item: string, key: number) => {
              key++;
              return (
                <div key={key.toString()}>
                  <label>
                    <input
                      className={'option__business item' + key.toString()}
                      type='checkbox'
                      name='option__business'
                    />
                    {item}
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
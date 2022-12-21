import style from './Message.module.css'

export const Message = ({ title }) => {

  return <form className={style.form}>
    <h2 className={style.title}>{title}</h2>
    <input className={style.input} placeholder="Ваше сообщение" /><br />
    <button className={style.button}>Отправить</button>
  </form>
}
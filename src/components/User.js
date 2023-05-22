import style from './User.module.css';

export const User = (props) => {
  return (
    <div className={style.user}>
      <label className={style.userLabel} htmlFor="">
        Пользователь:
      </label>
      <div className="">Имя: {props.name}</div>
      <div className="">Возраст: {props.age}</div>
      <div className="">
        <label htmlFor="">Контакты:</label>
        <div className="">Почта: {props.email}</div>
        <div className="">Телефон: {props.phone}</div>
      </div>
    </div>
  );
};

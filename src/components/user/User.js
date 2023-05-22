import style from './User.module.css';
import { Contacts } from '../contacts/Contacts';
import { Label } from "../Label/Label";

export const User = ({name, age, ...contacts}) => {

  return (
    <div className={style.user}>
        <Label title="Пользователь" color="purple" />
      <div className="">Имя: {name}</div>
      <div className="">Возраст: {age}</div>
      <Contacts {...contacts}/>
    </div>
  );
};

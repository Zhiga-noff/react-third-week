import style from './App.module.css';
import { User } from './components/user/User';
import { Label } from "./components/Label/Label";

const getUserFromServer = () => {
  return {
    name: 'Кирилл',
    age: 30,
    email: 'zhiganov_k.n@mamil.ru',
    phone: '+7 916-695-49-99',
  };
};

// императивный
export function App() {
  const user = getUserFromServer();
  return (
    //декларативный
    <div className={style.app}>
        <Label title="Приложение" color="red" />
      <div className="">Разная информация приложения</div>
      <User {...user}/>
    </div>
  );
}

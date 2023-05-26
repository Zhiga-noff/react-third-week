import { useState } from 'react';
import style from './App.module.css';

const Counter = ({ value, setValue }) => {

  return (
    <>
      <div>{value}</div>
      <button onClick={() => setValue(++value)}>{value}+1</button>
    </>
  );
};

export const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div className={style.app}>
      <label htmlFor="">Счетчик {value}</label>
      <Counter value={value} setValue={setValue} />
    </div>
  );
};

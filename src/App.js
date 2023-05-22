import style from './App.module.css';

// императивный
export function App() {
  return (
    //декларативный
    <div className={style.app}>
      <div className={style.header}>
      </div>
    </div>
  );
}

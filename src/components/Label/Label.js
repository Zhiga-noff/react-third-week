import style from './Label.module.css';

export const Label = ({ title, color }) => {
  return (
    <label className={`${style.label} ${style[color]}`} htmlFor="">
        {title}:
    </label>
  );
};

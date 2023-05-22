import { Label } from '../Label/Label';

export const Contacts = ({ email, phone }) => {
  return (
    <div className="">
      <Label title="Контакты" color="choco" />
      <div className="">Почта: {email}</div>
      <div className="">Телефон: {phone}</div>
    </div>
  );
};

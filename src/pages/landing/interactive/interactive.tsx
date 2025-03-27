import { useState, ChangeEvent } from 'react';
import { Button, InfoIcon, Input } from '@shared/index';
import s from '../style.module.scss';

export const Interactive = () => {
  const [text, setText] = useState('');

  const showAlert = () => alert(text);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  return (
    <>
      <Input
        type="text"
        placeholder="Напишите тут что-нибудь"
        value={text}
        onChange={handleInputChange}
      ></Input>

      <Button onClick={showAlert}>
        <div className={s.btn}>
          <span>Вывести текст в alert</span>
          <InfoIcon customStyle={s.red}></InfoIcon>
        </div>
      </Button>
    </>
  );
};

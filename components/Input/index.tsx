import React from 'react';

import QRCode from 'qrcode';

import styles from './styles.module.scss';

const urlLimit = 2331;

interface props {
  setSrc: (arg0: string) => void;
}

const Input = ({ setSrc }: props): JSX.Element => {
  const onChangeHandle = (event: any): void => {
    event.preventDefault();
    const url = event.target.value;

    if (url.length === 0) {
      setSrc('');
      return;
    } else if (url.length > urlLimit) {
      event.target.value = url.substring(0, urlLimit);
      event.target.focus();
      return;
    }

    QRCode.toDataURL(url)
      .then((src) => {
        setSrc(src);
      })
      .catch(() => {
        setSrc('');
      });
  };
  return <input className={styles.input} onChange={onChangeHandle} />;
};

export default Input;

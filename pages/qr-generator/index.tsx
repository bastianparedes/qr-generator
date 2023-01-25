import React, { useState } from 'react';

import Input from '../../components/Input';

const Index = (): JSX.Element => {
  const [src, setSrc] = useState('');

  return (
    <div>
      <Input setSrc={setSrc} />
      {src !== '' && <img alt="qr" src={src} />}
    </div>
  );
};

export default Index;

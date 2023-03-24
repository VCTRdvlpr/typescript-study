import React, { FC } from 'react';

interface Props {
  text: string;    
}

const BtnComponent: FC<Props> = ({ text }) => {
  return (
    <div>
      <button className='btn-style'>{text}</button>           
    </div>
  );
};

export default BtnComponent;

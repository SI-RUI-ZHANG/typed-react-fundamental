import React, {FC, ReactNode} from 'react';

interface ChildProps {
  color: string;
  onClick: () => void;
  children?: ReactNode;
}

const Child: FC<ChildProps> = ({color, onClick, children}) => {
  return (
    <div>
      <h2>{color}</h2>
      <h3>{children}</h3>
      <button onClick={onClick}>Click me</button>
    </div>);
};

export default Child;

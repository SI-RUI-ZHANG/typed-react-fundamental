import React, {FC} from 'react';

const EventComponent: FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  }

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('I am being dragged');
  }

  return <div>
    <input onChange={onChange}/>
    <div draggable onDrag={onDragStart}>Drag Me!</div>
  </div>;
};

export default EventComponent;
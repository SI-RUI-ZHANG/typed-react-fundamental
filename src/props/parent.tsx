import React from 'react';
import Child from "./child";

function Parent() {
  return (
    <Child color={'green'} onClick={() => console.log('Clicked')}>
      Text passed from parent
    </Child>
  );
}

export default Parent;
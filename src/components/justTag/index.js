import React from 'react';

const JustTag = props=>(
  <span className='d-flex tag-wrapper align-items-center'>
    <div className='tag-icon'>{props.children}</div>
    <div className='tag-text'>{props.text}</div>
  </span>
)

export default JustTag;
import React from 'react';

export default function MyComp({ src, title, type }) {
  let typeText=''
  let bgcolor=''
  switch (type) {
    case 0:
      typeText="موفق"
      bgcolor='green'
      
      break;
      case 1:
        typeText="ناموفق"
        bgcolor='red'
        
        break;
  
    default:
      break;
  }
  return (
    <div
      style={{
        width: '100%',
        padding: 10,
        borderBottom: '1px solid #a1a1a144',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <img alt='peaky blinders' src={src} />
      <p>{title}</p>
      <span style={{backgroundColor:bgcolor,color:'#fff',padding:10}}>{typeText}</span>
    </div>
  );
}

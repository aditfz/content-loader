import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={670}
    height={300}
    viewBox='0 0 670 300'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='290' y='181' rx='3' ry='3' width='88' height='6' />
    <rect x='50' y='92' rx='3' ry='3' width='138' height='182' />
    <rect x='531' y='182' rx='0' ry='0' width='59' height='10' />
  </ContentLoader>
);

export default MyLoader;

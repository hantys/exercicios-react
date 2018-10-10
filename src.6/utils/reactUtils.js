import React from 'react';

export const childrenWithData = (children, data) => React.Children.map(data.children, child => React.cloneElement(child, {...data}))
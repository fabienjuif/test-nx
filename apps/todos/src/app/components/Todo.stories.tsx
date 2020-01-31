import React from 'react';
import Todo from './Todo'
export default { title: 'Button' };

export const checked = () => <Todo id="2" title="My TODO" checked />;
export const notChecked = () => <Todo id="2" title="My TODO is not checked" />;
import React from 'react';
import { render } from 'react-dom';

import TodoContainer from './containers/Todo';

render(
    <TodoContainer />,
    document.getElementById('app')
);
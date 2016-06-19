import Todo from '../';

import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

let todo = {};
let completeTodo = null;
let renderedComponent = null;

describe('Todo Component', () => {

    before(() => {
        todo = {
            name: 'SampleTodo',
            completed: false,
        };
        completeTodo = sinon.spy();
    });

    describe('when todo is not completed', () => {
        before(() => {
            todo.completed = false;

            renderedComponent = shallow(
                <Todo
                    {...todo}
                    onComplete={completeTodo}
                />
            )
        });

        it('should render todo name', () => {
            expect(renderedComponent.contains(todo.name)).toBe(true);
        });

        it('should call onComplete when complete button is clicked.', () => {
            const completeButton = renderedComponent.find('button');
            completeButton.simulate('click');

            expect(completeTodo.calledOnce).toBe(true);
        });
    });
    
    describe('when todo is completed', () => {
        before(() => {
            todo.completed = true;

            renderedComponent = shallow(
                <Todo
                    {...todo}
                    onCompleted={completeTodo}
                />
            );
        });

        it('should render completed label', () => {
            expect(renderedComponent.contains('[Completed]')).toBe(true);
        });

        it('should not render complete button', () => {
            expect(renderedComponent.contains('Complete')).toBe(false);
        });
    });
});

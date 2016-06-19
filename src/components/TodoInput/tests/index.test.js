import TodoInput from '../';

import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';

let addTodo = null;
let renderedComponent = null;

describe('TodoInput Component', () => {

    before(() => {
        addTodo = sinon.spy();
        renderedComponent = mount(
            <TodoInput
                onSubmit={addTodo}
            />
        )
    });

    it('state text is todo name when input todo name', () => {
        const input = renderedComponent.find('input');
        input.simulate('change', { target: { value: 'TodoName' }} );
        expect(renderedComponent.state('text')).toBe('TodoName');
        expect(input.prop('value')).toBe('TodoName');
    });

    it('should called onSubmit when Add is clicked', () => {
        const button = renderedComponent.find('button');
        button.simulate('click');
        expect(addTodo.calledOnce).toBe(true);
    });

    it('should state text is empty when Add is Clicked', () => {
        const input = renderedComponent.find('input');
        const button = renderedComponent.find('button');
        button.simulate('click');

        expect(renderedComponent.state('text')).toBe('');
        expect(input.prop('value')).toBe('');
    });
});
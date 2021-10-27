import React from 'react';
import { mount } from "enzyme";
import AddButton from '../../components/AddButton/AddButton';

describe('AddButton', () => {
    it('the button is disabled', () => {
        const wrapper = mount(<AddButton
            title="Title"
            onClick={() => { }}
            disabled={true}
            fontSize="small"
            size="small"
        />);

        expect(wrapper.prop('disabled')).toBe(true)
    });

    it('the button is enabled', () => {
        const wrapper = mount(<AddButton
            title="Title"
            onClick={() => { }}
            disabled={false}
            fontSize="small"
            size="small"
        />);

        expect(wrapper.prop('disabled')).toBe(false)
    });

    it('the sended props are the same as the expected ones', () => {
        const wrapper = mount(<AddButton
            title="Title"
            onClick={() => { }}
            disabled={false}
            fontSize="small"
            size="small"
        />);

        expect(wrapper.prop('disabled')).toBe(false)
        expect(wrapper.prop('fontSize')).toBe('small')
        expect(wrapper.prop('size')).toBe('small')
    });

    it('the button is expected to be called', () => {
        const onChangeMock = jest.fn()
        const wrapper = mount(<AddButton
            title="Title"
            onClick={onChangeMock}
            disabled={false}
            fontSize="small"
            size="small"
        />);

        wrapper.find('Button').simulate('click');
        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });
});
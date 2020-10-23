import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from "enzyme";
import AddButton from '../../components/AddButton/AddButton';

describe('AddButton', () => {
    it('snapshot', () => {
        const component = renderer.create(<AddButton
            title="Title"
            onClick={() => { }}
            disabled={true}
            fontSize="small"
            size="small"
        />);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

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
});
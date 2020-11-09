import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import CancelButton from '../../components/CancelButton/CancelButton';

describe('CancelButton', () => {
    it('snapshot', () => {
        const component = renderer.create(<CancelButton
            title="Cancel"
        ></CancelButton>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('the color, fontSize and size props should be equal to the default values if they are not provided', () => {

        const wrapper = mount(<CancelButton
            title="Cancel"
        ></CancelButton>);

        expect(wrapper.props().color).toBe('theme');
        expect(wrapper.props().fontSize).toBe('small');
        expect(wrapper.props().size).toBe('medium');
    });
});
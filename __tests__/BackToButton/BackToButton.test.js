import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import BackToButton from '../../components/BackToButton/BackToButton';

describe('BackToButton', () => {
    it('snapshot', () => {
        const component = renderer.create(<BackToButton
            title="Back"
        ></BackToButton>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('the color, fontSize and size props should be equal to the default values if they are not provided', () => {

        const wrapper = mount(<BackToButton
            title="Back"
        ></BackToButton>);

        expect(wrapper.props().color).toBe('theme');
        expect(wrapper.props().fontSize).toBe('small');
        expect(wrapper.props().size).toBe('medium');
    });
});
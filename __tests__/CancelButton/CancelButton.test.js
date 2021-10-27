import { mount } from 'enzyme';
import React from 'react';
import CancelButton from '../../components/CancelButton/CancelButton';

describe('CancelButton', () => {
    it('the color, fontSize and size props should be equal to the default values if they are not provided', () => {

        const wrapper = mount(<CancelButton
            title="Cancel"
        ></CancelButton>);

        expect(wrapper.props().color).toBe('theme');
        expect(wrapper.props().fontSize).toBe('small');
        expect(wrapper.props().size).toBe('medium');
    });
});
import React from 'react';
import EditButton from '../../components/EditButton/EditButton';
import { mount } from 'enzyme';

describe('EditButton', () => {
    it('the color, fontSize and size props should be equal to the default values if they are not provided', () => {

        const wrapper = mount(<EditButton
            title="Edit"
            onClick={() => { }}
        ></EditButton>);

        expect(wrapper.props().color).toBe('theme');
        expect(wrapper.props().fontSize).toBe('medium');
        expect(wrapper.props().size).toBe('medium');
    });
});
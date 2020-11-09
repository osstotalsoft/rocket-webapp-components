import React from 'react';
import renderer from 'react-test-renderer';
import EditButton from '../../components/EditButton/EditButton';
import { mount } from 'enzyme';

describe('EditButton', () => {
    it('snapshot', () => {
        const component = renderer.create(<EditButton
            title="Edit"
            onClick={() => { }}
        ></EditButton>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('the color, fontSize and size props should be equal to the default values if they are not provided', () => {

        const wrapper = mount(<EditButton
            title="Edit"
            onClick={() => { }}
        ></EditButton>);

        expect(wrapper.props().color).toBe('theme');
        expect(wrapper.props().fontSize).toBe('default');
        expect(wrapper.props().size).toBe('medium');
    });
});
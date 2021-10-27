import React from 'react';
import renderer from 'react-test-renderer';
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import { mount } from 'enzyme';
import { IconButton } from "@material-ui/core";

describe('DeleteButton', () => {
    it('onClick should be called', () => {
        const onClickMock = jest.fn();

        const wrapper = mount(<DeleteButton
            title="Delete"
            onClick={onClickMock}
            disabled={true}
            fontSize="small"
        ></DeleteButton>);

        wrapper.find(IconButton).props().onClick()
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('the button should be disabled', () => {
        const onClickMock = jest.fn();

        const wrapper = mount(<DeleteButton
            title="Delete"
            onClick={onClickMock}
            disabled={true}
            fontSize="small"
        ></DeleteButton>);

        expect(wrapper.find(IconButton).props().disabled).toBe(true);
    });


    it('the button should be enabled', () => {
        const onClickMock = jest.fn();

        const wrapper = mount(<DeleteButton
            title="Delete"
            onClick={onClickMock}
            disabled={false}
            fontSize="small"
        ></DeleteButton>);

        expect(wrapper.find(IconButton).props().disabled).toBe(false);
    });

    it('the color, fontSize and size props should be equal to the default values if they are not provided', () => {

        const onClickMock = jest.fn();
        const wrapper = mount(<DeleteButton
            title="Delete"
            onClick={onClickMock}
            disabled={false}
            fontSize="small"
        ></DeleteButton>);

        expect(wrapper.props().color).toBe('theme');
        expect(wrapper.props().fontSize).toBe('small');
        expect(wrapper.props().size).toBe('medium');
    });
});
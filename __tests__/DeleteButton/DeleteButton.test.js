import React from 'react';
import renderer from 'react-test-renderer';
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import { mount } from 'enzyme';
import { IconButton } from "@material-ui/core";

describe('DeleteButton', () => {
    it('snapshot', () => {
        const component = renderer.create(<DeleteButton
            title="Delete"
            onClick={() => { }}
            disabled={true}
            fontSize="small"
        ></DeleteButton>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

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
});
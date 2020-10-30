import React from 'react';
import renderer from 'react-test-renderer';
import DownwardButton from '../../components/DownwardButton/DownwardButton';
import { mount } from 'enzyme';
import { IconButton } from "@material-ui/core";

describe('DownwardButton', () => {
    it('snapshot', () => {
        const component = renderer.create(<DownwardButton
            title="Downward"
            onClick={() => { }}
            disabled={true}
            fontSize="small"
        ></DownwardButton>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('onClick should be called', () => {
        const onClickMock = jest.fn();

        const wrapper = mount(<DownwardButton
            title="Downward"
            onClick={onClickMock}
            disabled={true}
            fontSize="small"
        ></DownwardButton>);

        wrapper.find(IconButton).props().onClick()
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('the button should be disabled', () => {
        const onClickMock = jest.fn();
        const wrapper = mount(<DownwardButton
            title="Downward"
            onClick={onClickMock}
            disabled={true}
            fontSize="small"
        ></DownwardButton>);

        expect(wrapper.find(IconButton).props().disabled).toBe(true);
    });

    it('the button should be enabled', () => {
        const onClickMock = jest.fn();
        const wrapper = mount(<DownwardButton
            title="Downward"
            onClick={onClickMock}
            disabled={false}
            fontSize="small"
        ></DownwardButton>);

        expect(wrapper.find(IconButton).props().disabled).toBe(false);
    });
});
import React from 'react';
import DownloadButton from '../../components/DownloadButton/DownloadButton';
import { mount } from 'enzyme';
import { IconButton } from "@material-ui/core";

describe('DownloadButton', () => {
    it('onClick should be called', () => {
        const onClickMock = jest.fn();

        const wrapper = mount(<DownloadButton
            title="Download"
            onClick={onClickMock}
            disabled={true}
            fontSize="small"
        ></DownloadButton>);

        wrapper.find(IconButton).props().onClick()
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('the button should be disabled', () => {
        const wrapper = mount(<DownloadButton
            title="Download"
            onClick={() => { }}
            disabled={true}
            fontSize="small"
        ></DownloadButton>);

        expect(wrapper.find(IconButton).props().disabled).toBe(true);
    });

    it('the button should be enabled', () => {
        const wrapper = mount(<DownloadButton
            title="Download"
            onClick={() => { }}
            disabled={false}
            fontSize="small"
        ></DownloadButton>);

        expect(wrapper.find(IconButton).props().disabled).toBe(false);
    });

    it('the color, fontSize and size props should be equal to the default values if they are not provided', () => {
        const wrapper = mount(<DownloadButton
            title="Download"
            onClick={() => { }}
            disabled={false}
            fontSize="small"
        ></DownloadButton>);

        expect(wrapper.props().color).toBe('theme');
        expect(wrapper.props().fontSize).toBe('small');
        expect(wrapper.props().size).toBe('medium');
    });
});
import React from 'react';
import renderer from 'react-test-renderer';
import DownloadButton from '../../components/DownloadButton/DownloadButton';
import { mount } from 'enzyme';
import { IconButton } from "@material-ui/core";

describe('DownloadButton', () => {
    it('snapshot', () => {
        const component = renderer.create(<DownloadButton
            title="Download"
            onClick={() => { }}
            disabled={true}
            fontSize="small"
        ></DownloadButton>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

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
});
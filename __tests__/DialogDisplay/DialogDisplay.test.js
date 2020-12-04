import React from 'react';
import DialogDisplay from '../../components/DialogDisplay/DialogDisplay';
import { mount } from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';
import { Dialog, Typography, IconButton } from "@material-ui/core";

describe('DialogDisplay', () => {
    it('snapshot', () => {
        const onCloseMock = jest.fn();
        const component = mount(<DialogDisplay
            id="id"
            open
            onClose={onCloseMock}
            content={< div > Content</div >}
        />);

        expect(EnzymeToJson(component)).toMatchSnapshot();
    });

    it('Typography has modalTitle class', () => {
        const onCloseMock = jest.fn();

        const wrapper = mount(<DialogDisplay
            id="id"
            open
            onClose={onCloseMock}
            content={< div > Content</div >}
        />);

        expect(wrapper.find(Dialog).find(Typography).at(1).props().className).toContain('modalTitle')
    });

    it('IconButton has modalCloseButton class', () => {
        const onCloseMock = jest.fn();

        const wrapper = mount(<DialogDisplay
            id="id"
            open
            onClose={onCloseMock}
            content={< div > Content</div >}
        />);

        expect(wrapper.find(IconButton).at(0).props().className).toContain('modalCloseButton')
    });

    it('onClose handler should be called', () => {
        const onCloseMock = jest.fn();

        const wrapper = mount(<DialogDisplay
            id="id"
            open
            onClose={onCloseMock}
            content={< div > Content</div >}
        />);

        wrapper.find(IconButton).at(0).simulate('click');
        expect(onCloseMock).toHaveBeenCalledTimes(1)
    });
});
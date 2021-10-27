import React from 'react';
import DialogDisplay from '../../components/DialogDisplay/DialogDisplay';
import { mount } from 'enzyme';
import { IconButton } from "@material-ui/core";

describe('DialogDisplay', () => {
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
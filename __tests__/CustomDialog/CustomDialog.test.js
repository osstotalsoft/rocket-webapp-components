import React from 'react';
import CustomDialog from '../../components/CustomDialog/CustomDialog';
import { mount } from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';
import { Dialog, DialogTitle, DialogContent, DialogContentText } from "@material-ui/core";
import Button from '../../components/Button/Button';

describe('CustomDialog', () => {
    it('snapshot', () => {
        const onYesMock = jest.fn();
        const onCloseMock = jest.fn();

        const wrapper = mount(<CustomDialog
            id="1"
            title="title"
            content={<div>Content</div>}
            textContent="text content"
            onYes={onYesMock}
            onClose={onCloseMock}
            buttonColor="info"
            buttonSize="sm"
            open={true}
            showActions={true}
        />);

        expect(EnzymeToJson(wrapper)).toMatchSnapshot();
    });

    it('if showActions is true then both actions are visible', () => {

        const onCloseMock = jest.fn();
        const onYesMock = jest.fn();

        const wrapper = mount(<CustomDialog
            id="1"
            title="title"
            content={<div>Content</div>}
            textContent="text content"
            onYes={onYesMock}
            onClose={onCloseMock}
            buttonColor="info"
            buttonSize="sm"
            open={true}
            showActions={true}
        />);

        expect(wrapper.find(Button)).toHaveLength(2)
    });

    it('if showActions is false then both actions are not visible', () => {

        const onCloseMock = jest.fn();
        const onYesMock = jest.fn();

        const wrapper = mount(<CustomDialog
            id="1"
            title="title"
            content={<div>Content</div>}
            textContent="text content"
            onYes={onYesMock}
            onClose={onCloseMock}
            buttonColor="info"
            buttonSize="sm"
            open={true}
            showActions={false}
        />);

        expect(wrapper.find(Button)).toHaveLength(0)
    });

    it('if textContent is provided then the DialogContentText node will be visible', () => {

        const onCloseMock = jest.fn();
        const onYesMock = jest.fn();

        const wrapper = mount(<CustomDialog
            id="1"
            title="title"
            content={<div>Content</div>}
            textContent="text content"
            onYes={onYesMock}
            onClose={onCloseMock}
            buttonColor="info"
            buttonSize="sm"
            open={true}
            showActions={false}
        />);

        expect(wrapper.find(DialogContentText)).toHaveLength(1)
    });

    it('onYes handler should be called', () => {

        const onCloseMock = jest.fn();
        const onYesMock = jest.fn();

        const wrapper = mount(<CustomDialog
            id="1"
            title="title"
            content={<div>Content</div>}
            textContent="text content"
            onYes={onYesMock}
            onClose={onCloseMock}
            buttonColor="info"
            buttonSize="sm"
            open={true}
            showActions={true}
        />);

        wrapper.find(Button).at(0).simulate('click')
        expect(onYesMock).toHaveBeenCalledTimes(1);
    });

    it('classes test and content are present', () => {

        const onCloseMock = jest.fn();
        const onYesMock = jest.fn();

        const wrapper = mount(<CustomDialog
            id="1"
            title="title"
            content={<div>Content</div>}
            textContent="text content"
            onYes={onYesMock}
            onClose={onCloseMock}
            buttonColor="info"
            buttonSize="sm"
            open={true}
            showActions={true}
        />);

        expect(wrapper.find(Dialog)).toHaveLength(1);
        expect(wrapper.find(DialogTitle).props().className).toContain("text");
        expect(wrapper.find(DialogContent).props().className).toContain("content");
    });
});
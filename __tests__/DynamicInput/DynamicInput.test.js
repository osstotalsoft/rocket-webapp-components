import React from 'react';
import renderer from 'react-test-renderer';
import DynamicInput from '../../components/DynamicInput/DynamicInput';
import { mount } from 'enzyme';
import CustomTextField from '../../components/CustomTextField';
import Autocomplete from '../../components/Autocomplete';
import { Switch } from "@material-ui/core";

describe('DynamicInput', () => {
    it('snapshot', () => {
        const onChangeMock = jest.fn();

        const component = renderer.create(<DynamicInput
            label='DynamicInput - NumberTextField'
            id={'testId'}
            controlType={"NUM"}
            onChange={onChangeMock}
            value={"test"}
            disabled={false}
        />);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('if controlType is INT then the input is a CustomTextField without inputProps associated', () => {

        const onChangeMock = jest.fn();

        const wrapper = mount(<DynamicInput
            id={'testId'}
            controlType={"INT"}
            onChange={onChangeMock}
            value={"test"}
            disabled={false}
        />);

        expect(wrapper.find(CustomTextField)).toHaveLength(1);
        expect(wrapper.find(CustomTextField).props().inputProps).toBeUndefined();
    });

    it('if controlType is INT then the input is a CustomTextField with inputProps associated', () => {

        const onChangeMock = jest.fn();

        const wrapper = mount(<DynamicInput
            id={'testId'}
            controlType={"NUM"}
            onChange={onChangeMock}
            value={"test"}
            disabled={false}
        />);

        expect(wrapper.find(CustomTextField)).toHaveLength(1);
        expect(wrapper.find(CustomTextField).props().inputProps).not.toBeUndefined();
    });

    it('if controlType is NUM then the input is a CustomTextField with inputProps associated', () => {

        const onChangeMock = jest.fn();

        const wrapper = mount(<DynamicInput
            id={'testId'}
            controlType={"NUM"}
            onChange={onChangeMock}
            value={"test"}
            disabled={false}
        />);

        expect(wrapper.find(CustomTextField)).toHaveLength(1);
        expect(wrapper.find(CustomTextField).props().inputProps).not.toBeUndefined();
    });

    it('if controlType is CLST then the input is an Autocomplete', () => {

        const onChangeMock = jest.fn();

        const wrapper = mount(<DynamicInput
            id={'testId'}
            controlType={"CLST"}
            onChange={onChangeMock}
            value={"test"}
            disabled={false}
        />);

        expect(wrapper.find(Autocomplete)).toHaveLength(1);
    });

    it('if controlType is BOOL then the input is a Switch', () => {

        const onChangeMock = jest.fn();

        const wrapper = mount(<DynamicInput
            id={'testId'}
            controlType={"BOOL"}
            onChange={onChangeMock}
            value={true}
            disabled={false}
        />);

        expect(wrapper.find(Switch)).toHaveLength(1);
    });

    it('should rended a default component if controlType does not match any other case label', () => {

        const onChangeMock = jest.fn();

        const wrapper = mount(<DynamicInput
            id={'testId'}
            onChange={onChangeMock}
            value={true}
            disabled={false}
            DefaultComp={CustomTextField}
        />);

        expect(wrapper.find(CustomTextField)).toHaveLength(1);
    });
});
import React from 'react';
import DynamicInput from '../../components/DynamicInput/DynamicInput';
import { mount } from 'enzyme';
import CustomTextField from '../../components/CustomTextField';
import Autocomplete from '../../components/Autocomplete';
import { Switch } from "@material-ui/core";

jest.mock('@material-ui/core/styles', () => ({
    ...jest.requireActual('@material-ui/core/styles'),
    useTheme: () => {
        return {
            autoComplete: {
                valueContainer: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    flex: 1,
                    alignItems: 'center',
                    paddingBottom: '5px'
                },
                input: {
                    fontFamily: 'Source Sans Pro !important',
                    fontSize: '14px !important',
                    fontWeight: 'normal !important',
                    fontStretch: 'normal !important',
                    fontStyle: 'normal !important',
                    lineHeight: '1.29 !important',
                    color: '#a8a8a8 !important',
                },
                selectedInputColor: "#000"
            }
        }
    }
}));

describe('DynamicInput', () => {
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
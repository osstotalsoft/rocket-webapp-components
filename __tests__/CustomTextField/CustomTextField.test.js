import React from 'react';
import CustomTextField from '../../components/CustomTextField/CustomTextField';
import { mount } from 'enzyme';
import { TextField } from "@material-ui/core";

describe('CustomTextField', () => {
    it('if isNumeric is true then inputComponent node of type NumberFormatCustom exists', () => {
        const onCustomInputChange = jest.fn()

        const wrapper = mount(<CustomTextField
            fullWidth
            label={'CustomTextField'}
            value={12 || ""}
            onChange={onCustomInputChange}
            inputProps={{
                decimalScale: 3,
                thousandSeparator: true,
                prefix: '$'
            }}
            isNumeric
        />);

        expect(wrapper.find(TextField).props().InputProps.inputComponent).not.toBeUndefined()
    });

    it('if isNumeric is false then inputComponent node of type NumberFormatCustom does not exist', () => {
        const onCustomInputChange = jest.fn()

        const wrapper = mount(<CustomTextField
            fullWidth
            label={'CustomTextField'}
            value={12 || ""}
            onChange={onCustomInputChange}
        />);

        expect(wrapper.find(TextField).props().InputProps.inputComponent).toBeUndefined()
    });

    it('inputProps class input is present', () => {
        const onCustomInputChange = jest.fn()

        const wrapper = mount(<CustomTextField
            fullWidth
            label={'CustomTextField'}
            value={12 || ""}
            onChange={onCustomInputChange}
        />);

        expect(wrapper.find(TextField).props().inputProps.className).toContain('input')
    });
});
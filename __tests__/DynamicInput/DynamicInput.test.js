import React from 'react';
import renderer from 'react-test-renderer';
import DynamicInput from '../../components/DynamicInput/DynamicInput';

describe('DynamicInput', () => {
    it('snapshot', () => {

        const handleDynamicPropertyChange = value => { }
        const onDynamicInputChange = onPropertyChange => (_, value) => onPropertyChange(value)

        const component = renderer.create(<DynamicInput
            label='DynamicInput - NumberTextField'
            id={'testId'}
            controlType={"NUM"}
            onChange={onDynamicInputChange(handleDynamicPropertyChange)}
            value={"test"}
            disabled={false}
        />);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
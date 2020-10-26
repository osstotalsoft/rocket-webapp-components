import React from 'react';
import renderer from 'react-test-renderer';
import CustomLinearProgress from '../../components/CustomTextField/CustomTextField';

describe('CustomTextField', () => {
    it('snapshot', () => {
        const onCustomInputChange = value => { }

        const component = renderer.create(<CustomLinearProgress
            fullWidth
            label={'CustomTextField'}
            value={12 || ""}
            onChange={onCustomInputChange}
            decimalScale={0}
            thousandSeparator={"."}
        />);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
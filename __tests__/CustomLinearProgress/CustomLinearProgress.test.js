import React from 'react';
import renderer from 'react-test-renderer';
import CustomLinearProgress from '../../components/CustomLinearProgress/CustomLinearProgress';

describe('CustomLinearProgress', () => {
    it('snapshot', () => {
        const component = renderer.create(<CustomLinearProgress
            color="primary"
            value={20}
            variant="determinate"
        />);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
import React from 'react';
import renderer from 'react-test-renderer';
import CancelButton from '../../components/CancelButton/CancelButton';

describe('CancelButton', () => {
    it('snapshot', () => {
        const component = renderer.create(<CancelButton
            title="Cancel"
        ></CancelButton>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
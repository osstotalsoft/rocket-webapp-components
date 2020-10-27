import React from 'react';
import renderer from 'react-test-renderer';
import DeleteButton from '../../components/DeleteButton/DeleteButton';

describe('DeleteButton', () => {
    it('snapshot', () => {
        const component = renderer.create(<DeleteButton
            title="Delete"
            onClick={() => { }}
        ></DeleteButton>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
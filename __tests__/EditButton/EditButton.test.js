import React from 'react';
import renderer from 'react-test-renderer';
import EditButton from '../../components/EditButton/EditButton';

describe('EditButton', () => {
    it('snapshot', () => {
        const component = renderer.create(<EditButton
            title="Edit"
            onClick={() => { }}
        ></EditButton>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
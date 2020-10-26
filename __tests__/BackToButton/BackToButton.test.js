import React from 'react';
import renderer from 'react-test-renderer';
import BackToButton from '../../components/BackToButton/BackToButton';

describe('BackToButton', () => {
    it('snapshot', () => {
        const component = renderer.create(<BackToButton
            title="Back"
        ></BackToButton>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
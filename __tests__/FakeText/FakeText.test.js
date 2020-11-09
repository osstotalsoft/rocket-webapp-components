import React from 'react';
import renderer from 'react-test-renderer';
import LoadingFakeText from '../../components/FakeText/LoadingFakeText';

describe('LoadingFakeText', () => {
    it('snapshot', () => {
        const component = renderer.create(<LoadingFakeText lines={10} />);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
import React from 'react';
import renderer from 'react-test-renderer';
import DownwardButton from '../../components/DownwardButton/DownwardButton';

describe('DownwardButton', () => {
    it('snapshot', () => {
        const component = renderer.create(<DownwardButton
            title="Downward"
            onClick={() => { }}
        ></DownwardButton>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
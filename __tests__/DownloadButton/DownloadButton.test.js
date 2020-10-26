import React from 'react';
import renderer from 'react-test-renderer';
import DownloadButton from '../../components/DownloadButton/DownloadButton';

describe('DownloadButton', () => {
    it('snapshot', () => {
        const component = renderer.create(<DownloadButton
            title="Download"
            onClick={() => { }}
        ></DownloadButton>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
import React from 'react';
import CustomDialog from '../../components/CustomDialog/CustomDialog';
import { mount } from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';

describe('CustomDialog', () => {
    it('snapshot', () => {
        const component = mount(<CustomDialog
            id="1"
            title="title"
            content={<div>Content</div>}
            textContent="text content"
            onYes={() => { }}
            onClose={() => { }}
            buttonColor="info"
            buttonSize="sm"
            open={true}
        />);

        expect(EnzymeToJson(component)).toMatchSnapshot();
    });
});
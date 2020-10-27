import React from 'react';
import DialogDisplay from '../../components/DialogDisplay/DialogDisplay';
import { mount } from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';

describe('DialogDisplay', () => {
    it('snapshot', () => {
        const component = mount(<DialogDisplay
            id="id"
            open={true}
            onClose={() => { }
            }
            content={< div > Content</div >}
        />);

        expect(EnzymeToJson(component)).toMatchSnapshot();
    });
});
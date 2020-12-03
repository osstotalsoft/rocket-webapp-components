import React from 'react';
import renderer from 'react-test-renderer';
import Autocomplete from '../../components/Autocomplete/Autocomplete';

const arr = [{ id: '1', name: 'Approved' }, { id: '2', name: 'Cancelled' }]

const handleFilterPropertyChange = () => (_, _) => { }

describe('Autocomplete', () => {
    it('snapshot', () => {
        const component = renderer.create(<Autocomplete
            label={"Status"}
            options={arr}
            fullWidth
            simpleValue
            isClearable
            value={''}
            onChange={handleFilterPropertyChange('id')}
        />);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
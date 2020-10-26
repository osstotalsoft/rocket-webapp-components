import React from 'react';
import renderer from 'react-test-renderer';
import DateTime from '../../components/DateTime/DateTime';

describe('DateTime', () => {
    it('snapshot', () => {
        const onDateTimeChanged = value => { }
        const defaultTimeFormat = "HH:mm"

        const component = renderer.create(<DateTime
            value={null}
            label={'Datetime'}
            onChange={onDateTimeChanged}
            dateFormat="DD-MMMM-YYYY"
            timeFormat={defaultTimeFormat}
            editable={false}
            maskable={true}
            clearable={false}
        />);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
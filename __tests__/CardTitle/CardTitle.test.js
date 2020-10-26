import React from 'react';
import renderer from 'react-test-renderer';
import CardTitle from '../../components/CardTitle/CardTitle';
import Button from '../../components/Button/Button';

describe('CardTitle', () => {
    it('snapshot', () => {
        const component = renderer.create(<CardTitle
            title="Add person"
            actions={[<Button key='button'
                onClick={() => { }}
                disabled={true} />]}
        />);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
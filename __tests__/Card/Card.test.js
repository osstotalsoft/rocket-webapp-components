import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../../components/Card/Card';

describe('Card', () => {
    it('snapshot - primary', () => {
        const component = renderer.create(<Card cololr="primary">
            <div> Card</ div>
        </Card>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('snapshot - info', () => {
        const component = renderer.create(<Card cololr="info">
            <div> Card</ div>
        </Card>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('snapshot - success', () => {
        const component = renderer.create(<Card cololr="sucess">
            <div> Card</ div>
        </Card>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('snapshot - warning', () => {
        const component = renderer.create(<Card cololr="warning">
            <div> Card</ div>
        </Card>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('snapshot - danger', () => {
        const component = renderer.create(<Card cololr="danger">
            <div> Card</ div>
        </Card>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('snapshot - rose', () => {
        const component = renderer.create(<Card cololr="rose">
            <div> Card</ div>
        </Card>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
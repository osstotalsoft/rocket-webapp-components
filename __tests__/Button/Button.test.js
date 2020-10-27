import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../components/Button/Button';

describe('Button', () => {
    it('snapshot - warning', () => {
        const component = renderer.create(<Button color="warning">
            Warning
        </Button>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('snapshot - primary', () => {
        const component = renderer.create(<Button color="primary">
            Warning
        </Button>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('snapshot - info', () => {
        const component = renderer.create(<Button color="info">
            Warning
        </Button>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('snapshot - success', () => {
        const component = renderer.create(<Button color="success">
            Warning
        </Button>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('snapshot - danger', () => {
        const component = renderer.create(<Button color="danger">
            Warning
        </Button>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('snapshot - rose', () => {
        const component = renderer.create(<Button color="rose">
            Warning
        </Button>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
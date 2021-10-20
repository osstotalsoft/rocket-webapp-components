import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../../components/Card/Card';

describe('Card', () => {
    it('snapshot - primary', () => {
        const component = renderer.create(<Card color="primary">
            <div> Card</ div>
        </Card>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('snapshot - info', () => {
        const component = renderer.create(<Card color="info">
            <div> Card</ div>
        </Card>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('snapshot - success', () => {
        const component = renderer.create(<Card color="success">
            <div> Card</ div>
        </Card>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('snapshot - warning', () => {
        const component = renderer.create(<Card color="warning">
            <div> Card</ div>
        </Card>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('snapshot - danger', () => {
        const component = renderer.create(<Card color="danger">
            <div> Card</ div>
        </Card>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('snapshot - rose', () => {
        const component = renderer.create(<Card color="rose">
            <div> Card</ div>
        </Card>);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });

    it('classes card and rose are present', () => {
        const wrapper = renderer.create(<Card color="rose">
            <div> Card</ div>
        </Card>);

        const testInstance = wrapper.root;

        expect(testInstance.findByType('div').props.className).toContain('card');
        expect(testInstance.findByType('div').props.className).toContain('rose');
    });

    it('class danger are present', () => {
        const wrapper = renderer.create(<Card color="danger">
            <div> Card</ div>
        </Card>);

        const testInstance = wrapper.root;

        expect(testInstance.findByType('div').props.className).toContain('danger');
    });

    it('class warning are present', () => {
        const wrapper = renderer.create(<Card color="warning">
            <div> Card</ div>
        </Card>);

        const testInstance = wrapper.root;

        expect(testInstance.findByType('div').props.className).toContain('warning');
    });

    it('class info are present', () => {
        const wrapper = renderer.create(<Card color="info">
            <div> Card</ div>
        </Card>);

        const testInstance = wrapper.root;

        expect(testInstance.findByType('div').props.className).toContain('info');
    });

    it('class primary are present', () => {
        const wrapper = renderer.create(<Card color="primary">
            <div> Card</ div>
        </Card>);

        const testInstance = wrapper.root;

        expect(testInstance.findByType('div').props.className).toContain('primary');
    });
});
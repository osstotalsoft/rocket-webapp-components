import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../components/Button/Button';
import { Button as ButtonBase } from "@material-ui/core";

describe('Button', () => {
    it('button will be rounded', () => {
        const wrapper = renderer.create(<Button round={true} color="rose">
            Warning
        </Button>);

        const testInstance = wrapper.root;

        expect(testInstance.findByType(ButtonBase).props.className).toContain('round');
    });


    it('button will not be rounded', () => {
        const wrapper = renderer.create(<Button round={false} color="rose">
            Warning
        </Button>);

        const testInstance = wrapper.root;

        expect(testInstance.findByType(ButtonBase).props.className).not.toContain('round');
    });

    it('button will not be fullWidth', () => {
        const wrapper = renderer.create(<Button fullWidth={false} color="rose">
            Warning
        </Button>);

        const testInstance = wrapper.root;

        expect(testInstance.findByType(ButtonBase).props.className).not.toContain('fullWidth');
    });

    it('button will be fullWidth', () => {
        const wrapper = renderer.create(<Button fullWidth={true} color="rose">
            Warning
        </Button>);

        const testInstance = wrapper.root;

        expect(testInstance.findByType(ButtonBase).props.className).toContain('fullWidth');
    });

    it('button will be disabled', () => {
        const wrapper = renderer.create(<Button disabled={true} color="rose">
            Warning
        </Button>);

        const testInstance = wrapper.root;

        expect(testInstance.findByType(ButtonBase).props.className).toContain('disabled');
    });


    it('button will not be disabled', () => {
        const wrapper = renderer.create(<Button disabled={false} color="rose">
            Warning
        </Button>);

        const testInstance = wrapper.root;

        expect(testInstance.findByType(ButtonBase).props.className).not.toContain('disabled');
    });
});
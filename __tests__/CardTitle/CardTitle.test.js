import React from 'react';
import renderer from 'react-test-renderer';
import CardTitle from '../../components/CardTitle/CardTitle';
import Button from '../../components/Button/Button';
import { Box } from "@material-ui/core";

describe('CardTitle', () => {
    it('classes container and cardTitle are present', () => {
        const onClickMock = jest.fn();

        const wrapper = renderer.create(<CardTitle
            title="Add person"
            actions={[<Button key='button'
                onClick={onClickMock}
                disabled={true} />]}
        />);

        const testInstance = wrapper.root;

        expect(testInstance.findAllByType(Box)[0].props.className).toContain('container');
        expect(testInstance.findAllByType(Box)[1].props.className).toContain('cardTitle');
    });


    it('should be able to click the button', () => {
        const onClickMock = jest.fn();

        const wrapper = renderer.create(<CardTitle
            title="Add person"
            actions={[<Button key='button'
                onClick={onClickMock}
                disabled={true} />]}
        />);

        const testInstance = wrapper.root;

        testInstance.findAllByType(Box)[2].findByType(Button).props.onClick()
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('the button is expected to be disabled', () => {
        const onClickMock = jest.fn();

        const wrapper = renderer.create(<CardTitle
            title="Add person"
            actions={[<Button key='button'
                onClick={onClickMock}
                disabled={true} />]}
        />);

        const testInstance = wrapper.root;

        expect(testInstance.findAllByType(Box)[2].findByType(Button).props.disabled).toBe(true);
    });
});
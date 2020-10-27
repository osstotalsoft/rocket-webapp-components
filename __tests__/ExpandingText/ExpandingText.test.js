import React from 'react';
import renderer from 'react-test-renderer';
import ExpandingText from '../../components/ExpandingText/ExpandingText';

describe('ExpandingText', () => {
    it('snapshot', () => {
        const component = renderer.create(<ExpandingText minLength={100}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris   nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        />);

        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
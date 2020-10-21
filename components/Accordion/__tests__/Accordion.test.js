import React from 'react';
import renderer from 'react-test-renderer';
import Accordion from '../Accordion';

const arr = [{
    title: 'Title 1',
    value: 'Client 1'
}, {
    title: 'Title 2',
    value: 'Client 2'
},
{
    title: 'Title 3',
    value: 'Client 3'
}
]

describe('Welcome (Snapshot)', () => {
    it('should render three children', () => {
        const component = renderer.create(
            <Accordion
                active={0}
                content={arr.map(item => {
                    return {
                        title: item.title,
                        content: (
                            <div>
                                {item.value}
                            </div>
                        )
                    };
                })}
            />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
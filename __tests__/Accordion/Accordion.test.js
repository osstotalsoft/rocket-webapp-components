import React from 'react';
import Accordion from '../../components/Accordion/Accordion';
import { shallow, mount } from "enzyme";
import { Accordion as AccordionBase } from "@material-ui/core";

const someArray = [{
    title: 'Accordion 1',
    value: 'Client 1'
}, {
    title: 'Accordion 2',
    value: 'Client 2'
},
{
    title: 'Accordion 3',
    value: 'Client 3'
}
]

describe('Accordion', () => {
    it('Three children are expected to render', () => {
        const wrapper = shallow(<Accordion
            active={0}
            content={someArray.map(item => {
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

        expect(wrapper.find(AccordionBase)).toHaveLength(3);
    });

    it('Second child is expanded', () => {
        const wrapper = mount(<Accordion
            active={1}
            content={someArray.map(item => {
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

        expect(wrapper.prop('active')).toBe(1)
        expect(wrapper.find(AccordionBase).at(1).props().expanded).toBe(true)
    });

    it('Third child is expanded', () => {
        const wrapper = mount(<Accordion
            active={2}
            content={someArray.map(item => {
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

        expect(wrapper.find(AccordionBase).at(2).props().expanded).toBe(true)
    });
});
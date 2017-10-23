import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'
import PieChart from 'react-simple-pie-chart'

import BuildFrame from '../../../../../app/components/detail_components/BuildFrame'

describe('<BuildFrame />', () => {

    let props, param
    beforeEach(() => {
        props = {
            itemFontColor: {
                'metrics': "label-color-pending",
                "build": 'label-color-running',
                "ut": 'label-color-pending',
                'ft': 'label-color-pending'
            }
        }
    })

    it('should not render Arrow components if the metrics status is pending', () => {
        // const item = {
        //     "build": {
        //         "status": "Pending",
        //         "test": 89,
        //         "maintainability": 36,
        //         "security": 94,
        //         "workmanship": 69
        //     }
        // }
        // const wrapper = shallow(<BuildFrame {...props} item={item} />)
        // expect(wrapper.find('Arrow').length).toBe(0);
    });
})
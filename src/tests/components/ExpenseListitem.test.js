import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListitem'
import expenses from '../fixtures/expenses'

test('Should render ExpenseListitem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('Should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('Should add an expense', () => {
    const expense = {
        id: '4',
        description: 'papitas',
        note: '',
        amount: 5000,
        createdAt:0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses,expense])
})

test('Should edit an expense', () => {
    const description = 'papitas'
    const action = {
        type: 'EDIT_EXPENSE',
        id:expenses[2].id,
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[2].description).toBe(description)
})

test('Should not edit and expense if id not found', () => {
    const description = 'papitas'
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type:'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('Should set sortBy to date', () => {
    const currentState = {
        text:'',
        startDate:undefined,
        emdDate:undefined,
        sortBy:'amount',
    }
    const action = { type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('Should set text filter', () => {
    const currentState = {
        text:'',
        startDate:undefined,
        emdDate:undefined,
        sortBy:'amount',
    }
    const action = { type: 'SET_TEXT_FILTER', text:'papitas' }
    const state = filtersReducer(currentState, action)
    expect(state).toEqual({ ...currentState, text: 'papitas' })
})

test('Should set startDate filter', () => {
    const currentState = {
        text:'',
        startDate:undefined,
        emdDate:undefined,
        sortBy:'amount',
    }
    const action = { type: 'SET_START_DATE', startDate: moment(0).add(1,'day') }
    const state = filtersReducer(currentState, action)
    expect(state).toEqual({ ...currentState, startDate: moment(0).add(1,'day') })
})

test('Should set startDate filter', () => {
    const currentState = {
        text:'',
        startDate:undefined,
        emdDate:undefined,
        sortBy:'amount',
    }
    const action = { type: 'SET_END_DATE', endDate: moment(0).add(1,'day') }
    const state = filtersReducer(currentState, action)
    expect(state).toEqual({ ...currentState, endDate: moment(0).add(1,'day') })
})
import { cleanup, render, screen } from '@testing-library/react'
import Home from '../pages/Home'

let myBooks;

beforeEach(() => {
    myBooks = [{
        bookID: "",
        bookImg: "",
        bookTitle: "",
        bookAuthor: ""
    }]
    globalThis.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ "books" : myBooks })
        }))
})

afterEach(() => {
    fetch.mockClear();
    cleanup();
})

it('should render navbar with Home and Favorites tab', () => {
    render(<Home />)

    expect(screen.getByRole('navigation')).toHaveTextContext('Read-A-Lot', 'Favorites')
})

it('should render 3 different book covers', async () => {
    let result;
    await act(() => result = render(<Home />))
})


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

    const homeTab = screen.getByText('Read-A-Lot')
    const favTab = screen.getByText('Favorites')

    expect(Home).toContain(homeTab, favTab)
})

it('should render 3 different book covers', async () => {
    let result;
    await act(() => result = render(<Home />))

    expect(result.container.querySelectorAll('img')).toContain('bookCover')
})


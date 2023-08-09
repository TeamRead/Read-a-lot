import App from "../App";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

test('should render the home and favorites navbar', () => {
    const { getByText } = render(<App />);

    const homeTab = getByText('Read-A-Lot');
    const favTab = getByText('Favorites');

    expect(homeTab).toBeInTheDocument();
    expect(favTab).toBeInTheDocument();

});
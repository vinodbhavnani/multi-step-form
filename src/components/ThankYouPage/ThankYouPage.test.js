import { render } from '@testing-library/react';
import React from 'react';
import ThankYouPage from './ThankYouPage';

describe('ThankYouPage', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<ThankYouPage {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ThankYouPage')).toBeTruthy();
    });
});

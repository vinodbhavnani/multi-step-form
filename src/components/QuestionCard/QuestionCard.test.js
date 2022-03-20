import { render } from '@testing-library/react';
import React from 'react';
import Card from './Card';

describe('Card', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Card {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Card')).toBeTruthy();
    });
});

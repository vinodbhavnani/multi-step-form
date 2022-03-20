import { render } from '@testing-library/react';
import React from 'react';
import MultiChoiceSingle from './MultiChoiceSingle';

describe('MultiChoiceSingle', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<MultiChoiceSingle {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('MultiChoiceSingle')).toBeTruthy();
    });
});

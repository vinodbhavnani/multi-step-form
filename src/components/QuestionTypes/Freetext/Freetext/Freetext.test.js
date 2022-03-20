import { render } from '@testing-library/react';
import React from 'react';
import Freetext from './Freetext';

describe('Freetext', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Freetext {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Freetext')).toBeTruthy();
    });
});

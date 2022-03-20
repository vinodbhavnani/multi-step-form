import { render } from '@testing-library/react';
import React from 'react';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<ProgressBar {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ProgressBar')).toBeTruthy();
    });
});

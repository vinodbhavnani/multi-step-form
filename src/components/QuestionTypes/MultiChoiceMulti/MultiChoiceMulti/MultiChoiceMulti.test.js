import { render } from '@testing-library/react';
import React from 'react';
import MultiChoiceMulti from './MultiChoiceMulti';

describe('MultiChoiceMulti', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<MultiChoiceMulti {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('MultiChoiceMulti')).toBeTruthy();
    });
});

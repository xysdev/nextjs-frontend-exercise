import { render, screen } from '@testing-library/react';

import { Card } from './index';

describe('Card component', () => {
  it('renders the card with name and image', () => {
    render(<Card name="Fluffy" photoUrl="/images/fluffy.jpg" species="Cat" />);
    expect(screen.getByAltText('Fluffy the Cat')).toBeInTheDocument();
    expect(screen.getByText('Fluffy')).toBeInTheDocument();
  });
});

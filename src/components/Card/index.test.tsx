import { render, screen } from '@testing-library/react';

import { Card } from './index';

const defaultProps = {
  id: 1,
  name: 'Fluffy',
  photoUrl: '/images/fluffy.jpg',
  species: 'Cat',
};

describe('Card component', () => {
  it('renders the pet name', () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByText('Fluffy')).toBeInTheDocument();
  });

  it('renders an image with descriptive alt text', () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByAltText('Fluffy the Cat')).toBeInTheDocument();
  });

  it('renders a View link with accessible label', () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByRole('link', { name: 'View Fluffy' })).toBeInTheDocument();
  });

  it('renders as an article element', () => {
    const { container } = render(<Card {...defaultProps} />);
    expect(container.querySelector('article')).toBeInTheDocument();
  });
});

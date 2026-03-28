import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter, useSearchParams } from 'next/navigation';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { FilterBar } from './index';

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  useSearchParams: vi.fn(),
}));

const mockPush = vi.fn();

beforeEach(() => {
  vi.mocked(useRouter).mockReturnValue({
    push: mockPush,
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  } as ReturnType<typeof useRouter>);
  vi.mocked(useSearchParams).mockReturnValue(new URLSearchParams() as ReturnType<typeof useSearchParams>);
  mockPush.mockClear();
});

const speciesOptions = ['Cat', 'Dog', 'Rat'];

describe('FilterBar component', () => {
  it('renders all species options', () => {
    render(<FilterBar speciesOptions={speciesOptions} />);
    expect(screen.getByRole('option', { name: 'Cat' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Dog' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Rat' })).toBeInTheDocument();
  });

  it('renders a default "Species" placeholder option', () => {
    render(<FilterBar speciesOptions={speciesOptions} />);
    expect(screen.getByRole('option', { name: 'Species' })).toBeInTheDocument();
  });

  it('navigates with species param when a species is selected', async () => {
    render(<FilterBar speciesOptions={speciesOptions} />);
    await userEvent.selectOptions(screen.getByRole('combobox'), 'Dog');
    expect(mockPush).toHaveBeenCalledWith('/?species=Dog');
  });

  it('renders the Latest added toggle button', () => {
    render(<FilterBar speciesOptions={speciesOptions} />);
    expect(screen.getByRole('button', { name: 'Latest added' })).toBeInTheDocument();
  });

  it('toggle has aria-pressed=false by default', () => {
    render(<FilterBar speciesOptions={speciesOptions} />);
    expect(screen.getByRole('button', { name: 'Latest added' })).toHaveAttribute('aria-pressed', 'false');
  });

  it('toggle has aria-pressed=true when sortBy=dateAdded is in URL', () => {
    vi.mocked(useSearchParams).mockReturnValue(
      new URLSearchParams('sortBy=dateAdded') as ReturnType<typeof useSearchParams>
    );
    render(<FilterBar speciesOptions={speciesOptions} />);
    expect(screen.getByRole('button', { name: 'Latest added' })).toHaveAttribute('aria-pressed', 'true');
  });

  it('navigates with sortBy=dateAdded when toggle is clicked', async () => {
    render(<FilterBar speciesOptions={speciesOptions} />);
    await userEvent.click(screen.getByRole('button', { name: 'Latest added' }));
    expect(mockPush).toHaveBeenCalledWith('/?sortBy=dateAdded&order=desc');
  });

  it('removes sortBy param when toggle is clicked while active', async () => {
    vi.mocked(useSearchParams).mockReturnValue(
      new URLSearchParams('sortBy=dateAdded&order=desc') as ReturnType<typeof useSearchParams>
    );
    render(<FilterBar speciesOptions={speciesOptions} />);
    await userEvent.click(screen.getByRole('button', { name: 'Latest added' }));
    expect(mockPush).toHaveBeenCalledWith('/?');
  });
});

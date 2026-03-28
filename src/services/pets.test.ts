import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { Pet } from '@/types/pet';

import { getPets } from './pets';

const mockPets: Pet[] = [
  {
    id: 1,
    name: 'Daamin',
    species: 'Cat',
    available: false,
    birthYear: 2012,
    dateAdded: '19-06-2021',
    photoUrl: '/images/wpfirW7.jpg',
  },
  {
    id: 2,
    name: 'Dann',
    species: 'Dog',
    available: true,
    birthYear: 2016,
    dateAdded: '01-01-2022',
    photoUrl: '/images/ES0AHRx.jpg',
  },
];

describe('getPets', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns pets on a successful response', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockPets),
    } as Response);

    const result = await getPets();
    expect(result).toEqual(mockPets);
  });

  it('calls /api/pets with no params when called without arguments', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    } as Response);

    await getPets();
    expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/api\/pets$/), { cache: 'no-store' });
  });

  it('appends species query param when provided', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    } as Response);

    await getPets({ species: 'Cat' });
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('species=Cat'), { cache: 'no-store' });
  });

  it('appends sortBy and order query params when provided', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    } as Response);

    await getPets({ sortBy: 'dateAdded', order: 'desc' });
    const calledUrl = vi.mocked(fetch).mock.calls[0][0] as string;
    expect(calledUrl).toContain('sortBy=dateAdded');
    expect(calledUrl).toContain('order=desc');
  });

  it('throws an error when response is not ok', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    } as Response);

    await expect(getPets()).rejects.toThrow('Failed to fetch pets: 500 Internal Server Error');
  });
});

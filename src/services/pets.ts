import { API_BASE_URL } from '@/config/api';
import type { Pet } from '@/types/pet';

export type PetQueryParams = {
  species?: string;
  sortBy?: string;
  order?: string;
};

export async function getPets(params?: PetQueryParams): Promise<Pet[]> {
  const searchParams = new URLSearchParams();

  if (params?.species) searchParams.set('species', params.species);
  if (params?.sortBy) searchParams.set('sortBy', params.sortBy);
  if (params?.order) searchParams.set('order', params.order);

  const query = searchParams.toString();
  const url = `${API_BASE_URL}/api/pets${query ? `?${query}` : ''}`;

  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`Failed to fetch pets: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export async function getPetById(id: number): Promise<Pet> {
  const res = await fetch(`${API_BASE_URL}/api/pets/${id}`, { cache: 'no-store' });

  if (res.status === 404) {
    throw new Error('NOT_FOUND');
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch pet: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

import { API_BASE_URL } from '@/config/api';
import type { Pet } from '@/types/pet';

export async function getPets(): Promise<Pet[]> {
  const res = await fetch(`${API_BASE_URL}/api/pets`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`Failed to fetch pets: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

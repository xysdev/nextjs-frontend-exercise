import { data as petsData } from '../data';

export function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const pet = petsData.find(p => p.id === Number(id));

    if (!pet) {
      return Response.json({ error: 'Pet not found' }, { status: 404 });
    }

    return Response.json(pet);
  });
}

import { NextRequest } from 'next/server';
import { adminClient, jsonError } from '../../_lib/server';
export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const db = adminClient();
  const col = id.includes('-') && id.length !== 36 ? 'slug' : 'id';
  const { data, error } = await db.from('articles').select('*').eq(col, id).eq('published', true).single();
  return error ? jsonError('Article not found', 404) : Response.json(data);
}

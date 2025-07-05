// app/api/quizzes/[category]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { quizzes } from '@/data/quizzes';

export async function GET(req: NextRequest, { params }: { params: { category: string } }) {
  const { category } = params;
  const data = quizzes[category];

  if (!data) {
    return NextResponse.json({ error: 'Category not found' }, { status: 404 });
  }

  return NextResponse.json(data);
}

// app/api/quizzes/[category]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { quizzes } from '@/data/quizzes';

export async function GET(req: NextRequest, { params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const data = quizzes[category as keyof typeof quizzes];

  if (!data) {
    return NextResponse.json({ error: 'Category not found' }, { status: 404 });
  }

  return NextResponse.json(data);
}

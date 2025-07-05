// app/api/quiz/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { quizzes } from '@/data/quizzes';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  for (const category of Object.keys(quizzes)) {
    const found = quizzes[category].find((q) => q.id === id);
    if (found) {
      return NextResponse.json(found);
    }
  }

  return NextResponse.json({ error: 'Quiz not found' }, { status: 404 });
}

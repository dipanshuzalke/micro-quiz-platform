import { notFound } from 'next/navigation';
import Link from 'next/link';

type Quiz = {
  id: string;
  title: string;
};

async function getQuizzesByCategory(category: string): Promise<Quiz[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/quizzes/${category}`, {
    cache: 'no-store', // SSR: fresh on each request
  });

  if (res.status === 404) return [];
  if (!res.ok) throw new Error('Failed to fetch quizzes');

  return res.json();
}

type Props = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const quizzes = await getQuizzesByCategory(category);

  if (!quizzes || quizzes.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6 capitalize">
        {category} Quizzes
      </h1>

      <div className="space-y-4">
        {quizzes.map((quiz) => (
          <Link
            key={quiz.id}
            href={`/quiz/${quiz.id}`}
            className="block border p-4 rounded-lg hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{quiz.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}

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
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-5"></div>
        <div className="relative px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
              <Link href="/start-quiz" className="hover:text-indigo-600 transition-colors duration-200">
                Home
              </Link>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-800 font-medium capitalize">{category}</span>
            </nav>

            {/* Category Header */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shadow-lg mb-6">
                <span className="text-white font-bold text-2xl capitalize">
                  {category.charAt(0)}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 capitalize">
                {category} Quizzes
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Test your knowledge with our curated collection of {category} quizzes. 
                Challenge yourself and learn something new!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quizzes Section */}
      <div className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Stats Bar */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">{quizzes.length}</div>
                  <div className="text-sm text-gray-500">Available Quizzes</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">∞</div>
                  <div className="text-sm text-gray-500">Attempts</div>
                </div>
              </div>
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Interactive
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Instant Results
                </span>
              </div>
            </div>
          </div>

          {/* Quiz Cards */}
          <div className="space-y-4">
            {quizzes.map((quiz, index) => (
              <Link
                key={quiz.id}
                href={`/quiz/${quiz.id}`}
                className="group block"
              >
                <div className="bg-white rounded-xl border border-gray-100 hover:border-indigo-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {/* Quiz Number */}
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:from-indigo-200 group-hover:to-purple-200 transition-colors duration-300">
                          <span className="text-indigo-600 font-bold text-lg">
                            {(index + 1).toString().padStart(2, '0')}
                          </span>
                        </div>
                        
                        {/* Quiz Content */}
                        <div className="flex-1">
                          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 mb-1">
                            {quiz.title}
                          </h2>
                          <p className="text-gray-500 text-sm">
                            Click to start this quiz and test your knowledge
                          </p>
                        </div>
                      </div>

                      {/* Action Arrow */}
                      <div className="flex-shrink-0 ml-4">
                        <div className="w-10 h-10 bg-gray-50 group-hover:bg-indigo-50 rounded-full flex items-center justify-center transition-colors duration-300">
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar (decorative) */}
                  <div className="h-1 bg-gray-100">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Ready to Challenge Yourself?
              </h3>
              <p className="text-gray-600 mb-6">
                Select any quiz above to begin your learning journey
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Explore Other Categories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
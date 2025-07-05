// app/page.tsx
// import Link from 'next/link';
// import Image from 'next/image';

type Category = {
  id: string;
  name: string;
  icon: string;
};

async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/categories`, {
      cache: 'force-cache', // Enable SSG
    });

    if (!res.ok) {
      console.error('Failed to fetch categories:', res.status, res.statusText);
      return [];
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function Home() {
  const categories = await getCategories();

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-5"></div>
        <div className="relative px-6 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Quiz Categories
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Challenge yourself and expand your knowledge with our diverse collection of interactive quizzes
            </p>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          {categories && categories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((cat) => (
                <a key={cat.id} href={`/quizzes/${cat.id}`} className="group block">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full translate-y-12 -translate-x-12 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    
                    {/* Icon Container */}
                    <div className="relative z-10 mb-6">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        {/* Icon placeholder - you can replace with actual icons */}
                        <div className="w-8 h-8 bg-white rounded-lg opacity-90 flex items-center justify-center">
                          <span className="text-indigo-600 font-bold text-lg">
                            {cat.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                        {cat.name}
                      </h2>
                      <p className="text-gray-500 text-sm mb-4">
                        Test your knowledge and skills
                      </p>
                      
                      {/* Call to Action */}
                      <div className="inline-flex items-center text-indigo-600 font-medium text-sm group-hover:text-purple-600 transition-colors duration-300">
                        Start Quiz
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-200 transition-colors duration-300"></div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  No Categories Yet
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Quiz categories are being prepared. Check back soon for exciting challenges!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <div className="px-6 py-12 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Ready to test your knowledge? Choose a category above and start your quiz journey!
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Interactive Quizzes
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Instant Results
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Multiple Categories
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
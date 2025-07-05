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
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Quiz Categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories && categories.length > 0 ? (
          categories.map((cat) => (
            <a key={cat.id} href={`/quizzes/${cat.id}`} className="block">
              <div className="border rounded-xl p-4 hover:shadow-lg transition">
                {/* <Image
                  src={cat.icon}
                  alt={cat.name}
                  width={64}
                  height={64}
                  className="mx-auto mb-2"
                /> */}
                <h2 className="text-center font-medium text-lg">{cat.name}</h2>
              </div>
            </a>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No categories available at the moment.
          </div>
        )}
      </div>
    </main>
  );
}

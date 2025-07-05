'use client';

import { useEffect, useState } from 'react';

type ScoreEntry = {
  quizId: string;
  score: number;
  total: number;
  date: string;
};

export default function ResultPage() {
  const [scores, setScores] = useState<ScoreEntry[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('quiz_scores');
    if (stored) {
      setScores(JSON.parse(stored));
    }
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">📊 Your Quiz Results</h1>

      {scores.length === 0 ? (
        <p>No results yet. Take a quiz!</p>
      ) : (
        <ul className="space-y-3">
          {scores.map((entry, i) => (
            <li key={i} className="border p-4 rounded-lg bg-white">
              <p className="font-semibold">Quiz ID: {entry.quizId}</p>
              <p>
                Score: {entry.score} / {entry.total}
              </p>
              <p className="text-sm text-gray-500">Date: {entry.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

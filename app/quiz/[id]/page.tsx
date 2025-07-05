'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Question = {
  question: string;
  options: string[];
  answer: string;
};

type Quiz = {
  id: string;
  title: string;
  questions: Question[];
};

export default function QuizPage() {
  const { id } = useParams<{ id: string }>();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      const res = await fetch(`/api/quiz/${id}`);
      if (res.ok) {
        const data = await res.json();
        setQuiz(data);
      } else {
        setQuiz(null);
      }
    };

    fetchQuiz();
  }, [id]);

  if (!quiz) return <p className="p-6">Loading quiz...</p>;

  const question = quiz.questions[current];

  const handleAnswer = (option: string) => {
    setSelected(option);

    if (option === question.answer) {
      setScore((prev) => prev + 1);
      setFeedback('✅ Correct!');
    } else {
      setFeedback(`❌ Incorrect. Correct answer: ${question.answer}`);
    }

    setTimeout(() => {
      setFeedback(null);
      setSelected(null);

      if (current + 1 < quiz.questions.length) {
        setCurrent((prev) => prev + 1);
      } else {
        setShowResult(true);
      }
    }, 1200);
  };

  return (
    <main className="min-h-screen p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>

      {showResult ? (
        <div className="text-center mt-10">
          <h2 className="text-xl font-semibold">🎉 Quiz Complete!</h2>
          <p className="mt-2 text-lg">
            Your Score: <span className="font-bold">{score}</span> / {quiz.questions.length}
          </p>
        </div>
      ) : (
        <div className="border p-4 rounded-xl">
          <h2 className="mb-4 font-medium">
            Q{current + 1}: {question.question}
          </h2>

          <div className="space-y-2">
            {question.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                disabled={selected !== null}
                className={`block w-full px-4 py-2 border rounded hover:bg-blue-50 transition ${
                  selected === opt
                    ? opt === question.answer
                      ? 'bg-green-100 border-green-400'
                      : 'bg-red-100 border-red-400'
                    : ''
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {feedback && <p className="mt-4 text-center font-semibold">{feedback}</p>}
        </div>
      )}
    </main>
  );
}

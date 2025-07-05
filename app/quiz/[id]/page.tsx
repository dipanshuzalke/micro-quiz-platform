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

  if (!quiz) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
            <div className="w-8 h-8 bg-white rounded-full opacity-90"></div>
          </div>
          <p className="text-lg text-gray-600">Loading quiz...</p>
        </div>
      </main>
    );
  }

  const question = quiz.questions[current];
  const progress = (current / quiz.questions.length) * 100;

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

  const getScoreColor = () => {
    const percentage = (score / quiz.questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    const percentage = (score / quiz.questions.length) * 100;
    if (percentage >= 90) return 'Outstanding! 🌟';
    if (percentage >= 80) return 'Excellent work! 🎯';
    if (percentage >= 70) return 'Good job! 👍';
    if (percentage >= 60) return 'Not bad! 📚';
    return 'Keep learning! 💪';
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            {quiz.title}
          </h1>
          {!showResult && (
            <p className="text-gray-600">
              Question {current + 1} of {quiz.questions.length}
            </p>
          )}
        </div>

        {showResult ? (
          /* Results Page */
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Results Header */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-12 text-center text-white">
                <div className="w-24 h-24 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-2">🎉 Quiz Complete!</h2>
                <p className="text-xl opacity-90">{getScoreMessage()}</p>
              </div>

              {/* Score Details */}
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {score}
                  </div>
                  <div className="text-2xl text-gray-600 mb-4">
                    out of {quiz.questions.length}
                  </div>
                  <div className={`text-xl font-semibold ${getScoreColor()}`}>
                    {Math.round((score / quiz.questions.length) * 100)}% Correct
                  </div>
                </div>

                {/* Score Breakdown */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-green-50 rounded-xl p-4 text-center border border-green-200">
                    <div className="text-2xl font-bold text-green-600">{score}</div>
                    <div className="text-sm text-green-600">Correct</div>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4 text-center border border-red-200">
                    <div className="text-2xl font-bold text-red-600">{quiz.questions.length - score}</div>
                    <div className="text-sm text-red-600">Incorrect</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.location.reload()}
                    className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Retake Quiz
                  </button>
                  <button
                    onClick={() => window.history.back()}
                    className="flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Quizzes
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Quiz Question */
          <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">Progress</span>
                <span className="text-sm font-medium text-gray-600">
                  {current} of {quiz.questions.length} completed ({Math.round((current / quiz.questions.length) * 100)}%)
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(current / quiz.questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Question Header */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-8 py-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{current + 1}</span>
                    </div>
                    <span className="text-gray-600 font-medium">Question {current + 1}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {quiz.questions.length - current - 1} remaining
                  </div>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
                  {question.question}
                </h2>
              </div>

              {/* Options */}
              <div className="p-8">
                <div className="space-y-3">
                  {question.options.map((opt, index) => (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      disabled={selected !== null}
                      className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                        selected === opt
                          ? opt === question.answer
                            ? 'bg-green-50 border-green-400 text-green-800'
                            : 'bg-red-50 border-red-400 text-red-800'
                          : selected !== null
                          ? 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-gray-50 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 text-gray-800'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                          selected === opt
                            ? opt === question.answer
                              ? 'bg-green-500 border-green-500 text-white'
                              : 'bg-red-500 border-red-500 text-white'
                            : selected !== null
                            ? 'border-gray-300 text-gray-400'
                            : 'border-gray-400 text-gray-600'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="flex-1">{opt}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Feedback */}
                {feedback && (
                  <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200">
                    <p className="text-center font-semibold text-lg text-gray-800">
                      {feedback}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Quiz Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-indigo-600">{score}</div>
                <div className="text-sm text-gray-600">Correct So Far</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-purple-600">{current}</div>
                <div className="text-sm text-gray-600">Questions Answered</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
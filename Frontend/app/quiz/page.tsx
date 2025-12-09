"use client";

import { useEffect, useState } from "react";
import { getQuiz, submitAnswers } from "@/lib/api";
import QuizQuestion from "@/component/QuizQuestion";
import { useRouter } from "next/navigation";
import { UserAnswer, QuizQuestion as QuizQuestionType } from "@/lib/types";

export default function QuizPage() {
  const [questions, setQuestions] = useState<QuizQuestionType[]>([]);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getQuiz()
      .then((data) => setQuestions(data))
      .finally(() => setLoading(false));
  }, []);

  const handleAnswerChange = (
    id: string | number,
    value: string | number | ((prev: number[]) => number[])
  ) => {
    setAnswers((prev) => {
      const exists = prev.find((a) => a.id === id);

      let newValue: string | number | number[];
      if (typeof value === "function") {
        const prevAnswer = exists ? exists.value : [];
        newValue = value(Array.isArray(prevAnswer) ? prevAnswer : []);
      } else {
        newValue = value;
      }

      if (exists) {
        return prev.map((a) =>
          a.id === id ? { ...a, value: newValue } : a
        );
      }
      return [...prev, { id, value: newValue }];
    });
  };

  const handleSubmit = async () => {
    // Send the array of { id, value } objects directly to the backend
    const result = await submitAnswers(answers);
    // store result temporarily
    sessionStorage.setItem("quizResults", JSON.stringify(result));
    router.push("/quiz/results");
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Quiz</h1>
      {questions.map((q) => (
        <QuizQuestion
          key={q.id}
          question={q}
          onChange={handleAnswerChange}
        />
      ))}
      <button
        onClick={handleSubmit}
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg"
      >
        Submit Quiz
      </button>
    </div>
  );
}

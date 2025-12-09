"use client";

import { useState } from "react";

type GradeResult = {
  score: number;
  total: number;
  results: { id: string | number; correct: boolean }[];
};

export default function ResultsPage() {
  const results = useState<GradeResult | null>(() => {
    try {
      const stored = typeof window !== "undefined" ? sessionStorage.getItem("quizResults") : null;
      return stored ? (JSON.parse(stored) as GradeResult) : null;
    } catch (e) {
      console.error("Failed to parse quiz results from sessionStorage", e);
      return null;
    }
  })[0];

  if (!results) return <p className="mt-10 text-center">No results found.</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Results</h1>

      <p className="text-lg mb-4">
        Score: <span className="font-bold">{results.score}</span> / {results.total}
      </p>

      <ul className="space-y-2">
        {results.results.map((r) => (
          <li
            key={r.id}
            className={`p-3 rounded border ${
              r.correct ? "border-green-600" : "border-red-600"
            }`}
          >
            Question {r.id}: {" "}
            <span className={r.correct ? "text-green-600" : "text-red-600"}>
              {r.correct ? "Correct" : "Incorrect"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

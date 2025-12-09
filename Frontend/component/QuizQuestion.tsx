"use client";

import { QuizQuestion as Q } from "@/lib/types";

interface Props {
  question: Q;
  onChange: (id: string | number, value: string | number | ((prev: number[]) => number[])) => void;
}

export default function QuizQuestion({ question, onChange }: Props) {
  const { id, type, choices, question: text } = question;

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, e.target.value);
  };

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, Number(e.target.value));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const checked = e.target.checked;

    onChange(id, (prev: number[] = []) => {
      if (checked) return [...prev, value];
      return prev.filter((v) => v !== value);
    });
  };

  return (
    <div className="mb-6 p-4 border rounded-lg shadow-sm">
      <p className="font-medium mb-2">{text}</p>
      {type === "text" && (
        <input
          type="text"
          onChange={handleText}
          className="border px-3 py-2 rounded w-full"
        />
      )}
      {type === "radio" &&
        choices?.map((choice, index) => (
          <label key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="radio"
              name={`q-${id}`}
              value={index}
              onChange={handleRadio}
            />
            <span>{choice}</span>
          </label>
        ))}
      {type === "checkbox" &&
        choices?.map((choice, index) => (
          <label key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              value={index}
              onChange={handleCheckbox}
            />
            <span>{choice}</span>
          </label>
        ))}
    </div>
  );
}

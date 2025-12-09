const BASE_URL = "http://localhost:8787";
export async function getQuiz() {
  const res = await fetch(`${BASE_URL}/api/quiz`);
  if (!res.ok) throw new Error("Failed to fetch quiz");
  return res.json();
}

export async function submitAnswers(answers: string[]) {
  const res = await fetch(`${BASE_URL}/api/grade`, {
    method: "POST",
    body: JSON.stringify({ answers }),
    headers: { "Content-Type": "application/json" }
  });

  if (!res.ok) throw new Error("Failed to grade answers");
  return res.json();
}

import useSWR from "swr";
import { Answers } from "./answers";
import { Question } from "./question";

const fetcher = (input: RequestInfo, init: RequestInit) =>
  fetch(input, init).then((res) => res.json());

export function useGetQuestions() {
  return useSWR<Question[]>("http://localhost:3001/questions", fetcher);
}

export function useGetAnswers() {
  return useSWR<Answers>("http://localhost:3001/answers/1", (input, init) =>
    fetcher(input, init).then((x) => x.data)
  );
}

export async function updateAnswers(updatedAnswers: Answers) {
  await fetch("http://localhost:3001/answers/1", {
    method: "PUT",
    body: JSON.stringify({ data: updatedAnswers }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

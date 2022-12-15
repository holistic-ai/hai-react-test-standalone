import { useGetAnswers, useGetQuestions } from "./api";

function App() {
  const { data: questions } = useGetQuestions();

  const { data: answers } = useGetAnswers();

  return (
    <div className="flex p-2 gap-2">
      <pre className="p-4 border">{JSON.stringify(questions, null, 2)}</pre>
      <pre className="p-4 border">{JSON.stringify(answers, null, 2)}</pre>
      <div className="p-4 border">{/* render the form here */}</div>
    </div>
  );
}

export default App;

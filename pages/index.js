import { useState } from "react";
import { Button } from "../components/ui/button";

const questions = [
  { id: 1, text: "Welches Genre bevorzugst du?", options: ["Action", "Drama", "Sci-Fi", "Horror"] },
  { id: 2, text: "Welche Stimmung magst du?", options: ["Lustig", "Düster", "Spannend", "Romantisch"] },
  { id: 3, text: "Lieblingsjahrzehnt für Filme?", options: ["80er", "90er", "2000er", "Aktuell"] }
];

const recommendations = {
  "Action_Lustig_80er": "Beverly Hills Cop",
  "Drama_Düster_90er": "Fight Club",
  "Sci-Fi_Spannend_2000er": "Inception",
  "Horror_Romantisch_Aktuell": "Crimson Peak"
};

export default function FilmOMat() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const calculateRecommendation = () => {
    const key = `${answers[1]}_${answers[2]}_${answers[3]}`;
    setResult(recommendations[key] || "Keine Empfehlung gefunden. Versuche andere Kombinationen!");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">Film-o-Mat 🎬</h1>
      {questions.map((q) => (
        <div key={q.id} className="space-y-2">
          <p className="font-semibold">{q.text}</p>
          <div className="flex space-x-2">
            {q.options.map((option) => (
              <Button key={option} onClick={() => handleAnswer(q.id, option)}>{option}</Button>
            ))}
          </div>
        </div>
      ))}
      <Button className="mt-4 w-full" onClick={calculateRecommendation}>Film finden</Button>
      {result && <p className="mt-4 text-lg font-semibold">Empfohlener Film: {result}</p>}
    </div>
  );
}

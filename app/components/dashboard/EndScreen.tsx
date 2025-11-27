"use client";

import Button from "../ui/Button";
import { useRouter } from "next/navigation";

type EndScreenProps = {
  score: number;
};

function EndScreen({ score }: EndScreenProps) {
  const router = useRouter();
  function handleStartAgain() {
    router.push("/");
  }
  return (
    <div className="flex h-100 items-center  justify-center">
      <div className="flex flex-col items-center gap-4">
        <p className="text-blue-800 text-xl">You finished the quiz 🥳</p>
        <span className="text-lg font-semibold text-blue-600">
          {" "}
          Your score is {score}
        </span>
        <Button text="Take the quiz again" onClick={handleStartAgain} />
      </div>
    </div>
  );
}
export default EndScreen;

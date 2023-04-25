import { useSearchParams } from "react-router-dom";
import { ProgressCircle } from "../progressCircle";

type RouundCompletedProps = {
  progress: number;
  setCompletedSet: (completed: boolean) => void;
};

export const RoundCompleted = ({ progress, setCompletedSet, ...props }: RouundCompletedProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="flex flex-col items-center mt-2">
      <h2 className="mb-4">Round: {searchParams.get("set")} completed!</h2>
      <ProgressCircle className="w-36 h-36" strokeWidth={4.5} percentage={progress} />
      <div className="flex justify-center items-center mt-6">
        <button className="text-blue-600 text-lg font-bold mr-6 hover:underline" onClick={() => {}}>
          Exit
        </button>

        <button
          className="text-lg bg-blue-600 whitespace-nowrap text-white px-6 py-1.5 lg:py-2 rounded-full font-bold  border-2 border-blue-600 hover:bg-white hover:text-blue-600 transition-colors duration-300"
          onClick={() => {
            setSearchParams({
              name: searchParams.get("name") as string,
              set: (Number(searchParams.get("set")) + 1).toString(),
            });
            setCompletedSet(false);
          }}
        >
          Next round
        </button>
      </div>
    </div>
  );
};

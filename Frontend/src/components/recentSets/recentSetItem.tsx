import { Link } from "react-router-dom";
import { ProgressCircle } from "../progressCircle";

type RecentSetItemProps = {
  id?: number;
  count?: number;
  name: string;
  progress: number;
};

export const RecentSetItem = ({ id, count, name, progress }: RecentSetItemProps) => {
  return (
    <Link to={`studySet/${id}`}>
      <div className="p-4 shadow-md rounded-md bg-blue-50 flex flex-col items-center cursor-pointer">
        <ProgressCircle strokeWidth={4.5} percentage={progress} />
        <h4 className="text-center pt-2">{name}</h4>
        <h5 className="pt-1">{count} questions</h5>
      </div>
    </Link>
  );
};

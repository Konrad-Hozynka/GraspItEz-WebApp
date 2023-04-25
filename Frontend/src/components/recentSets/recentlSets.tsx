import { useEffect, useState } from "react";
import { RecentSetItem } from "./recentSetItem";

type RecentSetsProps = {
  className?: string;
};
type RecentSets = {
  id: number;
  count: number;
  name: string;
  progress: number;
};

export const RecentSets = ({ className }: RecentSetsProps) => {
  const [recentSets, setRecentSets] = useState<RecentSets[]>();
  useEffect(() => {
    getAllRecentSets();
  }, []);

  async function getAllRecentSets() {
    const response = await fetch("/jsonData/studySet.json");
    const data = await response.json();
    setRecentSets(data);
  }

  return (
    <div className={className}>
      <h3 className="pt-8 pb-2">Recent study sets</h3>
      <div className="grid grid-cols-2 gap-6">
        {recentSets?.map((set: RecentSets, key) => {
          return (
            <RecentSetItem
              key={key}
              id={set?.id}
              name={set?.name}
              progress={set?.progress}
              count={set?.count}
            />
          );
        })}
      </div>
    </div>
  );
};

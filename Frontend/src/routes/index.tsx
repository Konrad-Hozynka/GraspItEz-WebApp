import { RecentSets } from "../components/recentSets/recentlSets";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-center pt-8 lg:pt-24 text-blue-600">Welcome to GraspItEz</h1>
      <h2 className="text-center text-gray-500 font-normal">
        An app to improve your knowledge in various multitiude of subjects.
      </h2>
      <RecentSets className="lg:w-2/3 mx-auto" />
    </div>
  );
}

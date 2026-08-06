import liveClassData from "../../../data/instructor-live-class.json";
import LiveClassPanel from "../../../components/ui/student/instructors/live-class/LiveClassPanel";

export default function InstructorLiveClassPage() {
  const { stats, liveNow, upcoming } = liveClassData;

  return (
    <LiveClassPanel
      stats={stats}
      liveNow={liveNow}
      upcoming={upcoming}
    />
  );
}

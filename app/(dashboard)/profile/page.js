import profileData from "../../../data/instructor-profile.json";
import InstructorProfilePanel from "../../../components/ui/student/instructors/profile/InstructorProfilePanel";

export default function InstructorProfilePage() {
  return <InstructorProfilePanel profile={profileData} />;
}

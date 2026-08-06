import studentsData from "../../../data/instructor-students.json";
import StudentsTable from "../../../components/ui/student/instructors/students/StudentsTable";

export default function InstructorStudentsPage() {
  const { stats, students, filters } = studentsData;

  return (
    <StudentsTable
      stats={stats}
      students={students}
      filters={filters}
    />
  );
}

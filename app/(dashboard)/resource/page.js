import resourcesData from "../../../data/instructor-resources.json";
import ResourcesGrid from "../../../components/ui/student/instructors/resources/ResourcesGrid";

export default function InstructorResourcesPage() {
  const { stats, resources, categories } = resourcesData;

  return (
    <ResourcesGrid
      stats={stats}
      resources={resources}
      categories={categories}
    />
  );
}

export default async function Page({ params }: { params: { course: string } }) {
  const { course } = await params;
  return (
    <div className="container py-4 px-6">
      <h1 className="text-2xl font-bold">{course}</h1>
      <p>Course ID: {course}</p>
      <p>Course Name: {course}</p>
      <p>Course Description: This is a description of the course.</p>
    </div>
  );
}

import Card from "@/app/_components/Card";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-2 py-4 px-6">
      <Link href="/teaching/javascript">
        <Card filled>Javascript</Card>
      </Link>
      <Link href="/teaching/react">
        <Card filled>React</Card>
      </Link>
      <Link href="/teaching/next">
        <Card filled>NextJS</Card>
      </Link>
    </div>
  );
}

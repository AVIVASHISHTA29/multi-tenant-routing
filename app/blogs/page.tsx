import { fetchSubdomainContent } from "@/lib/fetchSubdomainContent";

export default async function BlogsPage() {
  const data = await fetchSubdomainContent();

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold">{data.content}</h1>
    </div>
  );
}

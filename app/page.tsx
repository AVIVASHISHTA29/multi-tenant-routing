// app/page.tsx
"use client";
import { useEffect, useState } from "react";
import { fetchSubdomainContent } from "../lib/fetchSubdomainContent";

export default function HomePage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchSubdomainContent().then((data) => setContent(data.content));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold">{content}</h1>
    </div>
  );
}

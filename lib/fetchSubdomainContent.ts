// lib/fetchSubdomainContent.ts
export async function fetchSubdomainContent() {
  const res = await fetch("/api/subdomain");
  const data = await res.json();
  return data;
}

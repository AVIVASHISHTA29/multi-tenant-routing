// lib/fetchSubdomainContent.js
export async function fetchSubdomainContent(subdomain: string): Promise<any> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    throw new Error(
      "Base URL is not defined. Please set NEXT_PUBLIC_API_URL in your environment variables."
    );
  }
  try {
    const response = await fetch(`${baseUrl}/api/data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subdomain }),
    });
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const json = response.json();
    console.log("Response json:", json);
    return json;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

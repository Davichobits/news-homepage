
export async function GET() {
  const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${import.meta.env.API_KEY}`);
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
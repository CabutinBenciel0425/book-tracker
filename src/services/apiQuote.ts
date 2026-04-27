export interface Quote {
  author: string;
  quote: string;
}

export async function apiQuote(): Promise<Quote | null> {
  try {
    const response = await fetch(
      "https://motivational-spark-api.vercel.app/api/quotes/random",
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch quote: ${response.status}`);
    }

    const data = await response.json();

    return data || null;
  } catch (err) {
    console.error("Quote fetch error: ", err);
    return null;
  }
}

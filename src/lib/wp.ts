export type WPPost = {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
};

const WP_BASE = process.env.WP_BASE_URL;
if (!WP_BASE) {
  throw new Error("WP_BASE_URL is not set. Add it to .env and restart dev server.");
}

export async function getPostById(id: number): Promise<WPPost> {
  const res = await fetch(
    `${WP_BASE}/wp-json/wp/v2/posts/${id}?_fields=id,title,content`,
    { next: { revalidate: 60 } } // ISR; set { cache: "no-store" } for true live
  );
  if (!res.ok) throw new Error(`Failed to fetch post ${id}`);
  return res.json();
}

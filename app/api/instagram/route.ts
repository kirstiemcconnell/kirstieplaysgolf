import { NextResponse } from "next/server";

export const revalidate = 3600; // cache 1 hour

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "Instagram not configured" },
      { status: 503 }
    );
  }

  try {
    const [profileRes, mediaRes] = await Promise.all([
      fetch(
        `https://graph.instagram.com/me?fields=id,username,followers_count,media_count&access_token=${token}`,
        { next: { revalidate: 3600 } }
      ),
      fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=9&access_token=${token}`,
        { next: { revalidate: 3600 } }
      ),
    ]);

    const profile = await profileRes.json();
    const media = await mediaRes.json();

    return NextResponse.json({ profile, media: media.data ?? [] });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch Instagram data" },
      { status: 502 }
    );
  }
}

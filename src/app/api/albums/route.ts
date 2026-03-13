import GraphPageApi from "@/lib/graph-page";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const albumId = searchParams.get("id");

    // Fallback to empty string for process.env or handle gracefully
    // The environment variables must be defined in the .env file
    const PAGE_ID = process.env.FB_PAGE_ID || "1431417997070793";
    const ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;

    if (!ACCESS_TOKEN) {
        return NextResponse.json(
            { error: "Token not configured" },
            { status: 500 }
        );
    }

    try {
        const graph = new GraphPageApi(
            ACCESS_TOKEN,
            "v17.0",
            PAGE_ID
        );

        let resJson = "";

        if (albumId) {
            resJson = await graph.getSingleAlbum(albumId);
        } else {
            resJson = await graph.getAlbums();
        }

        // The GraphPageApi returns stringified JSON, parse it before returning
        // so NextResponse can set proper application/json headers mapping
        const data = JSON.parse(resJson);
        return NextResponse.json(data);
    } catch (e) {
        return NextResponse.json(
            { error: (e as Error).message },
            { status: 500 }
        );
    }
}
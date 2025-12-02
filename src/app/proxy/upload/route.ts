import axios from "axios";

export async function PUT(request: Request) {
  try {
    const url = request.headers.get("x-upload-url");
    const contentType = request.headers.get("content-type") || "image/jpeg";

    if (!url) {
      return new Response(JSON.stringify({ error: "Missing upload URL" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Get the file data as array buffer
    const fileBuffer = await request.arrayBuffer();

    // Upload to S3 via proxy
    await axios.put(url, Buffer.from(fileBuffer), {
      headers: {
        "Content-Type": contentType,
        "x-amz-acl": "public-read",
      },
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Proxy upload error:", error);
    return new Response(
      JSON.stringify({
        error: "Upload failed",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

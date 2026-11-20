const PINATA_FILE_URL = "https://api.pinata.cloud/pinning/pinFileToIPFS";
const PINATA_JSON_URL = "https://api.pinata.cloud/pinning/pinJSONToIPFS";
const PINATA_GATEWAY = "https://gateway.pinata.cloud/ipfs";
const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const runtime = "nodejs";

export async function POST(request) {
  const jwt = process.env.PINATA_JWT;
  if (!jwt) {
    return Response.json(
      { error: "PINATA_JWT is not configured on the server." },
      { status: 500 },
    );
  }

  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: "Cross-origin uploads are not allowed." }, {
      status: 403,
    });
  }

  const contentType = request.headers.get("content-type") || "";
  let pinataUrl;
  let pinataOptions;

  if (contentType.includes("multipart/form-data")) {
    let formData;
    try {
      formData = await request.formData();
    } catch {
      return Response.json({ error: "Invalid file upload form." }, { status: 400 });
    }

    const file = formData.get("file");
    if (!file || typeof file === "string" || typeof file.arrayBuffer !== "function") {
      return Response.json({ error: "A file is required." }, { status: 400 });
    }
    if (file.size > MAX_FILE_SIZE) {
      return Response.json(
        { error: "File exceeds the 5 MB upload limit." },
        { status: 413 },
      );
    }

    const pinataFormData = new FormData();
    pinataFormData.append("file", file, file.name);
    pinataUrl = PINATA_FILE_URL;
    pinataOptions = { method: "POST", body: pinataFormData };
  } else if (contentType.includes("application/json")) {
    let metadata;
    try {
      metadata = await request.json();
    } catch {
      return Response.json({ error: "Invalid metadata JSON." }, { status: 400 });
    }

    if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) {
      return Response.json(
        { error: "Metadata must be a JSON object." },
        { status: 400 },
      );
    }

    pinataUrl = PINATA_JSON_URL;
    pinataOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pinataContent: metadata }),
    };
  } else {
    return Response.json(
      { error: "Use multipart form data for files or JSON for metadata." },
      { status: 415 },
    );
  }

  try {
    const pinataResponse = await fetch(pinataUrl, {
      ...pinataOptions,
      headers: {
        ...pinataOptions.headers,
        Authorization: `Bearer ${jwt}`,
      },
    });
    const result = await pinataResponse.json();

    if (!pinataResponse.ok) {
      const message =
        result.error?.details || result.error || result.message || "Pinata rejected the upload.";
      return Response.json(
        { error: typeof message === "string" ? message : JSON.stringify(message) },
        { status: 502 },
      );
    }
    if (!result.IpfsHash) {
      return Response.json(
        { error: "Pinata response did not include an IPFS hash." },
        { status: 502 },
      );
    }

    return Response.json({
      hash: result.IpfsHash,
      url: `${PINATA_GATEWAY}/${result.IpfsHash}`,
    });
  } catch (error) {
    console.error("Pinata upload request failed", error);
    return Response.json(
      { error: "Could not complete the upload with Pinata." },
      { status: 502 },
    );
  }
}

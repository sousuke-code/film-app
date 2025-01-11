

export async function GET() {
    const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=cac949cc68cd8bd8d6110b32bf991cd0');
    const data = await res.json();
    return Response.json({ data });
}

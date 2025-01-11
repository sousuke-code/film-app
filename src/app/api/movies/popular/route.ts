

export async function GET() {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=cac949cc68cd8bd8d6110b32bf991cd0';

    const res =await fetch(url);
    const data= await res.json();
    return Response.json({ data });
}

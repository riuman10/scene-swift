import Link from "next/link";

interface MovieTypes {
  title: string;
  image: string;
  overview: string;
  id : number
}

function MovieCard({ title, image, overview , id }: MovieTypes) {
  return (
    <Link href = {`/now_playing/${id}`}>
    <div className="group">
      <div className="relative grid w-full h-full sm:h-40 md:h-[600px] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center">
        <div
          className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center shadow-none"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${image})`,
          }}
        >
          <div className="to-bg-black-10 absolute group-hover:top-0 transition-all ease-out duration-500 top-full h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative p-6 py-14 px-4 md:px-6 top-full group-hover:top-0 transition-all duration-[400ms] ">
          <h2 className="text-left heading placeholder:mb-6 block text-2xl font-medium leading-[1.5] text-white transition-transform ease-linear duration-300 w-[300px] truncate">
            {title}
          </h2>
          <p className="text-left text-sm text-white">{overview}</p>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default MovieCard;

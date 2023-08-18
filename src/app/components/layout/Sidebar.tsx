import Link from 'next/link'
import Dock from '../dock/Dock';


const Sidebar = () => {
  let movieLinks = [
    {
      id : "movies",
      name : "Movies",
      link : "/movies"
    },
    {
      id : "tv_shows",
      name : "TV Shows",
      link : "/movies"
    }
  ]
  return (
    <div className="fixed min-w-[100px] h-screen bg-white border flex flex-col items-center justify-center">
      <p className="absolute top-0 left-0">Scene Swift.</p>
      <div className = "">
        <Dock />
        {/* {
          movieLinks.map((item) => (
            <Link href={item.link} key = {item.id}>
              <p>{item.name}</p>
            </Link>
        ))
        } */}
      </div>
    </div>
  )
}


export default Sidebar;
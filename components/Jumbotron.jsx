import Image from "next/image"
import Link from "next/link"

const Jumbotron = () => {
  return (
    <div className="text-center bg-white pb-10">
        <div className="w-60 mx-auto">
            <Image
                src= "/jumbo.png"
                height={180}
                width={200}
                layout="responsive"
            />
        </div>
        <h1 className="text-neutral-900 text-2xl font-extrabold">
            Unlimited movies, TV shows, and more.
            <span className="text-neutral-600 text-base font-normal block">Watch anywhere. Cancel anytime.</span>
        </h1>
        <Link href = "/signup">
            <button className="bg-neutral-900 border border-neutral-900 px-6 py-2 mt-4 text-white hover:bg-white hover:text-neutral-900 transition-all duration-300 rounded">
                Get Started
            </button>
        </Link>
    </div>
  )
}

export default Jumbotron
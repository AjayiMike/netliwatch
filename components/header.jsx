import Link from "next/link"

const Header = () => {
  return (
    <header className="w-full bg-neutral-900 p-6">
        <Link href = "/">
            <a className="font-extrabold text-white tracking-widest text-xl cursor-pointer font-lobster">
                Netli<span className="text-orange-500">Watch</span>
            </a>
        </Link>
    </header>
  )
}

export default Header
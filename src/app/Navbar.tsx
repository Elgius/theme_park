import Link from "next/link";


export function Navbar() {
  return (
    <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <a href="/main" className="text-2xl font-bold">Fun Island</a>
          
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/main" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/PassS" className="text-gray-600 hover:text-gray-900">
                  Tickets
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-600 hover:text-gray-900">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Navbar

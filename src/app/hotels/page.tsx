// import Image from "next/image";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";

const activities = [
  {
    name: "Sunset Hotel",
    image:
      "https://images.unsplash.com/photo-1666203395124-df1f3416c3e1?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Stone Hotel",
    image:
      "https://images.unsplash.com/photo-1647426130233-66a93ff4a516?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Village Inn",
    image:
      "https://images.unsplash.com/photo-1531514381259-8c9fedc910b8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Coral Reef Retreat",
    image:
      "https://plus.unsplash.com/premium_photo-1719262671407-11967805ea8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tropical Breeze Hotel",
    image:
      "https://images.unsplash.com/photo-1551131618-3f0a5cf594b4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Luxe Lagoon Hotel",
    image:
      "https://images.unsplash.com/photo-1499388953068-a1ca50d337e2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Whispering Palms Resort",
    image:
      "https://plus.unsplash.com/premium_photo-1661843448781-3ee4d83fbd7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Fun Island</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/main" className="text-gray-600 hover:text-gray-900"> Home</Link>
                {/* <a href="#" className="text-red-600 hover:text-red-800">
                  Home
                </a> */}
              </li>
              <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">  About</Link>
                {/* <a href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </a> */}
              </li>
              <li>
                <a href="/PassS" className="text-gray-600 hover:text-gray-900">
                  Tickets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="/login" className="text-gray-600 hover:text-gray-900">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={activity.image}
                alt={activity.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-center cursor-pointer">
                  <Link href="/hotels/hotel">{activity.name}</Link>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

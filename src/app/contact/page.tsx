import Navbar from '../Navbar'

export default function Page() {
  return (
    <div>
    <Navbar />
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="container mx-[20%] p-10 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-black-600 mb-6">Contact Us</h1>
      <p className="text-center text-gray-600 mb-10">
        Have questions or need help? Feel free to reach out to us using the form below, or through our contact details.
      </p>


      <div className="grid md:grid-cols-2 gap-5 mb-10">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div>
              <h3 className="font-bold text-gray-700">Address</h3>
              <p>123 Fun Park Lane, Park City, Wonderland 12345</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">

            <div>
              <h3 className="font-bold text-gray-700">Email</h3>
              <p>support@funisland.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div>
              <h3 className="font-bold text-gray-700">Phone</h3>
              <p>+960 123-4567</p>
            </div>
          </div>
        </div>


        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-600 mb-1 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1 font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-600 mb-1 font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message here"
                
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <p className="text-center text-gray-500 mt-8">
        Thank you for choosing Fun Island! We look forward to welcoming you.
      </p>
    </div>
  </div>
  </div>
  );
}

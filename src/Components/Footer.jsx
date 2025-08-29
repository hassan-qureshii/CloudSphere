import { Facebook, Github, Twitch, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2 font-poppins">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 gap-6">
        
        {/* Solutions */}
        <div>
          <h6 className="font-bold uppercase pt-2 text-xl">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h6 className="font-bold uppercase pt-2 text-xl">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="font-bold uppercase pt-2 text-xl">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="font-bold uppercase pt-2 text-xl">Legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-1 sm:col-span-2 md:col-span-2 pt-8 md:pt-2">
          <p className="text-2xl font-black uppercase">Subscribe to our Newsletter</p>
          <p className="text-gray-400 my-2">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              className="p-2 rounded-md w-full sm:w-[250px] text-blue-900 bg-white"
              placeholder="Enter Email"
            />
            <button className="w-full sm:w-[120px] bg-blue-900 rounded-xl p-2 text-white font-semibold">
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="col-span-1 sm:col-span-2 md:col-span-6 border-t-2 border-gray-600 mt-8 pt-8 text-center">
          <p className="text-slate-400 font-bold">2025 © Akbar - Qureshi</p>
          <div className="flex justify-center gap-10 pt-5">
            <Facebook className="text-blue-900 w-6 h-6" />
            <Instagram className="text-blue-900 w-6 h-6" />
            <Twitch className="text-blue-900 w-6 h-6" />
            <Twitter className="text-blue-900 w-6 h-6" />
            <Github className="text-blue-900 w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

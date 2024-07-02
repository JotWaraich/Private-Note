import { CgTimer } from "react-icons/cg";
import { GiTimeBomb } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { BsFillSendFill } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/main pic.jpg')",
        }}
      >
        <h1 className="text-5xl font-bold mb-4 text-gray-600">
          Send Secure Notes That Disappear
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          Confidential notes that self-destruct after being read or after a set
          time.
        </p>
        <Link
          href="/sendnote"
          className="bg-blue-500 text-white px-8 py-4 rounded-lg"
        >
          Send a Private Note
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 text-center mb-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <MdSecurity className="mx-auto mb-4 text-2xl" />
                <h3 className="text-xl font-bold mb-2">Secure Encryption</h3>
                <p>Your notes are encrypted and safe.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 text-center mb-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <GiTimeBomb className="mx-auto mb-4 text-2xl" />
                <h3 className="text-xl font-bold mb-2">Self-Destruct</h3>
                <p>Notes automatically delete after being read.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 text-center mb-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <CgTimer className="mx-auto mb-4 text-2xl" />
                <h3 className="text-xl font-bold mb-2">Time Limit</h3>
                <p>Set a custom expiration time for your notes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 text-center mb-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <TfiWrite className="mx-auto mb-4 text-2xl" />
                <h3 className="text-xl font-bold mb-2">Write your note</h3>
                <p>Compose your confidential message.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 text-center mb-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <CgTimer className="mx-auto mb-4 text-2xl" />
                <h3 className="text-xl font-bold mb-2">
                  Set an expiration time
                </h3>
                <p>Choose when the note will self-destruct.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 text-center mb-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <BsFillSendFill className="mx-auto mb-4 text-2xl" />
                <h3 className="text-xl font-bold mb-2">Send securely</h3>
                <p>Send your encrypted note.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 text-center mb-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p>
                  &#34;Private Notes is incredibly easy to use and I love the
                  security it provides!&#34;
                </p>
                <p className="mt-4 font-bold">- Satisfied User</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 text-center mb-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p>
                  &#34;The self-destruct feature is perfect for confidential
                  messages.&#34;
                </p>
                <p className="mt-4 font-bold">- Happy Customer</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 text-center mb-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p>
                  &#34;I can trust Private Notes to keep my information
                  secure.&#34;
                </p>
                <p className="mt-4 font-bold">- Loyal Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Private Notes. All rights reserved.</p>
          <p>
            <a href="#" className="text-blue-400">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="text-blue-400">
              Terms of Service
            </a>{" "}
            |{" "}
            <a href="#" className="text-blue-400">
              Contact
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}

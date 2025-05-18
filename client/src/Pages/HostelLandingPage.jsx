import React, { useState, useEffect, useRef } from "react";

const roomsData = [
  {
    id: "single",
    title: "Single Room",
    price: "₹8,500/month + ₹1,000 Cooler + 3,000 Security Deposit Refundable",
    features: ["Private Room", "Fan", "Cooler", "Attached Bathroom"],
    images: ["Single Room.jpg", "Single 2.jpg"],
  },
  {
    id: "double",
    title: "Double Sharing",
    price: "₹7,000/month + ₹500 Cooler + 3,000 Security Deposit Refundable",
    features: ["Shared Room", "Fan", "Cooler", "Attached Bathroom"],
    images: ["Pg double 2.jpg", "Pg Double Almirah 3.jpg"],
  },
  {
    id: "triple",
    title: "Triple Sharing",
    price: "₹6,500/month + ₹350 Cooler + 3,000 Security Deposit Refundable",
    features: ["Shared Room", "Fan", "Cooler", "Attached Bathroom"],
    images: ["Pg triple.jpg", "Triple Almirah.jpg"],
  },
  {
    id: "quad",
    title: "Quad Sharing",
    price: "₹6,000/month + ₹250 Cooler + 3,000 Security Deposit Refundable",
    features: ["Shared Room", "Fan", "Cooler", "Attached Bathroom"],
    images: ["Pg quad.jpg", "Pg Quad 2.jpg"],
  },
];

const RoomDetailModal = ({ room, onClose }) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full text-[#fc0303] relative max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-[#fc0303] text-6xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4">{room.title}</h2>
        <p className="text-[#fc0303] font-semibold mb-2">{room.price}</p>
        <ul className="list-disc list-inside mb-4">
          {room.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <div className="grid md:grid-cols-2 gap-4">
          {room.images.map((img, i) => (
            <img
              key={i}
              src={`/${img}`}
              loading="lazy"
              alt={room.title}
              className="rounded-lg shadow-md"
              style={{ width: "100%", height: "auto" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const HostelLandingPage = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-[#fc0303] transition-colors">
      {/* Navbar */}
      <nav className="px-6 py-4 bg-white shadow sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold"></h1>
          <button
            className="md:hidden text-[#fc0303] text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#hero" className="hover:text-[#fc0303]">
              Home
            </a>
            <a href="#about" className="hover:text-[#fc0303]">
              About
            </a>
            <a href="#rooms" className="hover:text-[#fc0303]">
              Rooms
            </a>
            <a href="#amenities" className="hover:text-[#fc0303]">
              Amenities
            </a>
            <a href="#gallery" className="hover:text-[#fc0303]">
              Gallery
            </a>
            <a href="#location" className="hover:text-[#fc0303]">
              Location
            </a>
            <a href="#contact" className="hover:text-[#fc0303]">
              Contact
            </a>
            <a href="#faqs" className="hover:text-[#fc0303]">
              FAQs
            </a>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-2" onClick={() => setMenuOpen(!menuOpen)}>
            {/* Mobile Menu */}
            <a href="#hero" className="block hover:text-[#fc0303]">
              Home
            </a>
            <a href="#about" className="block hover:text-[#fc0303]">
              About
            </a>
            <a href="#rooms" className="block hover:text-[#fc0303]">
              Rooms
            </a>
            <a href="#amenities" className="block hover:text-[#fc0303]">
              Amenities
            </a>
            <a href="#gallery" className="block hover:text-[#fc0303]">
              Gallery
            </a>
            <a href="#location" className="block hover:text-[#fc0303]">
              Location
            </a>
            <a href="#contact" className="block hover:text-[#fc0303]">
              Contact
            </a>
            <a href="#faqs" className="block hover:text-[#fc0303]">
              FAQs
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="bg-[#ffe6e6] py-20 text-center">
        <h1 className="text-2xl md:text-5xl font-bold mb-4">
          Welcome to RedStar Hostel & Pg Residency
        </h1>
        <p className="text-lg md:text-xl">Affordable. Comfortable. Homely.</p>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg max-w-3xl flex flex-col gap-4">
          <p>
            RedStar Hostel offers a vibrant and comfortable living experience
            right in the heart of the city. Designed for students, young
            professionals, and travelers alike, RedStar combines affordability
            with quality amenities to create a safe, friendly, and homely
            environment.
          </p>
          <p>
            With modern rooms, 24/7 security, high-speed Wi-Fi, RedStar aims to
            be your perfect home away from home. Our dedicated staff ensures
            clean, hygienic living spaces and timely support to make your stay
            stress-free.
          </p>{" "}
          <p>
            Whether you’re here to study, work, or explore, RedStar provides the
            ideal balance of comfort, convenience, and community. Join us and
            become part of the RedStar family!
          </p>
        </p>
      </section>

      {/* Rooms & Pricing */}
      <section id="rooms" className="bg-[#fff0f0] py-16 px-4 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Rooms & Pricing</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {roomsData.map((room) => (
            <button
              key={room.id}
              onClick={() => setSelectedRoom(room)}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg text-left"
            >
              <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
              <p className="text-[#fc0303] font-bold mb-2">{room.price}</p>
              <ul className="list-disc list-inside">
                {room.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </button>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-16 px-4 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Wi-Fi",
            "Laundry",
            "Fully Furnished",
            "CCTV",
            "Healthy Meals",
            "24h Power Backup",
            "RO Water",
            "Water Cooler",
          ].map((a, i) => (
            <div key={i} className="bg-[#ffe6e6] p-4 rounded-xl shadow">
              <p className="text-lg font-medium">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 px-4 md:px-20 bg-[#fff0f0]">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-scroll whitespace-nowrap no-scrollbar"
        >
          {[
            "PG Side 2.jpg",
            "Pg Full.jpg",
            "PG Side.jpg",
            "PG Front.jpg",
            "Pg mess.jpg",
            "PG mess 2.jpg",
            "Pg water1.jpg",
            "Pg balcony.jpg",
            "Pg corridor.jpg",
            "PG Office.jpg",
            "Pg pic1.jpg",
            "PG Fire Entenguisher.jpg",
            "Pg inverter.jpg",
            "Pg Bathroom.jpg",
            "Pg Toilet.jpg",
          ].map((img, i) => (
            <div
              key={i}
              className="min-w-[300px] max-w-sm rounded-xl shadow overflow-hidden"
            >
              <img
                src={`/${img}`}
                alt="Hostel"
                loading="lazy"
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-16 px-4 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-center">Location</h2>
        <div className="w-full h-96">
          <p className="text-center mb-4 font-semibold">
            <p>Red Star PG & Residency, Pari Chowk,</p>
            <p>Tugalpur Main Market Road,</p>
            <p>Greater Noida, Uttar Pradesh 201310</p>
          </p>
          <iframe
            title="hostel-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.481602907979!2d77.50105287461005!3d28.465039475756644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1d814b026a1%3A0x49f12dec34560a02!2sRed%20Star%20PG%20%26%20Residency!5e0!3m2!1sen!2sin!4v1747548971203!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-16 px-4 md:px-20 bg-[#ffe6e6] text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <div className="max-w-xl mx-auto space-y-6 text-lg">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <p className="font-medium">📧 Email</p>
            <a
              href="mailto:redstarhosteltugalpur@gmail.com"
              className="text-[#e60000] underline break-all"
            >
              redstarhosteltugalpur@gmail.com
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <p className="font-medium">📞 Call Now</p>
            <a href="tel:+919266782585" className="text-[#e60000] underline">
              +91 92667 82585
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-16 px-4 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-[#fc0303]">
          <details className="border border-[#fc0303] rounded p-4">
            <summary className="cursor-pointer font-semibold">
              Is cold water available for summer?
            </summary>
            <p className="mt-2">
              Yes, chilled water in available 24/7 in summers.
            </p>
          </details>
          <details className="border border-[#fc0303] rounded p-4">
            <summary className="cursor-pointer font-semibold">
              Is food included in the rent?
            </summary>
            <p className="mt-2">Yes, we provide healthy meals included.</p>
          </details>
          <details className="border border-[#fc0303] rounded p-4">
            <summary className="cursor-pointer font-semibold">
              Is there Wi-Fi available?
            </summary>
            <p className="mt-2">Yes, free Wi-Fi is available 24/7.</p>
          </details>
          <details className="border border-[#fc0303] rounded p-4">
            <summary className="cursor-pointer font-semibold">
              Is there Room Cleaning Service?
            </summary>
            <p className="mt-2">Yes, rooms are cleaned daily.</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-4 border-t text-sm text-gray-500 text-[#fc0303]">
        <p>© {new Date().getFullYear()} RedStar. All rights reserved. 2025</p>
      </footer>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <RoomDetailModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </div>
  );
};

export default HostelLandingPage;

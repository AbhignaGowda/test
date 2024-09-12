"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-blue-900">
      
        {/* Hero Section */}
        <section className="bg-blue-950 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to City-360</h1>
            <p className="text-lg mb-8">
              Empowering smart cities with modern infrastructure and cutting-edge technology.
            </p>
            <a
              href="#features"
              className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              Explore Features
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Our Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <Link href="/waste-management">
                <div className="max-w-xs w-full group/card">
                  <div className="relative overflow-hidden rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4">
                    <Image
                      src="https://www.conserve-energy-future.com/wp-content/uploads/2014/04/waste-disposal-management-landfills-garbage.jpg"
                      alt="Plastic Waste Management"
                      layout="responsive"
                      width={600}
                      height={400}
                      className="object-cover h-48 w-full"
                    />
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="text content relative z-10 p-4">
                      <h1 className="font-bold text-xl md:text-2xl text-gray-50">
                        Plastic Waste Management
                      </h1>
                      <p className="font-normal text-sm text-gray-50 my-4">
                        Proper waste management is a cornerstone of sustainable living, turning today's trash into tomorrow's treasure.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link href="/bus-tracking">
                <div className="max-w-xs w-full group/card">
                  <div className="relative overflow-hidden rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4">
                    <Image
                      src="https://assets.thehansindia.com/hansindia-bucket/gps_tracking-buses_5099.jpg"
                      alt="Bus Tracking"
                      layout="responsive"
                      width={600}
                      height={400}
                      className="object-cover h-48 w-full"
                    />
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="text content relative z-10 p-4">
                      <h1 className="font-bold text-xl md:text-2xl text-gray-50">
                        Track-my-Bus
                      </h1>
                      <p className="font-normal text-sm text-gray-50 my-4">
                        Real-time bus tracking ensures efficiency, reduces wait times, and enhances commuter convenience.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link href="/tourism">
                <div className="max-w-xs w-full group/card">
                  <div className="relative overflow-hidden rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4">
                    <Image
                      src="https://static.india.com/wp-content/uploads/2022/12/travel-trends.jpg"
                      alt="Tourism"
                      layout="responsive"
                      width={600}
                      height={400}
                      className="object-cover h-48 w-full"
                    />
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="text content relative z-10 p-4">
                      <h1 className="font-bold text-xl md:text-2xl text-gray-50">
                        Tourism
                      </h1>
                      <p className="font-normal text-sm text-gray-50 my-4">
                        Enhancing tourism with smart solutions for a more immersive and efficient travel experience.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-200 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Real-Time Data Monitoring</h3>
                <p>
                  Access real-time data about city infrastructure, including water, traffic, and more.
                </p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Sustainable Urban Planning</h3>
                <p>
                  Plan for sustainable growth with smart planning tools and data insights.
                </p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-4">IoT-Driven Solutions</h3>
                <p>
                  Use IoT technology to integrate city services for better management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 City-360. All rights reserved.</p>
            <div className="flex justify-center mt-4">
              <a href="#" className="text-yellow-400 hover:text-yellow-500 mx-2">Facebook</a>
              <a href="#" className="text-yellow-400 hover:text-yellow-500 mx-2">Twitter</a>
              <a href="#" className="text-yellow-400 hover:text-yellow-500 mx-2">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;

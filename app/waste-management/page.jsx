"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React from 'react';
import { usePathname } from 'next/navigation';

const Page = () => {
  const path = usePathname();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Waste Management</h1>
        <nav className="mb-6">
          <ul className="flex space-x-4">
            <li>
              <Link href="/waste" className={`text-sm font-medium cursor-pointer hover:text-primary 
                ${path === '/waste' ? 'text-primary' : 'text-gray-700'}`}>
                Waste Listing
              </Link>
            </li>
            <li>
              <Link href="/add-new-listing">
                <Button className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Post Waste Site
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section>
        <p className="text-lg mb-4">
          Proper waste management is crucial for maintaining a clean and sustainable environment. In this section, you'll find information on how to effectively manage waste, including best practices, resources, and guidelines.
        </p>
        <p className="text-gray-700">
          Our platform provides a comprehensive solution for managing waste sites, including a listing of available sites, options for posting new sites, and resources for waste management best practices. Stay informed and contribute to a cleaner environment by exploring the options below.
        </p>
      </section>
    </div>
  );
};

export default Page;

'use client'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Prompt 1', href: '/prompt-1' },
  { label: 'Prompt 2', href: '/prompt-2' },
  { label: 'Prompt 3', href: '/prompt-3' },
  { label: 'Prompt 4', href: '/prompt-4' },
  { label: 'Prompt 5', href: '/prompt-5' },
]

export function Navbar() {
  return (
       <Disclosure as="nav" className="bg-neutral-900 text-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-center">
              <div className="hidden md:flex space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="hover:underline text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              {/* Mobile menu button */}
              <div className="absolute right-4 md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile dropdown */}
          <Disclosure.Panel className="md:hidden px-4 pb-3 pt-2 space-y-1 text-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-800"
              >
                {item.label}
              </Link>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


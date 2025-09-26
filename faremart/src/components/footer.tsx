"use client";

import Link from 'next/link';

export default function Footer() {
  return (
  <footer className="mt-0 bg-gradient-to-b from-[#071032] to-[#03102a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold">Faremart</span>
          </div>
          <p className="text-sm text-white/70">
            Creating a realistic shopping experience with clear documentation and helpful
            examples for integrators and builders.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Docs</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/docs" className="hover:underline">
                Getting started
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Community</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/roblox-community" className="hover:underline">
                Roblox Community
              </Link>
            </li>
            <li>
              <Link href="/discord-server" className="hover:underline">
                Discord Server
              </Link>
            </li>
            <li>
              <Link href="/supermarket" className="hover:underline">
                Supermarket
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Faremart is an official Harvesta subsidiary.</h4>
          <p className="text-sm text-white/70 mb-3">Learn more about Harvesta and its subsidiaries.</p>
          <div className="flex gap-3">
            <a
              href="https://harvesta.work"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white text-[#071032] px-4 py-2 text-sm font-semibold"
            >
              Harvesta
            </a>
            <a
              href="https://subsidiaries.harvesta.work"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/10 text-white px-4 py-2 text-sm font-semibold"
            >
              Subsidiaries
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="max-w-6xl mx-auto px-6 text-sm text-center text-white/60">
          © {new Date().getFullYear()} Faremart — All rights reserved
        </div>
      </div>
    </footer>
  );
}

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <span className="font-semibold">Faremart</span>,
    },
    links: [
       {
        text: 'Roblox Community',
        url: 'https://www.roblox.com/communities/35559441/Faremart#!/about',
        secondary: false,
      },
      {
        text: 'Discord Server',
        url: 'https://discord.com/invite/kxghmttvY9',
        secondary: false,
      },
      {
        text: 'Supermarket',
        url: 'https://www.roblox.com/games/120116552170614/Faremart-Supermarket',
        secondary: false,
      },
      {
        text: 'Training Center',
        url: 'https://www.roblox.com/games/81471576085133/Faremart-Training-Center',
        secondary: false,
      },
    ],
  };
}

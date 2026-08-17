// Real brand/UI icons as inline SVG, replacing emoji placeholders.
// All icons use currentColor so they inherit text color via className.

export function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.83c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.58v1.9h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.84.5 3.56 1.36 5.03L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.92 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2Zm0 1.8c2.19 0 4.25.85 5.8 2.4a8.1 8.1 0 0 1 2.4 5.72c0 4.48-3.65 8.13-8.14 8.13a8.2 8.2 0 0 1-4.14-1.12l-.3-.17-2.94.77.79-2.86-.19-.3a8.06 8.06 0 0 1-1.25-4.35c0-4.49 3.65-8.22 8.17-8.22h-.2Zm4.52 11.34c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.16.24-.63.81-.78.97-.14.16-.28.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.63-1.2-1.42-1.34-1.66-.14-.24-.02-.37.11-.5.12-.12.27-.32.4-.48.13-.16.18-.28.27-.46.08-.18.04-.34-.04-.48-.08-.12-.5-1.2-.68-1.65-.18-.44-.36-.38-.5-.38-.13 0-.28-.02-.43-.02-.15 0-.39.06-.6.3-.2.24-.78.76-.78 1.85 0 1.09.8 2.14.91 2.29.11.15 1.55 2.36 3.76 3.22 2.22.86 2.22.57 2.62.53.4-.03 1.29-.53 1.47-1.04.18-.51.18-.94.13-1.03-.05-.1-.19-.16-.4-.28Z" />
    </svg>
  );
}

export function EmailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="M3 6.5 12 13l9-6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CartIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <path d="M2.5 3.5h2l2.4 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 1.96-1.6l1.44-7.4H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

export function LockIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" strokeLinecap="round" />
    </svg>
  );
}

export function TruckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M2 7h11v9H2z" />
      <path d="M13 10h4l3 3v3h-7z" />
      <circle cx="6.5" cy="18" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="18" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MailCheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="M3 6.5 12 13l9-6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ToolIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2-2Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

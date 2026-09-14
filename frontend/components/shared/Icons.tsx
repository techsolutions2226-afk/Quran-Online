import { cn } from "@/lib/utils/cn";

type IconProps = {
  className?: string;
};

export function IconTeacher({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} aria-hidden>
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 20a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconOneOnOne({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} aria-hidden>
      <path d="M8 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 19a5.5 5.5 0 0 1 11 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10.5 19a5.5 5.5 0 0 1 11 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} aria-hidden>
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v4.5l3 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBook({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} aria-hidden>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16.5H6.5A2.5 2.5 0 0 0 4 22V5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 18.5h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconMic({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} aria-hidden>
      <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 17.5V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconBrain({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} aria-hidden>
      <path d="M9 4.5a3 3 0 0 0-3 3v1A2.5 2.5 0 0 0 4 11v1.5A2.5 2.5 0 0 0 6 15v1.5a3 3 0 0 0 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 4.5a3 3 0 0 1 3 3v1A2.5 2.5 0 0 1 20 11v1.5A2.5 2.5 0 0 1 18 15v1.5a3 3 0 0 1-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 4v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconLanguage({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} aria-hidden>
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.75 12h16.5M12 3.75c2.4 2.6 3.6 5.3 3.6 8.25S14.4 17.65 12 20.25C9.6 17.65 8.4 14.95 8.4 12S9.6 6.35 12 3.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} aria-hidden>
      <path d="m5.5 12.5 4 4 9-9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPlus({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} aria-hidden>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconMinus({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} aria-hidden>
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} aria-hidden>
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconHome({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} aria-hidden>
      <path d="m4 10.5 8-7 8 7V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCalendar({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} aria-hidden>
      <rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 3.5V7M16 3.5V7M3.5 10h17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconVideo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} aria-hidden>
      <rect x="3" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m15 10.5 5-2.5v8l-5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconQuote({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("h-7 w-7", className)} aria-hidden>
      <path d="M7.2 17.5c-1.7 0-3.1-.5-4.1-1.6S1.5 13.3 1.5 11.4c0-2.1.7-4 2.1-5.6S7 3.2 9.3 2.5L10 4.4c-1.4.5-2.5 1.3-3.2 2.3-.7 1-.9 1.9-.7 2.8.7-.4 1.5-.6 2.4-.6 1.2 0 2.2.4 3 1.1.8.8 1.2 1.8 1.2 3.1 0 1.2-.4 2.2-1.2 3-.8.8-1.9 1.4-3.3 1.4Zm11.2 0c-1.7 0-3.1-.5-4.1-1.6s-1.6-2.6-1.6-4.5c0-2.1.7-4 2.1-5.6s3.4-2.6 5.7-3.3l.7 1.9c-1.4.5-2.5 1.3-3.2 2.3-.7 1-.9 1.9-.7 2.8.7-.4 1.5-.6 2.4-.6 1.2 0 2.2.4 3 1.1.8.8 1.2 1.8 1.2 3.1 0 1.2-.4 2.2-1.2 3-.8.8-1.9 1.4-3.3 1.4Z" />
    </svg>
  );
}

export function IconZoom({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-6 w-6", className)} aria-hidden>
      <rect x="3" y="6" width="12" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m15 10 5-2.5v9L15 14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("h-6 w-6", className)} aria-hidden>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2.1 21.9l5.15-1.35A9.94 9.94 0 1 0 12.04 2Zm0 1.8a8.12 8.12 0 0 1 6.8 12.55 8.1 8.1 0 0 1-9.55 2.05l-.35-.2-3.05.8.82-2.97-.22-.36A8.12 8.12 0 0 1 12.04 3.8Zm-2.7 3.55c-.2-.45-.4-.46-.58-.47h-.5c-.17 0-.45.07-.68.33s-.9.88-.9 2.15.92 2.5 1.05 2.67c.13.17 1.78 2.84 4.4 3.87 2.18.86 2.62.69 3.1.65.47-.04 1.53-.62 1.75-1.23.22-.6.22-1.12.15-1.23-.07-.1-.25-.17-.53-.3s-1.53-.75-1.77-.84c-.23-.08-.4-.13-.57.13-.17.25-.65.84-.8 1-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.04-1.26-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.09-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.87Z" />
    </svg>
  );
}

export function IconMeet({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-6 w-6", className)} aria-hidden>
      <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6H14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 15.5v-7Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="m16 10.5 4-2.5v8l-4-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

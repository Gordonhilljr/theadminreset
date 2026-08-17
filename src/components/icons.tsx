/**
 * Line-art icons drawn to match the flyer: uniform thin stroke, rounded caps,
 * no fills. They inherit color, so callers set `text-gold` / `text-rose`.
 */
type IconProps = React.SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function CalendarCheck(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M9 15.5l2 2 4-4" />
    </Icon>
  );
}

export function Envelope(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M3 6.5l9 6.5 9-6.5" />
    </Icon>
  );
}

export function Users(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M16 6.2a3.2 3.2 0 010 6.1M18 14.8c2 .8 3.4 2.7 3.4 5.2" />
    </Icon>
  );
}

export function Document(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 3h8l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path d="M14 3v5h5" />
      <path d="M8.5 13h7M8.5 16.5h7M8.5 9.5h2" />
    </Icon>
  );
}

export function Spreadsheet(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M3 14.5h18M9 4v16M15 4v16" />
    </Icon>
  );
}

export function Folder(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 7a2 2 0 012-2h4l2 2.5h8a2 2 0 012 2V18a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
    </Icon>
  );
}

export function Search(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.4 15.4L21 21" />
    </Icon>
  );
}

export function ClipboardCheck(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 4H7a2 2 0 00-2 2v13a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-2" />
      <rect x="9" y="2.5" width="6" height="3.5" rx="1" />
      <path d="M9 12l1.8 1.8L14.5 10M9 17h6" />
    </Icon>
  );
}

export function Person(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5 20.5c0-3.6 3.1-6 7-6s7 2.4 7 6" />
    </Icon>
  );
}

export function Briefcase(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
      <path d="M9 7.5V6a2 2 0 012-2h2a2 2 0 012 2v1.5M3 13h18" />
    </Icon>
  );
}

export function House(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 10.5L12 4l8 6.5" />
      <path d="M6 10v9.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V10" />
      <path d="M10 20v-5h4v5" />
    </Icon>
  );
}

export function ChartUp(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 20h16" />
      <path d="M6 20v-5M10.5 20v-8M15 20v-4" />
      <path d="M13 7.5L17 4.5l2.5 3.5" />
      <path d="M17 4.5v5" />
    </Icon>
  );
}

export function Clock(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.2l3.2 2" />
    </Icon>
  );
}

export function Target(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function CheckCircle(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.2 12.3l2.6 2.6 5-5.4" />
    </Icon>
  );
}

export function MapPin(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21.5s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10.5" r="2.6" />
    </Icon>
  );
}

/** Solid gold check used for the flyer's bullet lists. */
export function CheckBullet(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path
        d="M7.4 12.4l3.1 3.1 6-6.4"
        fill="none"
        stroke="#fffdfb"
        strokeWidth={2.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Heart(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 20.4l-1.5-1.35C5.1 14.2 2 11.4 2 7.95 2 5.15 4.2 3 7 3c1.6 0 3.1.74 4 1.9C11.9 3.74 13.4 3 15 3c2.8 0 5 2.15 5 4.95 0 3.45-3.1 6.25-8.5 11.1L12 20.4z" />
    </svg>
  );
}

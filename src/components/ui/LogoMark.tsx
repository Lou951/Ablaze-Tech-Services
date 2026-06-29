type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "" }: LogoMarkProps) {
  return (
    <div
      className={`relative flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/25 ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 via-blue-600 to-blue-950" />
      <div className="absolute inset-[1px] rounded-2xl bg-[#06162d]" />

      <svg
        viewBox="0 0 48 48"
        className="relative h-7 w-7 text-blue-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.8 5.5C26.8 13.4 34.5 16.9 34.5 25.9C34.5 35 28.2 41.5 20.9 41.5C14.5 41.5 9.5 36.7 9.5 30.2C9.5 24.1 13.6 19.4 17.1 15.7C17.4 20.5 19.9 23.3 22.7 25.2C21.8 18.4 23.2 11.9 25.8 5.5Z"
          className="fill-blue-400"
        />
        <path
          d="M25.8 5.5C26.8 13.4 34.5 16.9 34.5 25.9C34.5 35 28.2 41.5 20.9 41.5C14.5 41.5 9.5 36.7 9.5 30.2C9.5 24.1 13.6 19.4 17.1 15.7C17.4 20.5 19.9 23.3 22.7 25.2C21.8 18.4 23.2 11.9 25.8 5.5Z"
          className="stroke-blue-100"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M24.8 27.5C27.4 30.2 28.2 35.9 23.2 38.4C20.7 39.7 16.3 38.5 15.6 34.8C15 31.7 17.4 28.8 19.7 26.6C20.1 29.2 21.9 30.8 24.8 27.5Z"
          className="fill-white/90"
        />
      </svg>

      <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-blue-300 shadow-lg shadow-blue-300/60" />
    </div>
  );
}

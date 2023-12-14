"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavitemProps {
  isFirst?: boolean;
  label: string;
  page: string;
}

const Navitem: React.FC<NavitemProps> = ({ isFirst, label, page }) => {
  const pathname = usePathname();
  return (
    <Link
      draggable="false"
      className="flex h-full w-full items-center justify-between hover:bg-zinc-700"
      href={page}
    >
      <div
        className={` ${!isFirst ? "h-2/3 w-0.5 bg-slate-300 opacity-70" : ""}`}
      />
      <h5
        className={`${
          pathname === page
            ? "underline underline-offset-8 decoration-1 decoration-cyan-custom"
            : ""
        }`}
      >
        {label}
      </h5>
      <div />
    </Link>
  );
};

export default Navitem;

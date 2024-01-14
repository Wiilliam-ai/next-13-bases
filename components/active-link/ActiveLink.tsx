"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathname = usePathname()
  return (
    <Link className={`hover:text-white ${pathname === path ? 'text-blue-500':'text-gray-400'}`} href={path}>
      {text}
    </Link>
  );
};

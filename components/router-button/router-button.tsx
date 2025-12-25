"use client";

import { useRouter } from "next/navigation";

export default function RouterButton({
  href,
  buttonText,
}: {
  href: string;
  buttonText: string;
}) {
  const router = useRouter();
  return (
    <button
      type="button"
      className="categoryButton"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        router.push(href);
      }}
    >
      {buttonText}
    </button>
  );
}

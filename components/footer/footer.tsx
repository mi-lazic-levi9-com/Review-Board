import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 bg-gray-100 text-center text-gray-600 border-t">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} Review Board App. All rights reserved.{" "}
        <Link href={"/about"} className="categoryButton underline">
          About us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

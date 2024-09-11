import { Page as PageComponent } from "@/components/page";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <PageComponent />
      <footer className="text-center mt-8 mb-4">
        <Link href="/privacy" className="text-blue-600 hover:underline">
          Read our full Privacy Policy
        </Link>
      </footer>
    </div>
  );
}

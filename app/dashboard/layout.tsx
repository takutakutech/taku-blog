import Link from "next/link";

import window from "@/public/window.svg"; // LOGOを入れたいけど仮
import Image from "next/image";
import { DashboardItems } from "../components/dashboard/DashboardItems";
import { DollarSign, Globe, Home } from "lucide-react";

export const navLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",  
    icon: Home,
  },
  {
    name: "Sites",
    href: "/dashboard/sites",
    icon: Globe,
  },
  {
    name: "Pricing",
    href: "/dashboard/pricing",
    icon: DollarSign,
  },
];

export default function DashboardLayout({children}: { children: React.ReactNode; }) {
  return (
    <section className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src={window} alt="Window Logo" className="h-6 w-6" />
              <h3 className="text-2xl">
                <span className="text-primary">Taku </span> Blog
              </h3>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 font-medium lg:px-4">
                <DashboardItems />
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
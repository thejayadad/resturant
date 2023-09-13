// DashboardLayout.js
import Aside from "@/component/Dashboard/Aside";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Aside />
      <main className="bg-gray-100 w-3/4 p-6">{children}</main>
    </div>
  );
}

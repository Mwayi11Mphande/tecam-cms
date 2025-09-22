import AdminSidebar from "@/components/ui/sidebar/clerk_sidebar"
import TreasurerSidebar from "@/components/ui/sidebar/treasure_sidebar"


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 bg-white shadow-lg">
        <TreasurerSidebar />
      </aside>

       {/* Mobile Sidebar */}
      <div className="md:hidden">
        <TreasurerSidebar />
      </div> 
      {/* Main Content */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}
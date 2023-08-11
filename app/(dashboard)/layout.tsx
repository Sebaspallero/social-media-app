import BottomBar from "@/components/BottomBar"
import LeftSidebar from "@/components/LeftSidebar"
import RightSidebar from "@/components/RightSidebar"
import Navbar from "@/components/Navbar"


const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <Navbar/>
        <main className="flex flex-row">
            <LeftSidebar/>
            <section className="main-container">
                <div className="w-full max-w-4xl">
                    {children}
                </div>
            </section>
            <RightSidebar/>
            <BottomBar/>
        </main>
    </div>
  )
}

export default DashboardLayout
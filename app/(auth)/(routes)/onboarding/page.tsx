import { UserButton } from "@clerk/nextjs"

const Onboarding = () => {
  return (
    <div>
        <p>Onboarding</p>
        <UserButton afterSignOutUrl="/"/>
    </div>
    
  )
}

export default Onboarding
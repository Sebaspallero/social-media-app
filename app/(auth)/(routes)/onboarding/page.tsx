
import AccountProfile from "@/components/forms/AccountProfile"

import { currentUser } from "@clerk/nextjs"


const Onboarding = async() => {

  const user = await currentUser()
  const userInfo = {}

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl
  }

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Whimsy</h1>
      <p className="mt-3 text-base-regular text-light-2">Complete your profile now yo use Whimsy</p>
        <section className="mt-9  p-10 rounded-md">
          <AccountProfile user={userData} btnTitle={"Continue"}/>
        </section>
    </main>
  )
}

export default Onboarding
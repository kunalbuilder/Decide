import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { Button } from "@/components/ui/Button"

export default async function AppDashboard() {
    const session = await getServerSession(authOptions)

    return (
        <div className="flex h-screen flex-col items-center justify-center p-8">
            <div className="text-center">
                <h1 className="mb-4 text-3xl font-bold">Hello, {session?.user?.name}</h1>
                <p className="mb-8 text-zinc-500">
                    Ready to make a decision?
                </p>
                <div className="space-x-4">
                    <Button>Start New Decision</Button>
                </div>
            </div>
        </div>
    )
}

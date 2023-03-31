import { useSession, signIn, signOut } from "next-auth/react"
import { getServerSession } from "next-auth/next"



export default function Component() {
    const { data: session } = useSession()
  
    if (session) {
      return (
    
    
          <><img src={session.user.image} /><br /></>
          {session.user.name} <br />
        
        
      )
    }
    return (
      
  }
import { useSession, signIn, signOut } from "next-auth/react"
import { getServerSession } from "next-auth/next"



export default function Avatar() {
    const { data: session } = useSession()
  
    
      return (
    
    
          <><img src={user.image} /></>
         
        
        
      )
    
  }
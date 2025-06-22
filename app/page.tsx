import { Button } from "@/components/ui/button";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


export default async function Home() {
  const {getUser} = getKindeServerSession();
  const session = await getUser(); //ユーザーセッションを取得（非同期）
  
  return (
  <div className="p-10">
    <h1>Hello</h1>
    
    {session ? (
      <div>
        <p>Welcome!</p>
        <LogoutLink>
          <Button>Logout</Button>
        </LogoutLink>
      </div>
    ) : (
      <div>
        <LoginLink>
          <Button>Login</Button>
        </LoginLink>
        <RegisterLink>
          <Button>Register</Button>
        </RegisterLink>
      </div>
    )}
  </div>
  );
}

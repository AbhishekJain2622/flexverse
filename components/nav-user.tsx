import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { sidebar } from "@/components/ui/sidebar"

interface User {
  name: string
  email: string
  avatar: string
}

interface Props {
  user: User
}

export function NavUser({ user }: Props) {
  return (
    <div className={sidebar.nav()}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className={sidebar.link()}>
            <Avatar className={sidebar.icon()}>
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 grid-cols-1 text-sm text-left">
              <div>{user.name}</div>
              <div className="truncate text-xs">{user.email}</div>
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}


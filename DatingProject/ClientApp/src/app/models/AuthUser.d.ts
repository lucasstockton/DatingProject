import { User } from "../models/Users";

declare var authUser: AuthUser;

export interface AuthUser
{
  tokenString: string;
  user: User;
}



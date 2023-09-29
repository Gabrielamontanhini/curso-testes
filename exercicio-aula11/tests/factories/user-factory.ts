import prisma from "database";
import { UserInput } from "repository";

export async function createUserFactory(email:string, password:string){


    const userData: UserInput = {
        email,
        password
      };
  

      
   const user =  await prisma.user.create({
        data: userData
      });

      return user
}
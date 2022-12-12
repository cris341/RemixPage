import { prisma } from "./db";

export async function SaveImg(file){
    
    try {
        if (file) {
            prisma.img.create({
                data:{
                  name: "",
                  url:""  
                }
            })
        }
    } catch (error) {
        return error 
    }
}
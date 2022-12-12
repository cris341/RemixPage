import { prisma } from "./db";


export async function UserCreatMany(file){
    console.log(file);

    const errorData = [];

    try {
            const inserts = [
                {  email: '1123sonaliaa@priAsmaaa.io' },
                { name: 'Alex12', email: '1alex@prismmaa.io' },
        ]
        const createManyPosts =  file.map(async (post) =>{
                const user = await ValidarUser(post.email)
                if(post.name && !user ){
                    return  prisma.user.create({
                        data: post,
                    })
                }else{
                    console.log('entro a un error');
                    errorData.push(post)
                }
            });
            const error = await Promise.all(createManyPosts).then(() => errorData)
            console.log(error);
            return error
    } catch (error) {
        return console.log(error);
    }
    // createMany no es soportada en SQLite
    // const users = await prisma.user.createMany({
    //     data: [data    ],
    //   })
}

export async function GetUser(){
    const user = await prisma.user.findMany()   
    return user
}

export async function ValidarUser(email){
    const result = await prisma.user.findUnique({
        where: {
            email: email,
        },
      }) 
    return result
}

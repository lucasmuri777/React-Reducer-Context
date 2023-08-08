import { Post } from "@/types/Post";

type AddAction = {
    type: "add";
    payload:{
        title:string;
        body: string;
    }
}

type RemoveAction = {
    type: "remove";
    payload: {
        id: number;
    };
}

export type PostActions = AddAction | RemoveAction

export const postReducer = (post: Post[], action: PostActions) =>{
    
    switch(action.type){
        case 'add': 
            return[...post,
                {
                    id:post.length ,
                    title: action.payload.title,
                    body: action.payload.body
                }]
        case'remove': 
            return post.filter(p => p.id !== action.payload.id)
        default:
            return post

    }

}
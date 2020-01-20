import {API_HOST} from './config'


export const login = (user) => {
    const response = await fetch(API_HOST,{
        method:'POST',
        headers: {
            'Content-Type':'aplication/json'
        },
        body:JSON.stringify(user),
    })
};

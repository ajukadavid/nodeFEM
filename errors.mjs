import { readFile } from "fs";

readFile(new URL('app.mj', import.meta.url), 'utf-8', (err, res) => {
    if(err){
        console.log(err)
    } else {

    }
})
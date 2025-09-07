export default function generatePass(){
    let password: string = "";
    let characters: string = "?/\.,!@#$%*()-=+abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength: number = 0;

    for (let index = 0; index < 8; index++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }

    return password;
}
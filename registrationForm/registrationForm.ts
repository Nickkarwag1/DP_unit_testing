import { symbols, symbolsForEmail, symDog } from "../helpers/symbols";

export class RegistrationForm {
    static loginField(login: string): string {
        const arrayLogin = login.split("");
        const checkArrLogin = arrayLogin.map((item: string) => {
            if (symbols.includes(item)) {
                console.log(`Text ${login} in login: contains invalid symbols '${item}'`);
            }
            return item;
        });
        return checkArrLogin.join("");
    }

    static passwordField(password: string): string {
        const arrayPassword = password.split("");
        const checkArrPassword = arrayPassword.map((item: string) => {
            if (symbols.includes(item)) {
                console.log(`Text ${password} in password: contains invalid symbols '${item}'`);
            }
            return item;
        });
        return checkArrPassword.join("");
    }

    static emailField(email: string): string {
        const arrayEmail = email.split("");
        if (!arrayEmail.includes(symDog)) {
            console.log(`Text ${email} in email: not contains symbol '${symDog}'`);
        }
        const checkArrEmail = arrayEmail.map((item: string) => {
            if (symbolsForEmail.includes(item)) {
                console.log(`Text ${email} in email: contains invalid symbols '${item}'`);
            }
            return item;
        });
        return checkArrEmail.join("");
    }
}

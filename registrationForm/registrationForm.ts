import { SymbolsForRegistrationForm, SYM_DOG, SYMBOLS_FOR_EMAIL } from "../helpers/symbolsForRegistrationForm";

export class RegistrationForm {
    static loginField(login: string): string {
        const arrayLogin = login.split("");
        const checkArrLogin = arrayLogin.filter((item: string) => !SymbolsForRegistrationForm.includes(item));
        if (JSON.stringify(checkArrLogin) === JSON.stringify(arrayLogin)) {
            return login;
        } else {
            return "This field contain invalid symbols";
        }
    }

    static passwordField(password: string): string {
        const arrayPassword = password.split("");
        const checkArrPassword = arrayPassword.filter((item: string) => !SymbolsForRegistrationForm.includes(item));
        if (JSON.stringify(checkArrPassword) === JSON.stringify(arrayPassword)) {
            return password;
        } else {
            return "This field contain invalid symbols";
        }
    }

    static emailField(email: string): string {
        const arrayEmail = email.split("");
        if (!arrayEmail.includes(SYM_DOG)) {
            return `Missing symbols ${SYM_DOG}`;
        }
        const checkArrEmail = arrayEmail.filter((item: string) => !SYMBOLS_FOR_EMAIL.includes(item));
        if (JSON.stringify(checkArrEmail) === JSON.stringify(arrayEmail)) {
            return email;
        } else {
            return "This field contain invalid symbols";
        }
    }
}

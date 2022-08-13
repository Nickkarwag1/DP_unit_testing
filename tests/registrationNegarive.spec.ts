import { expect } from "chai";
import { RegistrationForm } from "../registrationForm/registrationForm";
import { VALUES_NEGATIVE } from "../helpers/valuesForField";
import { EXPECTED_VALUES_NEGATIVE } from "../helpers/expectedValues";
import { SYM_DOG } from "../helpers/symbolsForRegistrationForm";

const { LOGIN_FIRST, LOGIN_SECOND, PASSWORD_FIRST, PASSWORD_SECOND, EMAIL_FIRST, EMAIL_SECOND, EMAIL_THIRD } =
    VALUES_NEGATIVE;
const {
    LOGIN_1,
    LOGIN_2,
    PASSWORD_1,
    PASSWORD_2,
    EMAIL_1,
    EMAIL_2,
    EMAIL_3,
    MESSAGE_INVALID_SYMBOLS,
    MISSING_SYMBOL_DOG,
} = EXPECTED_VALUES_NEGATIVE;

describe("Registration form negative test", () => {
    let login: string, password: string, email: string;
    it("Login first test ", () => {
        login = RegistrationForm.loginField(LOGIN_FIRST);
        expect(login).to.not.eql(LOGIN_1);
        expect(login).to.eql(MESSAGE_INVALID_SYMBOLS);
    });
    it("Login second test ", () => {
        login = RegistrationForm.loginField(LOGIN_SECOND);
        expect(login).to.not.eql(LOGIN_2);
        expect(login).to.eql(MESSAGE_INVALID_SYMBOLS);
    });
    it("Password first test ", () => {
        password = RegistrationForm.passwordField(PASSWORD_FIRST);
        expect(password).to.not.eql(PASSWORD_1);
        expect(password).to.equal(MESSAGE_INVALID_SYMBOLS);
    });
    it("Password second test ", () => {
        password = RegistrationForm.passwordField(PASSWORD_SECOND);
        expect(password).to.not.eql(PASSWORD_2);
        expect(password).to.equal(MESSAGE_INVALID_SYMBOLS);
    });
    it("Email first test",  () => {
        email = RegistrationForm.emailField(EMAIL_FIRST);
        expect(email).to.not.eql(EMAIL_1);
        expect(email).to.equal(MISSING_SYMBOL_DOG + SYM_DOG);
    });
    it("Email second test",  () => {
        email = RegistrationForm.emailField(EMAIL_SECOND);
        expect(email).to.not.eql(EMAIL_2);
        expect(email).to.eql(MESSAGE_INVALID_SYMBOLS);
    });
    it("Email third test",  () => {
        email = RegistrationForm.emailField(EMAIL_THIRD);
        expect(email).to.not.eql(EMAIL_3);
        expect(email).to.eql(MESSAGE_INVALID_SYMBOLS);
    });
});

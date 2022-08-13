import { expect } from "chai";
import { RegistrationForm } from "../registrationForm/registrationForm";
import { VALUES_POSITIVE } from "../helpers/valuesForField";
import { EXPECTED_VALUES_POSITIVE } from "../helpers/expectedValues";

const { LOGIN_FIRST, LOGIN_SECOND, PASSWORD_FIRST, PASSWORD_SECOND, EMAIL_FIRST, EMAIL_SECOND, EMAIL_THIRD } =
    VALUES_POSITIVE;
const { LOGIN_1, LOGIN_2, PASSWORD_1, PASSWORD_2, EMAIL_1, EMAIL_2, EMAIL_3 } = EXPECTED_VALUES_POSITIVE;

describe("Registration form positive test", () => {
    let login: string, password: string, email: string;
    it("Login first test ", () => {
        login = RegistrationForm.loginField(LOGIN_FIRST);
        expect(login).to.eql(LOGIN_1);
    });
    it("Login second test ", () => {
        login = RegistrationForm.loginField(LOGIN_SECOND);
        expect(login).to.eql(LOGIN_2);
    });
    it("Password first test ", () => {
        password = RegistrationForm.passwordField(PASSWORD_FIRST);
        expect(password).to.eql(PASSWORD_1);
    });
    it("Password second test ", () => {
        password = RegistrationForm.passwordField(PASSWORD_SECOND);
        expect(password).to.eql(PASSWORD_2);
    });
    it("Email first test",  () => {
        email = RegistrationForm.emailField(EMAIL_FIRST);
        expect(email).to.eql(EMAIL_1);
    });
    it("Email second test",  () => {
        email = RegistrationForm.emailField(EMAIL_SECOND);
        expect(email).to.eql(EMAIL_2);
    });
    it("Email third test",  () => {
        email = RegistrationForm.emailField(EMAIL_THIRD);
        expect(email).to.eql(EMAIL_3);
    });
});

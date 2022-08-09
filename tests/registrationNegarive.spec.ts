import { RegistrationForm } from "../registrationForm/registrationForm";
import { expect } from "chai";
import { VALUES_NEGATIVE } from "../helpers/valuesForField";
import { EXPECTED_VALUES_NEGATIVE } from "../helpers/expectedValues";

const { LOGIN_FIRST, LOGIN_SECOND, PASSWORD_FIRST, PASSWORD_SECOND, EMAIL_FIRST, EMAIL_SECOND, EMAIL_THIRD } =
    VALUES_NEGATIVE;
const { LOGIN_1, LOGIN_2, PASSWORD_1, PASSWORD_2, EMAIL_1, EMAIL_2, EMAIL_3 } = EXPECTED_VALUES_NEGATIVE;

describe("Registration form negative test", () => {
    let login: string, password: string, email: string;
    it("Login first test ", () => {
        login = RegistrationForm.loginField(LOGIN_FIRST);
        expect(login).to.not.eql(LOGIN_1);
    });
    it("Login second test ", () => {
        login = RegistrationForm.loginField(LOGIN_SECOND);
        expect(login).to.not.eql(LOGIN_2);
    });
    it("Password first test ", () => {
        password = RegistrationForm.passwordField(PASSWORD_FIRST);
        expect(password).to.not.eql(PASSWORD_1);
    });
    it("Password second test ", () => {
        password = RegistrationForm.passwordField(PASSWORD_SECOND);
        expect(password).to.not.eql(PASSWORD_2);
    });
    it("Email first test", function () {
        email = RegistrationForm.emailField(EMAIL_FIRST);
        expect(email).to.not.eql(EMAIL_1);
    });
    it("Email second test", function () {
        email = RegistrationForm.emailField(EMAIL_SECOND);
        expect(email).to.not.eql(EMAIL_2);
    });
    it("Email third test", function () {
        email = RegistrationForm.emailField(EMAIL_THIRD);
        expect(email).to.not.eql(EMAIL_3);
    });
});

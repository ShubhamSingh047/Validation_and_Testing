export const emailFormat = (value) =>
    !(/^[A-z0-9\u0000-\u007f\s'.,-/@#!$%^&*;:{}=\-_`~()]+$/).test(value)
        ? "We don't allow any special characters in the customers email and ID."
        : !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i).test(value)
            ? "Please enter your email in this format: name@company.com."
            : undefined;

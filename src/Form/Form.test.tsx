import { fireEvent, render, screen } from "@testing-library/react";
import FormExampleForm from "./Form";
import {emailFormat} from "./validation"


describe("Email Validation Test Case", () => {

    test(`Intitaly no Error Message is displayed`, () => {
      render(<FormExampleForm />);
      let test1: any = screen.getByTestId("submitTestId");
      fireEvent.click(test1);
      let test2: any = screen.getByTestId("submitTestIdPara").innerHTML;
      expect(test2).toBe("")
    });

    test("Should fail on non valid email Formate",()=>{
      expect(emailFormat('Shubham.com')).toBe('Please enter your email in this format: name@company.com.')
    })
    test("Should not allow non valid email", () => {
      expect(emailFormat('@gmail.com')).toBe("Please enter your email in this format: name@company.com.")
    })
    test("Should not allow special characters for email", () => {
        expect(emailFormat('fàotlocker@gmail.com')).toBe("We don't allow any special characters in the customers email and ID.")
    })
    test("Should not allow special characters for email name", () => {
        expect(emailFormat('àŒabc@gmàŒ.com')).toBe("We don't allow any special characters in the customers email and ID.")
    })
    test("Should allow on valid email", () => {
        expect(emailFormat('footlocker@gmail.com')).toBeUndefined()
    })

  });
  
import React from "react";
import { render, fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";



// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    const formHeader = getByText(/checkout form/i);

    expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  const { getByText, getByLabelText, getByTestId, } = render(<CheckoutForm />);
  const checkoutButton = getByTestId("checkOutBtn");
  const fName = "Riley";
  const lName = "Robinson";
  const address = "112 East pine";
  const city = "johnsocity";
  const state = "TN";
  const zip = "37601";


  const fNameInput = getByLabelText(/first name:/i);
  const lNameInput = getByLabelText(/last name:/i);
  const addressInput = getByLabelText(/address:/i);
  const cityInput = getByLabelText(/city:/i);
  const stateInput = getByLabelText(/state:/i);
  const zipInput = getByLabelText(/zip:/i);

  fireEvent.change(fNameInput, { target: { value: fName } });
  fireEvent.change(lNameInput, { target: { value: lName } });
  fireEvent.change(addressInput, { target: { value: address } });
  fireEvent.change(cityInput, { target: { value: city } });
  fireEvent.change(stateInput, { target: { value: state } });
  fireEvent.change(zipInput, { target: { value: zip } });


  fireEvent.click(checkoutButton);

  expect(getByTestId('successMessage')).toBeInTheDocument();

});
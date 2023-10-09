import React from 'react';
import { render, fireEvent, screen ,waitFor} from '@testing-library/react';
import SignInUp from '../SignInUp';
import { MemoryRouter} from 'react-router-dom';
window.alert = jest.fn();


describe('LoginForm', () => {
  it('login form should  contain email and password fields', () => {
    render(
      <MemoryRouter>
        <SignInUp />
      </MemoryRouter>
    );

    const emailInputSignIn = screen.getByTestId('email-signin');
    const passwordInputSignIn = screen.getByTestId('password-signin')

    expect(emailInputSignIn).toBeInTheDocument();
    expect(passwordInputSignIn).toBeInTheDocument();
  });

  it('register form should contain name,email and password fields', () => {
     render(
      <MemoryRouter>
         <SignInUp />
       </MemoryRouter>
     );
    
     const nameInput=screen.getByTestId('name-signup');
     const emailInput = screen.getByTestId('email-signup');
     const passwordInput = screen.getByTestId('password-signup')

     expect(nameInput).toBeInTheDocument();
     expect(emailInput).toBeInTheDocument();
     expect(passwordInput).toBeInTheDocument();
   });


    it('should show validation error when submitting without entering any data', async () => {
      render(
       <MemoryRouter>
          <SignInUp />
        </MemoryRouter>
      );

      const submitButton = screen.getByTestId('signUp');

      fireEvent.click(submitButton);

      expect(window.alert).toHaveBeenCalledWith('Name should only contain characters (letters)');
   });

})

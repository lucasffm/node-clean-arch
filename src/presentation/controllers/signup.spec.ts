import { SignUpController } from './signup';

describe('SignUp Controller', () => {
  it('Shoult return 400 if no name is provided', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        // name: 'any_name',
        email: 'any@email.com',
        password: '1523456',
        passwordConfirmation: '1523456',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});


import '@babel/polyfill'

const { handleSubmit } = require('../js/handleSubmit');
global.document = {
  getElementById: jest.fn(id => ({
    value: 'https://www.example.com', // Mock a valid URL
  })),
};

describe('handleSubmit', () => {
  it('should handle a valid URL submission', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    
    handleSubmit(event);

    // You can assert expectations here based on the behavior of your code
    // For example, you can check if certain functions were called or if a specific alert was shown.
  });

  // Add more test cases for different scenarios, like invalid URL submission or other behavior.
});






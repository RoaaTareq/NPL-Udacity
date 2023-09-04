const { checkForRightURL } = require('../js/checkForRightURL.js');

describe('checkForRightURL', () => {
    it('should return true for a valid URL', () => {
      const validURL = 'https://ar.airbnb.com/?_set_bev_on_new_domain=1693763715_NTFkZjE1ZTg0MGNj';
      expect(checkForRightURL(validURL)).toBe(true);
    });
  
    it('should return false for an invalid URL', () => {
      const invalidURL = 'not_a_valid_url';
      expect(checkForRightURL(invalidURL)).toBe(false);
    });
  });
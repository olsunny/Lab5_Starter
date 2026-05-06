// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// --- isPhoneNumber ---
describe('isPhoneNumber', () => {
  // TRUE
  test('should return true for a valid phone # with area code in parentheses', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('should return true for a valid phone # with dashes', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  // FALSE
  test('should return false for a phone # with too few digits', () => {
    expect(isPhoneNumber('123-456')).toBe(false);
  });

  test('should return false for a phone # with letters', () => {
    expect(isPhoneNumber('abc-def-ghij')).toBe(false);
  });
});

// --- isEmail ---
describe('isEmail', () => {
  // TRUE
  test('should return true for a valid email with a 2-character domain', () => {
    expect(isEmail('user@example.co')).toBe(true);
  });

  test('should return true for a valid email with a 3-character domain', () => {
    expect(isEmail('hello@domain.com')).toBe(true);
  });

  // FALSE
  test('should return false for an email missing the @ symbol', () => {
    expect(isEmail('userdomain.com')).toBe(false);
  });

  test('should return false for an email with a domain longer than 3 characters', () => {
    expect(isEmail('user@domain.info')).toBe(false);
  });
});

// --- isStrongPassword ---
describe('isStrongPassword', () => {
  // TRUE
  test('should return true for a valid password starting with a letter and within length limits', () => {
    expect(isStrongPassword('Secure_123')).toBe(true);
  });

  test('should return true for a valid password at the minimum length of 4 characters', () => {
    expect(isStrongPassword('Ab1_')).toBe(true);
  });

  // FALSE
  test('should return false for a password that starts with a number', () => {
    expect(isStrongPassword('1invalid')).toBe(false);
  });

  test('should return false for a password that exceeds 15 characters', () => {
    expect(isStrongPassword('Abcdefghijklmnop')).toBe(false);
  });
});

// --- isDate ---
describe('isDate', () => {
  // TRUE
  test('should return true for a valid date with 2-digit month and day', () => {
    expect(isDate('12/25/2023')).toBe(true);
  });

  test('should return true for a valid date with 1-digit month and day', () => {
    expect(isDate('1/1/2024')).toBe(true);
  });

  // FALSE
  test('should return false for a date with a 2-digit year', () => {
    expect(isDate('12/25/23')).toBe(false);
  });

  test('should return false for a date using dashes instead of slashes', () => {
    expect(isDate('12-25-2023')).toBe(false);
  });
});

// --- isHexColor ---
describe('isHexColor', () => {
  // TRUE
  test('should return true for a valid 6-character hex color with hash', () => {
    expect(isHexColor('#A3F1B2')).toBe(true);
  });

  test('should return true for a valid 3-character hex color without hash', () => {
    expect(isHexColor('fff')).toBe(true);
  });

  // FALSE
  test('should return false for a hex color with invalid characters', () => {
    expect(isHexColor('#GGHHII')).toBe(false);
  });

  test('should return false for a hex color with an incorrect length of 5 characters', () => {
    expect(isHexColor('#A3F1B')).toBe(false);
  });
});
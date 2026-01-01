/**
 * Indian Test Data Generator
 * Generates realistic but FICTIONAL test data for Indian applications
 *
 * DISCLAIMER: All data generated is completely fictional and for testing purposes only.
 * No real personal information is used or generated.
 */

// ============================================================================
// CONSTANTS - Indian Names by Language/Region
// ============================================================================

const NAMES = {
  hindi: {
    male: ['Raj', 'Amit', 'Rahul', 'Arjun', 'Vikram', 'Rohan', 'Karan', 'Aditya', 'Ankit', 'Varun',
           'Sanjay', 'Nikhil', 'Manish', 'Deepak', 'Sunil'],
    female: ['Priya', 'Anjali', 'Neha', 'Pooja', 'Kavya', 'Riya', 'Sneha', 'Divya', 'Isha', 'Nisha',
             'Meera', 'Swati', 'Komal', 'Shruti', 'Pallavi'],
    surnames: ['Sharma', 'Verma', 'Kumar', 'Singh', 'Gupta', 'Patel', 'Shah', 'Jain', 'Mehta', 'Agarwal',
               'Kapoor', 'Mishra', 'Pandey', 'Tiwari', 'Saxena']
  },
  tamil: {
    male: ['Karthik', 'Rajesh', 'Vijay', 'Kumar', 'Arun', 'Suresh', 'Ganesh', 'Praveen',
           'Senthil', 'Murugan', 'Vignesh', 'Balaji', 'Saravanan', 'Ramesh', 'Mahesh'],
    female: ['Lakshmi', 'Meera', 'Kavitha', 'Priya', 'Deepa', 'Sangeetha', 'Divya',
             'Revathi', 'Saranya', 'Pavithra', 'Nandhini', 'Bharathi', 'Kala', 'Mala', 'Geetha'],
    surnames: ['Krishnan', 'Raman', 'Subramanian', 'Iyer', 'Naidu', 'Murthy', 'Reddy',
               'Pillai', 'Natarajan', 'Venkatesh', 'Sundaram', 'Raghavan', 'Srinivasan', 'Anand', 'Chandran']
  },
  bengali: {
    male: ['Arjun', 'Soham', 'Ayan', 'Debashish', 'Rishi', 'Arnab', 'Abhishek',
           'Sourav', 'Subhash', 'Dipankar', 'Anirban', 'Partha', 'Suman', 'Rajib', 'Arindam'],
    female: ['Ananya', 'Shreya', 'Ria', 'Diya', 'Ishita', 'Tanvi', 'Priyanka',
             'Moumita', 'Rituparna', 'Sudeshna', 'Indrani', 'Mallika', 'Swapna', 'Kakoli', 'Tithi'],
    surnames: ['Das', 'Chatterjee', 'Mukherjee', 'Banerjee', 'Roy', 'Ghosh', 'Bose',
               'Sen', 'Dutta', 'Chakraborty', 'Sarkar', 'Bhattacharya', 'Ganguly', 'Mitra', 'Majumdar']
  }
};

// Indian cities with state and base pincode
const CITIES = {
  mumbai: { name: 'Mumbai', state: 'Maharashtra', basePincode: '400' },
  delhi: { name: 'Delhi', state: 'Delhi', basePincode: '110' },
  bangalore: { name: 'Bangalore', state: 'Karnataka', basePincode: '560' },
  hyderabad: { name: 'Hyderabad', state: 'Telangana', basePincode: '500' },
  chennai: { name: 'Chennai', state: 'Tamil Nadu', basePincode: '600' },
  kolkata: { name: 'Kolkata', state: 'West Bengal', basePincode: '700' },
  pune: { name: 'Pune', state: 'Maharashtra', basePincode: '411' },
  ahmedabad: { name: 'Ahmedabad', state: 'Gujarat', basePincode: '380' }
};

// UPI providers
const UPI_PROVIDERS = ['@paytm', '@ybl', '@oksbi', '@axl', '@icici', '@upi', '@apl', '@ibl'];

// Street names for addresses
const STREET_NAMES = [
  'MG Road', 'Gandhi Nagar', 'Nehru Street', 'Subhash Marg', 'Rajaji Road',
  'Lake View Colony', 'Green Park', 'Model Town', 'Civil Lines', 'Shastri Nagar',
  'Vikas Puri', 'Ashok Vihar', 'Janakpuri', 'Vasant Kunj', 'Malviya Nagar'
];

const BUILDING_TYPES = ['Apartment', 'Society', 'Complex', 'Tower', 'Heights', 'Residency', 'Villa'];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get a random element from an array
 */
const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Get a random integer between min and max (inclusive)
 */
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Get a random uppercase letter
 */
const getRandomLetter = () => {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
};

/**
 * Get a random digit as string
 */
const getRandomDigit = () => {
  return Math.floor(Math.random() * 10).toString();
};

// ============================================================================
// GENERATOR FUNCTIONS
// ============================================================================

/**
 * Generate a valid Aadhaar number with proper checksum
 * Format: XXXX XXXX XXXX (12 digits, first digit 2-9)
 *
 * Uses Verhoeff algorithm for checksum (simplified version)
 */
export const generateAadhaar = () => {
  // Generate first 11 digits (first digit must be 2-9)
  let digits = [getRandomInt(2, 9)];

  for (let i = 1; i < 11; i++) {
    digits.push(getRandomInt(0, 9));
  }

  // Calculate simple checksum (sum of digits mod 10)
  // Note: Real Aadhaar uses Verhoeff algorithm, this is simplified for test data
  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  const checksum = (10 - (sum % 10)) % 10;
  digits.push(checksum);

  // Format as XXXX XXXX XXXX
  const aadhaarStr = digits.join('');
  return `${aadhaarStr.slice(0, 4)} ${aadhaarStr.slice(4, 8)} ${aadhaarStr.slice(8, 12)}`;
};

/**
 * Generate a valid PAN number
 * Format: ABCDE1234F (5 letters + 4 digits + 1 letter)
 *
 * Fourth character indicates holder type:
 * P - Individual, C - Company, H - HUF, F - Firm, etc.
 */
export const generatePAN = (isIndividual = true) => {
  let pan = '';

  // First 3 letters - random
  for (let i = 0; i < 3; i++) {
    pan += getRandomLetter();
  }

  // Fourth letter - holder type (P for individual)
  pan += isIndividual ? 'P' : getRandomElement(['C', 'H', 'F', 'A', 'T']);

  // Fifth letter - first letter of surname (random for test data)
  pan += getRandomLetter();

  // Next 4 digits - sequential number
  for (let i = 0; i < 4; i++) {
    pan += getRandomDigit();
  }

  // Last letter - check letter (random for test data)
  pan += getRandomLetter();

  return pan;
};

/**
 * Generate a valid Indian phone number
 * Format: +91 XXXXX XXXXX (10 digits, first 2 digits 60-99)
 */
export const generatePhone = () => {
  // First 2 digits: valid Indian mobile prefixes (6-9 followed by 0-9)
  const validPrefixes = [];
  for (let i = 60; i <= 99; i++) {
    validPrefixes.push(i.toString());
  }

  const prefix = getRandomElement(validPrefixes);

  // Remaining 8 digits
  let remaining = '';
  for (let i = 0; i < 8; i++) {
    remaining += getRandomDigit();
  }

  const fullNumber = prefix + remaining;
  return `+91 ${fullNumber.slice(0, 5)} ${fullNumber.slice(5)}`;
};

/**
 * Generate a UPI ID based on name
 * Format: firstname.lastname@provider or firstname@provider
 */
export const generateUPI = (firstName, lastName) => {
  const provider = getRandomElement(UPI_PROVIDERS);
  const useFullName = Math.random() > 0.3; // 70% chance of using full name

  const cleanFirst = firstName.toLowerCase().replace(/[^a-z]/g, '');
  const cleanLast = lastName.toLowerCase().replace(/[^a-z]/g, '');

  if (useFullName && cleanLast) {
    // Various formats
    const formats = [
      `${cleanFirst}.${cleanLast}`,
      `${cleanFirst}${cleanLast}`,
      `${cleanFirst}_${cleanLast}`,
      `${cleanFirst}${getRandomInt(1, 99)}`
    ];
    return getRandomElement(formats) + provider;
  }

  return `${cleanFirst}${getRandomInt(1, 999)}${provider}`;
};

/**
 * Generate an email address based on name
 */
export const generateEmail = (firstName, lastName) => {
  const domains = ['gmail.com', 'yahoo.co.in', 'outlook.com', 'hotmail.com', 'rediffmail.com'];
  const domain = getRandomElement(domains);

  const cleanFirst = firstName.toLowerCase().replace(/[^a-z]/g, '');
  const cleanLast = lastName.toLowerCase().replace(/[^a-z]/g, '');

  const formats = [
    `${cleanFirst}.${cleanLast}`,
    `${cleanFirst}${cleanLast}`,
    `${cleanFirst}_${cleanLast}`,
    `${cleanFirst}.${cleanLast}${getRandomInt(1, 99)}`,
    `${cleanFirst}${getRandomInt(100, 999)}`
  ];

  return `${getRandomElement(formats)}@${domain}`;
};

/**
 * Generate an Indian address
 */
export const generateAddress = (cityKey) => {
  const city = CITIES[cityKey] || CITIES.mumbai;

  const houseNo = getRandomInt(1, 500);
  const floor = getRandomInt(1, 20);
  const buildingName = `${getRandomElement(NAMES.hindi.surnames)} ${getRandomElement(BUILDING_TYPES)}`;
  const street = getRandomElement(STREET_NAMES);

  // Generate pincode with city base + random suffix
  const pincode = city.basePincode + getRandomInt(1, 99).toString().padStart(3, '0');

  return {
    line1: `Flat ${houseNo}, ${floor}${getOrdinalSuffix(floor)} Floor`,
    line2: `${buildingName}, ${street}`,
    city: city.name,
    state: city.state,
    pincode: pincode,
    full: `Flat ${houseNo}, ${floor}${getOrdinalSuffix(floor)} Floor, ${buildingName}, ${street}, ${city.name}, ${city.state} - ${pincode}`
  };
};

/**
 * Get ordinal suffix for numbers (1st, 2nd, 3rd, etc.)
 */
const getOrdinalSuffix = (num) => {
  const j = num % 10;
  const k = num % 100;

  if (j === 1 && k !== 11) return 'st';
  if (j === 2 && k !== 12) return 'nd';
  if (j === 3 && k !== 13) return 'rd';
  return 'th';
};

/**
 * Generate a date of birth
 * Returns someone between 18 and 65 years old
 */
export const generateDOB = () => {
  const today = new Date();
  const minAge = 18;
  const maxAge = 65;

  const age = getRandomInt(minAge, maxAge);
  const year = today.getFullYear() - age;
  const month = getRandomInt(1, 12);
  const day = getRandomInt(1, 28); // Safe day for all months

  return {
    date: new Date(year, month - 1, day),
    formatted: `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`,
    age: age
  };
};

// ============================================================================
// MAIN GENERATOR FUNCTION
// ============================================================================

/**
 * Generate complete Indian test data
 *
 * @param {Object} options - Generation options
 * @param {string} options.language - Language/region (hindi, tamil, bengali)
 * @param {string} options.gender - Gender (male, female)
 * @param {string} options.city - City key (mumbai, delhi, etc.)
 * @returns {Object} Complete test data object
 */
export const generateIndianTestData = (options = {}) => {
  const {
    language = 'hindi',
    gender = 'male',
    city = 'mumbai'
  } = options;

  // Get name data for the selected language
  const nameData = NAMES[language] || NAMES.hindi;
  const genderNames = gender === 'female' ? nameData.female : nameData.male;

  // Generate name
  const firstName = getRandomElement(genderNames);
  const lastName = getRandomElement(nameData.surnames);
  const fullName = `${firstName} ${lastName}`;

  // Generate DOB
  const dob = generateDOB();

  // Generate all data
  const data = {
    // Personal Info
    name: {
      first: firstName,
      last: lastName,
      full: fullName
    },
    gender: gender.charAt(0).toUpperCase() + gender.slice(1),
    dateOfBirth: dob,

    // Contact Info
    email: generateEmail(firstName, lastName),
    phone: generatePhone(),

    // Identity Documents
    aadhaar: generateAadhaar(),
    pan: generatePAN(true),

    // Financial
    upiId: generateUPI(firstName, lastName),

    // Address
    address: generateAddress(city),

    // Metadata
    language: language,
    generatedAt: new Date().toISOString()
  };

  return data;
};

/**
 * Format test data as copyable text
 */
export const formatDataForCopy = (data) => {
  return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  INDIAN TEST DATA (FICTIONAL)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 PERSONAL INFORMATION
   Name:          ${data.name.full}
   Gender:        ${data.gender}
   Date of Birth: ${data.dateOfBirth.formatted}
   Age:           ${data.dateOfBirth.age} years

📧 CONTACT DETAILS
   Email:         ${data.email}
   Phone:         ${data.phone}

🪪 IDENTITY DOCUMENTS
   Aadhaar:       ${data.aadhaar}
   PAN:           ${data.pan}

💳 FINANCIAL
   UPI ID:        ${data.upiId}

📍 ADDRESS
   ${data.address.line1}
   ${data.address.line2}
   ${data.address.city}, ${data.address.state}
   PIN: ${data.address.pincode}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️  THIS IS FICTIONAL TEST DATA
    Do not use for real transactions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();
};

// Export constants for use in UI
export const AVAILABLE_LANGUAGES = [
  { value: 'hindi', label: 'Hindi' },
  { value: 'tamil', label: 'Tamil' },
  { value: 'bengali', label: 'Bengali' }
];

export const AVAILABLE_GENDERS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' }
];

export const AVAILABLE_CITIES = [
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'delhi', label: 'Delhi' },
  { value: 'bangalore', label: 'Bangalore' },
  { value: 'chennai', label: 'Chennai' },
  { value: 'kolkata', label: 'Kolkata' },
  { value: 'hyderabad', label: 'Hyderabad' },
  { value: 'pune', label: 'Pune' },
  { value: 'ahmedabad', label: 'Ahmedabad' }
];

export default generateIndianTestData;

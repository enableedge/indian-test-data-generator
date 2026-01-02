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
           'Sanjay', 'Nikhil', 'Manish', 'Deepak', 'Sunil', 'Vivek', 'Ashish', 'Mohit', 'Gaurav', 'Pankaj',
           'Rajesh', 'Suresh', 'Manoj', 'Vijay', 'Ajay', 'Saurabh', 'Himanshu', 'Prashant', 'Rakesh', 'Naveen'],
    female: ['Priya', 'Anjali', 'Neha', 'Pooja', 'Kavya', 'Riya', 'Sneha', 'Divya', 'Isha', 'Nisha',
             'Meera', 'Swati', 'Komal', 'Shruti', 'Pallavi', 'Sakshi', 'Kritika', 'Aisha', 'Simran', 'Preeti',
             'Shweta', 'Ankita', 'Megha', 'Nikita', 'Tanvi', 'Aditi', 'Bhavna', 'Garima', 'Jyoti', 'Rashmi'],
    surnames: ['Sharma', 'Verma', 'Kumar', 'Singh', 'Gupta', 'Patel', 'Shah', 'Jain', 'Mehta', 'Agarwal',
               'Kapoor', 'Mishra', 'Pandey', 'Tiwari', 'Saxena', 'Khanna', 'Malhotra', 'Chopra', 'Bhatia', 'Arora']
  },
  tamil: {
    male: ['Karthik', 'Rajesh', 'Vijay', 'Kumar', 'Arun', 'Suresh', 'Ganesh', 'Praveen',
           'Senthil', 'Murugan', 'Vignesh', 'Balaji', 'Saravanan', 'Ramesh', 'Mahesh',
           'Dinesh', 'Prakash', 'Mohan', 'Gopal', 'Hari', 'Sathish', 'Kannan', 'Ravi', 'Ashok', 'Siva'],
    female: ['Lakshmi', 'Meera', 'Kavitha', 'Priya', 'Deepa', 'Sangeetha', 'Divya',
             'Revathi', 'Saranya', 'Pavithra', 'Nandhini', 'Bharathi', 'Kala', 'Mala', 'Geetha',
             'Vijaya', 'Janani', 'Swetha', 'Arthi', 'Anitha', 'Gayathri', 'Sowmya', 'Vanitha', 'Uma', 'Radha'],
    surnames: ['Krishnan', 'Raman', 'Subramanian', 'Iyer', 'Naidu', 'Murthy', 'Reddy',
               'Pillai', 'Natarajan', 'Venkatesh', 'Sundaram', 'Raghavan', 'Srinivasan', 'Anand', 'Chandran',
               'Balakrishnan', 'Govindarajan', 'Padmanabhan', 'Ranganathan', 'Viswanathan']
  },
  bengali: {
    male: ['Arjun', 'Soham', 'Ayan', 'Debashish', 'Rishi', 'Arnab', 'Abhishek',
           'Sourav', 'Subhash', 'Dipankar', 'Anirban', 'Partha', 'Suman', 'Rajib', 'Arindam',
           'Subrata', 'Prasenjit', 'Sabyasachi', 'Kaushik', 'Tanmoy', 'Aniket', 'Rupak', 'Shubham', 'Rohan', 'Avik'],
    female: ['Ananya', 'Shreya', 'Ria', 'Diya', 'Ishita', 'Tanvi', 'Priyanka',
             'Moumita', 'Rituparna', 'Sudeshna', 'Indrani', 'Mallika', 'Swapna', 'Kakoli', 'Tithi',
             'Arpita', 'Payel', 'Rimjhim', 'Sonali', 'Tania', 'Paramita', 'Srabani', 'Madhurima', 'Sayani', 'Poulomi'],
    surnames: ['Das', 'Chatterjee', 'Mukherjee', 'Banerjee', 'Roy', 'Ghosh', 'Bose',
               'Sen', 'Dutta', 'Chakraborty', 'Sarkar', 'Bhattacharya', 'Ganguly', 'Mitra', 'Majumdar',
               'Mondal', 'Saha', 'Kundu', 'Biswas', 'Haldar']
  },
  gujarati: {
    male: ['Harsh', 'Darshan', 'Mihir', 'Parth', 'Yash', 'Jay', 'Keval', 'Dhruv',
           'Chirag', 'Neel', 'Ravi', 'Sagar', 'Tejas', 'Vatsal', 'Dhaval',
           'Hardik', 'Jignesh', 'Keyur', 'Maulik', 'Nilesh', 'Pranav', 'Rushil', 'Siddharth', 'Tushar', 'Uday'],
    female: ['Hetal', 'Priti', 'Komal', 'Nidhi', 'Janvi', 'Dhara', 'Khushi', 'Riddhi',
             'Siddhi', 'Tejal', 'Urvi', 'Vaishali', 'Yesha', 'Zalak', 'Bhumi',
             'Charmi', 'Drashti', 'Foram', 'Grishma', 'Heena', 'Isha', 'Jasmine', 'Kajal', 'Mira', 'Neha'],
    surnames: ['Patel', 'Shah', 'Mehta', 'Desai', 'Joshi', 'Parikh', 'Trivedi', 'Pandya',
               'Amin', 'Bhatt', 'Vyas', 'Nayak', 'Soni', 'Thakkar', 'Gajjar',
               'Chauhan', 'Choksi', 'Doshi', 'Gandhi', 'Kothari']
  },
  marathi: {
    male: ['Aditya', 'Rohan', 'Sagar', 'Pratik', 'Omkar', 'Sahil', 'Akshay', 'Vishal',
           'Swapnil', 'Tushar', 'Vinay', 'Ganesh', 'Mahesh', 'Suresh', 'Ramesh',
           'Nilesh', 'Sandip', 'Amol', 'Pravin', 'Sachin', 'Sunil', 'Vikrant', 'Yogesh', 'Ajinkya', 'Bhushan'],
    female: ['Snehal', 'Pooja', 'Aarti', 'Manasi', 'Shraddha', 'Sakshi', 'Prajakta', 'Rutuja',
             'Ashwini', 'Deepali', 'Gauri', 'Janhavi', 'Ketaki', 'Madhuri', 'Neelam',
             'Pallavi', 'Rashmi', 'Sayali', 'Tejashri', 'Ujwala', 'Vaishali', 'Yamini', 'Archana', 'Bhagyashri', 'Chitra'],
    surnames: ['Patil', 'Deshmukh', 'Kulkarni', 'Joshi', 'Deshpande', 'Gokhale', 'Kelkar',
               'Bhosale', 'Chavan', 'Jadhav', 'Kadam', 'More', 'Pawar', 'Shinde', 'Thorat',
               'Gaikwad', 'Nikam', 'Sawant', 'Wagh', 'Yadav']
  },
  telugu: {
    male: ['Venkat', 'Srinivas', 'Ravi', 'Krishna', 'Ramesh', 'Suresh', 'Mahesh', 'Rajesh',
           'Naresh', 'Ganesh', 'Anil', 'Sunil', 'Praveen', 'Naveen', 'Kiran',
           'Chandra', 'Sekhar', 'Prasad', 'Rao', 'Mohan', 'Gopal', 'Murali', 'Vijay', 'Sanjay', 'Ajay'],
    female: ['Lakshmi', 'Padma', 'Swathi', 'Priya', 'Sravani', 'Keerthi', 'Divya', 'Mounika',
             'Anusha', 'Bhavana', 'Chandana', 'Deepthi', 'Geetha', 'Harika', 'Indira',
             'Jyothi', 'Kavitha', 'Madhavi', 'Nandini', 'Pavani', 'Radha', 'Saritha', 'Tejaswini', 'Uma', 'Vidya'],
    surnames: ['Reddy', 'Naidu', 'Rao', 'Sharma', 'Varma', 'Chowdary', 'Murthy', 'Prasad',
               'Krishna', 'Raju', 'Goud', 'Setty', 'Kamma', 'Velama', 'Kapu',
               'Shetty', 'Nair', 'Pillai', 'Menon', 'Iyer']
  },
  kannada: {
    male: ['Arun', 'Kiran', 'Prasad', 'Suresh', 'Ramesh', 'Ganesh', 'Mahesh', 'Naresh',
           'Praveen', 'Naveen', 'Chetan', 'Deepak', 'Harish', 'Jagadish', 'Lokesh',
           'Manjunath', 'Nagesh', 'Pavan', 'Raghavendra', 'Santosh', 'Vinod', 'Yogesh', 'Anand', 'Basavaraj', 'Chandrashekar'],
    female: ['Asha', 'Bhavana', 'Chandrika', 'Deepa', 'Geetha', 'Hema', 'Jyothi', 'Kavitha',
             'Lakshmi', 'Meera', 'Nandini', 'Padma', 'Rekha', 'Shilpa', 'Suma',
             'Tejaswini', 'Uma', 'Vidya', 'Yashodha', 'Anuradha', 'Bhargavi', 'Divya', 'Keerthi', 'Mamatha', 'Priya'],
    surnames: ['Gowda', 'Shetty', 'Rao', 'Reddy', 'Hegde', 'Naik', 'Bhat', 'Kulkarni',
               'Patil', 'Joshi', 'Murthy', 'Prasad', 'Sharma', 'Acharya', 'Kamath',
               'Nayak', 'Pai', 'Shenoy', 'Tantri', 'Udupa']
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
  ahmedabad: { name: 'Ahmedabad', state: 'Gujarat', basePincode: '380' },
  jaipur: { name: 'Jaipur', state: 'Rajasthan', basePincode: '302' },
  lucknow: { name: 'Lucknow', state: 'Uttar Pradesh', basePincode: '226' },
  chandigarh: { name: 'Chandigarh', state: 'Chandigarh', basePincode: '160' },
  kochi: { name: 'Kochi', state: 'Kerala', basePincode: '682' },
  indore: { name: 'Indore', state: 'Madhya Pradesh', basePincode: '452' },
  bhopal: { name: 'Bhopal', state: 'Madhya Pradesh', basePincode: '462' },
  nagpur: { name: 'Nagpur', state: 'Maharashtra', basePincode: '440' },
  surat: { name: 'Surat', state: 'Gujarat', basePincode: '395' }
};

// UPI providers
const UPI_PROVIDERS = ['@paytm', '@ybl', '@oksbi', '@axl', '@icici', '@upi', '@apl', '@ibl', '@kotak', '@hdfcbank', '@sbi', '@axis'];

// Street names for addresses
const STREET_NAMES = [
  'MG Road', 'Gandhi Nagar', 'Nehru Street', 'Subhash Marg', 'Rajaji Road',
  'Lake View Colony', 'Green Park', 'Model Town', 'Civil Lines', 'Shastri Nagar',
  'Vikas Puri', 'Ashok Vihar', 'Janakpuri', 'Vasant Kunj', 'Malviya Nagar',
  'Saket', 'Lajpat Nagar', 'Defence Colony', 'Greater Kailash', 'Hauz Khas',
  'Banjara Hills', 'Jubilee Hills', 'Koramangala', 'Indiranagar', 'Whitefield'
];

const BUILDING_TYPES = ['Apartment', 'Society', 'Complex', 'Tower', 'Heights', 'Residency', 'Villa', 'Enclave', 'Gardens', 'Park'];

// Bank data for IFSC codes
const BANKS = [
  { name: 'State Bank of India', code: 'SBIN', ifscPrefix: 'SBIN0' },
  { name: 'HDFC Bank', code: 'HDFC', ifscPrefix: 'HDFC0' },
  { name: 'ICICI Bank', code: 'ICIC', ifscPrefix: 'ICIC0' },
  { name: 'Axis Bank', code: 'UTIB', ifscPrefix: 'UTIB0' },
  { name: 'Kotak Mahindra Bank', code: 'KKBK', ifscPrefix: 'KKBK0' },
  { name: 'Punjab National Bank', code: 'PUNB', ifscPrefix: 'PUNB0' },
  { name: 'Bank of Baroda', code: 'BARB', ifscPrefix: 'BARB0' },
  { name: 'Canara Bank', code: 'CNRB', ifscPrefix: 'CNRB0' },
  { name: 'Union Bank of India', code: 'UBIN', ifscPrefix: 'UBIN0' },
  { name: 'IndusInd Bank', code: 'INDB', ifscPrefix: 'INDB0' }
];

// State codes for GSTIN
const STATE_CODES = {
  'Maharashtra': '27', 'Delhi': '07', 'Karnataka': '29', 'Telangana': '36',
  'Tamil Nadu': '33', 'West Bengal': '19', 'Gujarat': '24', 'Rajasthan': '08',
  'Uttar Pradesh': '09', 'Chandigarh': '04', 'Kerala': '32', 'Madhya Pradesh': '23'
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomLetter = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));
const getRandomDigit = () => Math.floor(Math.random() * 10).toString();
const getRandomAlphaNum = () => Math.random() > 0.5 ? getRandomLetter() : getRandomDigit();

// ============================================================================
// GENERATOR FUNCTIONS
// ============================================================================

/**
 * Generate a valid Aadhaar number with proper checksum
 * Format: XXXX XXXX XXXX (12 digits, first digit 2-9)
 */
export const generateAadhaar = () => {
  let digits = [getRandomInt(2, 9)];
  for (let i = 1; i < 11; i++) {
    digits.push(getRandomInt(0, 9));
  }
  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  const checksum = (10 - (sum % 10)) % 10;
  digits.push(checksum);
  const aadhaarStr = digits.join('');
  return `${aadhaarStr.slice(0, 4)} ${aadhaarStr.slice(4, 8)} ${aadhaarStr.slice(8, 12)}`;
};

/**
 * Generate a valid PAN number
 * Format: ABCDE1234F (5 letters + 4 digits + 1 letter)
 */
export const generatePAN = (isIndividual = true) => {
  let pan = '';
  for (let i = 0; i < 3; i++) pan += getRandomLetter();
  pan += isIndividual ? 'P' : getRandomElement(['C', 'H', 'F', 'A', 'T']);
  pan += getRandomLetter();
  for (let i = 0; i < 4; i++) pan += getRandomDigit();
  pan += getRandomLetter();
  return pan;
};

/**
 * Generate a valid Indian phone number
 * Format: +91 XXXXX XXXXX
 */
export const generatePhone = () => {
  const prefix = getRandomInt(60, 99).toString();
  let remaining = '';
  for (let i = 0; i < 8; i++) remaining += getRandomDigit();
  const fullNumber = prefix + remaining;
  return `+91 ${fullNumber.slice(0, 5)} ${fullNumber.slice(5)}`;
};

/**
 * Generate a UPI ID based on name
 */
export const generateUPI = (firstName, lastName) => {
  const provider = getRandomElement(UPI_PROVIDERS);
  const cleanFirst = firstName.toLowerCase().replace(/[^a-z]/g, '');
  const cleanLast = lastName.toLowerCase().replace(/[^a-z]/g, '');

  const formats = [
    `${cleanFirst}.${cleanLast}`,
    `${cleanFirst}${cleanLast}`,
    `${cleanFirst}${getRandomInt(1, 99)}`,
    `${cleanFirst}.${cleanLast}${getRandomInt(1, 99)}`
  ];
  return getRandomElement(formats) + provider;
};

/**
 * Generate an email address based on name
 */
export const generateEmail = (firstName, lastName) => {
  const domains = ['gmail.com', 'yahoo.co.in', 'outlook.com', 'hotmail.com', 'rediffmail.com', 'protonmail.com'];
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

const getOrdinalSuffix = (num) => {
  const j = num % 10, k = num % 100;
  if (j === 1 && k !== 11) return 'st';
  if (j === 2 && k !== 12) return 'nd';
  if (j === 3 && k !== 13) return 'rd';
  return 'th';
};

/**
 * Generate a date of birth (18-65 years old)
 */
export const generateDOB = () => {
  const today = new Date();
  const age = getRandomInt(18, 65);
  const year = today.getFullYear() - age;
  const month = getRandomInt(1, 12);
  const day = getRandomInt(1, 28);

  return {
    date: new Date(year, month - 1, day),
    formatted: `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`,
    age: age
  };
};

/**
 * Generate GSTIN (Goods and Services Tax Identification Number)
 * Format: 27AADCB2230M1ZV (15 chars)
 * Structure: 2 digit state code + 10 char PAN + 1 entity number + Z + checksum
 */
export const generateGSTIN = (pan, stateCode = '27') => {
  const entityNum = getRandomInt(1, 9).toString();
  const checksum = getRandomLetter();
  return `${stateCode}${pan}${entityNum}Z${checksum}`;
};

/**
 * Generate Indian Bank Account Number
 * Format varies by bank, typically 9-18 digits
 */
export const generateBankAccount = () => {
  const bank = getRandomElement(BANKS);
  const accountLength = getRandomInt(11, 16);
  let accountNumber = '';
  for (let i = 0; i < accountLength; i++) {
    accountNumber += getRandomDigit();
  }

  // Generate IFSC code
  const branchCode = getRandomInt(10000, 99999).toString().padStart(6, '0');
  const ifsc = bank.ifscPrefix + branchCode.slice(0, 6);

  return {
    accountNumber,
    ifsc,
    bankName: bank.name,
    bankCode: bank.code,
    accountType: getRandomElement(['Savings', 'Current']),
    branch: `${getRandomElement(Object.keys(CITIES)).charAt(0).toUpperCase() + getRandomElement(Object.keys(CITIES)).slice(1)} Main Branch`
  };
};

/**
 * Generate Indian Driving License Number
 * Format: SS-RRYYYYYNNNNNN (State-RTO-Year-Number)
 */
export const generateDrivingLicense = (state = 'Maharashtra') => {
  const stateCodes = {
    'Maharashtra': 'MH', 'Delhi': 'DL', 'Karnataka': 'KA', 'Tamil Nadu': 'TN',
    'West Bengal': 'WB', 'Gujarat': 'GJ', 'Telangana': 'TS', 'Rajasthan': 'RJ',
    'Uttar Pradesh': 'UP', 'Kerala': 'KL', 'Madhya Pradesh': 'MP', 'Chandigarh': 'CH'
  };

  const stateCode = stateCodes[state] || 'MH';
  const rtoCode = getRandomInt(1, 50).toString().padStart(2, '0');
  const year = getRandomInt(2010, 2024);
  const serial = getRandomInt(1, 9999999).toString().padStart(7, '0');

  return `${stateCode}${rtoCode}${year}${serial}`;
};

/**
 * Generate Indian Passport Number
 * Format: A1234567 (1 letter + 7 digits)
 */
export const generatePassport = () => {
  const typeCode = getRandomElement(['J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
  let number = '';
  for (let i = 0; i < 7; i++) {
    number += getRandomDigit();
  }
  return `${typeCode}${number}`;
};

/**
 * Generate Voter ID (EPIC Number)
 * Format: ABC1234567 (3 letters + 7 digits)
 */
export const generateVoterID = () => {
  let letters = '';
  for (let i = 0; i < 3; i++) {
    letters += getRandomLetter();
  }
  let digits = '';
  for (let i = 0; i < 7; i++) {
    digits += getRandomDigit();
  }
  return `${letters}${digits}`;
};

/**
 * Generate Vehicle Registration Number
 * Format: MH01AB1234 (State-RTO-Series-Number)
 */
export const generateVehicleNumber = (state = 'Maharashtra') => {
  const stateCodes = {
    'Maharashtra': 'MH', 'Delhi': 'DL', 'Karnataka': 'KA', 'Tamil Nadu': 'TN',
    'West Bengal': 'WB', 'Gujarat': 'GJ', 'Telangana': 'TS', 'Rajasthan': 'RJ'
  };

  const stateCode = stateCodes[state] || 'MH';
  const rtoCode = getRandomInt(1, 50).toString().padStart(2, '0');
  const series = getRandomLetter() + getRandomLetter();
  const number = getRandomInt(1, 9999).toString().padStart(4, '0');

  return `${stateCode}${rtoCode}${series}${number}`;
};

/**
 * Generate Credit/Debit Card Number (Test card - passes Luhn check)
 * Uses test prefixes that won't work for real transactions
 */
export const generateCardNumber = (type = 'visa') => {
  const prefixes = {
    visa: '4111111111',
    mastercard: '5500000000',
    rupay: '6521111111'
  };

  const prefix = prefixes[type] || prefixes.visa;
  let number = prefix;

  // Add random digits to make 15 digits
  while (number.length < 15) {
    number += getRandomDigit();
  }

  // Calculate Luhn checksum
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    let digit = parseInt(number[i]);
    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }
  const checkDigit = (10 - (sum % 10)) % 10;
  number += checkDigit;

  // Format with spaces
  return `${number.slice(0, 4)} ${number.slice(4, 8)} ${number.slice(8, 12)} ${number.slice(12, 16)}`;
};

/**
 * Generate Card Expiry Date (future date)
 */
export const generateCardExpiry = () => {
  const month = getRandomInt(1, 12).toString().padStart(2, '0');
  const year = (new Date().getFullYear() + getRandomInt(1, 5)).toString().slice(-2);
  return `${month}/${year}`;
};

/**
 * Generate CVV
 */
export const generateCVV = () => {
  return getRandomInt(100, 999).toString();
};

/**
 * Generate Company Name
 */
export const generateCompanyName = () => {
  const prefixes = ['Shri', 'Sri', 'Bharat', 'Desh', 'Hindustan', 'National', 'Royal', 'Prime', 'Golden', 'Star'];
  const cores = ['Tech', 'Info', 'Soft', 'Data', 'Cloud', 'Fin', 'Trade', 'Export', 'Import', 'Industries'];
  const suffixes = ['Solutions', 'Systems', 'Services', 'Pvt Ltd', 'LLP', 'Enterprises', 'Corporation', 'Group', 'India'];

  return `${getRandomElement(prefixes)} ${getRandomElement(cores)} ${getRandomElement(suffixes)}`;
};

// ============================================================================
// MAIN GENERATOR FUNCTION
// ============================================================================

export const generateIndianTestData = (options = {}) => {
  const {
    language = 'hindi',
    gender = 'male',
    city = 'mumbai',
    includeFinancial = true,
    includeDocuments = true
  } = options;

  const nameData = NAMES[language] || NAMES.hindi;
  const genderNames = gender === 'female' ? nameData.female : nameData.male;
  const firstName = getRandomElement(genderNames);
  const lastName = getRandomElement(nameData.surnames);
  const fullName = `${firstName} ${lastName}`;
  const dob = generateDOB();
  const cityData = CITIES[city] || CITIES.mumbai;
  const pan = generatePAN(true);
  const stateCode = STATE_CODES[cityData.state] || '27';

  const data = {
    // Personal Info
    name: { first: firstName, last: lastName, full: fullName },
    gender: gender.charAt(0).toUpperCase() + gender.slice(1),
    dateOfBirth: dob,

    // Contact Info
    email: generateEmail(firstName, lastName),
    phone: generatePhone(),

    // Identity Documents
    aadhaar: generateAadhaar(),
    pan: pan,

    // Financial
    upiId: generateUPI(firstName, lastName),

    // Address
    address: generateAddress(city),

    // Metadata
    language,
    generatedAt: new Date().toISOString()
  };

  // Add extended documents if requested
  if (includeDocuments) {
    data.voterId = generateVoterID();
    data.drivingLicense = generateDrivingLicense(cityData.state);
    data.passport = generatePassport();
    data.vehicleNumber = generateVehicleNumber(cityData.state);
  }

  // Add financial data if requested
  if (includeFinancial) {
    data.gstin = generateGSTIN(pan, stateCode);
    data.bankAccount = generateBankAccount();
    data.card = {
      number: generateCardNumber('visa'),
      expiry: generateCardExpiry(),
      cvv: generateCVV(),
      type: 'Visa'
    };
  }

  return data;
};

/**
 * Generate multiple test data records
 */
export const generateBulkData = (count, options = {}) => {
  const records = [];
  for (let i = 0; i < count; i++) {
    records.push(generateIndianTestData(options));
  }
  return records;
};

/**
 * Format test data as copyable text
 */
export const formatDataForCopy = (data) => {
  let text = `
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
   PAN:           ${data.pan}`;

  if (data.voterId) {
    text += `
   Voter ID:      ${data.voterId}
   Driving License: ${data.drivingLicense}
   Passport:      ${data.passport}
   Vehicle No:    ${data.vehicleNumber}`;
  }

  text += `

💳 FINANCIAL
   UPI ID:        ${data.upiId}`;

  if (data.gstin) {
    text += `
   GSTIN:         ${data.gstin}`;
  }

  if (data.bankAccount) {
    text += `

🏦 BANK DETAILS
   Bank:          ${data.bankAccount.bankName}
   Account No:    ${data.bankAccount.accountNumber}
   IFSC:          ${data.bankAccount.ifsc}
   Account Type:  ${data.bankAccount.accountType}`;
  }

  if (data.card) {
    text += `

💳 CARD DETAILS (TEST ONLY)
   Card Number:   ${data.card.number}
   Expiry:        ${data.card.expiry}
   CVV:           ${data.card.cvv}`;
  }

  text += `

📍 ADDRESS
   ${data.address.line1}
   ${data.address.line2}
   ${data.address.city}, ${data.address.state}
   PIN: ${data.address.pincode}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️  THIS IS FICTIONAL TEST DATA
    Do not use for real transactions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

  return text.trim();
};

/**
 * Convert data to CSV format
 */
export const dataToCSV = (records) => {
  if (!records.length) return '';

  const headers = [
    'Full Name', 'First Name', 'Last Name', 'Gender', 'DOB', 'Age',
    'Email', 'Phone', 'Aadhaar', 'PAN', 'UPI ID',
    'Voter ID', 'Driving License', 'Passport', 'Vehicle Number',
    'GSTIN', 'Bank Name', 'Account Number', 'IFSC', 'Account Type',
    'Card Number', 'Card Expiry', 'Card CVV',
    'Address Line 1', 'Address Line 2', 'City', 'State', 'Pincode'
  ];

  const rows = records.map(data => [
    data.name.full,
    data.name.first,
    data.name.last,
    data.gender,
    data.dateOfBirth.formatted,
    data.dateOfBirth.age,
    data.email,
    data.phone,
    data.aadhaar,
    data.pan,
    data.upiId,
    data.voterId || '',
    data.drivingLicense || '',
    data.passport || '',
    data.vehicleNumber || '',
    data.gstin || '',
    data.bankAccount?.bankName || '',
    data.bankAccount?.accountNumber || '',
    data.bankAccount?.ifsc || '',
    data.bankAccount?.accountType || '',
    data.card?.number || '',
    data.card?.expiry || '',
    data.card?.cvv || '',
    data.address.line1,
    data.address.line2,
    data.address.city,
    data.address.state,
    data.address.pincode
  ].map(val => `"${val}"`).join(','));

  return [headers.join(','), ...rows].join('\n');
};

/**
 * Convert data to JSON format (pretty printed)
 */
export const dataToJSON = (records) => {
  return JSON.stringify(records, null, 2);
};

// Export constants for use in UI
export const AVAILABLE_LANGUAGES = [
  { value: 'hindi', label: 'Hindi (North India)' },
  { value: 'tamil', label: 'Tamil (Tamil Nadu)' },
  { value: 'bengali', label: 'Bengali (West Bengal)' },
  { value: 'gujarati', label: 'Gujarati (Gujarat)' },
  { value: 'marathi', label: 'Marathi (Maharashtra)' },
  { value: 'telugu', label: 'Telugu (Andhra/Telangana)' },
  { value: 'kannada', label: 'Kannada (Karnataka)' }
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
  { value: 'ahmedabad', label: 'Ahmedabad' },
  { value: 'jaipur', label: 'Jaipur' },
  { value: 'lucknow', label: 'Lucknow' },
  { value: 'chandigarh', label: 'Chandigarh' },
  { value: 'kochi', label: 'Kochi' },
  { value: 'indore', label: 'Indore' },
  { value: 'bhopal', label: 'Bhopal' },
  { value: 'nagpur', label: 'Nagpur' },
  { value: 'surat', label: 'Surat' }
];

export const BULK_OPTIONS = [
  { value: 1, label: 'Single Record' },
  { value: 5, label: '5 Records' },
  { value: 10, label: '10 Records' },
  { value: 25, label: '25 Records' },
  { value: 50, label: '50 Records' },
  { value: 100, label: '100 Records' }
];

export default generateIndianTestData;

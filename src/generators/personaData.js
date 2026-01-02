/**
 * Persona Generator - Creates rich, fictional Indian personas
 * Makes test data generation fun and engaging!
 */

import { getRandomElement, getRandomInt } from './utils';

// ============================================================================
// PERSONA DATA - Occupations, Traits, Hobbies
// ============================================================================

export const OCCUPATIONS = {
  student: {
    title: 'College Student',
    icon: '🎓',
    incomeRange: { min: 0, max: 50000 },
    creditScoreRange: { min: 300, max: 650 },
    ageRange: { min: 18, max: 25 },
    descriptions: [
      'Pursuing engineering at a top university',
      'Final year MBA student with internship experience',
      'Computer science student building side projects',
      'Commerce student preparing for CA exams',
      'Medical student in their clinical years'
    ],
    spendingHabits: ['Online shopping enthusiast', 'Food delivery addict', 'Budget-conscious saver'],
    socialMedia: { instagram: true, linkedin: true, twitter: false }
  },
  fresher: {
    title: 'Fresh Graduate',
    icon: '🌱',
    incomeRange: { min: 300000, max: 600000 },
    creditScoreRange: { min: 650, max: 720 },
    ageRange: { min: 22, max: 26 },
    descriptions: [
      'Just started first job at a tech startup',
      'Management trainee at a Fortune 500 company',
      'Junior developer learning the ropes',
      'Fresh CA working at Big 4 accounting firm',
      'Graduate engineer at manufacturing company'
    ],
    spendingHabits: ['Gadget lover', 'Weekend party spender', 'EMI enthusiast'],
    socialMedia: { instagram: true, linkedin: true, twitter: true }
  },
  professional: {
    title: 'IT Professional',
    icon: '💻',
    incomeRange: { min: 800000, max: 2500000 },
    creditScoreRange: { min: 720, max: 800 },
    ageRange: { min: 26, max: 40 },
    descriptions: [
      'Senior software engineer at a product company',
      'Tech lead managing a team of 8 developers',
      'DevOps engineer automating cloud infrastructure',
      'Product manager at a unicorn startup',
      'Data scientist building ML models'
    ],
    spendingHabits: ['Premium subscription lover', 'Investment focused', 'Travel enthusiast'],
    socialMedia: { instagram: true, linkedin: true, twitter: true }
  },
  business_owner: {
    title: 'Business Owner',
    icon: '🏢',
    incomeRange: { min: 1500000, max: 10000000 },
    creditScoreRange: { min: 750, max: 850 },
    ageRange: { min: 30, max: 55 },
    descriptions: [
      'Runs a successful e-commerce business',
      'Owner of a chain of restaurants',
      'Founder of a growing SaaS startup',
      'Manages a family textile business',
      'Real estate developer with multiple projects'
    ],
    spendingHabits: ['Luxury buyer', 'Heavy business expenses', 'Investment diversified'],
    socialMedia: { instagram: true, linkedin: true, twitter: true }
  },
  freelancer: {
    title: 'Freelancer',
    icon: '🎨',
    incomeRange: { min: 400000, max: 1500000 },
    creditScoreRange: { min: 680, max: 750 },
    ageRange: { min: 24, max: 45 },
    descriptions: [
      'UI/UX designer working with global clients',
      'Content writer for tech publications',
      'Independent consultant for startups',
      'Video editor for YouTube creators',
      'Digital marketing specialist'
    ],
    spendingHabits: ['Irregular income manager', 'Equipment investor', 'Coworking space regular'],
    socialMedia: { instagram: true, linkedin: true, twitter: true }
  },
  government: {
    title: 'Government Employee',
    icon: '🏛️',
    incomeRange: { min: 500000, max: 1500000 },
    creditScoreRange: { min: 750, max: 820 },
    ageRange: { min: 25, max: 58 },
    descriptions: [
      'IAS officer serving in district administration',
      'Bank manager at a nationalized bank',
      'Professor at a government university',
      'Railway officer in operations',
      'Tax officer at Income Tax department'
    ],
    spendingHabits: ['Conservative spender', 'Fixed deposit lover', 'Pension planner'],
    socialMedia: { instagram: false, linkedin: true, twitter: false }
  },
  homemaker: {
    title: 'Homemaker',
    icon: '🏠',
    incomeRange: { min: 0, max: 200000 },
    creditScoreRange: { min: 650, max: 750 },
    ageRange: { min: 25, max: 55 },
    descriptions: [
      'Manages household and investments',
      'Part-time home baker with Instagram presence',
      'Runs a small tailoring business from home',
      'Active in local community groups',
      'Manages family finances expertly'
    ],
    spendingHabits: ['Household budget master', 'Deal hunter', 'Gold investor'],
    socialMedia: { instagram: true, linkedin: false, twitter: false }
  },
  retired: {
    title: 'Retired Professional',
    icon: '🌅',
    incomeRange: { min: 300000, max: 1200000 },
    creditScoreRange: { min: 780, max: 850 },
    ageRange: { min: 58, max: 75 },
    descriptions: [
      'Retired bank officer enjoying grandchildren',
      'Former professor now writing books',
      'Ex-military officer running an NGO',
      'Retired businessman mentoring startups',
      'Former doctor doing free consultations'
    ],
    spendingHabits: ['Healthcare focused', 'Travel for leisure', 'Conservative investor'],
    socialMedia: { instagram: false, linkedin: false, twitter: false }
  },
  doctor: {
    title: 'Medical Professional',
    icon: '⚕️',
    incomeRange: { min: 1000000, max: 5000000 },
    creditScoreRange: { min: 770, max: 850 },
    ageRange: { min: 28, max: 60 },
    descriptions: [
      'Cardiologist at a super-specialty hospital',
      'Running a successful private clinic',
      'Surgeon with 15+ years of experience',
      'Pediatrician loved by all kids in the area',
      'Dentist with a chain of clinics'
    ],
    spendingHabits: ['Premium healthcare buyer', 'Medical equipment investor', 'Luxury car owner'],
    socialMedia: { instagram: true, linkedin: true, twitter: false }
  },
  driver: {
    title: 'Gig Worker',
    icon: '🚗',
    incomeRange: { min: 180000, max: 400000 },
    creditScoreRange: { min: 550, max: 680 },
    ageRange: { min: 22, max: 50 },
    descriptions: [
      'Uber/Ola driver supporting a family',
      'Swiggy delivery partner hustling daily',
      'Amazon Flex driver with own vehicle',
      'Rapido bike taxi captain',
      'Dunzo delivery partner'
    ],
    spendingHabits: ['EMI for vehicle', 'Daily earner', 'Basic needs focused'],
    socialMedia: { instagram: true, linkedin: false, twitter: false }
  }
};

// Personality traits that affect behavior
export const PERSONALITY_TRAITS = [
  { trait: 'Early Adopter', icon: '🚀', description: 'First to try new apps and services' },
  { trait: 'Bargain Hunter', icon: '🏷️', description: 'Never pays full price, loves coupons' },
  { trait: 'Brand Loyal', icon: '💎', description: 'Sticks to trusted brands religiously' },
  { trait: 'Impulse Buyer', icon: '⚡', description: 'Spontaneous purchase decisions' },
  { trait: 'Research Guru', icon: '🔍', description: 'Compares 10 products before buying' },
  { trait: 'Cash Preferred', icon: '💵', description: 'Avoids digital payments when possible' },
  { trait: 'UPI Fanatic', icon: '📱', description: 'Pays everything through UPI' },
  { trait: 'Credit Card Maximizer', icon: '💳', description: 'Optimizes rewards and cashback' },
  { trait: 'Investment Focused', icon: '📈', description: 'Saves 40%+ of income' },
  { trait: 'YOLO Spender', icon: '🎉', description: 'Believes in living in the moment' },
  { trait: 'EMI Planner', icon: '📅', description: 'Converts everything to EMI' },
  { trait: 'Gold Lover', icon: '🥇', description: 'Invests heavily in gold' },
  { trait: 'Crypto Curious', icon: '🪙', description: 'Has dabbled in cryptocurrency' },
  { trait: 'Insurance Paranoid', icon: '🛡️', description: 'Over-insured for everything' },
  { trait: 'Subscription Junkie', icon: '📺', description: 'Has 5+ active subscriptions' }
];

// Hobbies that add personality
export const HOBBIES = [
  { hobby: 'Cricket', icon: '🏏' },
  { hobby: 'Bollywood Movies', icon: '🎬' },
  { hobby: 'Street Food Tours', icon: '🍜' },
  { hobby: 'Temple Visits', icon: '🛕' },
  { hobby: 'Stock Trading', icon: '📊' },
  { hobby: 'Instagram Reels', icon: '📱' },
  { hobby: 'Carrom', icon: '🎯' },
  { hobby: 'Reading', icon: '📚' },
  { hobby: 'Cooking', icon: '👨‍🍳' },
  { hobby: 'Travel Photography', icon: '📸' },
  { hobby: 'Gaming', icon: '🎮' },
  { hobby: 'Yoga', icon: '🧘' },
  { hobby: 'Badminton', icon: '🏸' },
  { hobby: 'Music (Bollywood)', icon: '🎵' },
  { hobby: 'Binge Watching', icon: '📺' },
  { hobby: 'Gardening', icon: '🌱' },
  { hobby: 'Chai Addicted', icon: '☕' },
  { hobby: 'Bike Riding', icon: '🏍️' }
];

// Life events that create testing scenarios
export const LIFE_EVENTS = [
  { event: 'Just got married', icon: '💒', financialImpact: 'high_spending' },
  { event: 'Expecting first child', icon: '👶', financialImpact: 'savings_mode' },
  { event: 'Bought first home', icon: '🏠', financialImpact: 'heavy_emi' },
  { event: 'Got promoted', icon: '📈', financialImpact: 'income_increase' },
  { event: 'Started a side hustle', icon: '💡', financialImpact: 'extra_income' },
  { event: 'Planning international trip', icon: '✈️', financialImpact: 'saving_for_goal' },
  { event: 'Kid starting college', icon: '🎓', financialImpact: 'education_expenses' },
  { event: 'Parents retiring', icon: '👨‍👩‍👧', financialImpact: 'supporting_family' },
  { event: 'Health scare recovery', icon: '🏥', financialImpact: 'medical_expenses' },
  { event: 'Car purchase planned', icon: '🚗', financialImpact: 'loan_shopping' }
];

// ============================================================================
// SCENARIO PRESETS
// ============================================================================

export const SCENARIOS = {
  first_credit_card: {
    id: 'first_credit_card',
    name: 'First Credit Card Applicant',
    icon: '💳',
    description: 'Young professional applying for their first credit card',
    color: 'from-blue-500 to-cyan-500',
    preset: {
      occupationType: 'fresher',
      ageRange: { min: 22, max: 28 },
      forceTraits: ['Early Adopter', 'UPI Fanatic'],
      creditScoreRange: { min: 650, max: 720 }
    }
  },
  loan_applicant: {
    id: 'loan_applicant',
    name: 'Home Loan Seeker',
    icon: '🏠',
    description: 'Mid-career professional applying for home loan',
    color: 'from-green-500 to-emerald-500',
    preset: {
      occupationType: 'professional',
      ageRange: { min: 28, max: 40 },
      forceTraits: ['Research Guru', 'EMI Planner'],
      creditScoreRange: { min: 720, max: 800 },
      forceLifeEvent: 'Bought first home'
    }
  },
  gst_filer: {
    id: 'gst_filer',
    name: 'Small Business GST Filer',
    icon: '📋',
    description: 'Business owner filing GST returns',
    color: 'from-orange-500 to-amber-500',
    preset: {
      occupationType: 'business_owner',
      ageRange: { min: 30, max: 50 },
      forceTraits: ['Investment Focused'],
      includeGSTIN: true
    }
  },
  kyc_verification: {
    id: 'kyc_verification',
    name: 'KYC Verification User',
    icon: '🪪',
    description: 'User completing full KYC for fintech app',
    color: 'from-purple-500 to-violet-500',
    preset: {
      includeAllDocuments: true,
      ageRange: { min: 21, max: 60 }
    }
  },
  upi_first_timer: {
    id: 'upi_first_timer',
    name: 'UPI First Timer',
    icon: '📱',
    description: 'Someone setting up UPI for the first time',
    color: 'from-pink-500 to-rose-500',
    preset: {
      occupationType: 'retired',
      ageRange: { min: 50, max: 70 },
      forceTraits: ['Cash Preferred'],
      creditScoreRange: { min: 750, max: 850 }
    }
  },
  ecommerce_power_user: {
    id: 'ecommerce_power_user',
    name: 'E-commerce Power User',
    icon: '🛒',
    description: 'Frequent online shopper with multiple addresses',
    color: 'from-indigo-500 to-blue-500',
    preset: {
      occupationType: 'professional',
      ageRange: { min: 25, max: 40 },
      forceTraits: ['Impulse Buyer', 'Subscription Junkie', 'Credit Card Maximizer']
    }
  },
  insurance_buyer: {
    id: 'insurance_buyer',
    name: 'Insurance Shopper',
    icon: '🛡️',
    description: 'Family person looking for insurance policies',
    color: 'from-teal-500 to-cyan-500',
    preset: {
      ageRange: { min: 30, max: 45 },
      forceTraits: ['Insurance Paranoid', 'Research Guru'],
      forceLifeEvent: 'Expecting first child'
    }
  },
  mutual_fund_investor: {
    id: 'mutual_fund_investor',
    name: 'First-time Investor',
    icon: '📈',
    description: 'Young professional starting investment journey',
    color: 'from-emerald-500 to-green-500',
    preset: {
      occupationType: 'professional',
      ageRange: { min: 24, max: 32 },
      forceTraits: ['Investment Focused', 'Early Adopter'],
      creditScoreRange: { min: 700, max: 780 }
    }
  },
  food_delivery_user: {
    id: 'food_delivery_user',
    name: 'Food Delivery Addict',
    icon: '🍕',
    description: 'Heavy user of Swiggy/Zomato',
    color: 'from-red-500 to-orange-500',
    preset: {
      occupationType: 'professional',
      ageRange: { min: 22, max: 35 },
      forceTraits: ['YOLO Spender', 'Subscription Junkie'],
      forceHobbies: ['Street Food Tours', 'Binge Watching']
    }
  },
  travel_booker: {
    id: 'travel_booker',
    name: 'Travel Enthusiast',
    icon: '✈️',
    description: 'Frequent traveler booking flights and hotels',
    color: 'from-sky-500 to-blue-500',
    preset: {
      occupationType: 'professional',
      ageRange: { min: 26, max: 45 },
      forceTraits: ['Credit Card Maximizer', 'Early Adopter'],
      forceLifeEvent: 'Planning international trip',
      forceHobbies: ['Travel Photography']
    }
  }
};

// ============================================================================
// AVATAR GENERATION
// ============================================================================

export const generateAvatarUrl = (seed, gender, style = 'avataaars') => {
  // Using DiceBear API for consistent, fun avatars
  const styles = ['avataaars', 'big-ears', 'lorelei', 'micah', 'notionists', 'open-peeps', 'personas'];
  const selectedStyle = style === 'random' ? getRandomElement(styles) : style;

  // Add some Indian-specific customizations based on gender
  const params = new URLSearchParams({
    seed: seed,
    backgroundColor: 'b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
    backgroundType: 'gradientLinear'
  });

  return `https://api.dicebear.com/7.x/${selectedStyle}/svg?${params.toString()}`;
};

// ============================================================================
// SOCIAL MEDIA HANDLES
// ============================================================================

export const generateSocialHandles = (firstName, lastName, occupation) => {
  const cleanFirst = firstName.toLowerCase().replace(/[^a-z]/g, '');
  const cleanLast = lastName.toLowerCase().replace(/[^a-z]/g, '');
  const randomNum = getRandomInt(1, 999);

  const formats = [
    `${cleanFirst}_${cleanLast}`,
    `${cleanFirst}.${cleanLast}`,
    `${cleanFirst}${randomNum}`,
    `the_${cleanFirst}`,
    `${cleanFirst}_official`,
    `${cleanFirst}${cleanLast}${getRandomInt(1, 99)}`
  ];

  const baseHandle = getRandomElement(formats);
  const occupationData = OCCUPATIONS[occupation];

  return {
    instagram: occupationData?.socialMedia?.instagram ? `@${baseHandle}` : null,
    linkedin: occupationData?.socialMedia?.linkedin ? `linkedin.com/in/${cleanFirst}-${cleanLast}-${getRandomInt(100, 999)}` : null,
    twitter: occupationData?.socialMedia?.twitter ? `@${baseHandle}` : null
  };
};

// ============================================================================
// BACKSTORY GENERATOR
// ============================================================================

export const generateBackstory = (persona) => {
  const { name, occupation, city, traits, hobbies, lifeEvent, income } = persona;
  const occupationData = OCCUPATIONS[occupation];

  const templates = [
    `${name.first} is a ${occupationData.title.toLowerCase()} from ${city}. ${occupationData.descriptions[getRandomInt(0, occupationData.descriptions.length - 1)]}. Known for being ${traits[0]?.trait.toLowerCase() || 'friendly'}, ${name.first} spends free time enjoying ${hobbies[0]?.hobby.toLowerCase() || 'reading'}${lifeEvent ? `. Currently ${lifeEvent.event.toLowerCase()}` : ''}.`,

    `Meet ${name.full}, a ${persona.age}-year-old ${occupationData.title.toLowerCase()} living in ${city}. With an annual income of ₹${(income/100000).toFixed(1)}L, ${name.first} is a ${traits[0]?.trait.toLowerCase() || 'careful'} spender who loves ${hobbies[0]?.hobby.toLowerCase() || 'music'}${lifeEvent ? ` and is ${lifeEvent.event.toLowerCase()}` : ''}.`,

    `${name.first} ${name.last} (${persona.age}) works as a ${occupationData.title.toLowerCase()} in ${city}. A ${traits[0]?.trait.toLowerCase() || 'thoughtful'} person, ${name.first} enjoys ${hobbies.slice(0, 2).map(h => h.hobby.toLowerCase()).join(' and ')}${lifeEvent ? `. Life update: ${lifeEvent.event}` : ''}.`
  ];

  return getRandomElement(templates);
};

// ============================================================================
// MAIN PERSONA GENERATOR
// ============================================================================

export const generatePersona = (options = {}) => {
  const {
    scenario = null,
    occupationType = null,
    forceGender = null,
    forceAge = null
  } = options;

  // Apply scenario presets if specified
  let preset = {};
  if (scenario && SCENARIOS[scenario]) {
    preset = SCENARIOS[scenario].preset;
  }

  // Determine occupation
  const occupation = preset.occupationType || occupationType ||
    getRandomElement(Object.keys(OCCUPATIONS));
  const occupationData = OCCUPATIONS[occupation];

  // Determine age (within occupation's typical range)
  const ageRange = preset.ageRange || occupationData.ageRange;
  const age = forceAge || getRandomInt(ageRange.min, ageRange.max);

  // Determine gender
  const gender = forceGender || getRandomElement(['male', 'female']);

  // Generate income within occupation range
  const incomeRange = occupationData.incomeRange;
  const income = getRandomInt(incomeRange.min, incomeRange.max);

  // Generate credit score within occupation range
  const creditRange = preset.creditScoreRange || occupationData.creditScoreRange;
  const creditScore = getRandomInt(creditRange.min, creditRange.max);

  // Select personality traits (2-3 traits)
  let traits = [];
  if (preset.forceTraits) {
    traits = PERSONALITY_TRAITS.filter(t => preset.forceTraits.includes(t.trait));
  }
  while (traits.length < 3) {
    const newTrait = getRandomElement(PERSONALITY_TRAITS);
    if (!traits.find(t => t.trait === newTrait.trait)) {
      traits.push(newTrait);
    }
  }

  // Select hobbies (2-4 hobbies)
  let hobbies = [];
  if (preset.forceHobbies) {
    hobbies = HOBBIES.filter(h => preset.forceHobbies.includes(h.hobby));
  }
  while (hobbies.length < getRandomInt(2, 4)) {
    const newHobby = getRandomElement(HOBBIES);
    if (!hobbies.find(h => h.hobby === newHobby.hobby)) {
      hobbies.push(newHobby);
    }
  }

  // Optionally add a life event
  let lifeEvent = null;
  if (preset.forceLifeEvent) {
    lifeEvent = LIFE_EVENTS.find(e => e.event === preset.forceLifeEvent);
  } else if (Math.random() > 0.5) {
    lifeEvent = getRandomElement(LIFE_EVENTS);
  }

  // Generate spending habit
  const spendingHabit = getRandomElement(occupationData.spendingHabits);

  return {
    occupation,
    occupationData,
    age,
    gender,
    income,
    incomeFormatted: `₹${(income / 100000).toFixed(1)}L/year`,
    creditScore,
    creditScoreLabel: getCreditScoreLabel(creditScore),
    traits,
    hobbies,
    lifeEvent,
    spendingHabit,
    scenario: scenario ? SCENARIOS[scenario] : null
  };
};

// Helper function for credit score labels
const getCreditScoreLabel = (score) => {
  if (score >= 800) return { label: 'Excellent', color: 'text-green-600', bg: 'bg-green-100' };
  if (score >= 740) return { label: 'Very Good', color: 'text-green-500', bg: 'bg-green-50' };
  if (score >= 670) return { label: 'Good', color: 'text-yellow-600', bg: 'bg-yellow-100' };
  if (score >= 580) return { label: 'Fair', color: 'text-orange-600', bg: 'bg-orange-100' };
  return { label: 'Poor', color: 'text-red-600', bg: 'bg-red-100' };
};

// Export scenarios list for UI
export const SCENARIO_LIST = Object.values(SCENARIOS);

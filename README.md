# Indian Test Data Generator

Generate realistic **fictional** test data for Indian fintech and e-commerce applications.

## Features

- **Personal Data**: Names by language (Hindi, Tamil, Bengali), gender-specific
- **Identity Documents**: Aadhaar (with checksum), PAN (proper format)
- **Contact Info**: Indian phone numbers (+91), regional email domains
- **Financial**: UPI IDs with various providers
- **Addresses**: Real Indian cities with proper state and PIN codes

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## Legal Disclaimer

This tool generates **completely fictional** test data for development and testing purposes only. The generated data:

- Does NOT represent real individuals
- Should NOT be used for actual KYC verification
- Should NOT be used for real financial transactions
- Is intended solely for software testing and development

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- Lucide React Icons
- @faker-js/faker

## License

MIT

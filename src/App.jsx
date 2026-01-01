import { useState, useCallback } from 'react';
import {
  RefreshCw,
  Copy,
  Check,
  User,
  Mail,
  Phone,
  CreditCard,
  MapPin,
  Calendar,
  AlertTriangle,
  Sparkles,
  Shield
} from 'lucide-react';
import {
  generateIndianTestData,
  formatDataForCopy,
  AVAILABLE_LANGUAGES,
  AVAILABLE_GENDERS,
  AVAILABLE_CITIES
} from './generators/indianData';

function App() {
  // State for form options
  const [language, setLanguage] = useState('hindi');
  const [gender, setGender] = useState('male');
  const [city, setCity] = useState('mumbai');

  // State for generated data
  const [generatedData, setGeneratedData] = useState(null);

  // State for copy feedback
  const [copied, setCopied] = useState(false);

  // State for generation animation
  const [isGenerating, setIsGenerating] = useState(false);

  // Generate new data
  const handleGenerate = useCallback(() => {
    setIsGenerating(true);
    setCopied(false);

    // Small delay for visual feedback
    setTimeout(() => {
      const data = generateIndianTestData({ language, gender, city });
      setGeneratedData(data);
      setIsGenerating(false);
    }, 300);
  }, [language, gender, city]);

  // Copy all data to clipboard
  const handleCopyAll = useCallback(async () => {
    if (!generatedData) return;

    try {
      const formattedText = formatDataForCopy(generatedData);
      await navigator.clipboard.writeText(formattedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, [generatedData]);

  // Copy individual field
  const copyField = useCallback(async (value) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      {/* Header */}
      <header className="pt-8 pb-4 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Indian Test Data Generator
            </h1>
          </div>
          <p className="text-indigo-200 text-sm md:text-base">
            Generate realistic test data for Indian fintech & e-commerce applications
          </p>
        </div>
      </header>

      {/* Warning Banner */}
      <div className="px-4 mb-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-amber-500/20 border border-amber-500/50 rounded-lg p-3 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-amber-100 text-sm">
              <strong>TEST DATA ONLY</strong> — This generates fictional data for development/testing purposes.
              Not real people. Do not use for actual KYC or transactions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-4 pb-12">
        <div className="max-w-2xl mx-auto">
          {/* Options Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20">
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Generation Options
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Language Select */}
              <div>
                <label className="block text-indigo-200 text-sm mb-2">Language/Region</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all cursor-pointer"
                >
                  {AVAILABLE_LANGUAGES.map((lang) => (
                    <option key={lang.value} value={lang.value} className="bg-indigo-900">
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Gender Select */}
              <div>
                <label className="block text-indigo-200 text-sm mb-2">Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all cursor-pointer"
                >
                  {AVAILABLE_GENDERS.map((g) => (
                    <option key={g.value} value={g.value} className="bg-indigo-900">
                      {g.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* City Select */}
              <div>
                <label className="block text-indigo-200 text-sm mb-2">City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all cursor-pointer"
                >
                  {AVAILABLE_CITIES.map((c) => (
                    <option key={c.value} value={c.value} className="bg-indigo-900">
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-70"
            >
              <RefreshCw className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
              {isGenerating ? 'Generating...' : 'Generate Test Data'}
            </button>
          </div>

          {/* Generated Data Card */}
          {generatedData && (
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 flex items-center justify-between">
                <h2 className="text-white font-semibold flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Generated Test Data
                </h2>
                <button
                  onClick={handleCopyAll}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    copied
                      ? 'bg-green-500 text-white'
                      : 'bg-white/20 hover:bg-white/30 text-white'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy All
                    </>
                  )}
                </button>
              </div>

              {/* Data Fields */}
              <div className="p-6 space-y-6">
                {/* Personal Information */}
                <DataSection title="Personal Information" icon={<User className="w-4 h-4" />}>
                  <DataField
                    label="Full Name"
                    value={generatedData.name.full}
                    onCopy={copyField}
                  />
                  <DataField
                    label="Gender"
                    value={generatedData.gender}
                    onCopy={copyField}
                  />
                  <DataField
                    label="Date of Birth"
                    value={`${generatedData.dateOfBirth.formatted} (${generatedData.dateOfBirth.age} years)`}
                    onCopy={copyField}
                    copyValue={generatedData.dateOfBirth.formatted}
                  />
                </DataSection>

                {/* Contact Details */}
                <DataSection title="Contact Details" icon={<Mail className="w-4 h-4" />}>
                  <DataField
                    label="Email"
                    value={generatedData.email}
                    onCopy={copyField}
                  />
                  <DataField
                    label="Phone"
                    value={generatedData.phone}
                    onCopy={copyField}
                  />
                </DataSection>

                {/* Identity Documents */}
                <DataSection title="Identity Documents" icon={<CreditCard className="w-4 h-4" />}>
                  <DataField
                    label="Aadhaar Number"
                    value={generatedData.aadhaar}
                    onCopy={copyField}
                    highlight
                  />
                  <DataField
                    label="PAN"
                    value={generatedData.pan}
                    onCopy={copyField}
                    highlight
                  />
                </DataSection>

                {/* Financial */}
                <DataSection title="Financial" icon={<Phone className="w-4 h-4" />}>
                  <DataField
                    label="UPI ID"
                    value={generatedData.upiId}
                    onCopy={copyField}
                  />
                </DataSection>

                {/* Address */}
                <DataSection title="Address" icon={<MapPin className="w-4 h-4" />}>
                  <DataField
                    label="Full Address"
                    value={generatedData.address.full}
                    onCopy={copyField}
                    multiline
                  />
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <DataField
                      label="City"
                      value={generatedData.address.city}
                      onCopy={copyField}
                      compact
                    />
                    <DataField
                      label="State"
                      value={generatedData.address.state}
                      onCopy={copyField}
                      compact
                    />
                    <DataField
                      label="PIN Code"
                      value={generatedData.address.pincode}
                      onCopy={copyField}
                      compact
                    />
                  </div>
                </DataSection>

                {/* Timestamp */}
                <div className="flex items-center gap-2 text-gray-400 text-xs pt-2 border-t border-gray-100">
                  <Calendar className="w-3 h-3" />
                  Generated at: {new Date(generatedData.generatedAt).toLocaleString()}
                </div>
              </div>

              {/* Bottom Warning */}
              <div className="bg-red-50 border-t border-red-100 px-6 py-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm">
                    <strong>FICTIONAL TEST DATA</strong> — This data is randomly generated and does not represent
                    any real person. Do not use for actual financial transactions, KYC verification, or any real-world purposes.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!generatedData && (
            <div className="bg-white/5 border-2 border-dashed border-white/20 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-indigo-300" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">No Data Generated Yet</h3>
              <p className="text-indigo-200 text-sm">
                Select your options above and click "Generate Test Data" to create fictional Indian test data.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-indigo-300 text-sm">
            Built for developers who need realistic Indian test data.
          </p>
          <p className="text-indigo-400 text-xs mt-2">
            All generated data is completely fictional and for testing purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Data Section Component
function DataSection({ title, icon, children }) {
  return (
    <div>
      <h3 className="text-gray-700 font-medium text-sm flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
        {icon}
        {title}
      </h3>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

// Data Field Component
function DataField({ label, value, onCopy, copyValue, highlight, multiline, compact }) {
  const [fieldCopied, setFieldCopied] = useState(false);

  const handleCopy = async () => {
    await onCopy(copyValue || value);
    setFieldCopied(true);
    setTimeout(() => setFieldCopied(false), 1500);
  };

  return (
    <div className={`group flex items-start justify-between gap-4 ${compact ? '' : 'py-1'}`}>
      <div className="flex-1 min-w-0">
        <span className="text-gray-500 text-xs block mb-0.5">{label}</span>
        <span
          className={`block ${multiline ? 'text-sm leading-relaxed' : 'text-base'} ${
            highlight
              ? 'font-mono bg-indigo-50 text-indigo-700 px-2 py-1 rounded inline-block'
              : 'text-gray-900'
          }`}
        >
          {value}
        </span>
      </div>
      <button
        onClick={handleCopy}
        className={`flex-shrink-0 p-2 rounded-lg transition-all duration-200 ${
          fieldCopied
            ? 'bg-green-100 text-green-600'
            : 'bg-gray-100 text-gray-400 hover:bg-indigo-100 hover:text-indigo-600 opacity-0 group-hover:opacity-100'
        }`}
        title="Copy to clipboard"
      >
        {fieldCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
}

export default App;

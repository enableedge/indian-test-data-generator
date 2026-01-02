import { useState, useCallback, useEffect } from 'react';
import {
  Copy,
  Check,
  User,
  Mail,
  CreditCard,
  MapPin,
  AlertTriangle,
  Sparkles,
  Shield,
  FileJson,
  FileSpreadsheet,
  Landmark,
  IdCard,
  Wallet,
  ChevronDown,
  ChevronUp,
  Users,
  Keyboard,
  Zap,
  Globe
} from 'lucide-react';
import {
  generateIndianTestData,
  generateBulkData,
  formatDataForCopy,
  dataToCSV,
  dataToJSON,
  AVAILABLE_LANGUAGES,
  AVAILABLE_GENDERS,
  AVAILABLE_CITIES,
  BULK_OPTIONS
} from './generators/indianData';
import {
  generatePersona,
  generateAvatarUrl,
  generateSocialHandles,
  generateBackstory,
  SCENARIOS,
  SCENARIO_LIST
} from './generators/personaData';

function App() {
  // State for form options
  const [language, setLanguage] = useState('hindi');
  const [gender, setGender] = useState('male');
  const [city, setCity] = useState('mumbai');
  const [bulkCount, setBulkCount] = useState(1);
  const [includeFinancial, setIncludeFinancial] = useState(true);
  const [includeDocuments, setIncludeDocuments] = useState(true);
  const [selectedScenario, setSelectedScenario] = useState(null);

  // State for generated data
  const [generatedData, setGeneratedData] = useState(null);
  const [persona, setPersona] = useState(null);
  const [bulkData, setBulkData] = useState([]);

  // State for UI
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    personal: true,
    contact: true,
    identity: true,
    documents: false,
    financial: true,
    bank: false,
    card: false,
    address: true
  });
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [showExtensionPromo, setShowExtensionPromo] = useState(true);

  // Generate new data
  const handleGenerate = useCallback(() => {
    setIsGenerating(true);
    setCopied(false);

    setTimeout(() => {
      // Generate persona first
      const newPersona = generatePersona({
        scenario: selectedScenario,
        forceGender: gender
      });

      // Generate base data with persona-influenced options
      const options = {
        language,
        gender: newPersona.gender,
        city,
        includeFinancial,
        includeDocuments
      };

      if (bulkCount === 1) {
        const data = generateIndianTestData(options);

        // Enhance data with persona
        data.persona = newPersona;
        data.avatar = generateAvatarUrl(data.name.full, newPersona.gender);
        data.socialHandles = generateSocialHandles(data.name.first, data.name.last, newPersona.occupation);
        data.backstory = generateBackstory({
          name: data.name,
          occupation: newPersona.occupation,
          city: data.address.city,
          traits: newPersona.traits,
          hobbies: newPersona.hobbies,
          lifeEvent: newPersona.lifeEvent,
          income: newPersona.income,
          age: newPersona.age
        });

        // Override age with persona age
        const year = new Date().getFullYear() - newPersona.age;
        data.dateOfBirth = {
          ...data.dateOfBirth,
          age: newPersona.age,
          formatted: `${data.dateOfBirth.formatted.split('/').slice(0, 2).join('/')}/${year}`
        };

        setGeneratedData(data);
        setPersona(newPersona);
        setBulkData([data]);
      } else {
        const data = generateBulkData(bulkCount, options);
        setBulkData(data);
        setGeneratedData(data[0]);
        setPersona(generatePersona({ forceGender: data[0].gender.toLowerCase() }));
      }

      setIsGenerating(false);
    }, 400);
  }, [language, gender, city, bulkCount, includeFinancial, includeDocuments, selectedScenario]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === 'Enter' && (e.ctrlKey || e.metaKey)) ||
        (e.key === 'Enter' && e.target.tagName !== 'SELECT' && e.target.tagName !== 'INPUT')) {
        e.preventDefault();
        handleGenerate();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'c' && !window.getSelection().toString()) {
        if (generatedData) {
          handleCopyAll();
        }
      }
      if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
        setShowShortcuts(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleGenerate, generatedData]);

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

  // Download as CSV
  const downloadCSV = useCallback(() => {
    if (!bulkData.length) return;
    const csv = dataToCSV(bulkData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `indian-test-data-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  }, [bulkData]);

  // Download as JSON
  const downloadJSON = useCallback(() => {
    if (!bulkData.length) return;
    const json = dataToJSON(bulkData);
    const blob = new Blob([json], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `indian-test-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  }, [bulkData]);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      {/* Header */}
      <header className="pt-8 pb-4 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
              🇮🇳
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Indian Test Data Generator
            </h1>
          </div>
          <p className="text-indigo-200 text-sm md:text-base">
            Generate realistic personas with complete test data for Indian applications
          </p>
          <button
            onClick={() => setShowShortcuts(prev => !prev)}
            className="mt-2 text-indigo-300 hover:text-white text-xs flex items-center gap-1 mx-auto transition-colors"
          >
            <Keyboard className="w-3 h-3" />
            Keyboard shortcuts (?)
          </button>
        </div>
      </header>

      {/* Chrome Extension Promo */}
      {showExtensionPromo && (
        <div className="px-4 mb-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border border-indigo-400/30 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-indigo-300" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Chrome Extension Available!</p>
                  <p className="text-indigo-200 text-xs">Auto-fill any form with one click</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors">
                  Learn More
                </button>
                <button
                  onClick={() => setShowExtensionPromo(false)}
                  className="p-2 text-indigo-300 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shortcuts Modal */}
      {showShortcuts && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowShortcuts(false)}>
          <div className="bg-white rounded-xl p-6 max-w-sm w-full" onClick={e => e.stopPropagation()}>
            <h3 className="font-semibold text-lg mb-4">Keyboard Shortcuts</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Generate data</span>
                <kbd className="bg-gray-100 px-2 py-1 rounded text-xs">Enter</kbd>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Copy all</span>
                <kbd className="bg-gray-100 px-2 py-1 rounded text-xs">Ctrl + C</kbd>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Toggle shortcuts</span>
                <kbd className="bg-gray-100 px-2 py-1 rounded text-xs">?</kbd>
              </div>
            </div>
            <button
              onClick={() => setShowShortcuts(false)}
              className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Warning Banner */}
      <div className="px-4 mb-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-amber-500/20 border border-amber-500/50 rounded-lg p-3 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-amber-100 text-sm">
              <strong>TEST DATA ONLY</strong> — This generates fictional personas for development/testing.
              Not real people. Do not use for actual KYC or transactions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-4 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* Scenario Selection */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20">
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Quick Scenarios
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {SCENARIO_LIST.slice(0, 10).map((scenario) => (
                <button
                  key={scenario.id}
                  onClick={() => {
                    setSelectedScenario(scenario.id === selectedScenario ? null : scenario.id);
                  }}
                  className={`p-3 rounded-xl text-center transition-all ${selectedScenario === scenario.id
                      ? 'bg-gradient-to-br ' + scenario.color + ' text-white shadow-lg scale-105'
                      : 'bg-white/5 hover:bg-white/10 text-indigo-200 border border-white/10'
                    }`}
                >
                  <span className="text-2xl block mb-1">{scenario.icon}</span>
                  <span className="text-xs font-medium block leading-tight">{scenario.name}</span>
                </button>
              ))}
            </div>
            {selectedScenario && (
              <div className="mt-4 p-3 bg-white/5 rounded-lg">
                <p className="text-indigo-200 text-sm">
                  <strong className="text-white">{SCENARIOS[selectedScenario].name}:</strong>{' '}
                  {SCENARIOS[selectedScenario].description}
                </p>
              </div>
            )}
          </div>

          {/* Options Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20">
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Generation Options
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-indigo-200 text-sm mb-2">Language/Region</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all cursor-pointer"
                >
                  {AVAILABLE_LANGUAGES.map((lang) => (
                    <option key={lang.value} value={lang.value} className="bg-indigo-900">
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-indigo-200 text-sm mb-2">Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all cursor-pointer"
                >
                  {AVAILABLE_GENDERS.map((g) => (
                    <option key={g.value} value={g.value} className="bg-indigo-900">
                      {g.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-indigo-200 text-sm mb-2">City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all cursor-pointer"
                >
                  {AVAILABLE_CITIES.map((c) => (
                    <option key={c.value} value={c.value} className="bg-indigo-900">
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-indigo-200 text-sm mb-2">Records</label>
                <select
                  value={bulkCount}
                  onChange={(e) => setBulkCount(parseInt(e.target.value))}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all cursor-pointer"
                >
                  {BULK_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-indigo-900">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <label className="flex items-center gap-2 text-indigo-200 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeDocuments}
                  onChange={(e) => setIncludeDocuments(e.target.checked)}
                  className="w-4 h-4 rounded border-white/20 bg-white/10 text-indigo-500 focus:ring-indigo-400"
                />
                Include ID Documents
              </label>
              <label className="flex items-center gap-2 text-indigo-200 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeFinancial}
                  onChange={(e) => setIncludeFinancial(e.target.checked)}
                  className="w-4 h-4 rounded border-white/20 bg-white/10 text-indigo-500 focus:ring-indigo-400"
                />
                Include Financial Data
              </label>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-70 text-lg"
            >
              <Sparkles className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
              {isGenerating ? 'Creating Persona...' : 'Generate Persona'}
            </button>
          </div>

          {/* Results Section */}
          {generatedData && persona && (
            <>
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-4">
                <button
                  onClick={handleCopyAll}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${copied
                      ? 'bg-green-500 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy All'}
                </button>

                <button
                  onClick={downloadCSV}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  CSV
                </button>

                <button
                  onClick={downloadJSON}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                >
                  <FileJson className="w-4 h-4" />
                  JSON
                </button>

                {bulkCount > 1 && (
                  <span className="flex items-center gap-2 px-4 py-2 text-indigo-200 text-sm">
                    <Users className="w-4 h-4" />
                    {bulkData.length} records
                  </span>
                )}
              </div>

              {/* Persona Card */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in mb-6">
                {/* Persona Header */}
                <div className={`bg-gradient-to-r ${persona.scenario?.color || 'from-indigo-600 to-purple-600'} p-6`}>
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-2xl bg-white/20 overflow-hidden flex-shrink-0 ring-4 ring-white/30">
                      <img
                        src={generatedData.avatar}
                        alt={generatedData.name.full}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-2xl font-bold text-white truncate">
                        {generatedData.name.full}
                      </h2>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="text-white/90 text-sm">
                          {persona.occupationData?.icon} {persona.occupationData?.title}
                        </span>
                        <span className="text-white/60">•</span>
                        <span className="text-white/90 text-sm">
                          {persona.age} years
                        </span>
                        <span className="text-white/60">•</span>
                        <span className="text-white/90 text-sm">
                          {generatedData.address.city}
                        </span>
                      </div>

                      {/* Traits */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {persona.traits.slice(0, 3).map((trait, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-white/20 rounded-full text-xs text-white flex items-center gap-1"
                          >
                            {trait.icon} {trait.trait}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Credit Score */}
                    <div className="text-right flex-shrink-0">
                      <div className="text-white/60 text-xs uppercase tracking-wide">Credit Score</div>
                      <div className="text-3xl font-bold text-white">{persona.creditScore}</div>
                      <div className={`text-xs px-2 py-0.5 rounded-full inline-block ${persona.creditScoreLabel.bg} ${persona.creditScoreLabel.color}`}>
                        {persona.creditScoreLabel.label}
                      </div>
                    </div>
                  </div>

                  {/* Backstory */}
                  <div className="mt-4 p-3 bg-white/10 rounded-lg">
                    <p className="text-white/90 text-sm leading-relaxed">
                      {generatedData.backstory}
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-4 divide-x divide-gray-100 bg-gray-50">
                  <div className="p-4 text-center">
                    <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">Income</div>
                    <div className="text-gray-900 font-semibold">{persona.incomeFormatted}</div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">Spending</div>
                    <div className="text-gray-900 font-semibold text-sm">{persona.spendingHabit}</div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">Hobbies</div>
                    <div className="text-lg">
                      {persona.hobbies.slice(0, 3).map(h => h.icon).join(' ')}
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">Life Event</div>
                    <div className="text-lg">{persona.lifeEvent?.icon || '—'}</div>
                  </div>
                </div>

                {/* Data Sections */}
                <div className="p-6 space-y-4">
                  <CollapsibleSection
                    title="Contact Details"
                    icon={<Mail className="w-4 h-4" />}
                    isOpen={expandedSections.contact}
                    onToggle={() => toggleSection('contact')}
                  >
                    <DataField label="Email" value={generatedData.email} onCopy={copyField} />
                    <DataField label="Phone" value={generatedData.phone} onCopy={copyField} />
                    {generatedData.socialHandles?.instagram && (
                      <DataField label="Instagram" value={generatedData.socialHandles.instagram} onCopy={copyField} />
                    )}
                    {generatedData.socialHandles?.linkedin && (
                      <DataField label="LinkedIn" value={generatedData.socialHandles.linkedin} onCopy={copyField} />
                    )}
                  </CollapsibleSection>

                  <CollapsibleSection
                    title="Identity Documents"
                    icon={<IdCard className="w-4 h-4" />}
                    isOpen={expandedSections.identity}
                    onToggle={() => toggleSection('identity')}
                  >
                    <DataField label="Aadhaar" value={generatedData.aadhaar} onCopy={copyField} highlight />
                    <DataField label="PAN" value={generatedData.pan} onCopy={copyField} highlight />
                  </CollapsibleSection>

                  {generatedData.voterId && (
                    <CollapsibleSection
                      title="Additional Documents"
                      icon={<CreditCard className="w-4 h-4" />}
                      isOpen={expandedSections.documents}
                      onToggle={() => toggleSection('documents')}
                    >
                      <DataField label="Voter ID" value={generatedData.voterId} onCopy={copyField} />
                      <DataField label="Driving License" value={generatedData.drivingLicense} onCopy={copyField} />
                      <DataField label="Passport" value={generatedData.passport} onCopy={copyField} />
                    </CollapsibleSection>
                  )}

                  <CollapsibleSection
                    title="Financial"
                    icon={<Wallet className="w-4 h-4" />}
                    isOpen={expandedSections.financial}
                    onToggle={() => toggleSection('financial')}
                  >
                    <DataField label="UPI ID" value={generatedData.upiId} onCopy={copyField} />
                    {generatedData.gstin && (
                      <DataField label="GSTIN" value={generatedData.gstin} onCopy={copyField} highlight />
                    )}
                  </CollapsibleSection>

                  {generatedData.bankAccount && (
                    <CollapsibleSection
                      title="Bank Details"
                      icon={<Landmark className="w-4 h-4" />}
                      isOpen={expandedSections.bank}
                      onToggle={() => toggleSection('bank')}
                    >
                      <DataField label="Bank" value={generatedData.bankAccount.bankName} onCopy={copyField} />
                      <DataField label="Account No" value={generatedData.bankAccount.accountNumber} onCopy={copyField} highlight />
                      <DataField label="IFSC" value={generatedData.bankAccount.ifsc} onCopy={copyField} highlight />
                    </CollapsibleSection>
                  )}

                  {generatedData.card && (
                    <CollapsibleSection
                      title="Test Card"
                      icon={<CreditCard className="w-4 h-4" />}
                      isOpen={expandedSections.card}
                      onToggle={() => toggleSection('card')}
                    >
                      <DataField label="Card Number" value={generatedData.card.number} onCopy={copyField} highlight />
                      <DataField label="Expiry" value={generatedData.card.expiry} onCopy={copyField} />
                      <DataField label="CVV" value={generatedData.card.cvv} onCopy={copyField} />
                    </CollapsibleSection>
                  )}

                  <CollapsibleSection
                    title="Address"
                    icon={<MapPin className="w-4 h-4" />}
                    isOpen={expandedSections.address}
                    onToggle={() => toggleSection('address')}
                  >
                    <DataField label="Full Address" value={generatedData.address.full} onCopy={copyField} multiline />
                    <div className="grid grid-cols-3 gap-4 mt-2">
                      <DataField label="City" value={generatedData.address.city} onCopy={copyField} compact />
                      <DataField label="State" value={generatedData.address.state} onCopy={copyField} compact />
                      <DataField label="PIN" value={generatedData.address.pincode} onCopy={copyField} compact />
                    </div>
                  </CollapsibleSection>
                </div>

                {/* Bottom Warning */}
                <div className="bg-red-50 border-t border-red-100 px-6 py-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">
                      <strong>FICTIONAL PERSONA</strong> — {generatedData.name.full} is a randomly generated character.
                      Do not use this data for real transactions.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Empty State */}
          {!generatedData && (
            <div className="bg-white/5 border-2 border-dashed border-white/20 rounded-2xl p-12 text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-indigo-300" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Create Your First Persona</h3>
              <p className="text-indigo-200 text-sm mb-4 max-w-md mx-auto">
                Choose a scenario or customize options above, then click "Generate Persona" to create
                a complete fictional Indian identity with backstory, traits, and all test data.
              </p>
              <p className="text-indigo-300 text-xs">
                Press <kbd className="bg-white/10 px-2 py-1 rounded">Enter</kbd> to generate
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-indigo-300 text-sm">
            Built for developers who need realistic Indian test data.
          </p>
          <p className="text-indigo-400 text-xs mt-2">
            All personas and data are completely fictional. Chrome extension available for form auto-fill.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Collapsible Section Component
function CollapsibleSection({ title, icon, children, isOpen, onToggle }) {
  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <span className="flex items-center gap-2 text-gray-700 font-medium text-sm">
          {icon}
          {title}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 py-3 space-y-3">
          {children}
        </div>
      )}
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
          className={`block ${multiline ? 'text-sm leading-relaxed' : 'text-base'} ${highlight
              ? 'font-mono bg-indigo-50 text-indigo-700 px-2 py-1 rounded inline-block text-sm'
              : 'text-gray-900'
            }`}
        >
          {value}
        </span>
      </div>
      <button
        onClick={handleCopy}
        className={`flex-shrink-0 p-2 rounded-lg transition-all duration-200 ${fieldCopied
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

'use client';

import { useState, useRef, useEffect } from 'react';
import { FiMapPin, FiX } from 'react-icons/fi';

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
}

export default function AddressAutocomplete({ value, onChange, placeholder, label }: AddressAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Common GTA locations for suggestions
  const commonLocations = [
    'Toronto Pearson International Airport (YYZ), Mississauga, ON',
    'Billy Bishop Toronto City Airport (YTZ), Toronto, ON',
    'Union Station, Toronto, ON',
    'Downtown Toronto, ON',
    'Yorkdale Shopping Centre, Toronto, ON',
    'Square One Shopping Centre, Mississauga, ON',
    'Vaughan Mills, Vaughan, ON',
    'Eaton Centre, Toronto, ON',
    'CN Tower, Toronto, ON',
    'Rogers Centre, Toronto, ON',
    'Scotiabank Arena, Toronto, ON',
    'Metro Toronto Convention Centre, Toronto, ON',
    'Four Seasons Centre, Toronto, ON',
    'Royal Ontario Museum, Toronto, ON',
    'Pearson Airport Terminal 1, Mississauga, ON',
    'Pearson Airport Terminal 3, Mississauga, ON',
    'Hamilton International Airport (YHM), Hamilton, ON',
    'Buffalo Niagara International Airport (BUF), Buffalo, NY',
    'Niagara Falls, ON',
    'Mississauga City Centre, Mississauga, ON',
    'Brampton City Hall, Brampton, ON',
    'Markham Civic Centre, Markham, ON',
    'Richmond Hill Centre, Richmond Hill, ON',
    'Oakville Town Centre, Oakville, ON',
    'Burlington GO Station, Burlington, ON',
    'Hamilton GO Centre, Hamilton, ON',
    'Waterloo, ON',
    'Kitchener, ON',
    'Guelph, ON',
    'Barrie, ON',
    'Cambridge, ON',
    'St. Catharines, ON',
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue);

    if (inputValue.length > 2) {
      const filtered = commonLocations.filter(location =>
        location.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
      setSelectedIndex(-1);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    setShowSuggestions(false);
    setSuggestions([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleSuggestionClick(suggestions[selectedIndex]);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const handleClear = () => {
    onChange('');
    setSuggestions([]);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  return (
    <div className="relative">
      <label className="block text-sm font-light text-gray-700 mb-2 uppercase tracking-wider">
        <FiMapPin className="inline w-4 h-4 mr-2" />
        {label}
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (value.length > 2 && suggestions.length > 0) {
              setShowSuggestions(true);
            }
          }}
          placeholder={placeholder}
          className="w-full px-4 py-3 pr-10 border border-gray-300 focus:border-gold-500 focus:outline-none transition-colors font-light"
          autoComplete="off"
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear"
          >
            <FiX className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute z-50 w-full mt-1 bg-white border border-gray-300 shadow-xl max-h-64 overflow-y-auto"
        >
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSuggestionClick(suggestion)}
              className={`w-full text-left px-4 py-3 hover:bg-gold-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                index === selectedIndex ? 'bg-gold-50' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <FiMapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-1" />
                <span className="font-light text-sm text-gray-700">{suggestion}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Helper text */}
      {value.length > 0 && value.length <= 2 && (
        <p className="text-xs text-gray-500 mt-1 font-light">Type at least 3 characters to see suggestions</p>
      )}
    </div>
  );
}


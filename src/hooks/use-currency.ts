'use client'

import { useState, useEffect } from 'react'

export type Currency = 'USD' | 'GBP' | 'INR'

interface CurrencyInfo {
  code: Currency
  symbol: string
  name: string
}

const currencies: Record<Currency, CurrencyInfo> = {
  USD: { code: 'USD', symbol: '$', name: 'US Dollar' },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound' },
  INR: { code: 'INR', symbol: '₹', name: 'Indian Rupee' }
}

export const useCurrency = () => {
  const [currency, setCurrency] = useState<Currency>('USD')

  useEffect(() => {
    // Try to detect user's region
    const detectCurrency = async () => {
      try {
        // Try to get user's timezone and locale
        const userLocale = navigator.language
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone

        // Simple region detection based on locale and timezone
        if (userLocale.includes('en-GB') || userTimezone.includes('London') || userTimezone.includes('Europe')) {
          setCurrency('GBP')
        } else if (userLocale.includes('en-IN') || userTimezone.includes('Asia/Kolkata') || userTimezone.includes('Asia/Calcutta')) {
          setCurrency('INR')
        } else {
          // Try IP-based detection as fallback
          try {
            const response = await fetch('https://ipapi.co/json/')
            const data = await response.json()
            
            if (data.country === 'GB' || data.country === 'UK') {
              setCurrency('GBP')
            } else if (data.country === 'IN') {
              setCurrency('INR')
            } else {
              setCurrency('USD') // Default to USD
            }
          } catch {
            setCurrency('USD') // Default to USD if detection fails
          }
        }
      } catch {
        setCurrency('USD') // Default to USD if detection fails
      }
    }

    detectCurrency()
  }, [])

  const formatPrice = (priceData: { USD: number; GBP: number; INR: number }) => {
    const price = priceData[currency]
    const currencyInfo = currencies[currency]
    
    return {
      amount: price,
      formatted: `${currencyInfo.symbol}${price.toLocaleString()}`,
      currency: currencyInfo.code,
      symbol: currencyInfo.symbol
    }
  }

  const formatCredits = (creditsData: { USD: number; GBP: number; INR: number }) => {
    return creditsData[currency]
  }

  return {
    currency,
    setCurrency,
    formatPrice,
    formatCredits,
    currencies
  }
}
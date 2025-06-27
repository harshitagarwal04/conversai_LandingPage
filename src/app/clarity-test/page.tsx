'use client'

import { useEffect, useState } from 'react'

export default function ClarityTestPage() {
  const [clarityStatus, setClarityStatus] = useState<string>('Checking...')
  const [clarityDetails, setClarityDetails] = useState<any>(null)

  useEffect(() => {
    // Check if Clarity is loaded
    const checkClarity = () => {
      if (typeof window !== 'undefined') {
        // Check if clarity function exists
        if (window.clarity) {
          setClarityStatus('✅ Microsoft Clarity is loaded!')
          setClarityDetails({
            clarityFunction: typeof window.clarity,
            clarityQueue: window.clarity.q ? window.clarity.q.length : 'No queue',
            projectId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'Not set'
          })
        } else {
          setClarityStatus('❌ Microsoft Clarity is NOT loaded')
          setClarityDetails({
            envVar: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'Not set',
            windowClarity: typeof window.clarity
          })
        }
      }
    }

    // Check immediately
    checkClarity()

    // Check again after a delay to account for async loading
    const timer = setTimeout(checkClarity, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Microsoft Clarity Test Page</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Clarity Status</h2>
          <p className="text-lg mb-4">{clarityStatus}</p>
          
          {clarityDetails && (
            <div className="bg-gray-100 rounded p-4">
              <h3 className="font-semibold mb-2">Debug Information:</h3>
              <pre className="text-sm overflow-x-auto">
                {JSON.stringify(clarityDetails, null, 2)}
              </pre>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">How to verify in browser:</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Open Developer Tools (F12 or right-click → Inspect)</li>
            <li>Go to the Network tab</li>
            <li>Filter by "clarity" or look for requests to clarity.ms</li>
            <li>In the Console, type: <code className="bg-gray-100 px-2 py-1 rounded">window.clarity</code></li>
            <li>Check for any Clarity-related errors in the Console</li>
          </ol>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm">
            <strong>Note:</strong> If Clarity is not loading, make sure NEXT_PUBLIC_CLARITY_PROJECT_ID is set in your .env.local file and restart the dev server.
          </p>
        </div>
      </div>
    </div>
  )
}
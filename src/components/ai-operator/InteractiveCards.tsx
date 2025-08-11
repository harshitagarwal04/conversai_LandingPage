"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, PlayCircle, PauseCircle, Home, User, Bot, Clock, CheckCircle } from 'lucide-react'

const scenarios = [
  {
    id: 'reception',
    title: 'Reception',
    icon: Phone,
    description: 'Initial prospect inquiry and tour scheduling',
    duration: '2:49',
    color: 'blue',
    // Google Drive direct download URL - replace FILE_ID with your actual file ID
    audioUrl: '', // Example: https://drive.google.com/uc?export=download&id=1ABC123def456...
    outcomes: [
      'Tour scheduled for Thursday at 10:30 AM',
      'Email confirmation sent to prospect',
      'Preferences noted: 1BR, first floor, in-unit laundry, reserved parking'
    ],
    conversation: [
      { speaker: 'ai', text: "Hi, I'm Lily thanks for calling Park Village in Largo. How can I help you today?", time: '0:02' },
      { speaker: 'prospect', text: "Hi. I am Jatin.", time: '0:09' },
      { speaker: 'ai', text: "Hi Jatin! Are you interested in a studio, one-bedroom, or two-bedroom apartment here at Park Village?", time: '0:12' },
      { speaker: 'prospect', text: "I am interested in one bedroom unit.", time: '0:21' },
      { speaker: 'ai', text: "Great choice, Jatin! Are you looking to move in soon, or are you just starting to explore your options?", time: '0:24' },
      { speaker: 'prospect', text: "I'd like to move within the next thirty to forty five days. So I would love to tour this week if possible.", time: '0:32' },
      { speaker: 'ai', text: "We'd be happy to show you around this week, Jatin. Our tours run Monday through Saturday from ten a.m. to five p.m. Which day works best for you?", time: '0:40' },
      { speaker: 'prospect', text: "I am off this Thursday. Late morning would be perfect.", time: '0:52' },
      { speaker: 'ai', text: "We have openings at ten thirty and eleven fifteen on Thursday morning. Would you like me to reserve the ten thirty slot for your tour?", time: '0:57' },
      { speaker: 'prospect', text: "Yes. Ten thirty works.", time: '1:06' },
      { speaker: 'ai', text: "Perfect, Jatin. You're scheduled for a tour this Thursday at ten thirty a.m. Is the phone number you're calling from the best one to reach you?", time: '1:08' },
      { speaker: 'prospect', text: "Yes. Yes.", time: '1:18' },
      { speaker: 'ai', text: "Thanks for confirming, Jatin. Could you please provide the best email address to send your tour confirmation?", time: '1:20' },
      { speaker: 'prospect', text: "Yes. It's Jatin Chaudhry three two six at the rate gmail dot com.", time: '1:27' },
      { speaker: 'ai', text: "Got it, Jatin. Are there any must-have features you're looking for, like in-unit laundry, a balcony, reserved parking, or pet accommodations?", time: '1:33' },
      { speaker: 'prospect', text: "Yes. Definitely. In unit laundry, and a reserved parking.", time: '1:43' },
      { speaker: 'ai', text: "Thanks for sharing that, Jatin. Do you have any other preferences, such as a particular floor level, a view you'd like, or a budget range?", time: '1:48' },
      { speaker: 'prospect', text: "Yes. If it's possible, then I'd like to have a bedroom at first floor.", time: '2:00' },
      { speaker: 'ai', text: "Noted, Jatin—a first-floor one-bedroom with in-unit laundry and reserved parking. I'll make sure to highlight those options during your tour. To recap, you're booked for Thursday at ten thirty a.m.", time: '2:08' },
      { speaker: 'prospect', text: "Yes.", time: '2:27' },
      { speaker: 'ai', text: "Great, Jatin! You'll receive a confirmation email shortly with all the details. Thanks for choosing Park Village—we look forward to seeing you Thursday at ten thirty!", time: '2:29' }
    ]
  },
  {
    id: 'triage',
    title: 'Triage',
    icon: CheckCircle,
    description: 'Emergency lockout assistance',
    duration: '1:35',
    color: 'purple',
    audioUrl: '', // Google Drive: https://drive.google.com/uc?export=download&id=FILE_ID
    outcomes: [
      'Technician dispatched in 20 minutes',
      '$75 after-hours fee confirmed',
      'Issue reference #5394 provided'
    ],
    conversation: [
      { speaker: 'ai', text: "Hi, I'm Lily from Baker Street Property Management. How can I help you today?", time: '0:02' },
      { speaker: 'user', text: "Hi. This is Jatin. I have misplaced my keys, and I locked out my apartment door.", time: '0:08' },
      { speaker: 'ai', text: "I'm sorry to hear that, Jatin. Could you please confirm your unit number for me?", time: '0:15' },
      { speaker: 'user', text: "Yes. It's unit five zero six on the top floor.", time: '0:21' },
      { speaker: 'ai', text: "Thank you for confirming, Jatin. There is a seventy-five-dollar after-hours lockout fee. Is it okay to proceed with arranging assistance?", time: '0:25' },
      { speaker: 'user', text: "That's fine.", time: '0:35' },
      { speaker: 'ai', text: "Thanks for confirming, Jatin. One moment while I contact maintenance for you.", time: '0:37' },
      { speaker: 'ai', text: "Just checking in, Jatin—I'm reaching out to maintenance now and will update you shortly.", time: '0:53' },
      { speaker: 'user', text: "Great. Thanks.", time: '1:00' },
      { speaker: 'ai', text: "Robert, our after-hours technician, will arrive in about twenty minutes. He'll be wearing a crimson Baker Street Management shirt and will meet you at the main entrance. Does that work for you?", time: '1:01' },
      { speaker: 'user', text: "Yes. Yes.", time: '1:15' },
      { speaker: 'ai', text: "Is there anything else I can assist you with while you wait, Jatin?", time: '1:17' },
      { speaker: 'user', text: "No. That's all.", time: '1:21' },
      { speaker: 'ai', text: "Your issue reference number is five-three-nine-four. I'll text you now so you can reach me if anything changes. Thank you, Jatin—help is on the way! Have a good evening.", time: '1:24' }
    ]
  },
  {
    id: 'afterhours',
    title: 'After Hours',
    icon: Clock,
    description: 'Emergency lockout outside business hours',
    duration: '1:38',
    color: 'green',
    audioUrl: '', // Google Drive: https://drive.google.com/uc?export=download&id=FILE_ID
    outcomes: [
      'On-call technician dispatched immediately',
      'Resident safety confirmed',
      '24/7 support provided'
    ],
    conversation: [
      { speaker: 'ai', text: "Hi, I'm Lily. This is the After-Hours Maintenance Line for 28 Grand. How can I help you today?", time: '0:02' },
      { speaker: 'user', text: "I just stepped out to walk my dog and accidentally locked myself out. I don't have my keys or phone with me.", time: '0:12' },
      { speaker: 'ai', text: "I'm sorry to hear that you're locked out and without your keys or phone. Could you please tell me your name, your current location, and your unit number?", time: '0:20' },
      { speaker: 'user', text: "My name is Jatin Chaudhry, and I am at twenty eight Grand River Ave and my unit number is two zero four.", time: '0:31' },
      { speaker: 'ai', text: "Thank you, Jatin. Just to confirm, you're at 28 Grand River Ave, Unit 204, correct?", time: '0:39' },
      { speaker: 'user', text: "Yes.", time: '0:49' },
      { speaker: 'ai', text: "Are you safe where you are, and do you have a place to wait comfortably?", time: '0:49' },
      { speaker: 'user', text: "Yes. I am standing near the building.", time: '0:54' },
      { speaker: 'ai', text: "Thank you for confirming, Jatin. I'm notifying our on-call maintenance technician now to assist you with the lockout. Would you like me to stay on the line until help arrives?", time: '0:56' },
      { speaker: 'user', text: "No. That's okay. I'm fine.", time: '1:08' },
      { speaker: 'ai', text: "Understood, Jatin. Our technician is on the way to help you shortly. If anything changes or you need assistance again, please don't hesitate to call this number. Thank you for your patience.", time: '1:10' },
      { speaker: 'user', text: "Thank you. I appreciate the...", time: '1:27' },
      { speaker: 'ai', text: "You're very welcome, Jatin. Take care, and help will be there soon.", time: '1:32' }
    ]
  },
  {
    id: 'dispatch',
    title: 'Dispatch',
    icon: Home,
    description: 'Coordinating maintenance contractors',
    duration: '0:23',
    color: 'orange',
    audioUrl: '', // Google Drive: https://drive.google.com/uc?export=download&id=FILE_ID
    outcomes: [
      'Contractor dispatched within 90 minutes',
      'Tenant notified of arrival time',
      'Maintenance issue assigned'
    ],
    conversation: [
      { speaker: 'ai', text: "Hi, Jatin. This is Ava from Baker Street Property Management – do you have a moment?", time: '0:00' },
      { speaker: 'contractor', text: "Yes. Yes, I do.", time: '0:03' },
      { speaker: 'ai', text: "Thank you. We have received a report about a leaking tap at 22 Baker Street. When would you be available to come and take a look?", time: '0:05' },
      { speaker: 'contractor', text: "I can come today.", time: '0:10' },
      { speaker: 'ai', text: "Glad to hear it. Could you please specify a time window for your arrival today?", time: '0:12' },
      { speaker: 'contractor', text: "I will be there within one and a half hours.", time: '0:15' },
      { speaker: 'ai', text: "Perfect – so you will arrive within the next ninety minutes. I will inform the tenant right away. Thank you, Jatin. Have a great day!", time: '0:18' },
      { speaker: 'contractor', text: "You too.", time: '0:22' }
    ]
  }
]

export default function InteractiveCards() {
  const [activeScenario, setActiveScenario] = useState(scenarios[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  const handlePlayPause = () => {
    if (!activeScenario.audioUrl) {
      // If no audio file, simulate playing through messages
      setIsPlaying(!isPlaying)
      if (!isPlaying) {
        const interval = setInterval(() => {
          setCurrentTime(prev => {
            if (prev >= activeScenario.conversation.length - 1) {
              setIsPlaying(false)
              clearInterval(interval)
              return 0
            }
            return prev + 1
          })
        }, 3000)
      }
      return
    }

    // Handle actual audio playback - lazy load on demand
    if (!audio) {
      const newAudio = new Audio()
      newAudio.src = activeScenario.audioUrl
      newAudio.preload = 'none' // Don't preload, wait for user action
      setAudio(newAudio)
      
      newAudio.addEventListener('ended', () => {
        setIsPlaying(false)
        setCurrentTime(0)
      })
      
      newAudio.play()
      setIsPlaying(true)
    } else {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        audio.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
              <span className="!text-white">
                Experience ConversAI in action
              </span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
              Listen to real conversations handled by our AI operator across different scenarios
            </p>
          </motion.div>

          {/* Main Interactive Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative max-w-6xl mx-auto"
          >
            {/* Connected Container Design */}
            <div className="relative">
              {/* Tab Selector with Connected Design */}
              <div className="flex justify-center relative">
                <div className="inline-flex bg-[#0a0a0a] rounded-t-2xl p-2 border border-gray-900 border-b-0">
                  {scenarios.map((scenario) => (
                    <div key={scenario.id} className="relative">
                      <button
                        onClick={() => {
                          // Stop current audio if playing
                          if (audio) {
                            audio.pause()
                            audio.currentTime = 0
                          }
                          setActiveScenario(scenario)
                          setIsPlaying(false)
                          setCurrentTime(0)
                          setAudio(null) // Reset audio for new scenario
                        }}
                        className={`relative flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300 ${
                          activeScenario.id === scenario.id
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 !text-white font-medium shadow-lg z-10'
                            : 'text-gray-400 hover:!text-white hover:bg-gray-900/50'
                        }`}
                      >
                        <scenario.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{scenario.title}</span>
                      </button>
                      
                      {/* Connection Bridge for Active Tab */}
                      {activeScenario.id === scenario.id && (
                        <motion.div
                          layoutId="activeTabConnection"
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-gradient-to-b from-blue-600/50 via-purple-600/30 to-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4 }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Card Container - Connected to Tabs */}
              <div className="bg-[#0a0a0a] rounded-2xl rounded-t-none border border-gray-900 border-t-0 overflow-hidden -mt-px">

              {/* Active Scenario Content */}
              <div className="p-6 bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScenario.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        ease: [0.23, 1, 0.32, 1] // Custom easing for smooth "pour"
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: -20, 
                      scale: 0.95,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Streamlined Scenario Header */}
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-800/30">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center">
                          <activeScenario.icon className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold" style={{ color: '#ffffff' }}>
                            {activeScenario.title} Call
                          </h3>
                          <p className="text-xs text-gray-500">
                            {activeScenario.description}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={handlePlayPause}
                        className="group flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 !text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        {isPlaying ? (
                          <>
                            <PauseCircle className="w-4 h-4" />
                            <span className="text-sm">Pause</span>
                          </>
                        ) : (
                          <>
                            <PlayCircle className="w-4 h-4 group-hover:animate-pulse" />
                            <span className="text-sm">Play</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Conversation Display */}
                    <div className="relative bg-gradient-to-br from-[#050505] to-[#0a0a0a] rounded-2xl p-6 border border-gray-800/50 shadow-inner">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl" />
                        <div className="relative">
                        <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping"></div>
                          </div>
                          <span className="text-gray-300 text-sm font-medium">Live Conversation</span>
                          <span className="text-xs text-gray-500">• {activeScenario.duration}</span>
                        </div>
                        {isPlaying && (
                          <div className="flex items-center gap-2">
                            <div className="flex gap-0.5 items-center">
                              {[...Array(12)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="w-0.5 bg-white/40 rounded-full"
                                  animate={{
                                    height: [3, 12, 3],
                                  }}
                                  transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    delay: i * 0.08,
                                  }}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">Playing</span>
                          </div>
                        )}
                      </div>

                      {/* Messages */}
                      <div className="space-y-4 max-h-[400px] overflow-y-auto mb-6">
                        {activeScenario.conversation.map((message, index) => (
                          <motion.div
                            key={`${activeScenario.id}-${index}`}
                            initial={{ opacity: 0, y: 20, x: message.speaker === 'ai' ? -20 : 20 }}
                            animate={{ 
                              opacity: isPlaying && index > currentTime ? 0.3 : 1,
                              y: 0,
                              x: 0
                            }}
                            transition={{ 
                              duration: 0.4,
                              delay: index * 0.08,
                              ease: [0.23, 1, 0.32, 1]
                            }}
                            className={`flex gap-3 ${
                              message.speaker === 'ai' ? 'flex-row' : 'flex-row-reverse'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                              message.speaker === 'ai'
                                ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                                : 'bg-gray-700'
                            }`}>
                              {message.speaker === 'ai' ? (
                                <Bot className="w-5 h-5 !text-white" />
                              ) : (
                                <User className="w-5 h-5 !text-white" />
                              )}
                            </div>
                            <div className={`flex-1 max-w-[70%]`}>
                              <div className={`px-4 py-3 rounded-2xl ${
                                message.speaker === 'ai'
                                  ? 'bg-gray-800 text-gray-200'
                                  : 'bg-blue-600/20 !text-white border border-blue-600/30'
                              }`}>
                                <p className="text-sm leading-relaxed">{message.text}</p>
                              </div>
                              <p className="text-xs text-gray-500 mt-1 px-2">
                                {message.time}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Outcomes Section */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="border-t border-gray-800/50 pt-4 mt-4"
                      >
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-3">Actions Completed</p>
                        <div className="space-y-2">
                          {activeScenario.outcomes.map((outcome, index) => (
                            <motion.div
                              key={`${activeScenario.id}-outcome-${index}`}
                              initial={{ opacity: 0, x: -20, scale: 0.9 }}
                              animate={{ opacity: 1, x: 0, scale: 1 }}
                              transition={{ 
                                duration: 0.4,
                                delay: 0.5 + (index * 0.1),
                                ease: [0.23, 1, 0.32, 1]
                              }}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500/70" />
                              <span className="text-sm text-gray-300">{outcome}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            </div>
          </motion.div>

          {/* Bottom CTA*/}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-gray-500 mb-6 text-lg font-light">
              Experience the future of property management communication
            </p>
            <button className="px-8 py-3.5 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors text-sm">
              Try It Yourself
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
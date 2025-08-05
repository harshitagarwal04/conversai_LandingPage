'use client'

import { useRef, useState, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward } from 'lucide-react'
import { cn } from '@/lib/utils'

interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  title?: string
  description?: string
}

export function VideoPlayer({
  src,
  poster,
  className,
  autoPlay = false,
  muted = true,
  loop = true,
  controls = true,
  title,
  description
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(muted)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [volume, setVolume] = useState(1)
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => setCurrentTime(video.currentTime)
    const updateDuration = () => setDuration(video.duration)

    video.addEventListener('timeupdate', updateTime)
    video.addEventListener('loadedmetadata', updateDuration)

    return () => {
      video.removeEventListener('timeupdate', updateTime)
      video.removeEventListener('loadedmetadata', updateDuration)
    }
  }, [])

  const togglePlay = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause()
        } else {
          await videoRef.current.play()
        }
      } catch (error) {
        console.error('Error playing video:', error)
      }
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      setVolume(newVolume)
      setIsMuted(newVolume === 0)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
      if (isMuted) {
        setVolume(videoRef.current.volume || 1)
      }
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  const skip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleMouseMove = () => {
    setShowControls(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false)
    }, 3000)
  }

  return (
    <div className={cn("relative group rounded-lg overflow-hidden bg-black", className)}>
      {title && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          {description && <p className="text-muted-foreground mt-1">{description}</p>}
        </div>
      )}
      
      <div 
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isPlaying && setShowControls(false)}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={isMuted}
          loop={loop}
          playsInline
          className="w-full h-auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedData={() => setIsLoading(false)}
          onWaiting={() => setIsLoading(true)}
          onPlaying={() => setIsLoading(false)}
          onClick={togglePlay}
        />
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
        
        {/* Custom Controls */}
        {controls && (
          <div className={cn(
            "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300",
            showControls ? "opacity-100" : "opacity-0"
          )}>
            {/* Progress Bar */}
            <div className="mb-4">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer hover:[&::-webkit-slider-thumb]:scale-125 [&::-webkit-slider-thumb]:transition-transform"
              />
            </div>
            
            {/* Controls Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Play/Pause */}
                <button
                  onClick={togglePlay}
                  className="text-white hover:scale-110 transition-transform"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                
                {/* Skip buttons */}
                <button
                  onClick={() => skip(-10)}
                  className="text-white hover:scale-110 transition-transform"
                >
                  <SkipBack className="w-4 h-4" />
                </button>
                <button
                  onClick={() => skip(10)}
                  className="text-white hover:scale-110 transition-transform"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
                
                {/* Volume */}
                <button
                  onClick={toggleMute}
                  className="text-white hover:scale-110 transition-transform"
                >
                  {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                />
                
                {/* Time */}
                <span className="text-white text-sm ml-2">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
              
              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                className="text-white hover:scale-110 transition-transform"
              >
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
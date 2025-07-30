'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";
import { MagneticButton, ScrollReveal } from './smooth-scroll';
import eventsList from '@/app/events/eventsList'; // Assuming you have an events data file

export default function EventsSection() {
  const [eventIndex, setEventIndex] = useState(0);

  const nextEvent = () => {
    const maxIndex = Math.max(0, eventsList.length - Math.floor(window.innerWidth / 320))
    setEventIndex(prev => Math.min(prev + 1, maxIndex))
  }
  
  const prevEvent = () => {
    setEventIndex(prev => Math.max(prev - 1, 0))
  }
  
  // Optional: Add keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevEvent()
      } else if (e.key === 'ArrowRight') {
        nextEvent()
      }
    }
  
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [eventIndex])

    return (
    <div className='relative'>
        <div className='overflow-hidden'>
        <div className="flex space-x-8">
          {eventsList.map((event, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.2}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 min-w-[300px] h-full">
                <CardHeader>
                  <div className="flex items-center space-x-2 text-teal-600 mb-2">
                    <CalendarDays className="h-5 w-5" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {event.description}
                  </CardDescription>
                  <MagneticButton className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                    Learn More
                  </MagneticButton>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons and indicators */}

      <div className="flex justify-center items-center space-x-4 mt-8">
        <button
          onClick={prevEvent}
          disabled={eventIndex === 0}
          className="p-3 rounded-full bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-110"
          aria-label="Previous event"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex space-x-2">
          {eventsList.map((_, index) => (
            <button
              key={index}
              onClick={() => setEventIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === eventIndex ? 'bg-teal-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to event ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={nextEvent}
          disabled={eventIndex >= eventsList.length - Math.floor(window.innerWidth / 320)} // Calcualtes how many cards can fit on screen at one time and length of eventsList
          className="p-3 rounded-full bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-110"
          aria-label="Next event"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
        
    );
}
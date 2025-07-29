"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { CalendarDays, Users, Trophy, GraduationCap, MapPin, Mail, Phone, School, BookOpen, Briefcase } from "lucide-react"
import { 
  ParallaxText, 
  ScrollReveal, 
  FloatingText, 
  MagneticButton, 
  StaggerText, 
  ScrollProgress,
  HorizontalScroll 
} from "@/components/smooth-scroll"

export default function SHPELanding() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 1)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const programs = [
    {
      title: "Industry Partnerships",
      description: "Direct connections with Orange County's top engineering companies including Boeing, Raytheon, and innovative startups.",
      icon: <Briefcase className="h-8 w-8" />,
      color: "bg-blue-500"
    },
    {
      title: "Academic Excellence",
      description: "Tutoring, study groups, and academic support tailored to CSUF's engineering curriculum and faculty.",
      icon: <Trophy className="h-8 w-8" />,
      color: "bg-green-500"
    },
    {
      title: "Community Impact",
      description: "K-12 STEM outreach in Fullerton and Orange County schools to inspire the next generation of engineers.",
      icon: <Users className="h-8 w-8" />,
      color: "bg-purple-500"
    }
  ]

  const stats = [
    { number: 250, label: "CSUF Chapter Members", suffix: "+" },
    { number: 35, label: "Partner Companies", suffix: "+" },
    { number: 8, label: "Years at CSUF", suffix: "" },
    { number: 92, label: "Graduate Rate", suffix: "%" }
  ]

  const leadership = [
    {
      name: "David Monterrosa",
      role: "President  |  SHPE",
      image: "/placeholder-user.jpg",
      bio: "Electrical Engineering Senior"
    },
    {
      name: "Jeffery Camacho-Osorio",
      role: "Internal Vice President  |  SHPE",
      image: "/placeholder-user.jpg",
      bio: "Mechanical Engineering Senior"
    },
    {
      name: "Ruben Marquez",
      role: "External Vice President  |  SHPE",
      image: "/placeholder-user.jpg",
      bio: "Computer Engineering Sophomore"
    },
    {
      name: "Ian Nguyen",
      role: "Secretary  |  SHPE",
      image: "/placeholder-user.jpg",
      bio: "Civil Engineering Senior"
    },
    {
      name: "Matthew Flores",
      role: "Treasurer  |  SHPE",
      image: "/placeholder-user.jpg",
      bio: "Mechanical Engineering Senior"
    },
    {
      name: "Estrella Rivera",
      role: "Director of Events  |  SHPE",
      image: "/placeholder-user.jpg",
      bio: "Mechanical Engineering Junior"
    },
    {
      name: "Emmanuel Barriga",
      role: "Co-Director of Events  |  SHPE",
      image: "/placeholder-user.jpg",
      bio: "Civil Engineering Senior"
    },
    {
      name: "Adrian Vazquez",
      role: "Director of Marketing/Webmaster  |  SHPE",
      image: "/placeholder-user.jpg",
      bio: "Computer Science Senior"
    },
    {
      name: "Michelle Pineda",
      role: "Director  |  SHPEtinas",
      image: "/placeholder-user.jpg",
      bio: "Computer Science Senior"
    },
    {
      name: "Brianna Bahena",
      role: "Co-Director  |  SHPEtinas",
      image: "/placeholder-user.jpg",
      bio: "Computer Science Sophomore"
    },
    {
      name: "Cristal Santos",
      role: "Secretary  |  SHPEtinas",
      image: "/placeholder-user.jpg",
      bio: "Computer Science Senior"
    },
    {
      name: "Jaylin Mai",
      role: "Treasure  |  SHPEtinas",
      image: "/placeholder-user.jpg",
      bio: "Electrical Engineering Senior"
    },
    {
      name: "Daisy Martinez",
      role: "Historian/Public Relations  |  SHPEtinas",
      image: "/placeholder-user.jpg",
      bio: "Computer Science Senior"
    },
    
  ]

  const events = [
    {
      title: "CSUF Engineering Career Fair",
      date: "February 20, 2024",
      location: "Titan Student Union, CSUF",
      description: "Connect with Orange County employers and explore career opportunities with our industry partners."
    },
    {
      title: "Noche de Ciencias Familiar",
      date: "March 8, 2024",
      location: "CSUF Engineering Building",
      description: "Family science night bringing STEM education to the Fullerton community."
    },
    {
      title: "Monthly Tech Talk Series",
      date: "Every 2nd Friday",
      location: "CSUF Campus & Virtual",
      description: "Industry experts from Orange County tech companies share insights on latest technologies."
    }
  ]

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      
      {/* Floating Background Text */}
      <FloatingText text="ENGINEERING • EXCELLENCE • COMMUNITY •" className="fixed top-1/4 z-0 text-black/80" speed={0.5} />
      <FloatingText text="• INNOVATION • LEADERSHIP • DIVERSITY" className="fixed top-3/4 z-0 text-black/80" speed={0.8} reverse />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-800 text-white relative overflow-hidden">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6 relative z-10">
          <div className="text-2xl font-bold text-white">
            <Link href="/">
              SHPE
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-orange-300 transition-colors">
              About
            </Link>
            <Link href="#programs" className="hover:text-orange-300 transition-colors">
              Programs
            </Link>
            <Link href="#events" className="hover:text-orange-300 transition-colors">
              Events
            </Link>
            <Link href="#leadership" className="hover:text-orange-300 transition-colors">
              Leadership
            </Link>
            <Link href="#contact" className="hover:text-orange-300 transition-colors">
              Contact
            </Link>
          </div>
          <Button variant="outline" className="border-white text-teal-800 hover:bg-teal-600 hover:text-white">
            Join Now
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center min-h-[80vh] relative">
          {/* Rotating Logo with Curved Text */}
          <div className="relative w-96 h-96 mb-16">
            <div className="absolute inset-0 w-full h-full" style={{ transform: `rotate(${rotation}deg)` }}>
              <svg className="w-full h-full" viewBox="0 0 384 384">
                <defs>
                  <path id="circle" d="M 192, 192 m -140, 0 a 140,140 0 1,1 280,0 a 140,140 0 1,1 -280,0" />
                </defs>
                <text className="fill-white text-sm font-medium tracking-wider">
                  <textPath href="#circle" startOffset="0%">
                    LEADING HISPANICS IN STEM • EMPOWERING FUTURE ENGINEERS • BUILDING COMMUNITY •
                  </textPath>
                </text>
              </svg>
            </div>

            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transform: `rotate(${rotation * 0.5}deg)` }}
            >
              <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <Image src="/shpe-logo.png" alt="SHPE Logo" width={160} height={100} className="object-contain" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">SHPE</h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <h2 className="text-2xl md:text-3xl font-light text-orange-300 tracking-wide">
                SOCIETY OF HISPANIC PROFESSIONAL ENGINEERS
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.6}>
              <div className="mt-4 flex items-center justify-center space-x-2 text-white/80">
                <School className="h-6 w-6" />
                <span className="text-lg font-medium">Cal State Fullerton Chapter</span>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.8}>
            <div className="mt-8 text-center max-w-2xl">
              <p className="text-lg text-white/90 leading-relaxed">
                Empowering Hispanic engineers and scientists at California State University, Fullerton to achieve their full potential 
                while contributing to a diverse and inclusive STEM workforce in Orange County and beyond
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={1.0}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a href="https://discord.gg/cXNeAGzy" target="_blank" rel="noopener noreferrer">
                <MagneticButton className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Become a Member
                </MagneticButton>
              </a>
              
              <MagneticButton className="border border-white text-white hover:bg-white hover:text-teal-800 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-orange-300 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-32 w-2 h-2 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border border-white/20 rotate-45 opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border border-orange-400/30 rotate-12 opacity-40"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <ParallaxText speed={-0.3} className="absolute top-10 left-0 w-full">
          <FloatingText text="EXCELLENCE • INNOVATION • LEADERSHIP •" className="text-gray-100/20" />
        </ParallaxText>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <StaggerText 
                text="About SHPE" 
                className="text-4xl font-bold text-gray-900 mb-4 justify-center"
              />
              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Founded in 1974, SHPE has been at the forefront of empowering Hispanic professionals in STEM fields,
                  creating pathways to success and building stronger communities.
                </p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" delay={0.2}>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  SHPE changes lives by empowering the Hispanic community to realize their fullest potential and to impact 
                  the world through STEM awareness, access, support and professional development.
                </p>
                <h3 className="text-2xl font-semibold mb-6">Our Vision</h3>
                <p className="text-gray-700">
                  SHPE's vision is a world where Hispanics are highly valued and influential as the leading innovators, 
                  scientists, mathematicians and engineers.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.4}>
              <div className="relative">
                <ParallaxText speed={0.2}>
                  <Image 
                    src="/placeholder.png"
                    alt="SHPE Community" 
                    width={500} 
                    height={400} 
                    className="rounded-lg shadow-lg"
                  />
                </ParallaxText>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CSUF Specific Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Proudly Serving Cal State Fullerton</h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Located in the heart of Orange County, our CSUF chapter connects students with the thriving tech and engineering industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <School className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Engineering Excellence</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-orange-100">
                  CSUF's College of Engineering & Computer Science provides world-class education with faculty engaged in cutting-edge research
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Orange County Hub</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-orange-100">
                  Strategic location near major tech companies including Boeing, Raytheon, and countless startups in the region
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Diverse Community</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-orange-100">
                  CSUF is recognized as one of the most diverse universities in the nation, with 40% Hispanic/Latino enrollment
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-teal-50 relative overflow-hidden">
        <ParallaxText speed={-0.2} className="absolute top-0 left-0 w-full opacity-10">
          <FloatingText text="STATISTICS • DATA • GROWTH • SUCCESS •" />
        </ParallaxText>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <StaggerText 
                text="Our Impact" 
                className="text-4xl font-bold text-gray-900 mb-4 justify-center"
              />
              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-xl text-gray-600">Numbers that showcase our commitment to excellence</p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2 transform transition-transform group-hover:scale-110">
                    <AnimatedCounter 
                      end={stat.number} 
                      duration={2500}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white relative overflow-hidden">
        <FloatingText text="PROGRAMS • SUCCESS • INNOVATION •" className="absolute top-20 opacity-5" speed={0.3} />
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <StaggerText 
                text="Our Programs" 
                className="text-4xl font-bold text-gray-900 mb-4 justify-center"
              />
              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-xl text-gray-600">Comprehensive support for every stage of your STEM journey</p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.2} className="h-full">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${program.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 transition-transform duration-300 hover:scale-110`}>
                      {program.icon}
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {program.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-gray-50 relative overflow-hidden">
        <ParallaxText speed={0.1} className="absolute inset-0 opacity-5">
          <FloatingText text="LEADERSHIP • EXCELLENCE • DEDICATION •" />
        </ParallaxText>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <StaggerText 
                text="Leadership Team" 
                className="text-4xl font-bold text-gray-900 mb-4 justify-center"
              />
              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-xl text-gray-600">Meet the dedicated professionals leading our chapter</p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <CardHeader>
                    <Avatar className="w-24 h-24 mx-auto mb-4 transition-transform group-hover:scale-110">
                      <AvatarImage src={leader.image} alt={leader.name} />
                      <AvatarFallback>{leader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">{leader.name}</CardTitle>
                    <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                      {leader.role}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {leader.bio}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white relative overflow-hidden">
        <FloatingText text="EVENTS • NETWORKING • GROWTH •" className="absolute bottom-10 opacity-5" speed={0.4} reverse />
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <StaggerText 
                text="Upcoming Events" 
                className="text-4xl font-bold text-gray-900 mb-4 justify-center"
              />
              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-xl text-gray-600">Join us for networking, learning, and professional growth</p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          
          <HorizontalScroll className="pb-8">
            <div className="flex space-x-8">
              {events.map((event, index) => (
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
          </HorizontalScroll>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-teal-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-teal-100">Ready to join our community? We'd love to hear from you</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-orange-400" />
                  <span>csufshpe@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <School className="h-6 w-6 text-orange-400" />
                  <span>California State University, Fullerton</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-orange-400" />
                  <span>800 N State College Blvd, Fullerton, CA</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="border-white text-teal-900 hover:bg-teal-900 hover:text-white">
                    LinkedIn
                  </Button>
                  <a href="https://www.instagram.com/shpe_csuf/?next=%2F" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="border-white text-teal-900 hover:bg-teal-900 hover:text-white">
                      Instagram
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/70" />
                  <Input placeholder="Last Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/70" />
                </div>
                <Input placeholder="Email" type="email" className="bg-white/10 border-white/20 text-white placeholder:text-white/70" />
                <Input placeholder="Subject" className="bg-white/10 border-white/20 text-white placeholder:text-white/70" />
                <Textarea 
                  placeholder="Your message" 
                  rows={5} 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SHPE</h3>
              <p className="text-gray-400">
                Empowering Hispanic professionals in STEM since 1974.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#programs" className="hover:text-white transition-colors">Programs</Link></li>
                <li><Link href="#events" className="hover:text-white transition-colors">Events</Link></li>
                <li><Link href="#leadership" className="hover:text-white transition-colors">Leadership</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Scholarships</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Career Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Mentorship</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Newsletter</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>csufshpe@gmail.com</li>
                <li>Cal State Fullerton</li>
                <li>800 N State College Blvd</li>
                <li>Fullerton, CA 92831</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Society of Hispanic Professional Engineers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
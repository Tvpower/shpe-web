import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  CalendarDays, 
  MapPin, 
  Clock, 
  Users, 
  Ticket,
  Camera,
  Award,
  Network,
  BookOpen,
  Briefcase
} from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "SHPE National Convention 2024",
      date: "November 15-17, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Los Angeles Convention Center",
      type: "Conference",
      description: "The largest gathering of Hispanic STEM professionals in the country. Three days of networking, workshops, career fair, and keynote presentations.",
      image: "/placeholder.jpg",
      attendees: "3,000+",
      price: "$299",
      features: ["Career Fair", "Technical Workshops", "Networking Events", "Keynote Speakers"],
      status: "Registration Open"
    },
    {
      title: "Engineering Career Fair",
      date: "February 20, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "University of California, Davis",
      type: "Career Fair",
      description: "Connect with top employers and explore exciting career opportunities in engineering and technology.",
      image: "/placeholder.jpg",
      attendees: "500+",
      price: "Free",
      features: ["50+ Companies", "On-site Interviews", "Resume Reviews", "Professional Headshots"],
      status: "Registration Open"
    },
    {
      title: "Leadership Development Workshop",
      date: "March 8, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Virtual Event",
      type: "Workshop",
      description: "Intensive workshop focused on developing leadership skills for STEM professionals.",
      image: "/placeholder.jpg",
      attendees: "200+",
      price: "$75",
      features: ["Interactive Sessions", "Peer Networking", "Leadership Assessment", "Action Planning"],
      status: "Early Bird"
    },
    {
      title: "Monthly Tech Talk: AI in Healthcare",
      date: "Every 2nd Friday",
      time: "6:00 PM - 7:30 PM",
      location: "Hybrid (In-person & Virtual)",
      type: "Tech Talk",
      description: "Industry experts share insights on artificial intelligence applications in healthcare.",
      image: "/placeholder.jpg",
      attendees: "150+",
      price: "Free",
      features: ["Expert Speakers", "Q&A Session", "Networking", "Recording Available"],
      status: "Ongoing"
    }
  ]

  const pastEvents = [
    {
      title: "SHPE National Convention 2023",
      date: "November 2023",
      location: "Salt Lake City, UT",
      attendees: "2,800",
      highlights: "Largest attendance in chapter history, 60+ companies at career fair"
    },
    {
      title: "Noche de Ciencias Family Night",
      date: "October 2023",
      location: "Multiple Locations",
      attendees: "1,200+",
      highlights: "15 family science nights across the region, 300+ families participated"
    },
    {
      title: "Summer Engineering Camp",
      date: "July 2023",
      location: "UC Davis Campus",
      attendees: "80",
      highlights: "Week-long intensive program for high school students"
    }
  ]

  const eventTypes = [
    {
      type: "Conferences",
      icon: <Users className="h-8 w-8" />,
      description: "Large-scale events bringing together professionals nationwide",
      count: "3-5 annually"
    },
    {
      type: "Career Fairs",
      icon: <Briefcase className="h-8 w-8" />,
      description: "Direct connections with employers and career opportunities",
      count: "15+ annually"
    },
    {
      type: "Workshops",
      icon: <BookOpen className="h-8 w-8" />,
      description: "Skill-building sessions and professional development",
      count: "25+ annually"
    },
    {
      type: "Networking",
      icon: <Network className="h-8 w-8" />,
      description: "Professional mixers and community building events",
      count: "50+ annually"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header variant="page" />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Events & Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connect, learn, and grow with the Hispanic STEM community through our diverse range of events and programs.
          </p>
        </div>
      </section>

      {/* Event Types Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Events</h2>
            <p className="text-xl text-gray-600">Diverse opportunities for every stage of your career</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((eventType, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mx-auto mb-4">
                    {eventType.icon}
                  </div>
                  <CardTitle className="text-xl">{eventType.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {eventType.description}
                  </CardDescription>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    {eventType.count}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow overflow-hidden">
                    <div className="relative h-48">
                      <Image 
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge 
                          variant="secondary" 
                          className={`${
                            event.status === 'Registration Open' ? 'bg-green-100 text-green-800' :
                            event.status === 'Early Bird' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {event.status}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-white/90 text-gray-800">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <CalendarDays className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <CardDescription className="text-gray-700 mb-4">
                        {event.description}
                      </CardDescription>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-teal-600" />
                          <span>{event.attendees} attendees</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Ticket className="h-4 w-4 text-orange-600" />
                          <span>{event.price}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Event Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">
                        Register Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="past">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pastEvents.map((event, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center space-x-2 mb-1">
                          <CalendarDays className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-teal-600">{event.attendees}</div>
                        <div className="text-sm text-gray-500">attendees</div>
                      </div>
                      <CardDescription className="text-gray-700">
                        {event.highlights}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Event Calendar CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay Up to Date</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Never miss an event! Subscribe to our calendar and get notifications about upcoming events and programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Subscribe to Calendar
            </Button>
            <Button size="lg" variant="outline">
              Download Event App
            </Button>
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Host an Event</h2>
              <p className="text-xl text-teal-100 mb-8">
                Interested in organizing a SHPE event in your area? We provide resources, 
                support, and guidance to help you create impactful events for the community.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Event planning resources and templates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Marketing and promotional support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Access to speaker network</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Funding opportunities</span>
                </li>
              </ul>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Become an Event Host
              </Button>
            </div>
            <div className="relative">
              <Image 
                src="/placeholder.jpg"
                alt="Event hosting"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 
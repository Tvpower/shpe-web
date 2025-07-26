import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  GraduationCap, 
  Users, 
  Trophy, 
  Briefcase, 
  BookOpen, 
  Lightbulb,
  Heart,
  Globe,
  Rocket,
  Target
} from "lucide-react"

export default function ProgramsPage() {
  const programs = [
    {
      title: "Professional Development",
      description: "Comprehensive career advancement programs designed to help members excel in their professional journey.",
      icon: <Briefcase className="h-8 w-8" />,
      color: "bg-blue-500",
      features: [
        "Leadership training workshops",
        "Professional mentorship matching",
        "Career coaching sessions",
        "Networking events",
        "Resume and interview preparation"
      ],
      targetAudience: "Working Professionals"
    },
    {
      title: "Academic Excellence",
      description: "Supporting students throughout their academic journey with tutoring, study groups, and academic resources.",
      icon: <GraduationCap className="h-8 w-8" />,
      color: "bg-green-500",
      features: [
        "Peer tutoring programs",
        "Study groups and workshops",
        "Academic scholarships",
        "STEM outreach programs",
        "Graduate school preparation"
      ],
      targetAudience: "Students"
    },
    {
      title: "Community Outreach",
      description: "K-12 STEM education initiatives and community service projects to inspire the next generation.",
      icon: <Heart className="h-8 w-8" />,
      color: "bg-purple-500",
      features: [
        "K-12 school visits",
        "Science fair judging",
        "Engineering camp volunteers",
        "Community service projects",
        "Parent education workshops"
      ],
      targetAudience: "Community"
    },
    {
      title: "Innovation & Entrepreneurship",
      description: "Supporting Hispanic entrepreneurs and innovators in STEM fields with resources and networks.",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "bg-orange-500",
      features: [
        "Startup incubation support",
        "Innovation competitions",
        "Entrepreneurship workshops",
        "Investor networking",
        "Patent and IP guidance"
      ],
      targetAudience: "Entrepreneurs"
    }
  ]

  const initiatives = [
    {
      title: "SHPE Jr.",
      description: "Introducing K-12 students to STEM careers through hands-on activities and mentorship.",
      icon: <BookOpen className="h-6 w-6" />,
      impact: "5,000+ students reached annually"
    },
    {
      title: "Noche de Ciencias",
      description: "Family science nights that engage parents and children in STEM learning together.",
      icon: <Users className="h-6 w-6" />,
      impact: "200+ events nationwide"
    },
    {
      title: "Graduate Plus",
      description: "Supporting graduate students and recent graduates in their transition to professional careers.",
      icon: <Trophy className="h-6 w-6" />,
      impact: "95% graduate placement rate"
    },
    {
      title: "Global Outreach",
      description: "International programs connecting Hispanic STEM professionals across borders.",
      icon: <Globe className="h-6 w-6" />,
      impact: "15+ countries participating"
    }
  ]

  const scholarships = [
    {
      name: "SHPE Foundation Scholarship",
      amount: "$1,000 - $5,000",
      criteria: "Undergraduate and graduate students in STEM fields",
      deadline: "April 1st"
    },
    {
      name: "Corporate Partner Scholarships",
      amount: "$2,500 - $10,000",
      criteria: "Students with demonstrated financial need and academic excellence",
      deadline: "March 15th"
    },
    {
      name: "Leadership Development Award",
      amount: "$1,500",
      criteria: "Students showing exceptional leadership potential",
      deadline: "May 1st"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header variant="page" />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive support for every stage of your STEM journey, from K-12 through professional development.
          </p>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Programs</h2>
            <p className="text-xl text-gray-600">Empowering success at every level</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-16 h-16 ${program.color} rounded-full flex items-center justify-center text-white`}>
                      {program.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{program.title}</CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {program.targetAudience}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-lg mb-6">
                    {program.description}
                  </CardDescription>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Program Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Initiatives */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Initiatives</h2>
            <p className="text-xl text-gray-600">Targeted programs making a difference in our community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mx-auto mb-4">
                    {initiative.icon}
                  </div>
                  <CardTitle className="text-lg">{initiative.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {initiative.description}
                  </CardDescription>
                  <div className="text-sm font-semibold text-teal-600">
                    {initiative.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Scholarships & Awards</h2>
            <p className="text-xl text-gray-600">Financial support to help you achieve your educational goals</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {scholarships.map((scholarship, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">{scholarship.name}</CardTitle>
                    <div className="text-3xl font-bold text-teal-600 text-center">
                      {scholarship.amount}
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">{scholarship.criteria}</p>
                    <div className="text-sm font-semibold text-orange-600">
                      Deadline: {scholarship.deadline}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Apply for Scholarships
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real impact from our programs</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/placeholder-user.jpg"
                    alt="Success Story"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Maria Santos</CardTitle>
                    <p className="text-gray-500">Software Engineer at Google</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  "SHPE's mentorship program connected me with industry professionals who guided 
                  my career path. Today, I'm working at my dream company and giving back as a mentor myself."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/placeholder-user.jpg"
                    alt="Success Story"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Carlos Rodriguez</CardTitle>
                    <p className="text-gray-500">Aerospace Engineer</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  "The SHPE scholarship made my engineering degree possible. Without that financial 
                  support, I wouldn't be where I am today, working on cutting-edge aerospace projects."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/placeholder-user.jpg"
                    alt="Success Story"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Ana Martinez</CardTitle>
                    <p className="text-gray-500">Startup Founder</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  "SHPE's entrepreneurship program provided the network and resources I needed to 
                  launch my tech startup. We've now raised $2M in funding!"
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Involved?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Hispanic professionals and students making a difference in STEM fields.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Become a Member
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-900">
              Volunteer with Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 
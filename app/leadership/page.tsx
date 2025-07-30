import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Check, 
  Star, 
  Crown, 
  Users, 
  Award,
  Network,
  BookOpen,
  Briefcase,
  Heart,
  Shield
} from "lucide-react"

export default function LeadershipPage() {
  const membershipTiers = [
    {
      name: "Student Member",
      price: "$25",
      period: "per year",
      description: "Perfect for undergraduate and graduate students pursuing STEM degrees",
      icon: <BookOpen className="h-8 w-8" />,
      color: "border-blue-500",
      popular: false,
      benefits: [
        "Access to all SHPE events",
        "Student scholarship opportunities",
        "Career fair participation",
        "Academic tutoring programs",
        "Study groups and workshops",
        "Mentorship matching",
        "Resume building resources",
        "Interview preparation"
      ]
    },
    {
      name: "Professional Member",
      price: "$75",
      period: "per year",
      description: "For working professionals in STEM fields looking to advance their careers",
      icon: <Briefcase className="h-8 w-8" />,
      color: "border-teal-500",
      popular: true,
      benefits: [
        "All Student Member benefits",
        "Professional development workshops",
        "Leadership training programs",
        "Industry networking events",
        "Continuing education credits",
        "Career coaching sessions",
        "Executive mentorship access",
        "Speaking opportunities",
        "Board nomination eligibility"
      ]
    },
    {
      name: "Corporate Partner",
      price: "$500+",
      period: "per year",
      description: "Organizations supporting SHPE's mission and connecting with Hispanic talent",
      icon: <Crown className="h-8 w-8" />,
      color: "border-orange-500",
      popular: false,
      benefits: [
        "All Professional Member benefits",
        "Career fair booth space",
        "Company branding at events",
        "Access to resume database",
        "Campus recruiting opportunities",
        "Sponsored event opportunities",
        "Diversity consulting services",
        "Executive networking access",
        "Custom partnership packages"
      ]
    }
  ]

  const memberBenefits = [
    {
      icon: <Network className="h-6 w-6" />,
      title: "Professional Networking",
      description: "Connect with 15,000+ Hispanic STEM professionals nationwide"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Career Development",
      description: "Access workshops, mentorship, and leadership development programs"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Impact",
      description: "Participate in K-12 outreach and community service initiatives"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Recognition Programs",
      description: "Opportunities for awards, scholarships, and professional recognition"
    }
  ]

  const testimonials = [
    {
      name: "Elena Rodriguez",
      role: "Software Engineering Manager",
      company: "Microsoft",
      quote: "SHPE membership opened doors I never knew existed. The networking opportunities and mentorship I received were invaluable to my career growth."
    },
    {
      name: "Miguel Santos",
      role: "Mechanical Engineer",
      company: "Tesla",
      quote: "Being part of SHPE gave me the confidence and community I needed to excel in my engineering career. The professional development resources are top-notch."
    },
    {
      name: "Carmen Valdez",
      role: "PhD Student",
      company: "Stanford University",
      quote: "The SHPE scholarship and academic support helped me pursue my doctoral degree. I'm now researching renewable energy solutions for underserved communities."
    }
  ]

  return (
    <div className="min-h-screen">
      <Header variant="page" />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Join SHPE</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Become part of the largest association of Hispanic STEM professionals in the United States. 
            Together, we're building a stronger, more diverse future.
          </p>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join SHPE?</h2>
            <p className="text-xl text-gray-600">Unlock opportunities and make lasting connections</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {memberBenefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Membership Options</h2>
            <p className="text-xl text-gray-600">Choose the membership that fits your needs</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <Card key={index} className={`border-2 ${tier.color} ${tier.popular ? 'ring-4 ring-teal-100' : ''} shadow-xl relative`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-teal-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    tier.color.includes('blue') ? 'bg-blue-100 text-blue-600' :
                    tier.color.includes('teal') ? 'bg-teal-100 text-teal-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    {tier.icon}
                  </div>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-gray-900">
                    {tier.price}
                    <span className="text-base font-normal text-gray-500">/{tier.period}</span>
                  </div>
                  <CardDescription className="text-gray-600">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full ${
                    tier.popular 
                      ? 'bg-teal-600 hover:bg-teal-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}>
                    Join Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply for Membership</h2>
              <p className="text-xl text-gray-600">Start your journey with SHPE today</p>
            </div>
            
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-center">Membership Application</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  
                  <div>
                    <Label htmlFor="membershipType">Membership Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select membership type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student Member - $25/year</SelectItem>
                        <SelectItem value="professional">Professional Member - $75/year</SelectItem>
                        <SelectItem value="corporate">Corporate Partner - $500+/year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="education">Education Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="highschool">High School</SelectItem>
                        <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                        <SelectItem value="masters">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="field">Field of Study/Work</Label>
                    <Input id="field" placeholder="e.g., Computer Science, Mechanical Engineering" />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Current Company/University</Label>
                    <Input id="company" placeholder="Enter your current organization" />
                  </div>
                  
                  <div>
                    <Label htmlFor="motivation">Why do you want to join SHPE?</Label>
                    <Textarea 
                      id="motivation" 
                      placeholder="Tell us about your goals and how SHPE can help you achieve them"
                      rows={4}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the SHPE terms and conditions and code of conduct
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to SHPE newsletter and event updates
                    </Label>
                  </div>
                  
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-6">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
            <p className="text-xl text-gray-600">Real stories from our community</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.role} at {testimonial.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Do I need to be Hispanic to join SHPE?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  No! SHPE welcomes anyone who supports our mission of empowering Hispanic professionals in STEM. 
                  We believe diversity of thought and background strengthens our community.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Can I change my membership type later?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Yes! You can upgrade or change your membership type at any time. Contact our membership team 
                  for assistance with transitions between student and professional memberships.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">What if I'm not currently in a STEM field but interested?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  SHPE supports career transitions and welcomes individuals exploring STEM fields. 
                  Our programs can help you navigate your path into STEM careers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 
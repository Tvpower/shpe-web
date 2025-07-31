import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LeadershipList from "@/components/LeadershipList"
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
          <h1 className="text-5xl font-bold mb-6">Leadership</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet the faces behind SHPE's mission to empower Hispanic professionals in STEM.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <LeadershipList/>
        </div>
      </section>
      <Footer />
    </div>
  )
} 
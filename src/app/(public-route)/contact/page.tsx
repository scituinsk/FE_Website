import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Instagram, Twitter, Github, Facebook, Calendar, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with SCIT UIN Sunan Kalijaga for partnerships, collaborations, or any inquiries about our community.",
};

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Send us an email for general inquiries",
      primary: "info@scit-uinsuka.id",
      secondary: "partnership@scit-uinsuka.id",
      action: "mailto:info@scit-uinsuka.id",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Call us during office hours",
      primary: "+62 274 540 971",
      secondary: "Mon - Fri, 9:00 - 17:00 WIB",
      action: "tel:+62274540971",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Chat with us for quick responses",
      primary: "+62 812 3456 7890",
      secondary: "Available 24/7",
      action: "https://wa.me/6281234567890",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come to our office",
      primary: "Fakultas Sains dan Teknologi",
      secondary: "UIN Sunan Kalijaga, Yogyakarta",
      action: "https://maps.google.com/maps?q=UIN+Sunan+Kalijaga+Yogyakarta",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      username: "@scit_uinsuka",
      url: "https://instagram.com/scit_uinsuka",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: Twitter,
      name: "Twitter",
      username: "@scit_uinsuka",
      url: "https://twitter.com/scit_uinsuka",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
    },
    {
      icon: Github,
      name: "GitHub",
      username: "scit-uinsuka",
      url: "https://github.com/scit-uinsuka",
      color: "bg-gradient-to-br from-gray-700 to-gray-900",
    },
    {
      icon: Facebook,
      name: "Facebook",
      username: "SCIT UIN Suka",
      url: "https://facebook.com/scit.uinsuka",
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
  ];

  const officeHours = [
    { day: "Monday", hours: "09:00 - 17:00" },
    { day: "Tuesday", hours: "09:00 - 17:00" },
    { day: "Wednesday", hours: "09:00 - 17:00" },
    { day: "Thursday", hours: "09:00 - 17:00" },
    { day: "Friday", hours: "09:00 - 16:00" },
    { day: "Saturday", hours: "09:00 - 12:00" },
    { day: "Sunday", hours: "Closed" },
  ];

  const teams = [
    {
      name: "General Inquiries",
      email: "info@scit-uinsuka.id",
      description: "For general questions about SCIT",
    },
    {
      name: "Membership",
      email: "join@scit-uinsuka.id",
      description: "For membership and recruitment",
    },
    {
      name: "Partnerships",
      email: "partnership@scit-uinsuka.id",
      description: "For business partnerships and collaborations",
    },
    {
      name: "Events",
      email: "events@scit-uinsuka.id",
      description: "For event inquiries and sponsorships",
    },
    {
      name: "Technical",
      email: "tech@scit-uinsuka.id",
      description: "For technical support and projects",
    },
    {
      name: "Media",
      email: "media@scit-uinsuka.id",
      description: "For press and media inquiries",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              Kami senang mendengar dari Anda! Hubungi tim SCIT UIN Suka untuk pertanyaan, kerjasama, atau sekadar ingin berbagi ide teknologi.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <method.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl mb-2">{method.title}</CardTitle>
                <CardDescription className="mb-4">{method.description}</CardDescription>
                <div className="space-y-1">
                  <div className="font-medium text-slate-900">{method.primary}</div>
                  <div className="text-sm text-slate-600">{method.secondary}</div>
                </div>
                <Button
                  className="mt-4 w-full"
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <Link
                    href={method.action}
                    target="_blank"
                  >
                    Contact
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl mb-2">Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">First Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">Last Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="john.doe@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+62 812 3456 7890"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">Subject *</label>
                      <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="membership">Membership Question</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="event">Event Collaboration</option>
                        <option value="technical">Technical Support</option>
                        <option value="media">Media Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">Organization/Company</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your organization or company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">Message *</label>
                      <textarea
                        rows={6}
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us more about your inquiry..."
                      ></textarea>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        required
                        className="mt-1"
                      />
                      <span className="text-sm text-slate-600">
                        I agree to receive communications from SCIT UIN Suka and understand that I can unsubscribe at any time. *
                      </span>
                    </div>

                    <Button
                      size="lg"
                      type="submit"
                      className="w-full"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-slate-600">{schedule.day}</span>
                      <span className={`font-medium ${schedule.hours === "Closed" ? "text-red-500" : "text-slate-900"}`}>{schedule.hours}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Team Contacts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Contact Teams
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {teams.map((team, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-slate-900 mb-1">{team.name}</h4>
                      <p className="text-sm text-slate-600 mb-2">{team.description}</p>
                      <Link
                        href={`mailto:${team.email}`}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        {team.email}
                      </Link>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Follow Us</CardTitle>
                  <CardDescription>Stay connected with our latest updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.url}
                      target="_blank"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div
                        className={`w-10 h-10 ${social.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <social.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{social.name}</div>
                        <div className="text-sm text-slate-600">{social.username}</div>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Events */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Location */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  Our Location
                </CardTitle>
                <CardDescription>Visit us at our campus office for face-to-face meetings</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Address</h4>
                    <p className="text-slate-600">
                      Fakultas Sains dan Teknologi
                      <br />
                      UIN Sunan Kalijaga Yogyakarta
                      <br />
                      Jl. Marsda Adisucipto No 1<br />
                      Yogyakarta 55281, Indonesia
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Campus Access</h4>
                    <ul className="text-slate-600 space-y-1">
                      <li>• 15 minutes from Yogyakarta Airport</li>
                      <li>• 10 minutes from Malioboro Street</li>
                      <li>• Accessible by Trans Jogja bus</li>
                      <li>• Parking available on campus</li>
                    </ul>
                  </div>

                  <Button
                    asChild
                    className="w-full"
                  >
                    <Link
                      href="https://maps.google.com/maps?q=UIN+Sunan+Kalijaga+Yogyakarta"
                      target="_blank"
                    >
                      View on Google Maps
                      <MapPin className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Events & Meetings */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  Events & Meetings
                </CardTitle>
                <CardDescription>Join our regular events and community meetings</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Regular Events</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium text-slate-900">Weekly Meetup</div>
                          <div className="text-sm text-slate-600">Community gathering</div>
                        </div>
                        <div className="text-right text-sm text-slate-600">
                          Every Friday
                          <br />
                          19:00 WIB
                        </div>
                      </div>

                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium text-slate-900">Tech Workshop</div>
                          <div className="text-sm text-slate-600">Skills development</div>
                        </div>
                        <div className="text-right text-sm text-slate-600">
                          Monthly
                          <br />
                          Saturdays
                        </div>
                      </div>

                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium text-slate-900">Project Showcase</div>
                          <div className="text-sm text-slate-600">Demo day</div>
                        </div>
                        <div className="text-right text-sm text-slate-600">
                          Quarterly
                          <br />
                          TBA
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Office Hours</h4>
                    <p className="text-slate-600 text-sm mb-3">Drop by during our office hours for casual chats or consultations:</p>
                    <div className="text-slate-600 text-sm">
                      Monday - Friday: 14:00 - 17:00 WIB
                      <br />
                      Saturday: 09:00 - 12:00 WIB
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    asChild
                    className="w-full"
                  >
                    <Link href="/events">
                      View All Events
                      <Calendar className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Find quick answers to common questions about SCIT</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How can I join SCIT UIN Suka?",
                answer:
                  "You can join by filling out our online application form, attending an info session, and completing a simple skills assessment. Visit our Join page for detailed steps.",
              },
              {
                question: "Do I need prior programming experience?",
                answer:
                  "No! We welcome members of all skill levels. We have tracks specifically designed for beginners as well as advanced developers.",
              },
              {
                question: "What are the membership requirements?",
                answer: "You must be a student at UIN Sunan Kalijaga, commit to active participation, and follow our community guidelines.",
              },
              {
                question: "Are there any membership fees?",
                answer: "SCIT membership is completely free. We believe technology education should be accessible to all students.",
              },
              {
                question: "How can I partner with SCIT?",
                answer:
                  "We're always open to partnerships! Contact our partnership team at partnership@scit-uinsuka.id to discuss collaboration opportunities.",
              },
              {
                question: "Can non-UIN students participate in events?",
                answer: "Many of our public events are open to everyone. Check specific event details or contact us for more information.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";
import Link from "next/link";

export const LocationSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Location */}
          <Card className="p-8">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Our Location
              </CardTitle>
              <CardDescription>Visit us at our campus office for face-to-face meetings</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Address</h4>
                  <p className="text-muted-foreground">
                    Fakultas Sains dan Teknologi
                    <br />
                    UIN Sunan Kalijaga Yogyakarta
                    <br />
                    Jl. Marsda Adisucipto No 1<br />
                    Yogyakarta 55281, Indonesia
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Campus Access</h4>
                  <ul className="text-muted-foreground space-y-1">
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
                <Calendar className="h-6 w-6 text-primary" />
                Events & Meetings
              </CardTitle>
              <CardDescription>Join our regular events and community meetings</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Regular Events</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-foreground">Weekly Meetup</div>
                        <div className="text-sm text-muted-foreground">Community gathering</div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        Every Friday
                        <br />
                        19:00 WIB
                      </div>
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-foreground">Tech Workshop</div>
                        <div className="text-sm text-muted-foreground">Skills development</div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        Monthly
                        <br />
                        Saturdays
                      </div>
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-foreground">Project Showcase</div>
                        <div className="text-sm text-muted-foreground">Demo day</div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        Quarterly
                        <br />
                        TBA
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Office Hours</h4>
                  <p className="text-muted-foreground text-sm mb-3">Drop by during our office hours for casual chats or consultations:</p>
                  <div className="text-muted-foreground text-sm">
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
  );
};

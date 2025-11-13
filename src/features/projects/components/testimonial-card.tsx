"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star } from "lucide-react";
import { useState } from "react";

interface TestimonialCardProps {
  name: string;
  role: string;
  message: string;
  rating?: number;
  avatar?: string;
}

export function TestimonialCard({ name, role, message, rating = 5, avatar }: TestimonialCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Check if message is longer than 4 lines (approximately 200 characters)
  const shouldTruncate = message.length > 200;
  const truncatedMessage = shouldTruncate ? message.slice(0, 200) + "..." : message;

  return (
    <Card className="marquee-item w-96 flex-shrink-0 mx-3">
      <CardContent className="p-6 space-y-4">
        {/* Header with Avatar and Rating */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src={avatar}
                alt={name}
              />
              <AvatarFallback className="bg-primary text-primary-foreground">{getInitials(name)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-foreground">{name}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex gap-0.5 shrink-0">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`h-4 w-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`}
              />
            ))}
          </div>
        </div>

        {/* Message with Truncate */}
        <div className="space-y-2">
          <p className="text-muted-foreground italic leading-relaxed line-clamp-4">&quot;{truncatedMessage}&quot;</p>

          {shouldTruncate && (
            <Dialog
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <DialogTrigger asChild>
                <button className="text-primary text-sm font-medium hover:underline">Baca selengkapnya</button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={avatar}
                        alt={name}
                      />
                      <AvatarFallback className="bg-primary text-primary-foreground">{getInitials(name)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{name}</p>
                      <p className="text-sm text-muted-foreground font-normal">{role}</p>
                    </div>
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {/* Rating in dialog */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`h-5 w-5 ${index < rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`}
                      />
                    ))}
                  </div>
                  {/* Full message */}
                  <p className="text-muted-foreground italic leading-relaxed">&quot;{message}&quot;</p>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Twitter, Github, Facebook } from "lucide-react";
import Link from "next/link";

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

export const SocialMediaSection = () => {
  return (
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
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
          >
            <div className={`w-10 h-10 ${social.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <social.icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-medium text-foreground">{social.name}</div>
              <div className="text-sm text-muted-foreground">{social.username}</div>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

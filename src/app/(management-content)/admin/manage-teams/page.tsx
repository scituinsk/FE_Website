"use client";
import React from "react";
import Link from "next/link";
import { Users2, ArrowRight, Crown, Code, Shield, Brain } from "lucide-react";
import { CORE_TEAM } from "@/constants/core-team";
import { DIVISION_DETAILS } from "@/constants/division-members";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const ManageTeamsPage = () => {
  // Flatten core team members
  const coreTeamMembers = CORE_TEAM.flat();

  // Get all division members
  const allDivisionMembers = DIVISION_DETAILS.flatMap((division) => division.members);

  // Get statistics
  const totalMembers = [...new Set([...coreTeamMembers, ...allDivisionMembers].map((m) => m.name))].length;
  const coreMembers = coreTeamMembers.length;

  // Division icons mapping
  const divisionIcons: Record<string, any> = {
    "rpl-si": Code,
    "jaringan-komputer-cyber-security": Shield,
    "ml-ai": Brain,
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Manage Teams</h1>
        <p className="text-muted-foreground">Kelola anggota tim inti dan divisi SCIT</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalMembers}</div>
            <p className="text-xs text-muted-foreground">Across all teams</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Core Team</CardTitle>
            <Users2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{coreMembers}</div>
            <p className="text-xs text-muted-foreground">Leadership positions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Divisions</CardTitle>
            <Users2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{DIVISION_DETAILS.length}</div>
            <p className="text-xs text-muted-foreground">Active divisions</p>
          </CardContent>
        </Card>
      </div>

      {/* Core Team Card */}
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Crown className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl">Core Team</CardTitle>
                <CardDescription>Tim inti dan leadership SCIT</CardDescription>
              </div>
            </div>
            <Button asChild>
              <Link href="/admin/manage-teams/core">
                Manage
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {coreTeamMembers.slice(0, 8).map((member, idx) => (
                  <Avatar
                    key={idx}
                    className="h-10 w-10 border-2 border-background"
                  >
                    <AvatarImage
                      src={member.imageUrl}
                      alt={member.name}
                    />
                    <AvatarFallback className="text-xs">
                      {member.name
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")
                        .substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-medium">{coreMembers} Members</p>
                <p className="text-muted-foreground text-xs">Leadership & coordination</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Divisions Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Divisions</h2>
          <p className="text-sm text-muted-foreground">Kelola anggota per divisi</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {DIVISION_DETAILS.map((division) => {
            const Icon = divisionIcons[division.slug] || Users2;
            const coreMembers = division.members.filter((m) => m.isCoreMember);
            const regularMembers = division.members.filter((m) => !m.isCoreMember);

            return (
              <Card
                key={division.slug}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg line-clamp-1">{division.name}</CardTitle>
                      <CardDescription className="line-clamp-2 text-xs">{division.fullName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Member Avatars */}
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {division.members.slice(0, 6).map((member, idx) => (
                        <Avatar
                          key={idx}
                          className="h-8 w-8 border-2 border-background"
                        >
                          <AvatarImage
                            src={member.imageUrl}
                            alt={member.name}
                          />
                          <AvatarFallback className="text-xs">
                            {member.name
                              .split(" ")
                              .map((n: string) => n[0])
                              .join("")
                              .substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    {division.members.length > 6 && <span className="text-xs text-muted-foreground">+{division.members.length - 6}</span>}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="rounded-md bg-muted/50 p-2">
                      <p className="text-xs text-muted-foreground">Core Members</p>
                      <p className="font-semibold">{coreMembers.length}</p>
                    </div>
                    <div className="rounded-md bg-muted/50 p-2">
                      <p className="text-xs text-muted-foreground">Members</p>
                      <p className="font-semibold">{regularMembers.length}</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    className="w-full"
                    variant="outline"
                    asChild
                  >
                    <Link href={`/admin/manage-teams/${division.slug}`}>
                      Manage Division
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ManageTeamsPage;

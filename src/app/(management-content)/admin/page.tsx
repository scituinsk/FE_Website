"use client";
import Link from "next/link";
import { Users, FolderKanban, Images, ArrowRight, Activity, TrendingUp } from "lucide-react";

import { PROJECTS } from "@/constants/projects";
import { CORE_TEAM } from "@/constants/core-team";
import { GALLERY_IMAGES } from "@/constants/gallery";
import { DIVISION_DETAILS } from "@/constants/division-members";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AdminPage = () => {
  // Calculate statistics
  const coreTeamMembers = CORE_TEAM.flat();
  const allDivisionMembers = DIVISION_DETAILS.flatMap((division) => division.members);
  const totalMembers = [...new Set([...coreTeamMembers, ...allDivisionMembers].map((m) => m.name))].length;

  const recentProjects = PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Selamat datang di SCIT Admin Dashboard</p>
      </div>

      {/* Statistics Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalMembers}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {coreTeamMembers.length} core + {DIVISION_DETAILS.length} divisions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <FolderKanban className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{PROJECTS.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Portfolio projects</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gallery Images</CardTitle>
            <Images className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{GALLERY_IMAGES.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Total photos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Divisions</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{DIVISION_DETAILS.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Active divisions</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Recent Content */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Projects */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Projects</CardTitle>
              <CardDescription>Latest projects in portfolio</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              asChild
            >
              <Link href="/admin/manage-projects">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentProjects.map((project, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-lg border p-3 hover:bg-accent/50 transition-colors"
              >
                <div className="h-12 w-12 rounded bg-muted flex items-center justify-center flex-shrink-0">
                  <FolderKanban className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{project.title}</p>
                  <div className="flex gap-1 mt-1">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="text-xs"
                      >
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Team Members */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Core Team</CardTitle>
              <CardDescription>Leadership members</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              asChild
            >
              <Link href="/admin/manage-teams">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {coreTeamMembers.slice(0, 5).map((member, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-lg border p-3 hover:bg-accent/50 transition-colors"
              >
                <Avatar className="h-10 w-10 flex-shrink-0">
                  <AvatarImage
                    src={member.imageUrl}
                    alt={member.name}
                  />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")
                      .substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{member.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{member.role}</p>
                </div>
                <Badge
                  variant="outline"
                  className="text-xs flex-shrink-0"
                >
                  {member.angkatan}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Divisions Overview */}
      <Card>
        <CardHeader>
          <div className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Divisions Overview</CardTitle>
              <CardDescription>All active divisions</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              asChild
            >
              <Link href="/admin/manage-teams">
                Manage
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DIVISION_DETAILS.map((division) => (
              <div
                key={division.slug}
                className="rounded-lg border p-4 space-y-3 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{division.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{division.fullName}</p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="ml-2 flex-shrink-0"
                  >
                    {division.members.length}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {division.members.slice(0, 4).map((member, idx) => (
                      <Avatar
                        key={idx}
                        className="h-6 w-6 border-2 border-background"
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
                  {division.members.length > 4 && <span className="text-xs text-muted-foreground">+{division.members.length - 4} more</span>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Latest gallery upload</span>
              <span className="font-medium">{GALLERY_IMAGES[0]?.date.toLocaleDateString("id-ID", { month: "short", day: "numeric" })}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Total tech stacks used</span>
              <span className="font-medium">{[...new Set(PROJECTS.flatMap((p) => p.tech))].length}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Core team members</span>
              <span className="font-medium">{coreTeamMembers.length}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button
              variant="outline"
              className="w-full justify-start"
              asChild
            >
              <Link href="/admin/manage-teams">
                <Users className="mr-2 h-4 w-4" />
                Add New Member
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              asChild
            >
              <Link href="/admin/manage-projects">
                <FolderKanban className="mr-2 h-4 w-4" />
                Create New Project
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              asChild
            >
              <Link href="/admin/manage-galleries">
                <Images className="mr-2 h-4 w-4" />
                Upload Gallery Image
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPage;

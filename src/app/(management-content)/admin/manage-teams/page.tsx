"use client";
import Link from "next/link";
import { Users2, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetDataDashboardManageTeam } from "@/features/dashboard/manage-teams/queries/use-get-data-dashboard-manage-team";

const ManageTeamsPage = () => {
  const { data: dataDashboardManageTeam, isLoading: dataDashboardManageTeamIsLoading } = useGetDataDashboardManageTeam();

  if (dataDashboardManageTeamIsLoading || !dataDashboardManageTeam) {
    // TODO: Improve Loading State and Handle Error
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Manage Teams</h1>
        <p className="text-muted-foreground">Kelola anggota tim inti dan divisi SCIT</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dataDashboardManageTeam._count.allMembers}</div>
            <p className="text-xs text-muted-foreground">Across all teams</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Divisions</CardTitle>
            <Users2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dataDashboardManageTeam._count.divisions}</div>
            <p className="text-xs text-muted-foreground">Active divisions</p>
          </CardContent>
        </Card>
      </div>

      {/* Core Team Card */}
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
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
      </Card>

      {/* Divisions Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Divisions</h2>
          <p className="text-sm text-muted-foreground">Kelola anggota per divisi</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dataDashboardManageTeam.divisions.map((division) => {
            return (
              <Card
                key={division.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg line-clamp-1">{division.name}</CardTitle>
                      <CardDescription className="line-clamp-2 text-xs">{division.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Member Avatars */}
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {division.members.slice(0, 10).map((member) => (
                        <Avatar
                          key={member.id}
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
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="rounded-md bg-muted/50 p-2">
                      <p className="text-xs text-muted-foreground">Members</p>
                      <p className="font-semibold">{division._count.members}</p>
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

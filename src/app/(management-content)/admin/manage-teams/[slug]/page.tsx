"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Pencil, Trash2, UserPlus, Search, Code, Shield, Brain, Users2 } from "lucide-react";
import { DIVISION_DETAILS } from "@/constants/division-members";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useParams } from "next/navigation";
import { useAuth } from "@/features/auth/contexts/auth-context";

const DivisionManagementPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  const auth = useAuth();

  console.log("Auth", auth);

  const [searchQuery, setSearchQuery] = useState("");

  // Find division
  const division = DIVISION_DETAILS.find((d) => d.slug === slug);

  if (!division) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-6">
        <Users2 className="h-16 w-16 text-muted-foreground/50 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Division Not Found</h2>
        <p className="text-muted-foreground mb-4">The division you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/admin/manage-teams">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Teams
          </Link>
        </Button>
      </div>
    );
  }

  // Division icons mapping
  const divisionIcons: Record<string, any> = {
    "rpl-si": Code,
    "jaringan-komputer-cyber-security": Shield,
    "ml-ai": Brain,
  };

  const Icon = divisionIcons[division.slug] || Users2;

  // Separate core and regular members
  const coreMembers = division.members.filter((m) => m.isCoreMember);
  const regularMembers = division.members.filter((m) => !m.isCoreMember);

  // Get filtered members based on type
  const getFilteredMembers = () => {
    let members = division.members;

    if (searchQuery) {
      members = members.filter(
        (member) =>
          member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.angkatan.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return members;
  };

  const filteredMembers = getFilteredMembers();

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          asChild
        >
          <Link href="/admin/manage-teams">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{division.name}</h1>
              <p className="text-muted-foreground">{division.fullName}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{division.members.length}</div>
            <p className="text-xs text-muted-foreground">In this division</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Core Members</CardTitle>
            <Users2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{coreMembers.length}</div>
            <p className="text-xs text-muted-foreground">Leadership positions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Members</CardTitle>
            <Users2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{regularMembers.length}</div>
            <p className="text-xs text-muted-foreground">Regular members</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>All Members</CardTitle>
              <CardDescription></CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Member
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Member to {division.name}</DialogTitle>
                  <DialogDescription>Tambahkan anggota baru ke divisi {division.name}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Enter member name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Role</label>
                    <Input placeholder="e.g., Lead, Co-Lead, Member" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Angkatan</label>
                    <Input placeholder="e.g., Informatics '23" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Member Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select member type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="core">Core Member</SelectItem>
                        <SelectItem value="regular">Regular Member</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Image URL</label>
                    <Input placeholder="https://example.com/image.jpg" />
                  </div>
                  <Button className="w-full">Save Member</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name, role, or angkatan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          <Separator />

          {/* Members List */}
          <div className="space-y-3">
            {filteredMembers.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Users2 className="h-12 w-12 text-muted-foreground/50 mb-4" />
                <p className="text-sm text-muted-foreground">No members found</p>
              </div>
            ) : (
              filteredMembers.map((member, index) => (
                <div
                  key={`${member.name}-${index}`}
                  className="flex items-center justify-between rounded-lg border p-4 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <Avatar className="h-12 w-12 flex-shrink-0">
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
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium truncate">{member.name}</p>
                        {member.isCoreMember && <Badge variant="secondary">Core</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{member.role}</p>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <Badge
                          variant="outline"
                          className="text-xs"
                        >
                          {member.angkatan}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination info */}
          {filteredMembers.length > 0 && (
            <div className="text-sm text-muted-foreground text-center pt-2">
              Showing {filteredMembers.length} member{filteredMembers.length !== 1 ? "s" : ""}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DivisionManagementPage;

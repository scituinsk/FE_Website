import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectDetailLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section Skeleton */}
      <div className="border-b border-border bg-card">
        <div className="container py-8">
          {/* Back Button Skeleton */}
          <Skeleton className="h-9 w-32 mb-6" />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="space-y-3 flex-1">
              {/* Title Skeleton */}
              <Skeleton className="h-12 w-full max-w-2xl lg:h-14" />
              {/* Description Skeleton */}
              <Skeleton className="h-6 w-full max-w-3xl" />
              <Skeleton className="h-6 w-3/4 max-w-2xl" />
            </div>

            <div className="flex gap-3 shrink-0">
              {/* Live Demo Button Skeleton */}
              <Skeleton className="h-10 w-32" />
            </div>
          </div>

          {/* Meta Info Skeleton */}
          <div className="flex flex-wrap gap-6 mt-6">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-32" />
          </div>
        </div>
      </div>

      {/* Main Content - 2 Column Layout */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Thumbnail Skeleton */}
            <Card className="overflow-hidden">
              <Skeleton className="w-full aspect-video" />
            </Card>

            {/* Description Card Skeleton */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <Skeleton className="h-8 w-48" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </CardContent>
            </Card>

            {/* Features Card Skeleton */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <Skeleton className="h-8 w-40" />
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[...Array(6)].map((_, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2"
                    >
                      <Skeleton className="h-4 w-4 mt-1 shrink-0" />
                      <Skeleton className="h-4 w-full" />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Challenges & Results Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Challenges Card */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <Skeleton className="h-7 w-32" />
                  <ul className="space-y-2">
                    {[...Array(4)].map((_, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2"
                      >
                        <Skeleton className="h-3 w-3 mt-1 shrink-0 rounded-full" />
                        <Skeleton className="h-4 w-full" />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Results Card */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <Skeleton className="h-7 w-28" />
                  <ul className="space-y-2">
                    {[...Array(4)].map((_, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2"
                      >
                        <Skeleton className="h-3 w-3 mt-1 shrink-0" />
                        <Skeleton className="h-4 w-full" />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Gallery Card Skeleton */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <Skeleton className="h-8 w-32" />
                {/* Carousel Skeleton */}
                <div className="relative">
                  <Skeleton className="w-full aspect-video rounded-lg" />
                  {/* Carousel Navigation Buttons */}
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <Skeleton className="h-10 w-10 rounded-full" />
                  </div>
                </div>
                {/* Carousel Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {[...Array(4)].map((_, index) => (
                    <Skeleton
                      key={index}
                      className="h-2 w-8 rounded-full"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar (1/3) */}
          <div className="space-y-6">
            <div className="sticky top-20 space-y-6">
              {/* Tech Stack Card Skeleton */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <Skeleton className="h-7 w-32" />
                  <div className="flex flex-wrap gap-2">
                    {[...Array(3)].map((_, index) => (
                      <Skeleton
                        key={index}
                        className="h-10 w-10 rounded-full"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card Skeleton */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <Skeleton className="h-7 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

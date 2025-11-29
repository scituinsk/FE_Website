"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-border shadow-lg">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="relative">
              <div className="text-9xl font-black text-primary">404</div>
              <div className="absolute -bottom-2 -right-2 h-full w-full border-border bg-transparent" />
            </div>
          </div>
          <CardTitle className="text-3xl font-black uppercase tracking-tight">Halaman Tidak Ditemukan</CardTitle>
          <CardDescription className="text-base font-medium">
            Oops! Sepertinya halaman yang Anda cari tidak ada atau telah dipindahkan.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-none border-l-4 border-primary bg-primary/10 p-4">
            <p className="text-sm font-semibold text-foreground">Kemungkinan penyebab:</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• URL yang Anda masukkan salah</li>
              <li>• Halaman telah dihapus atau dipindahkan</li>
              <li>• Link yang Anda klik sudah tidak valid</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex gap-3">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="flex-1 font-bold uppercase"
          >
            Kembali
          </Button>
          <Button
            asChild
            className="flex-1 font-bold uppercase"
          >
            <Link href="/">Ke Beranda</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

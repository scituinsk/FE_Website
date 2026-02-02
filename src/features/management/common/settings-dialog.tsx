import { CustomDialog } from "@/components/custom-dialog";
import { Button } from "@/components/ui/button";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { SettingsIcon } from "lucide-react";
import { useEffect, useState } from "react";

type SettingsTab = "profile" | "security";

export const SettingsDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<SettingsTab>("profile");

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Simulate a 1 second loading time

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <CustomDialog
      open={isOpen}
      onOpenChange={setIsOpen}
      title="Setelan"
      maxWidth="4xl"
      className="h-[600px]"
      isLoading={isLoading}
      trigger={
        <SidebarMenuButton className="h-10">
          <SettingsIcon />
          <span>Settings</span>
        </SidebarMenuButton>
      }
      dialogContentProps={{
        onPointerDownOutside: (e) => {
          e.preventDefault();
        },
      }}
      dialogContentClassName="p-0 flex flex-col"
      showCloseButtonOnTopRight={false}
      footerContent={
        <div className="h-full flex items-center justify-end w-full gap-3">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setIsOpen(false)}
          >
            Tutup
          </Button>
          <Button
            size="sm"
            variant="primaryAdmin"
          >
            Simpan
          </Button>
        </div>
      }
    >
      <div className="grid grid-cols-12 flex-1 min-h-0">
        <div className="border-r col-span-4 py-5 px-5 flex flex-col min-h-0">
          <div
            className="space-y-2"
            style={{
              visibility: isLoading ? "hidden" : "visible",
              pointerEvents: isLoading ? "none" : "auto",
            }}
          >
            <Button
              className="w-full justify-start"
              variant={activeTab === "profile" ? "secondary" : "ghost"}
              onClick={() => setActiveTab("profile")}
            >
              Profil
            </Button>
            <Button
              className="w-full justify-start"
              variant={activeTab === "security" ? "secondary" : "ghost"}
              onClick={() => setActiveTab("security")}
            >
              Keamanan akun
            </Button>
          </div>
        </div>
        <div className="col-span-8 overflow-y-auto min-h-0">
          <div
            style={{
              visibility: isLoading ? "hidden" : "visible",
              pointerEvents: isLoading ? "none" : "auto",
            }}
          >
            {activeTab === "profile" && (
              <div className="py-5 px-5 space-y-4">
                <h3 className="font-semibold">Profil</h3>
                <p className="text-muted-foreground">Kelola informasi profil Anda</p>
                {/* {Array.from({ length: 20 }).map((_, i) => (
                  <p
                    key={i}
                    className="text-sm"
                  >
                    Profile content item {i + 1}
                  </p>
                ))} */}
              </div>
            )}
            {activeTab === "security" && (
              <div className="py-5 px-5 space-y-4">
                <h3 className="font-semibold">Keamanan Akun</h3>
                <p className="text-muted-foreground">Kelola pengaturan keamanan akun Anda</p>
                {/* {Array.from({ length: 15 }).map((_, i) => (
                  <p
                    key={i}
                    className="text-sm"
                  >
                    Security content item {i + 1}
                  </p>
                ))} */}
              </div>
            )}
          </div>
        </div>
      </div>
    </CustomDialog>
  );
};

// https://www.gstatic.com/youtube/img/creator/error_illustration_v2_darkmode.svg

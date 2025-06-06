import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      {children}
    </main>
  );
}

export default AuthLayout;

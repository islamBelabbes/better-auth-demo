import { SignUpForm } from "@/features/authentication/components/sign-up-form";
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/auth/signin");
}

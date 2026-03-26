import ProfileForm from "@/components/forms/ProfileForm";
import { Metadata } from "next";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth/utils";

export const metadata: Metadata = {
  title: "Profile",
  description:
    "CloudNative-ThreeTier-Ecosystem is a production-ready Next.js e-commerce solution. View and manage your profile settings.",
};

const ProfilePage = async () => {
  // Get the token from cookies
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  // If no token, redirect to login
  if (!token) {
    redirect("/login?redirect=/profile");
  }

  // Verify the token
  const decoded = verifyToken(token);
  if (!decoded) {
    redirect("/login?redirect=/profile");
  }

  return (
    <section className="profile-page">
      <ProfileForm />
    </section>
  );
};

export default ProfilePage;

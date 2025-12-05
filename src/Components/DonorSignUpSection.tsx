// src/components/DonorSignUpSection.tsx
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { SignupSchema } from "@/lib/validators/auth";

interface DonorSignUpSectionProps {
  backgroundImage?: string;
}

export default function DonorSignUpSection({ backgroundImage = "/Forest.jpg" }: DonorSignUpSectionProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    state: "",
    city: "",
    pin: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const signupMutation = useMutation({
    mutationFn: async () => {
      const parsed = SignupSchema.safeParse(form);
      if (!parsed.success) throw parsed.error;

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error);
      return result;
    },
    onSuccess: () => {
      setMessage("🎉 Account created! Check your email to verify.");
      router.push("/login");
    },
    onError: (err: any) => {
      setMessage("❌ " + err.message);
    },
  });

  return (
    <>
      <section className="max-w-[1340px] mx-auto px-6 mb-6">
        <h3 className="text-lg font-medium text-gray-700">JOIN AS A DONOR</h3>
        <h2 className="text-3xl font-extrabold text-black">CREATE YOUR ACCOUNT</h2>
      </section>

      <div className="relative w-full pb-10">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="relative w-full h-full overflow-hidden rounded-t-[480px]">
            <Image src={backgroundImage} alt="Background" fill className="object-cover opacity-25" />
            <div className="absolute inset-0 bg-green-500" style={{ opacity: 0.22, mixBlendMode: "multiply" }} />
          </div>
        </div>
        <section className="relative z-30 max-w-[1340px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <Card className="bg-green-50 border-green-200 min-h-[560px] md:w-1/2">
              <CardContent className="pt-6 flex flex-col gap-4">
                {Object.keys(form).map((key) => (
                  <div key={key}>
                    <Label className="text-gray-700">{key.toUpperCase()}</Label>
                    <Input
                      name={key}
                      value={form[key as keyof typeof form]}
                      onChange={handleChange}
                      className="mt-2 bg-white"
                    />
                  </div>
                ))}
                <Button
                  onClick={() => signupMutation.mutate()}
                  disabled={signupMutation.isPending}
                  className="w-full mt-4 bg-green-600 hover:bg-green-700 rounded-full"
                >
                  {signupMutation.isPending ? "Creating account..." : "Sign Up"}
                </Button>
                <p className="text-center text-sm mt-4">
                  Already have an account?{" "}
                  <Link href="/login" className="text-green-700 font-semibold hover:underline">
                    Login
                  </Link>
                </p>
                {message && <p className="text-center mt-3 text-sm font-semibold">{message}</p>}
              </CardContent>
            </Card>

            <Card className="bg-green-600 text-white border-green-300 min-h-[560px] flex flex-col md:w-1/2 w-full">
              <CardContent className="pt-6 flex flex-col justify-center">
                <h3 className="text-xl font-extrabold text-center">
                  THE WORLD NEEDS MORE TREES
                </h3>
                <h4 className="text-sm font-semibold mb-3 text-center text-green-50">
                  WHY TREES MATTER
                </h4>
                <p className="text-sm text-center text-green-50 mb-6">
                  Trees are not just plants. They are the foundation of life on
                  Earth.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow mb-2">
                      <Image src="/img1.png" alt="img1" width={32} height={32} />
                    </div>
                    <h5 className="font-bold text-sm">CLEAN AIR</h5>
                    <p className="text-xs text-green-50">
                      Trees absorb pollutants and release oxygen.
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow mb-2">
                      <Image src="/img2.png" alt="img2" width={32} height={32} />
                    </div>
                    <h5 className="font-bold text-sm">STRONGER COMMUNITIES</h5>
                    <p className="text-xs text-green-50">
                      Tree planting creates jobs & restores soil.
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow mb-2">
                      <Image src="/img3.png" alt="img3" width={32} height={32} />
                    </div>
                    <h5 className="font-bold text-sm">HABITAT FOR WILDLIFE</h5>
                    <p className="text-xs text-green-50">
                      Forests preserve ecosystems.
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow mb-2">
                      <Image src="/img4.png" alt="img4" width={32} height={32} />
                    </div>
                    <h5 className="font-bold text-sm">CLIMATE PROTECTION</h5>
                    <p className="text-xs text-green-50">
                      Trees reduce heat & capture carbon.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}


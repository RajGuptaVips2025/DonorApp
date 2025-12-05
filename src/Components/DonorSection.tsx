"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import DonationSuccessPopup from "./DonationSuccessPopup";

interface DonorSectionProps {
  backgroundImage?: string;
}

export default function DonorSection({
  backgroundImage = "/Forest.jpg",
}: DonorSectionProps) {
  const supabase = createClient();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [frequency, setFrequency] = useState("One Time");
  const [impact, setImpact] = useState("Adopt 5 Trees");

  const [amount, setAmount] = useState<string>("500");
  const [upiId, setUpiId] = useState("");
  const [onBehalf, setOnBehalf] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (impact === "Adopt 5 Trees") setAmount("500");
    else if (impact === "Adopt 10 Trees") setAmount("1000");
    else setAmount("");
  }, [impact]);


  const handleDonate = async () => {
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        alert("Please login to make a donation.");
        router.push("/login");
        setLoading(false);
        return;
      }
      if (!amount || !upiId || !onBehalf || !message) {
        alert("Please fill in all fields.");
        setLoading(false);
        return;
      }
      if (upiId.length > 15) {
        alert("UPI ID must be 15 characters or less.");
        setLoading(false);
        return;
      }
      const res = await fetch("/api/donation/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          frequency,
          on_behalf: onBehalf,
          message,
          upi_id: upiId,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        alert("❌ " + result.error);
        setLoading(false);
        return;
      }

      setShowSuccess(true);
      console.log("Donation saved:", result);

      setUpiId("");
      setOnBehalf("");
      setMessage("");

    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <section className="max-w-[1340px] mx-auto px-6 mb-6 z-30 relative pt-10 font-sans">
        <h3 className="text-lg font-medium text-gray-700">MAKE A DIFFERENCE</h3>
        <h2 className="text-3xl font-extrabold text-black">DONATE TODAY</h2>
      </section>

      <div className="relative w-full pb-10 font-sans">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="relative w-full h-full overflow-hidden rounded-t-[60px] md:rounded-t-[480px]">
            <Image
              src={backgroundImage}
              alt="Background"
              fill
              className="object-cover opacity-25"
            />
            <div
              className="absolute inset-0 bg-green-500"
              style={{ opacity: 0.22, mixBlendMode: "multiply" }}
            />
          </div>
        </div>

        <section className="relative z-30 max-w-[1340px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-6 items-stretch">
            <Card className="bg-[#f0fdf4] border-green-100 min-h-[560px] flex flex-col md:w-1/2 w-full shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-6 sm:p-8 flex flex-col gap-5 flex-1">
                <div>
                  <Label className="font-semibold mb-2 block">I would like to Give...</Label>
                  <div className="flex gap-3">
                    {["One Time", "Weekly", "Monthly"].map((item) => (
                      <button
                        key={item}
                        onClick={() => setFrequency(item)}
                        className={`flex-1 py-2 px-2 rounded-lg border text-sm font-medium 
                        ${frequency === item
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-gray-700 border-gray-200"
                          }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="font-semibold mb-2 block">Select Your Impact</Label>
                  <div className="flex gap-3">
                    {["Adopt 5 Trees", "Adopt 10 Trees", "Other"].map((item) => (
                      <button
                        key={item}
                        onClick={() => setImpact(item)}
                        className={`flex-1 py-2 px-2 rounded-lg border text-sm font-medium 
                        ${impact === item
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-gray-700 border-gray-200"
                          }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Amount (₹)</Label>
                  <Input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    readOnly={impact !== "Other"}
                    type="number"
                    min={1}
                    className={`h-12 text-lg border-gray-200 
                    ${impact !== "Other" ? "bg-gray-100 text-gray-500" : "bg-white"}`}
                  />
                </div>
                <div>
                  <Label>UPI ID (max 15 chars)</Label>
                  <Input
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="example@upi"
                    maxLength={15}
                    className="h-12"
                  />
                  <p className="text-xs text-right text-gray-400">{upiId.length}/15</p>
                </div>
                <div>
                  <Label>Donating on behalf of</Label>
                  <Input
                    value={onBehalf}
                    onChange={(e) => setOnBehalf(e.target.value)}
                    placeholder="Your name or someone else's"
                    className="h-12"
                  />
                </div>
                <div>
                  <Label>Any Message</Label>
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Optional message"
                    className="h-12"
                  />
                </div>
                <Button
                  onClick={handleDonate}
                  disabled={loading}
                  className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-bold mt-4"
                >
                  {loading ? "Processing..." : "Donate"}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-green-600 text-white border-green-500 min-h-[560px] flex flex-col md:w-1/2 w-full shadow-lg rounded-2xl">
              <CardContent className="p-8 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-extrabold text-center mb-1">THE WORLD NEEDS MORE TREES</h3>
                <h4 className="text-sm font-semibold mb-6 text-center text-green-100 opacity-90 tracking-widest">WHY TREES MATTER</h4>

                <p className="text-base text-center text-green-50 mb-8 leading-relaxed">
                  Trees are not just plants. They are the foundation of life on Earth. They provide:
                </p>

                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-3">
                      <Image src="/img1.png" alt="img1" width={36} height={36} className="object-contain" />
                    </div>
                    <h5 className="font-bold text-base">CLEAN AIR</h5>
                    <p className="text-sm text-green-100">Trees absorb pollutants and release oxygen.</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-3">
                      <Image src="/img2.png" alt="img2" width={36} height={36} className="object-contain" />
                    </div>
                    <h5 className="font-bold text-base">STRONGER COMMUNITIES</h5>
                    <p className="text-sm text-green-100">Tree planting creates jobs & restores soil.</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-3">
                      <Image src="/img3.png" alt="img3" width={36} height={36} className="object-contain" />
                    </div>
                    <h5 className="font-bold text-base">HABITAT FOR WILDLIFE</h5>
                    <p className="text-sm text-green-100">Forests preserve ecosystems.</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-3">
                      <Image src="/img4.png" alt="img4" width={36} height={36} className="object-contain" />
                    </div>
                    <h5 className="font-bold text-base">CLIMATE PROTECTION</h5>
                    <p className="text-sm text-green-100">Trees reduce heat & capture carbon.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <DonationSuccessPopup
            open={showSuccess}
            onClose={() => {
              setShowSuccess(false);
            }}
          />
        </section>
      </div>
    </>
  );
}



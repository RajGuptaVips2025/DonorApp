import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { apiPost } from "@/lib/api";

export default function DonorLoginSection({
  backgroundImage = "/Forest.jpg",
}) {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const loginMutation = useMutation({
    mutationFn: async () => {
      if (!form.email || !form.password)
        throw new Error("Email and password are required");

      const result = await apiPost("/donor/login", form);
      console.log(result);

      localStorage.setItem("token", result.token);

      return result;
    },

    onSuccess: () => {
      setMessage("✅ Login successful!");
      setTimeout(() => navigate("/"), 500);
    },

    onError: (err) => {
      setMessage("❌ " + err.message);
    },
  });


  return (
    <>
      <section className="max-w-[1340px] mx-auto px-6 mb-6">
        <h3 className="text-lg font-medium text-gray-700">WELCOME BACK</h3>
        <h2 className="text-3xl font-extrabold text-black">
          LOGIN TO CONTINUE
        </h2>
      </section>

      <div className="relative w-full pb-10">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="relative w-full h-full overflow-hidden rounded-t-[480px]">
            <img
              src={backgroundImage}
              alt="bg"
              className="w-full h-full object-cover opacity-25"
            />
            <div
              className="absolute inset-0 bg-green-500"
              style={{
                opacity: 0.22,
                mixBlendMode: "multiply",
              }}
            />
          </div>
        </div>

        <section className="relative z-30 max-w-[1340px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-6 items-stretch">
            <Card className="bg-green-50 border-green-200 min-h-[360px] md:w-1/2">
              <CardContent className="pt-6 flex flex-col gap-4">
                <div>
                  <Label>Email</Label>
                  <Input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className="mt-2 bg-white"
                  />
                </div>

                <div>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    className="mt-2 bg-white"
                  />
                </div>

                <Button
                  onClick={() => loginMutation.mutate()}
                  disabled={loginMutation.isPending}
                  className="w-full mt-4 bg-green-600 hover:bg-green-700 rounded-full"
                >
                  {loginMutation.isPending ? "Signing in..." : "Sign In"}
                </Button>

                <p className="text-center text-sm mt-4">
                  Don't have an account?{" "}
                  <a
                    href="/signup"
                    className="text-green-700 font-semibold hover:underline"
                  >
                    Sign up
                  </a>
                </p>

                {message && (
                  <p className="text-center mt-3 text-sm font-semibold">
                    {message}
                  </p>
                )}
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
                  {[
                    {
                      img: "/img1.png",
                      title: "CLEAN AIR",
                      desc: "Trees absorb pollutants and release oxygen.",
                    },
                    {
                      img: "/img2.png",
                      title: "STRONGER COMMUNITIES",
                      desc: "Tree planting creates jobs & restores soil.",
                    },
                    {
                      img: "/img3.png",
                      title: "HABITAT FOR WILDLIFE",
                      desc: "Forests preserve ecosystems.",
                    },
                    {
                      img: "/img4.png",
                      title: "CLIMATE PROTECTION",
                      desc: "Trees reduce heat & capture carbon.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow mb-2">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-8 h-8"
                        />
                      </div>

                      <h5 className="font-bold text-sm">{item.title}</h5>
                      <p className="text-xs text-green-50">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}

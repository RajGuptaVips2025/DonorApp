import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { apiPost } from "@/lib/api";

export default function DonorSignUpSection({
  backgroundImage = "/Forest.jpg",
}) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    state: "",
    city: "",
    pin: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });


  const handleSignup = async () => {
    try {
      if (Object.values(form).some((v) => !v)) {
        setMessage("❌ Please fill in all fields");
        return;
      }

      const data = await apiPost("/donor/create", form);
      console.log(data);

      setMessage("✅ Account created successfully!");
      setTimeout(() => navigate("/login"), 500);

    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };


  return (
    <>
      <section className="max-w-[1340px] mx-auto px-6 mb-6">
        <h3 className="text-lg font-medium text-gray-700">JOIN AS A DONOR</h3>
        <h2 className="text-3xl font-extrabold text-black">
          CREATE YOUR ACCOUNT
        </h2>
      </section>

      <div className="relative w-full pb-10">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="relative w-full h-full overflow-hidden rounded-t-[480px]">
            <img
              src={backgroundImage}
              alt="Background"
              className="w-full h-full object-cover opacity-25"
            />
            <div
              className="absolute inset-0 bg-green-500"
              style={{ opacity: 0.22, mixBlendMode: "multiply" }}
            />
          </div>
        </div>

        <section className="relative z-30 max-w-[1340px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <Card className="bg-green-50 border-green-200 min-h-[560px] md:w-1/2">
              <CardContent className="pt-6 flex flex-col gap-4">
                {Object.keys(form).map((key) => (
                  <div key={key}>
                    <Label className="text-gray-700 capitalize">
                      {key}
                    </Label>
                    <Input
                      name={key}
                      value={form[key]}
                      onChange={handleChange}
                      className="mt-2 bg-white"
                    />
                  </div>
                ))}

                <Button
                  onClick={handleSignup}
                  className="w-full mt-4 bg-green-600 hover:bg-green-700 rounded-full"
                >
                  Sign Up
                </Button>

                <p className="text-center text-sm mt-4">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-green-700 font-semibold hover:underline"
                  >
                    Login
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
                      desc:
                        "Trees absorb pollutants and release oxygen.",
                    },
                    {
                      img: "/img2.png",
                      title: "STRONGER COMMUNITIES",
                      desc:
                        "Tree planting creates jobs & restores soil.",
                    },
                    {
                      img: "/img3.png",
                      title: "HABITAT FOR WILDLIFE",
                      desc: "Forests preserve ecosystems.",
                    },
                    {
                      img: "/img4.png",
                      title: "CLIMATE PROTECTION",
                      desc:
                        "Trees reduce heat & capture carbon.",
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

                      <h5 className="font-bold text-sm">
                        {item.title}
                      </h5>
                      <p className="text-xs text-green-50">
                        {item.desc}
                      </p>
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

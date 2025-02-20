import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";

function Pricing() {
  const pricing = [
    {
      name: "Free",
      price: "0",
      features: [
        "Unlimited Projects",
        "Unlimited Tasks",
        "Unlimited Team Members",
      ],
    },
    {
      name: "Free",
      price: "0",
      featured: true,
      features: [
        "Unlimited Projects",
        "Unlimited Tasks",
        "Unlimited Team Members",
      ],
    },
    {
      name: "Free",
      price: "0",
      features: [
        "Unlimited Projects",
        "Unlimited Tasks",
        "Unlimited Team Members",
      ],
    },
  ];
  return (
    <div className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that works best for you
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricing?.map((price) => (
            <div
              key={price.name}
              className={`rounded-2xl p-8 ${
                price.featured
                  ? "bg-gradient-to-r from-yellow-600 to-red-500 text-white"
                  : "bg-gray-50 text-gray-900"
              }`}
            >
              <h3 className="text-2xl font-bold">{price.name}</h3>
              <div className="mt-6">
                <span className="text-4xl font-bold">${price.price}</span>
                <span className="text-lg">/month</span>
              </div>
              <ul className="mt-8 space-y-4">
                {price.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-lg px-6 py-3 font-medium ${
                  price.featured
                    ? "bg-white text-red-600 hover:bg-gray-100"
                    : "bg-gradient-to-r from-yellow-600 to-red-500 text-white hover:opacity-90"
                }`}
              >
                Choose {price.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;

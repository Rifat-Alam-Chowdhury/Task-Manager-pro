import {
  ChartBarIcon,
  UserGroupIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function Features() {
  const features = [
    {
      name: "Task Tracking",
      description: "Manage your tasks with intuitive drag-and-drop interface",
      icon: ChartBarIcon,
    },
    {
      name: "Team Collaboration",
      description: "Share projects and assign tasks to team members",
      icon: UserGroupIcon,
    },
    {
      name: "Deadline Management",
      description: "Never miss a deadline with smart reminders",
      icon: ClockIcon,
    },
    {
      name: "Cross-Platform",
      description: "Access from any device, anywhere",
      icon: DevicePhoneMobileIcon,
    },
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-18 ">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="rounded-xl bg-white p-6 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2"
          >
            <feature.icon className="h-12 w-12 text-red-500" />
            <h3 className="mt-4 text-xl font-bold text-gray-900">
              {feature.name}
            </h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;

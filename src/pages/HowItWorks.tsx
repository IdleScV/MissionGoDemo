import React from "react";
import { Heart, Users, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Browse Opportunities",
      description:
        "Explore our curated list of churches and missionaries seeking support for their missions.",
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Choose Your Impact",
      description:
        "Select a cause that resonates with you and choose between monthly sponsorship or one-time donations.",
    },
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      title: "Stay Connected",
      description:
        "Receive regular updates about the impact of your support and connect with the communities you help.",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            How MissionGo Works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us in supporting faith-based missions worldwide through a
            simple and meaningful process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-serif font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-600 mb-6">
            Browse our opportunities and start supporting a mission today.
          </p>
          <Link
            to="/"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            View Opportunities
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

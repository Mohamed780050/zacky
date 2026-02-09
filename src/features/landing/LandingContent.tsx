"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { testimonials } from "@/data/static";
import { Quote } from "lucide-react";

export default function LandingContent() {
  return (
    <div
      id="testimonials"
      className="mx-auto max-w-7xl scroll-mt-24 px-10 pb-20"
    >
      <div className="mb-16 space-y-4 text-center">
        <h2 className="text-4xl font-extrabold text-white md:text-5xl">
          Loved by Creators
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-sm font-light md:text-lg">
          Join thousands of users who are already using Zacky to power their
          workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {testimonials.map((item, index) => (
          <Card
            key={index}
            className="hover:shadow-primary/10 group border-0 border-white/10 bg-white/5 text-white ring-1 ring-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl"
          >
            <CardHeader className="relative">
              <Quote className="group-hover:text-primary/20 absolute top-4 right-4 h-8 w-8 text-white/5 transition-colors" />
              <CardTitle className="flex items-center gap-x-3">
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-black text-lg font-bold">
                      {item.name[0]}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-base font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="text-xs font-medium text-gray-400">
                    {item.title}
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 text-sm leading-relaxed text-gray-300 italic">
              &ldquo;{item.description}&rdquo;
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

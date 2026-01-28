import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { testimonials } from "@/data/static";

export default function LandingContent() {
  return (
    <div className="px-10 pb-20">
      <h2 className="mb-10 text-center text-4xl font-extrabold text-white">
        Testimonials
      </h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {testimonials.map((item, index) => (
          <li key={index}>
            <Card className="bg-background/20 hover:bg-background/30 border-none text-white backdrop-blur-sm transition-all hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-primary-foreground text-lg">
                      {item.name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {item.title}
                    </p>
                  </div>
                </CardTitle>
                <CardContent className="px-0 pt-4 text-zinc-200">
                  {item.description}
                </CardContent>
              </CardHeader>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="h-svh w-full p-6 max-w-xl">
      <header>
        <nav className="flex items-center justify-between h-[80px]">
          <div className="h-full">
            <h1 className="text-3xl">Justin O&apos;Connell</h1>
            <p className="text-sm font-light">Fullstack Developer</p>
          </div>
          <div className="flex h-full items-start gap-x-4">
            <div>e</div>
            <div>l</div>
            <div>x</div>
            <div>g</div>
          </div>
        </nav>
      </header>
      <section className="">
        <p>Building fast and interactive apps for the web.</p>
      </section>
      <section className="mt-20">
        <h2 className="text-xl font-medium">
          What I&apos;ve Built Recently 🛠️
        </h2>
        {/* Cards Container */}
        <div className="mt-10">
          <Card>
            <CardHeader>
              <CardTitle>App Name</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus dignissimos ex, similique quam voluptas aliquam adipisci
                enim culpa reprehenderit aut.
              </CardDescription>
              <CardFooter>tech used</CardFooter>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

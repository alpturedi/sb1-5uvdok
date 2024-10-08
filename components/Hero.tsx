import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-primary sm:text-5xl md:text-6xl">
            Welcome to Alpinhaus
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Crafting digital experiences that elevate your brand and engage your audience.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button size="lg" className="w-full">
                Get Started
              </Button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Button variant="outline" size="lg" className="w-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
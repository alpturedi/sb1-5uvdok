import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Code, Palette, Globe } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites tailored to your needs using the latest technologies.',
    icon: Code,
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and visually appealing designs that enhance user experience.',
    icon: Palette,
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your online visibility and reach your target audience effectively.',
    icon: Globe,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-primary mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
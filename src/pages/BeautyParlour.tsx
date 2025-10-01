import { MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BeautyParlour = () => {
  const services = [
    {
      title: 'Bridal Makeup',
      description: 'Complete bridal makeup package with pre-bridal treatments',
      price: '$299',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500',
    },
    {
      title: 'Facial Treatment',
      description: 'Deep cleansing and rejuvenating facial therapy',
      price: '$79',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500',
    },
    {
      title: 'Hair Styling',
      description: 'Professional hair cut, color, and styling services',
      price: '$89',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500',
    },
    {
      title: 'Manicure & Pedicure',
      description: 'Luxurious nail care and spa treatment',
      price: '$49',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500',
    },
    {
      title: 'Skin Care',
      description: 'Customized skincare treatments for all skin types',
      price: '$99',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500',
    },
    {
      title: 'Makeup Training',
      description: 'Professional makeup classes and workshops',
      price: '$149',
      image: 'https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=500',
    },
  ];

  const handleBookService = (serviceName: string, price: string) => {
    const phoneNumber = '1234567890'; // Replace with actual WhatsApp number
    const message = encodeURIComponent(
      `Hello! I would like to book:\n\nService: ${serviceName}\nPrice: ${price}\n\nPlease provide available time slots.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Sparkles className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Beauty Parlour Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience luxury beauty treatments by our professional experts
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover-lift overflow-hidden border-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-2xl font-bold">{service.price}</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button
                  className="w-full gradient-primary hover:opacity-90"
                  onClick={() => handleBookService(service.title, service.price)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 glass-card p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Expert Professionals</h3>
              <p className="text-muted-foreground">Certified beauty experts with years of experience</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Premium Products</h3>
              <p className="text-muted-foreground">Only authentic, high-quality beauty products</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Hygiene First</h3>
              <p className="text-muted-foreground">Sanitized equipment and safe environment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyParlour;

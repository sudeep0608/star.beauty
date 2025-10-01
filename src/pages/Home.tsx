import { Link } from 'react-router-dom';
import { Sparkles, Heart, Gem, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ParticleBackground from '@/components/ParticleBackground';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  const categories = [
    {
      name: 'Cosmetics',
      icon: Palette,
      description: 'Premium beauty products for your perfect look',
      path: '/cosmetics',
      color: 'from-pink-500 to-purple-500',
    },
    {
      name: 'Toys',
      icon: Heart,
      description: 'Fun and educational toys for all ages',
      path: '/toys',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Jewels',
      icon: Gem,
      description: 'Exquisite jewelry for special moments',
      path: '/jewels',
      color: 'from-yellow-500 to-amber-500',
    },
  ];

  return (
    <div className="min-h-screen">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-16">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-4 animate-fade-in">
            <Sparkles className="w-16 h-16 mx-auto text-primary animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-gradient">
            Welcome to Glam & Joy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Discover the perfect blend of beauty, luxury, and fun
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <Link to="/cosmetics">
              <Button size="lg" className="gradient-primary hover:opacity-90 text-lg px-8">
                Shop Cosmetics
              </Button>
            </Link>
            <Link to="/beauty-parlour">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Beauty Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link key={category.path} to={category.path}>
                <Card className="group hover-lift cursor-pointer h-full overflow-hidden border-2">
                  <CardContent className="p-8 text-center relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    <category.icon className="w-16 h-16 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/cosmetics">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Beauty Parlour CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your Look</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience professional beauty services at our exclusive parlour. From makeup to skincare, we've got you covered.
          </p>
          <Link to="/beauty-parlour">
            <Button size="lg" className="gradient-primary hover:opacity-90 text-lg px-8">
              Explore Beauty Services
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

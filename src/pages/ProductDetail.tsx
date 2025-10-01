import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getProductById } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');

  if (!product) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleOrderOnWhatsApp = () => {
    const phoneNumber = '1234567890'; // Replace with actual WhatsApp number
    const message = encodeURIComponent(
      `Hello! I'm interested in ordering:\n\nProduct: ${product.name}\nPrice: $${product.price}\n\nPlease provide more details.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto max-w-6xl">
        <Link to={`/${product.category}`} className="inline-flex items-center text-primary mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {product.category}
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <Card className="overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
          </Card>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-primary mb-6">${product.price.toFixed(2)}</p>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full gradient-primary hover:opacity-90 text-lg"
                onClick={handleOrderOnWhatsApp}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Order on WhatsApp
              </Button>
              
              <div className="glass-card p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Product Features:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Premium Quality</li>
                  <li>Fast Delivery</li>
                  <li>100% Authentic</li>
                  <li>Secure Payment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

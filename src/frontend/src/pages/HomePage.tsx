import { Star, Flame, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface HomePageProps {
  onNavigate: (page: string, id?: string) => void;
}

// Mock data - will be replaced with backend data
const mockListings = [
  {
    id: '1',
    title: 'Royal Casino',
    rating: 4.8,
    category: 'Casino',
    isHot: true,
    isRecommended: true,
    description: 'Premium online casino with over 2000 games',
    image: '/assets/generated/listing-placeholder.dim_640x360.png',
  },
  {
    id: '2',
    title: 'Lucky Slots',
    rating: 4.5,
    category: 'Slots',
    isHot: false,
    isRecommended: true,
    description: 'Best slot games collection with daily bonuses',
    image: '/assets/generated/listing-placeholder.dim_640x360.png',
  },
  {
    id: '3',
    title: 'Mega Jackpot',
    rating: 4.7,
    category: 'Casino',
    isHot: true,
    isRecommended: true,
    description: 'Progressive jackpots and live dealer games',
    image: '/assets/generated/listing-placeholder.dim_640x360.png',
  },
  {
    id: '4',
    title: 'Spin Palace',
    rating: 4.6,
    category: 'Casino',
    isHot: false,
    isRecommended: true,
    description: 'Trusted casino with fast payouts',
    image: '/assets/generated/listing-placeholder.dim_640x360.png',
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-background to-accent/20 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            Welcome to Yono Store
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Your trusted source for online casino reviews, exclusive bonuses, and the latest gaming news
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => onNavigate('casinos')}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Explore Casinos
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate('bonuses')}
            >
              View Bonuses
            </Button>
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Recommended for You</h2>
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('casinos')}
              className="text-accent hover:text-accent/80"
            >
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockListings.map((listing) => (
              <Card 
                key={listing.id} 
                className="group hover:shadow-lg transition-all duration-300 hover:border-accent/50 overflow-hidden"
              >
                <div className="relative">
                  <img 
                    src={listing.image} 
                    alt={listing.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {listing.isHot && (
                    <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
                      <Flame className="h-3 w-3 mr-1" />
                      Hot
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="truncate">{listing.title}</span>
                  </CardTitle>
                  <div className="flex items-center space-x-1 text-accent">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-semibold">{listing.rating}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {listing.description}
                  </p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button 
                    className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={() => onNavigate('casino-detail', listing.id)}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Play Now
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => onNavigate('casino-detail', listing.id)}
                  >
                    Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Yono Store?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Expert Reviews</h3>
              <p className="text-muted-foreground">
                In-depth reviews from gaming experts to help you make informed decisions
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Flame className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Exclusive Bonuses</h3>
              <p className="text-muted-foreground">
                Access special promo codes and bonuses available only through Yono Store
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <ExternalLink className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Trusted Partners</h3>
              <p className="text-muted-foreground">
                We only recommend licensed and verified online casinos
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

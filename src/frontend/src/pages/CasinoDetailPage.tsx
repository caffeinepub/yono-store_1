import { Star, ExternalLink, ThumbsUp, ThumbsDown, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CasinoDetailPageProps {
  casinoId: string | null;
  onNavigate: (page: string) => void;
}

export function CasinoDetailPage({ casinoId, onNavigate }: CasinoDetailPageProps) {
  const mockCasino = {
    id: casinoId || '1',
    title: 'Royal Casino',
    rating: 4.8,
    image: '/assets/generated/listing-placeholder.dim_640x360.png',
    description: 'Royal Casino is a premium online gaming destination offering over 2000 games from top providers. Licensed and regulated, with fast payouts and 24/7 customer support.',
    pros: [
      'Wide selection of games',
      'Fast withdrawal processing',
      'Excellent customer support',
      'Mobile-friendly platform',
    ],
    cons: [
      'Limited payment methods in some regions',
      'Wagering requirements on bonuses',
    ],
    reviews: [
      {
        id: '1',
        author: 'John D.',
        rating: 5,
        comment: 'Great casino! Fast payouts and excellent game selection.',
        date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      },
      {
        id: '2',
        author: 'Sarah M.',
        rating: 4,
        comment: 'Good overall experience. Customer support is very helpful.',
        date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      },
    ],
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <Button 
          variant="ghost" 
          onClick={() => onNavigate('casinos')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Casinos
        </Button>

        {/* Hero Section */}
        <Card className="mb-8 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <img 
              src={mockCasino.image} 
              alt={mockCasino.title}
              className="w-full h-full object-cover"
            />
            <div className="p-8 flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-4">{mockCasino.title}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-accent">
                  <Star className="h-6 w-6 fill-current" />
                  <span className="text-2xl font-bold">{mockCasino.rating}</span>
                </div>
                <Badge variant="secondary">Verified</Badge>
              </div>
              <p className="text-muted-foreground mb-6">{mockCasino.description}</p>
              <Button 
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Play Now
              </Button>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="bonuses">Bonuses</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ThumbsUp className="h-5 w-5 text-accent" />
                    <span>Pros</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {mockCasino.pros.map((pro, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ThumbsDown className="h-5 w-5 text-muted-foreground" />
                    <span>Cons</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {mockCasino.cons.map((con, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-muted-foreground mt-1">✗</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            {mockCasino.reviews.map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{review.author}</CardTitle>
                      <div className="flex items-center space-x-1 text-accent mt-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {review.date.toLocaleDateString()}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="bonuses">
            <Card>
              <CardHeader>
                <CardTitle>Available Bonuses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Check our <button onClick={() => onNavigate('bonuses')} className="text-accent hover:underline">Bonuses page</button> for exclusive promo codes for this casino.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

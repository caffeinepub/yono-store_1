import { useState } from 'react';
import { Star, Flame, ExternalLink, Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CasinosPageProps {
  onNavigate: (page: string, id?: string) => void;
}

const mockCasinos = Array.from({ length: 12 }, (_, i) => ({
  id: `${i + 1}`,
  title: `Casino ${i + 1}`,
  rating: 4.5 + Math.random() * 0.5,
  category: ['Casino', 'Slots', 'Live Dealer'][i % 3],
  isHot: i % 3 === 0,
  description: 'Premium online casino with great games and bonuses',
  image: '/assets/generated/listing-placeholder.dim_640x360.png',
}));

export function CasinosPage({ onNavigate }: CasinosPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [filterCategory, setFilterCategory] = useState('all');

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Online Casinos</h1>
          <p className="text-muted-foreground text-lg">
            Browse our curated selection of trusted online casinos
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search casinos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger>
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="casino">Casino</SelectItem>
                <SelectItem value="slots">Slots</SelectItem>
                <SelectItem value="live-dealer">Live Dealer</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Casino Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCasinos.map((casino) => (
            <Card 
              key={casino.id} 
              className="group hover:shadow-lg transition-all duration-300 hover:border-accent/50 overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={casino.image} 
                  alt={casino.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {casino.isHot && (
                  <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
                    <Flame className="h-3 w-3 mr-1" />
                    Hot
                  </Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="truncate">{casino.title}</span>
                </CardTitle>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-accent">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-semibold">{casino.rating.toFixed(1)}</span>
                  </div>
                  <Badge variant="secondary">{casino.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {casino.description}
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button 
                  className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => onNavigate('casino-detail', casino.id)}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Play Now
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => onNavigate('casino-detail', casino.id)}
                >
                  Review
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

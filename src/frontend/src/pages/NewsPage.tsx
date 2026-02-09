import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface NewsPageProps {
  onNavigate: (page: string, id?: string) => void;
}

const mockNews = Array.from({ length: 9 }, (_, i) => ({
  id: `${i + 1}`,
  title: `Gaming Industry News ${i + 1}`,
  excerpt: 'Stay updated with the latest news and trends in the online gaming industry...',
  author: 'Yono Store Team',
  publishDate: new Date(Date.now() - i * 24 * 60 * 60 * 1000),
  tags: ['Industry', 'Updates', 'Gaming'][i % 3],
  image: '/assets/generated/listing-placeholder.dim_640x360.png',
}));

export function NewsPage({ onNavigate }: NewsPageProps) {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Gaming News & Updates</h1>
          <p className="text-muted-foreground text-lg">
            Stay informed with the latest news, trends, and insights from the gaming world
          </p>
        </div>

        {/* Featured Article */}
        {mockNews[0] && (
          <Card className="mb-8 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-accent/50">
            <div className="grid md:grid-cols-2 gap-0">
              <img 
                src={mockNews[0].image} 
                alt={mockNews[0].title}
                className="w-full h-full object-cover"
              />
              <div className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4" variant="secondary">Featured</Badge>
                <h2 className="text-3xl font-bold mb-4">{mockNews[0].title}</h2>
                <p className="text-muted-foreground mb-6">{mockNews[0].excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{mockNews[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{mockNews[0].publishDate.toLocaleDateString()}</span>
                  </div>
                </div>
                <Button 
                  onClick={() => onNavigate('news-detail', mockNews[0].id)}
                  className="w-fit bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockNews.slice(1).map((article) => (
            <Card 
              key={article.id} 
              className="group hover:shadow-lg transition-all duration-300 hover:border-accent/50 overflow-hidden"
            >
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">{article.tags}</Badge>
                <CardTitle className="line-clamp-2">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{article.publishDate.toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:text-accent"
                  onClick={() => onNavigate('news-detail', article.id)}
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface NewsDetailPageProps {
  newsId: string | null;
  onNavigate: (page: string) => void;
}

export function NewsDetailPage({ newsId, onNavigate }: NewsDetailPageProps) {
  const mockArticle = {
    id: newsId || '1',
    title: 'The Future of Online Gaming: Trends to Watch in 2026',
    author: 'Yono Store Team',
    publishDate: new Date(),
    tags: ['Industry', 'Trends', 'Gaming'],
    image: '/assets/generated/listing-placeholder.dim_640x360.png',
    content: `
      <p>The online gaming industry continues to evolve at a rapid pace, with new technologies and trends shaping the future of how we play and interact with games.</p>
      
      <h2>Virtual Reality Integration</h2>
      <p>Virtual reality is becoming more accessible and affordable, opening up new possibilities for immersive gaming experiences. Many online casinos are already experimenting with VR technology to create more engaging environments for players.</p>
      
      <h2>Cryptocurrency and Blockchain</h2>
      <p>The adoption of cryptocurrency payments and blockchain technology is transforming the industry, offering faster transactions, enhanced security, and greater transparency.</p>
      
      <h2>Mobile-First Gaming</h2>
      <p>With more players accessing games through mobile devices, developers are prioritizing mobile-first design and optimization to deliver seamless experiences across all platforms.</p>
      
      <h2>Responsible Gaming Features</h2>
      <p>The industry is placing greater emphasis on responsible gaming, with new tools and features to help players manage their gaming habits and stay in control.</p>
    `,
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => onNavigate('news')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to News
        </Button>

        <article>
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {mockArticle.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{mockArticle.title}</h1>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{mockArticle.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{mockArticle.publishDate.toLocaleDateString()}</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Featured Image */}
          <img 
            src={mockArticle.image} 
            alt={mockArticle.title}
            className="w-full rounded-lg mb-8"
          />

          {/* Content */}
          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: mockArticle.content }}
          />
        </article>
      </div>
    </div>
  );
}

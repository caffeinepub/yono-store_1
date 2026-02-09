import { useState } from 'react';
import { AlertCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface ComplaintsPageProps {
  onNavigate: (page: string) => void;
}

const mockComplaints = [
  {
    id: '1',
    casino: 'Example Casino',
    issue: 'Withdrawal Delay',
    description: 'Waiting for withdrawal for over 2 weeks...',
    status: 'resolved',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    reply: 'Issue has been resolved. Withdrawal processed successfully.',
  },
  {
    id: '2',
    casino: 'Another Casino',
    issue: 'Bonus Terms',
    description: 'Unclear bonus wagering requirements...',
    status: 'pending',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    reply: null,
  },
];

export function ComplaintsPage({ onNavigate }: ComplaintsPageProps) {
  const [formData, setFormData] = useState({
    casino: '',
    email: '',
    issue: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Complaint submitted successfully! We will review it shortly.');
    setFormData({ casino: '', email: '', issue: '', description: '' });
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Complaints & Disputes</h1>
          <p className="text-muted-foreground text-lg">
            Submit a complaint or browse resolved cases
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Submit Form */}
          <Card>
            <CardHeader>
              <CardTitle>Submit a Complaint</CardTitle>
              <CardDescription>
                Having issues with an online casino? Let us know and we'll help resolve it.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="casino">Casino Name</Label>
                  <Input
                    id="casino"
                    placeholder="Enter casino name"
                    value={formData.casino}
                    onChange={(e) => setFormData({ ...formData, casino: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="issue">Issue Type</Label>
                  <Input
                    id="issue"
                    placeholder="e.g., Withdrawal Delay, Bonus Issue"
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your issue in detail..."
                    rows={6}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Send className="h-4 w-4 mr-2" />
                  Submit Complaint
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Recent Complaints */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Recent Complaints</h2>
            {mockComplaints.map((complaint) => (
              <Card key={complaint.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{complaint.casino}</CardTitle>
                      <CardDescription>{complaint.issue}</CardDescription>
                    </div>
                    <Badge variant={complaint.status === 'resolved' ? 'default' : 'secondary'}>
                      {complaint.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{complaint.description}</p>
                  <div className="text-xs text-muted-foreground">
                    Submitted: {complaint.date.toLocaleDateString()}
                  </div>
                  {complaint.reply && (
                    <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-accent">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="h-4 w-4 text-accent mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold mb-1">Official Response:</p>
                          <p className="text-sm text-muted-foreground">{complaint.reply}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

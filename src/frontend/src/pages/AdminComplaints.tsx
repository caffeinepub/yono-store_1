import { CheckCircle, XCircle, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface AdminComplaintsProps {
  onNavigate: (page: string) => void;
}

const mockComplaints = [
  {
    id: '1',
    casino: 'Example Casino',
    email: 'user@example.com',
    issue: 'Withdrawal Delay',
    description: 'I have been waiting for my withdrawal for over 2 weeks. The casino support is not responding to my emails.',
    status: 'pending',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: '2',
    casino: 'Another Casino',
    email: 'player@example.com',
    issue: 'Bonus Terms',
    description: 'The bonus terms were not clearly stated and I was unable to withdraw my winnings.',
    status: 'pending',
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
  },
];

export function AdminComplaints({ onNavigate }: AdminComplaintsProps) {
  const handleApprove = (id: string) => {
    toast.success('Complaint approved and published');
  };

  const handleReject = (id: string) => {
    toast.success('Complaint rejected');
  };

  return (
    <div className="flex min-h-screen bg-background">
      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Manage Complaints</h1>
          <Button variant="outline" onClick={() => onNavigate('admin-dashboard')}>
            Back to Dashboard
          </Button>
        </div>

        <div className="space-y-6">
          {mockComplaints.map((complaint) => (
            <Card key={complaint.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{complaint.casino}</CardTitle>
                    <CardDescription>{complaint.issue}</CardDescription>
                  </div>
                  <Badge variant="secondary">{complaint.status}</Badge>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  From: {complaint.email} • {complaint.date.toLocaleDateString()}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Description:</h4>
                  <p className="text-muted-foreground">{complaint.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Admin Response:</h4>
                  <Textarea 
                    placeholder="Write your response here..."
                    rows={3}
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleApprove(complaint.id)}
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Approve & Publish
                  </Button>
                  <Button 
                    variant="destructive"
                    onClick={() => handleReject(complaint.id)}
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

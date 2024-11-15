import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import ProjectForm from '@/components/ProjectForm';
import ProjectTracker from '@/components/ProjectTracker';
import { useToast } from '@/hooks/use-toast';

function HomePage() {
  const { toast } = useToast();

  const handleSubmit = (formData: { projectName: string; selectedTask: string; file: File | null }) => {
    toast({
      title: 'Projet soumis avec succès',
      description: 'Nous examinerons votre demande rapidement.',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Header />
          
          <Card className="p-8 shadow-lg bg-white dark:bg-gray-800">
            <ProjectForm onSubmit={handleSubmit} />
          </Card>

          <ProjectTracker />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
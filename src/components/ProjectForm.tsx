import { FC, FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RocketIcon } from 'lucide-react';
import FileUpload from './FileUpload';
import { useToast } from '@/hooks/use-toast';

const TASK_OPTIONS = [
  { value: 'process-automation', label: 'Automatisation de processus' },
  { value: 'ai-integration', label: 'Intégration IA' },
  { value: 'data-analysis', label: 'Analyse de données' },
  { value: 'chatbot', label: 'Chatbot' },
  { value: 'other', label: 'Autre' },
];

interface FormData {
  projectName: string;
  selectedTask: string;
  file: File | null;
}

interface ProjectFormProps {
  onSubmit: (data: FormData) => void;
}

const ProjectForm: FC<ProjectFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    projectName: '',
    selectedTask: '',
    file: null,
  });
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.projectName || !formData.selectedTask || !formData.file) {
      toast({
        title: 'Erreur de validation',
        description: 'Veuillez remplir tous les champs requis.',
        variant: 'destructive',
      });
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Nom du projet
        </label>
        <Input
          placeholder="Entrez le nom de votre projet"
          value={formData.projectName}
          onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Type de projet
        </label>
        <Select
          value={formData.selectedTask}
          onValueChange={(value) => setFormData({ ...formData, selectedTask: value })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sélectionnez le type de projet" />
          </SelectTrigger>
          <SelectContent>
            {TASK_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <FileUpload
        onFileChange={(file) => setFormData({ ...formData, file })}
      />

      <Button type="submit" className="w-full" size="lg">
        <RocketIcon className="mr-2 h-4 w-4" />
        Soumettre le projet
      </Button>
    </form>
  );
};

export default ProjectForm;
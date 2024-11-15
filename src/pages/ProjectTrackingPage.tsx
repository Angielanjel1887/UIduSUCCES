import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    name: 'Projet Alpha',
    status: 'En cours',
    progress: 65,
    type: 'Automatisation de processus',
    lastUpdate: '2024-03-15',
  },
  {
    id: 2,
    name: 'Projet Beta',
    status: 'En cours',
    progress: 30,
    type: 'Intégration IA',
    lastUpdate: '2024-03-14',
  },
];

function ProjectTrackingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Suivi des Projets
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Retrouvez ici l'état d'avancement de vos projets déposés.
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <Card key={project.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.type}
                    </p>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                    {project.status}
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Progression
                      </span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {project.progress}%
                      </span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Dernière mise à jour: {project.lastUpdate}
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      Étapes validées: 2/3
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTrackingPage;
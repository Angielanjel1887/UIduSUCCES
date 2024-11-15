import { FC } from 'react';
import { ActivityIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectTracker: FC = () => {
  return (
    <div className="mt-8 text-center">
      <Link
        to="/tracking"
        className="inline-flex items-center text-blue-600 hover:text-blue-500"
      >
        <ActivityIcon className="mr-2 h-4 w-4" />
        Voir l'évolution de vos projets
      </Link>
    </div>
  );
};

export default ProjectTracker;
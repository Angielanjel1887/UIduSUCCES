import { FC } from 'react';

const Header: FC = () => {
  return (
    <div className="text-center mb-12">
      <img
        src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
        alt="M6 Groupe"
        className="w-48 mx-auto mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Innovation et IA
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Nous sommes là pour vous aider à automatiser vos processus et à intégrer l'IA dans vos projets,
        en collaboration avec les équipes du groupe M6.
      </p>
    </div>
  );
};

export default Header;
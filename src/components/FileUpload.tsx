import { FC } from 'react';
import { FileUpIcon } from 'lucide-react';

interface FileUploadProps {
  onFileChange: (file: File | null) => void;
}

const FileUpload: FC<FileUploadProps> = ({ onFileChange }) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Documents du projet
      </label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1 text-center">
          <FileUpIcon className="mx-auto h-12 w-12 text-gray-400" />
          <div className="flex text-sm text-gray-600">
            <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
              <span>Télécharger un fichier</span>
              <input
                type="file"
                className="sr-only"
                onChange={(e) => onFileChange(e.target.files?.[0] || null)}
              />
            </label>
            <p className="pl-1">ou glisser-déposer</p>
          </div>
          <p className="text-xs text-gray-500">
            PDF, DOC jusqu'à 10MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
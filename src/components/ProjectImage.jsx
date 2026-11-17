import { useState } from 'react';

function getProjectImageSrc(image) {
  if (typeof image !== 'string' || !image.trim()) {
    return null;
  }

  const imagePath = image.trim().replace(/^\/+/, '');
  if (!imagePath.startsWith('images/') || imagePath.split('/').includes('..')) {
    return null;
  }

  return `${import.meta.env.BASE_URL}${imagePath}`;
}

function ProjectImage({ project, className = '', showStatus = false, alt }) {
  const imageSrc = getProjectImageSrc(project.image);
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = imageSrc && !imageFailed;

  return (
    <div className={`project-thumb project-thumb--${project.id} ${className} ${showImage ? 'has-image' : ''}`}>
      {showImage ? (
        <img
          className="project-preview-image"
          src={imageSrc}
          alt={alt || `${project.title} project preview`}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <>
          <div className="project-glow" aria-hidden="true" />
          <span className="project-image-placeholder">Project preview unavailable</span>
        </>
      )}
      {showStatus && project.status && <div className="thumb-badge">{project.status}</div>}
    </div>
  );
}

export default ProjectImage;

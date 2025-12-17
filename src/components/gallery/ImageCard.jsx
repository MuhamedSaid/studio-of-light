// Reusable, props-driven component
export default ImageCard;
const ImageCard = ({ src, alt, title, onClick, className = '' }) => {
  return (
    <div className={`gallery-image ${className}`} onClick={onClick}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-64 object-cover rounded-lg"
      />
      {title && <h3 className="mt-2 text-lg font-medium">{title}</h3>}
    </div>
  );
};

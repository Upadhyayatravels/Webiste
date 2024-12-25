const Card = ({ imageUrl, mainHeading, subHeading, description }) => {
    return (
      <div className="flex flex-col h-full border rounded-lg shadow-lg">
        <div className="w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={mainHeading}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col flex-1 p-4">
          <h3 className="text-center text-xl font-bold text-gray-800 mb-4 dark:text-gray-300">{mainHeading}</h3>
          <p className="text-sm text-gray-600 mb-4 dark:text-gray-300">{subHeading}</p>
          <p className="text-sm text-gray-800 dark:text-gray-300">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  
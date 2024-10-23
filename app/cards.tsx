export function Card({
    name,
    image,
    description,
}:  {
    name: string;
    image: string;
    description: string;
}) {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <img
              src={image}
              alt="BYOW Pic"
              width={500}
              height={500}
              className="rounded-md mb-4"
            />
            <p className="text-center text-lg font-medium">
              {description}
            </p>
        </div>
    )
    
}
   
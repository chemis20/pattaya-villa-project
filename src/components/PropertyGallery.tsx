import { AspectRatio } from "@/components/ui/aspect-ratio";

export const PropertyGallery = () => {
  const images = [
    {
      src: "https://i.postimg.cc/02nt1yHj/photo-2025-04-30-18-43-47.jpg",
      alt: "Фасад виллы с бассейном",
    },
    {
      src: "https://i.postimg.cc/5YcStrTW/photo-7-2025-04-30-18-37-58.jpg",
      alt: "Гостиная с панорамными окнами",
    },
    {
      src: "https://i.postimg.cc/5jBnXxf7/photo-2-2025-04-30-18-37-58.jpg",
      alt: "Кухня открытой планировки",
    },
    {
      src: "https://i.postimg.cc/zLHk8Ndk/photo-6-2025-04-30-18-37-58.jpg",
      alt: "Спальня с видом на бассейн",
    },
    {
      src: "https://i.postimg.cc/D856cBJ1/photo-3-2025-04-30-18-37-58.jpg",
      alt: "Ванная комната с душем",
    },
    {
      src: "https://i.postimg.cc/2L7wMxHR/photo-11-2025-04-30-18-37-58.jpg",
      alt: "Зона отдыха на открытом воздухе",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="relative">
        <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-lg">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full object-cover transition-all hover:scale-105 duration-300"
          />
        </AspectRatio>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.slice(1).map((image, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            <AspectRatio ratio={4 / 3} className="bg-muted">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all group-hover:scale-105 duration-300"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  );
};

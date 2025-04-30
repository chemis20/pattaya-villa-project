import { AspectRatio } from "@/components/ui/aspect-ratio";

export const PropertyGallery = () => {
  const images = [
    {
      src: "https://i.ibb.co/gFcw35t/image1.jpg", // Исправлено с https://ibb.co/gFcw35tf
      alt: "Фасад виллы с бассейном",
    },
    {
      src: "https://i.ibb.co/4nPGGG6/image2.jpg", // Исправлено с https://ibb.co/4nPGGG64
      alt: "Гостиная с панорамными окнами",
    },
    {
      src: "https://i.ibb.co/b5DgDrW/image3.jpg", // Исправлено с https://ibb.co/b5DgDrWM
      alt: "Кухня открытой планировки",
    },
    {
      src: "https://i.ibb.co/F4FNR9m/image4.jpg", // Исправлено с https://ibb.co/F4FNR9mC
      alt: "Спальня с видом на бассейн",
    },
    {
      src: "https://i.ibb.co/HpHfc51/image5.jpg", // Исправлено с https://ibb.co/HpHfc517
      alt: "Ванная комната с душем",
    },
    {
      src: "https://i.ibb.co/BHxWv16/image6.jpg", // Исправлено с https://ibb.co/BHxWv16s
      alt: "Частный бассейн виллы",
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

import { AspectRatio } from "@/components/ui/aspect-ratio";

export const PropertyGallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Фасад виллы с бассейном",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687644-c7f34b5063c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Гостиная с панорамными окнами",
    },
    {
      src: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Кухня открытой планировки",
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Спальня с видом на бассейн",
    },
    {
      src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Ванная комната с душем",
    },
    {
      src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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

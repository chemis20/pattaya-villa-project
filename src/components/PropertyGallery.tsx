import { AspectRatio } from "@/components/ui/aspect-ratio";

export const PropertyGallery = () => {
  const images = [
    {
      src: "https://i.postimg.cc/5XHpnjLV/IMG-6535.jpg",
      alt: "Фасад виллы с бассейном",
    },
    {
      src: "https://i.postimg.cc/ZvhLqLMY/IMG-6530.jpg",
      alt: "Вид на виллу",
    },
    {
      src: "https://i.postimg.cc/ZBNcZQjD/IMG-6531.png",
      alt: "Спальня с видом на бассейн",
    },
    {
      src: "https://i.postimg.cc/PPT4s2D2/IMG-6532.png",
      alt: "Ванная комната с душем",
    },
    {
      src: "https://i.postimg.cc/Wq6wqJBG/IMG-6534.jpg",
      alt: "Зона отдыха на открытом воздухе",
    },
    {
      src: "https://i.postimg.cc/Thr94ZKK/IMG-6533.jpg",
      alt: "Вид на территорию",
    },
    {
      src: "https://i.postimg.cc/2bxxVWR4/IMG-6433.jpg",
      alt: "Общий вид территории",
    }
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
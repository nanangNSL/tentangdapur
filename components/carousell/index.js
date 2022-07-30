import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

export default function Carousell() {
  return (
    <Carousel className="carousel">
      <Carousel.Item interval={1000}>
        <Image src="/image.png" width={500} height={350} alt="Images" className="rounded" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image src="/image.png" width={500} height={350} alt="Images" className="rounded"  />
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/image.png" width={500} height={350} alt="Images" className="rounded" />
      </Carousel.Item>
    </Carousel>
  );
}

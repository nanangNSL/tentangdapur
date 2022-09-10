import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";


export default function Carousell() {


  return (
    <Carousel className="carousel">
      
      <Carousel.Item interval={1000}>
        <Image src="/food4.jpg" width={500} height={320} alt="Images"  />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image src="/food2.jpg" width={500} height={320} alt="Images" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/food3.jpg" width={500} height={320} alt="Images" />
      </Carousel.Item>
    </Carousel>
  );
}

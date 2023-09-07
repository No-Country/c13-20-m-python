import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

export default function CardEvent({
  name,
  image,
  date,
  location,
  price,
  host,
}) {

  return (

    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={image}  alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>{date}</Typography>
        <Typography>{location}</Typography>
        <Typography>{price}</Typography>
        <Typography>{host}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>

  );
}

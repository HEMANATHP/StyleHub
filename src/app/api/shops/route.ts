type Shop = {
  id: number;
  name: string;
  city: string;
};

const shops: Shop[] = [
  {
    id: 101,
    name: "Style Studio",
    city: "Chennai",
  },
  {
    id: 102,
    name: "Grooming Hub",
    city: "Hyderabad",
  },
  {
    id: 103,
    name: "Elite Cuts",
    city: "Bengaluru",
  },
];

export async function GET() {
  return Response.json(shops);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newShop: Shop = {
    id: shops.length + 101,
    name: body.name,
    city: body.city,
  };

  shops.push(newShop);

  return Response.json(newShop, {
    status: 201,
  });
}
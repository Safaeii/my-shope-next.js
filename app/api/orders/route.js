let orders = [];

export async function GET() {
  return Response.json({
    message: "لیست سفارش‌ها",
    orders,
  });
}

export async function POST(request) {
  const data = await request.json();

  orders.push(data);

  console.log("NEW ORDER:", data);

  return Response.json({
    message: "سفارش با موفقیت ثبت شد",
    order: data,
  });
}
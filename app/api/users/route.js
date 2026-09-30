export let users = [];

export async function GET() {
  return Response.json({
    users,
  });
}

export async function POST(request) {
  const data = await request.json();

  users.push(data);

  console.log("NEW USER:", data);

  return Response.json({
    message: "ثبت نام با موفقیت انجام شد",
    user: data,
  });
}
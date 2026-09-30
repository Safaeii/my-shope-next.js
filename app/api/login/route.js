import { users } from "../users/route";

export async function POST(request) {
  const data = await request.json();

  const user = users.find(
    (user) =>
      user.email === data.email &&
      user.password === data.password
  );

  if (!user) {
    return Response.json(
      {
        message: "ایمیل یا رمز عبور اشتباه است",
      },
      { status: 401 }
    );
  }

  return Response.json({
    message: "ورود موفق بود",
    user,
  });
}
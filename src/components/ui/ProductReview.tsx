/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hJp8htxjE0m
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

export default function ProductReview() {
  return (
    <div className="grid gap-15" dir="rtl">
      <Card className="py-10 gap-10 w-full">
        <CardContent className="flex items-start gap-6">
          <div className="flex items-center">
            <img
              src="/fash1.jpg"
              width={40}
              height={40}
              className="rounded-full"
              alt="User profile picture"
              style={{ aspectRatio: "40/40", objectFit: "cover" }}
            />
            <div className="grid gap-1.5">
              <CardTitle className="text-base font-medium">سای</CardTitle>
              <CardDescription className="text-xs">2 hours ago</CardDescription>
            </div>
          </div>
          <div className="flex items-center space-x-1.5 shrink-0" dir="ltr">
            <StarIcon className="w-4 h-4 fill-primary" />
            <StarIcon className="w-4 h-4 fill-primary" />
            <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
            <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
            <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
          </div>
        </CardContent>
        <CardFooter className="grid gap-2.5">
          <CardTitle className="text-base font-bold">
            Great customer service
          </CardTitle>
          <CardDescription className="text-sm/relaxed">
            I had a wonderful experience with the staff. They were very helpful
            and friendly throughout the flight. The food was also delicious. I
            would definitely fly with this airline again.
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

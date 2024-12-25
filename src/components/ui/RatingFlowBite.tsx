import { Rating, RatingAdvanced, RatingStar } from "flowbite-react";

export default function RatingFlowBite() {
  return (
    <div dir="rtl" className="px-10">
      <Rating className="my-2">
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar filled={false} />
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          4.95 out of 5
        </p>
      </Rating>
      <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
        1,745 global ratings
      </p>
      <RatingAdvanced
        percentFilled={70}
        className="mb-2"
        theme={{ progress: { fill: "h-5 rounded bg-green-600" } }}
      >
        5 star
      </RatingAdvanced>
      <RatingAdvanced
        percentFilled={17}
        className="mb-2"
        theme={{ progress: { fill: "h-5 rounded bg-green-400" } }}
      >
        4 star
      </RatingAdvanced>
      <RatingAdvanced
        percentFilled={8}
        className="mb-2"
        theme={{ progress: { fill: "h-5 rounded bg-yellow-300" } }}
      >
        3 star
      </RatingAdvanced>
      <RatingAdvanced
        percentFilled={4}
        className="mb-2"
        theme={{ progress: { fill: "h-5 rounded bg-yellow-600" } }}
      >
        2 star
      </RatingAdvanced>
      <RatingAdvanced
        percentFilled={1}
        theme={{ progress: { fill: "h-5 rounded bg-black" } }}
      >
        1 star
      </RatingAdvanced>
    </div>
  );
}

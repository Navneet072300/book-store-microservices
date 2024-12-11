import filter from "../assets/features/filter.png";
import rating from "../assets/features/rating.png";
import secure from "../assets/features/secure.png";
import wishlist from "../assets/features/wishlist.png";

const featuresData = [
  {
    img: filter,
    title: "Advanced Search and Filters",
    description:
      "Effortlessly search books by title, author, genre, or price range.",
  },
  {
    img: rating,
    title: "User Reviews and Ratings",
    description:
      "Customers can share reviews, rate books, and guide future readers.",
  },
  {
    img: secure,
    title: "Wishlist and Favorites",
    description: "Save books to wishlist for future purchases or easy access.",
  },
  {
    img: wishlist,
    title: "Secure Online Payments",
    description:
      "Enjoy seamless checkout with multiple secure payment options.",
  },
];

const Features = () => {
  return (
    <section className="max-padd-container py-16">
      <div className="max-padd-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-12">
        {featuresData.map((feature, index) => (
          <div key={index} className="flexCenter flex-col gap-3">
            <img src={feature.img} alt="featureIcon" height={44} width={44} />
            <div className="flexCenter flex-col">
              <h5 className="h5">{feature.title}</h5>
              <hr className="w-8 bg-secondary rounded-full h-1 border-none" />
            </div>
            <p className="text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

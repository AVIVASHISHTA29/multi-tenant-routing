export const data: Record<string, any> = {
  default: {
    header: {
      title: "Welcome to Our Platform",
      navLinks: ["Home", "About", "Contact"],
    },
    heroSection: {
      title: "Explore Our Services",
      subtitle: "Choose from hotels, PG accommodations, or houses.",
      image:
        "https://images.pexels.com/photos/6759773/pexels-photo-6759773.jpeg",
      cta: [
        { text: "Explore Hotels", link: "/hotels" },
        { text: "Explore PG", link: "/pg" },
        { text: "Explore Houses", link: "/houses" },
      ],
    },
    features: [
      {
        title: "Luxury Hotels",
        description: "Experience top-notch hospitality in our luxury hotels.",
        image: "https://unsplash.com/photos/Wp7t4cWN-68/download?force=true",
      },
      {
        title: "Comfortable PG",
        description:
          "Affordable and comfortable PG accommodations for students and professionals.",
        image:
          "https://images.pexels.com/photos/7163981/pexels-photo-7163981.jpeg",
      },
      {
        title: "Beautiful Houses",
        description:
          "Find your dream home among our beautiful houses for sale or rent.",
        image:
          "https://images.pexels.com/photos/7031589/pexels-photo-7031589.jpeg",
      },
    ],
    styles: {
      colorScheme: {
        background: "bg-black",
        text: "text-white",
        headerBackground: "bg-white",
        headerText: "text-black",
        buttonBackground: "bg-white",
        buttonText: "text-black",
      },
      fonts: {
        header: "font-serif",
        body: "font-sans",
        button: "font-medium",
      },
      borderRadius: "rounded",
      shadow: "shadow-md",
    },
  },
  hotels: {
    header: {
      title: "Luxury Hotels",
      navLinks: ["Home", "Rooms", "Dining", "Contact"],
    },
    heroSection: {
      title: "Experience Luxury and Comfort",
      subtitle: "Book your stay at our world-class hotels.",
      image: "https://unsplash.com/photos/Wp7t4cWN-68/download?force=true",
      cta: [
        { text: "Book Now", link: "/book" },
        { text: "Explore Rooms", link: "/rooms" },
      ],
    },
    features: [
      {
        title: "Exquisite Rooms",
        description:
          "Spacious and elegantly designed rooms with modern amenities.",
        image:
          "https://images.pexels.com/photos/3997994/pexels-photo-3997994.jpeg",
      },
      {
        title: "Fine Dining",
        description: "Enjoy gourmet cuisine prepared by top chefs.",
        image:
          "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      },
      {
        title: "Wellness & Spa",
        description: "Rejuvenate with our spa and wellness services.",
        image:
          "https://images.pexels.com/photos/6507804/pexels-photo-6507804.jpeg",
      },
    ],
    styles: {
      colorScheme: {
        background: "bg-[#000000]",
        text: "text-[#1f2937]",
        headerBackground: "bg-[#0000ff]",
        headerText: "text-[#ffffff]",
        buttonBackground: "bg-[#0000ff]",
        buttonText: "text-[#ffffff]",
      },
      fonts: {
        header: "font-serif",
        body: "font-sans",
        button: "font-medium",
      },
      borderRadius: "rounded-lg",
      shadow: "shadow-lg",
    },
  },
  pg: {
    header: {
      title: "Comfortable PG",
      navLinks: ["Home", "Facilities", "Pricing", "Contact"],
    },
    heroSection: {
      title: "Your Home Away From Home",
      subtitle: "Affordable and comfortable PG accommodations.",
      image: "https://images.pexels.com/photos/705665/pexels-photo-705665.jpeg",
      cta: [
        { text: "Book Now", link: "/book" },
        { text: "View Facilities", link: "/facilities" },
      ],
    },
    features: [
      {
        title: "Fully Furnished Rooms",
        description: "Comfortable rooms with all necessary amenities.",
        image:
          "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      },
      {
        title: "Homely Meals",
        description: "Nutritious meals served daily.",
        image:
          "https://images.pexels.com/photos/4106484/pexels-photo-4106484.jpeg",
      },
      {
        title: "24/7 Security",
        description: "Ensuring your safety at all times.",
        image:
          "https://images.pexels.com/photos/370717/pexels-photo-370717.jpeg",
      },
    ],
    styles: {
      colorScheme: {
        background: "bg-[#ffffff]",
        text: "text-[#2d3748]",
        headerBackground: "bg-[#2f855a]",
        headerText: "text-[#ffffff]",
        buttonBackground: "bg-[#38a169]",
        buttonText: "text-[#ffffff]",
      },
      fonts: {
        header: "font-mono",
        body: "font-sans",
        button: "font-semibold",
      },
      borderRadius: "rounded-md",
      shadow: "shadow-md",
    },
  },
  houses: {
    header: {
      title: "Beautiful Houses",
      navLinks: ["Home", "Listings", "Contact"],
    },
    heroSection: {
      title: "Find Your Dream Home",
      subtitle: "Explore our listings of beautiful houses for sale or rent.",
      image: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg",
      cta: [
        { text: "Browse Listings", link: "/listings" },
        { text: "Contact Us", link: "/contact" },
      ],
    },
    features: [
      {
        title: "Modern Designs",
        description: "Houses with contemporary designs and architecture.",
        image:
          "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      },
      {
        title: "Prime Locations",
        description: "Houses located in the best neighborhoods.",
        image:
          "https://images.pexels.com/photos/534233/pexels-photo-534233.jpeg",
      },
      {
        title: "Affordable Prices",
        description: "Find a home that fits your budget.",
        image:
          "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      },
    ],
    styles: {
      colorScheme: {
        background: "bg-[#ffffff]",
        text: "text-[#4a5568]",
        headerBackground: "bg-[#6b46c1]",
        headerText: "text-[#ffffff]",
        buttonBackground: "bg-[#805ad5]",
        buttonText: "text-[#ffffff]",
      },
      fonts: {
        header: "font-sans",
        body: "font-serif",
        button: "font-bold",
      },
      borderRadius: "rounded-md",
      shadow: "shadow-xl",
    },
  },
};

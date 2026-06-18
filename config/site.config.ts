export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  title: "Dishly",
  description: "Discover, save, and share recipes from around the world.",
  mainNav: [
    { label: "Recipes", href: "/recipes" },
    { label: "Categories", href: "/categories" },
    { label: "Favorites", href: "/favorites" },
    { label: "About", href: "/about" },
  ] satisfies NavItem[],
};

import { PageConfigInterface } from "@/constants/config";
import { fetchSubdomainContent } from "@/lib/fetchSubdomainContent";
import { twMerge } from "tailwind-merge";

export default async function AppsPage({
  searchParams,
}: {
  searchParams: { subdomain: string };
}) {
  const subdomain = searchParams.subdomain || "default";
  const data = (await fetchSubdomainContent(subdomain)) as PageConfigInterface;
  const styles = data.styles || {};

  if (!data) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Error loading content</h1>
      </div>
    );
  }

  return (
    <div
      className={twMerge(
        "min-h-screen flex flex-col",
        styles.colorScheme.background
      )}
    >
      <header
        className={twMerge(
          "p-6 shadow-md flex justify-between items-center",
          styles.colorScheme.headerBackground
        )}
      >
        <div
          className={twMerge(
            "text-3xl font-bold",
            styles.colorScheme.headerText,
            styles.fonts.header
          )}
        >
          {data.header.title}
        </div>
        <nav className="space-x-4">
          {data.header.navLinks.map((link: string, index: number) => (
            <a
              key={index}
              href="/"
              className={twMerge(
                "text-lg hover:underline",
                styles.colorScheme.headerText
              )}
            >
              {link}
            </a>
          ))}
        </nav>
      </header>

      <main
        className={twMerge(
          "flex-grow flex flex-col items-center text-center p-8",
          styles.colorScheme.background
        )}
      >
        <section
          className={twMerge("w-full mb-12", styles.colorScheme.background)}
        >
          <div
            className={twMerge(
              "bg-white p-8",
              styles.borderRadius,
              styles.shadow,
              styles.colorScheme.background
            )}
          >
            <h1
              className={twMerge(
                "text-5xl font-bold mb-6",
                styles.colorScheme.text,
                styles.fonts.header
              )}
            >
              {data.heroSection.title}
            </h1>
            <p
              className={twMerge(
                "text-2xl mb-6",
                styles.colorScheme.text,
                styles.fonts.body
              )}
            >
              {data.heroSection.subtitle}
            </p>
            <img
              src={data.heroSection.image}
              alt="Hero Image"
              className="mb-8 w-full max-w-md rounded-lg shadow-md mx-auto max-h-52 object-cover"
            />
            <div className="flex flex-wrap justify-center space-x-4">
              {data.heroSection.cta.map(
                (button: { text: string; link: string }, index: number) => (
                  <a
                    key={index}
                    href={button.link}
                    className={twMerge(
                      "py-3 px-6 hover:bg-opacity-90 transition",
                      styles.colorScheme.buttonBackground,
                      styles.colorScheme.buttonText,
                      styles.borderRadius,
                      styles.shadow,
                      styles.fonts.button
                    )}
                  >
                    {button.text}
                  </a>
                )
              )}
            </div>
          </div>
        </section>

        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.features.map(
            (
              feature: { title: string; description: string; image: string },
              index: number
            ) => (
              <div
                key={index}
                className={twMerge(
                  "bg-white p-8 flex flex-col items-center",
                  styles.borderRadius,
                  styles.shadow,
                  styles.colorScheme.background
                )}
              >
                <h2
                  className={twMerge(
                    "text-2xl font-bold mb-4",
                    styles.colorScheme.text,
                    styles.fonts.header
                  )}
                >
                  {feature.title}
                </h2>
                <p
                  className={twMerge(
                    "mb-6",
                    styles.colorScheme.text,
                    styles.fonts.body
                  )}
                >
                  {feature.description}
                </p>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full max-w-xs rounded-lg shadow-md  max-h-52 object-cover"
                />
              </div>
            )
          )}
        </section>
      </main>

      <footer
        className={twMerge(
          "p-6 text-center",
          styles.colorScheme.headerBackground,
          styles.colorScheme.headerText
        )}
      >
        <p>&copy; 2024 Tenant Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

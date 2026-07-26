const menu = [
  {
    name: "Norfolk Dog",
    note: "All the way with mustard, chilli and onions",
    price: "$4.00",
  },
  { name: "All Beef Dog", note: "A classic, done right", price: "$4.00" },
  { name: "Italian Hots", note: "Hot sausage", price: "$5.00" },
  { name: "Chips", note: "The crispy sidekick", price: "$1.50" },
  { name: "Canned Sodas", note: "Ice cold", price: "$1.50" },
  { name: "Bottled Water", note: "Cold and refreshing", price: "$1.00" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hoggs Dogs home">
          <img src="/assets/hoggs-dogs-logo.png" alt="Hoggs Dogs" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a
            href="https://www.facebook.com/profile.php?id=61592294308065"
            target="_blank"
            rel="noreferrer"
          >
            Today&apos;s location
          </a>
          <a className="phone-pill" href="tel:+17573735348">
            757-373-5348
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Elizabeth City, North Carolina</p>
          <h1>
            Good dogs.
            <br />
            <em>Great times.</em>
          </h1>
          <p className="hero-lede">
            Classic hot dogs, hearty chilli and big flavor, served fresh from
            our family-run food truck.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#menu">
              View the menu
            </a>
            <a className="button button-secondary" href="tel:+17573735348">
              Call the truck
            </a>
            <a
              className="button button-facebook"
              href="https://www.facebook.com/profile.php?id=61592294308065"
              target="_blank"
              rel="noreferrer"
            >
              Find us today
            </a>
          </div>
        </div>
        <div className="hero-photo">
          <img
            src="/assets/hoggs-dogs-truck-side.jpg"
            alt="The Hoggs Dogs food truck with its serving window open"
          />
        </div>
      </section>

      <section className="location-strip" aria-label="Service area">
        <span>Serving Elizabeth City, NC and surrounding areas</span>
        <a
          href="https://www.facebook.com/profile.php?id=61592294308065"
          target="_blank"
          rel="noreferrer"
        >
          Find us today on Facebook
        </a>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading">
          <p className="eyebrow">Fresh from the window</p>
          <h2>Our menu</h2>
          <p>Simple favorites at straightforward prices.</p>
        </div>

        <div className="menu-layout">
          <div className="menu-card">
            {menu.map((item) => (
              <div className="menu-item" key={item.name}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.note}</p>
                </div>
                <strong>{item.price}</strong>
              </div>
            ))}
          </div>

          <aside className="combo-card">
            <p>Best value · Combo special</p>
            <h3>2 Hot Dogs</h3>
            <span>Chips + canned soda</span>
            <strong>$10.00</strong>
          </aside>
        </div>

        <div className="toppings">
          <strong>Toppings available</strong>
          <span>Chilli</span>
          <span>Onions</span>
          <span>Mustard</span>
          <span>Ketchup</span>
          <span>Relish</span>
          <span>Sabrett Onions</span>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-photo">
          <img
            src="/assets/hoggs-dogs-truck-back.jpeg"
            alt="Back of the Hoggs Dogs food truck"
          />
        </div>
        <div className="about-copy">
          <p className="eyebrow">Family run and locally served</p>
          <h2>Find the pig. Get a great dog.</h2>
          <p>
            Hoggs Dogs serves classic hot dogs, Italian hots and simple sides
            from our family food truck. Find us around Elizabeth City and the
            surrounding area.
          </p>
          <a
            className="facebook-button"
            href="https://www.facebook.com/profile.php?id=61592294308065"
            target="_blank"
            rel="noreferrer"
          >
            See today&apos;s location on Facebook
          </a>
          <div className="callout">
            <span>Booking or event questions?</span>
            <a href="tel:+17573735348">Call 757-373-5348</a>
          </div>
        </div>
      </section>

      <footer>
        <img src="/assets/hoggs-dogs-logo.png" alt="Hoggs Dogs" />
        <div>
          <p>Hot dogs • Chilli • And more!</p>
          <span>Elizabeth City, North Carolina • Est. 2026</span>
        </div>
        <a href="tel:+17573735348">757-373-5348</a>
      </footer>
    </main>
  );
}
